
from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer, util
import pandas as pd
import time
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Load the Excel data
df = pd.read_excel('dataset.xlsx')
questions_answers_from_excel = dict(zip(df['product_name'], df['product_info']))

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])  # Allow frontend on localhost:5173

# Initialize Sentence Transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Cache embeddings
question_embeddings = {}
for question in questions_answers_from_excel.keys():
    question_embeddings[question] = model.encode(question, convert_to_tensor=True)

# Function to get embedding
def get_embedding(text):
    return model.encode(text, convert_to_tensor=True)

# Function to find the best match for the user's question
def find_best_match(user_question, questions_answers, question_embeddings, threshold=0.5):
    user_embedding = get_embedding(user_question)
    best_match = None
    best_score = float('-inf')

    for question, embedding in question_embeddings.items():
        score = util.pytorch_cos_sim(user_embedding, embedding).item()
        if score > best_score:
            best_score = score
            best_match = question

    if best_score < threshold:
        return None

    return best_match

# Function to call Gemini for a response if no match is found
def get_gemini_response(user_input):
    model = genai.GenerativeModel("gemini-pro")
    chat = model.start_chat(history=[])
    response = chat.send_message(user_input)
    return "".join(chunk.text for chunk in response)

@app.route('/')
def home():
    return "Flask app is running!"

@app.route('/get-response', methods=['POST'])
def get_response():
    start_time = time.time()
    user_input = request.json.get('user_input')

    # Find best match from the dataset
    best_match = find_best_match(user_input, questions_answers_from_excel, question_embeddings, threshold=0.5)
    if best_match:
        response = questions_answers_from_excel[best_match]
    else:
        # If no match is found, query Gemini
        response = get_gemini_response(user_input)

    end_time = time.time()
    print(f"Response time: {end_time - start_time:.4f} seconds")

    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)

