import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { pool , pool1 } from './dbconfig.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const port = 1234;
const app = express();
dotenv.config()
app.use(cors());
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Fetch user from database (this example assumes a single user for simplicity)
  const [rows] = await pool1.execute('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  // Generate JWT token
  const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
  res.json({ accessToken });
});

//to fetch products
app.get("/products", (req, res) => {
  pool.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "An error occurred while fetching products.", details: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});
// to fetch products info based on id 
app.get('/products/:id', async (req, res) => {
  const productId = req.params.id;
  console.log(`Received request for product ID: ${productId}`);

  try {
    const [rows] = await pool1.execute('SELECT * FROM products WHERE product_id = ?', [productId]);
    console.log('Query result:', rows); // Log the query result for debugging

    if (rows.length === 0) {
      console.log(`Product not found: ${productId}`);
      res.status(404).json({ error: 'Product not found' });
    } else {
      console.log(`Product found: ${JSON.stringify(rows[0])}`);
      res.status(200).json(rows[0]);
    }
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while fetching the product.', details: err.message });
  }
});

// to get sizes by product_id
app.get('/products/:productId/sizes', async (req, res) => {
  const productId = req.params.productId;

  try {
    const [rows] = await pool1.execute('SELECT product_size FROM sizes WHERE product_id = ?', [productId]);

    if (rows.length === 0) {
      res.status(404).json({ message: 'No sizes found for this product' });
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while fetching the sizes.', details: err.message });
  }
});

// For Updating The Product Records.
app.put('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const { product_category, product_name, product_info, image1, image2, image3 } = req.body;

  pool1.query(
    'UPDATE products SET product_category = ?, product_name = ?, product_info = ?, image1 = ?, image2 = ?, image3 = ? WHERE product_id = ?',
    [product_category, product_name, product_info, image1, image2, image3, productId],
    (err, results) => {
      if (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'An error occurred while updating the product.', details: err.message });
      } else {
        res.status(200).json({ message: 'Product updated successfully.' });
      }
    }
  );
});

//Deleting a Product Row:
app.delete('/products/:productId', (req, res) => {
  const productId = req.params.productId;

  pool1.query(
    'DELETE FROM products WHERE product_id = ?',
    [productId],
    (err, results) => {
      if (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'An error occurred while deleting the product.', details: err.message });
      } else {
        res.status(200).json({ message: 'Product deleted successfully.' });
      }
    }
  );
});


// Create a New Product:-
app.post('/products', (req, res) => {
  const { product_id, product_category, product_name, product_info, image1, image2, image3 } = req.body;

  pool.query(
    'INSERT INTO products (product_id, product_category, product_name, product_info, image1, image2, image3) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [product_id, product_category, product_name, product_info, image1, image2, image3],
    (err, results) => {
      if (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'An error occurred while creating the product.', details: err.message });
      } else {
        res.status(201).json({ message: 'Product created successfully.' });
      }
    }
  );
});


// Update Sizes For The Products:-

app.put('/products/:productId/sizes', async (req, res) => {
  const productId = req.params.productId;
  const { product_name, product_size } = req.body;

  try {
    await pool1.query(
      'UPDATE sizes SET product_name = ?, product_size = ? WHERE product_id = ?',
      [product_name, product_size, productId]
    );
    res.status(200).json({ message: 'Size updated successfully.' });
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while updating the size.', details: err.message });
  }
});



// Delete  Sizes For The Products:-

app.delete('/products/:productId/sizes', async (req, res) => {
  const productId = req.params.productId;

  try {
    await pool1.query('DELETE FROM sizes WHERE product_id = ?', [productId]);

    res.status(200).json({ message: 'Sizes deleted successfully.' });
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while deleting the sizes.', details: err.message });
  }
});



// Create New Sizes Row:-
app.post('/products/:productId/sizes', async (req, res) => {
  const productId = req.params.productId;
  const { product_name, product_size } = req.body;

  try {
    await pool1.query(
      'INSERT INTO sizes (product_id, product_name, product_size) VALUES (?, ?, ?)',
      [productId, product_name, product_size]
    );
    res.status(201).json({ message: 'Size created successfully.' });
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while creating the size.', details: err.message });
  }
});

// Retrieve Size:_

app.get('/products/:productId/sizes', async (req, res) => {
  const productId = req.params.productId;

  try {
    const [results] = await pool1.query('SELECT * FROM sizes WHERE product_id = ?', [productId]);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while retrieving the sizes.', details: err.message });
  }
});


// create new price:-

app.post('/products/:productId/price', async (req, res) => {
  const productId = req.params.productId;
  const { product_name, product_size, price } = req.body;

  try {
    await pool1.query(
      'INSERT INTO price (product_id, product_name, product_size, price) VALUES (?, ?, ?, ?)',
      [productId, product_name, product_size, price]
    );
    res.status(201).json({ message: 'Price created successfully.' });
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while creating the price.', details: err.message });
  }
});

// update Price:-

app.put('/products/:productId/price', async (req, res) => {
  const productId = req.params.productId;
  const { product_name, product_size, price } = req.body;

  try {
    await pool1.query(
      'UPDATE prices SET product_name = ?, product_size = ?, price = ? WHERE product_id = ?',
      [product_name, product_size, price, productId]
    );
    res.status(200).json({ message: 'Price updated successfully.' });
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while updating the price.', details: err.message });
  }
});

// Delete Price:-

app.delete('/products/:productId/price', async (req, res) => {
  const productId = req.params.productId;

  try {
    await pool1.query('DELETE FROM prices WHERE product_id = ?', [productId]);
    res.status(200).json({ message: 'Price deleted successfully.' });
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while deleting the price.', details: err.message });
  }
});

// Retrieve Price:-
app.get('/products/:productId/price', async (req, res) => {
  const productId = req.params.productId;

  try {
    const [results] = await pool1.query('SELECT * FROM prices WHERE product_id = ?', [productId]);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'An error occurred while retrieving the price.', details: err.message });
  }
});

//  to group products by their categories
app.get("/categories", async (req, res) => {
  try {
    const [products] = await pool1.query("SELECT * FROM products");

    // Group products by their category
    const categories = products.reduce((acc, product) => {
      const { product_category } = product;
      if (!acc[product_category]) {
        acc[product_category] = [];
      }
      acc[product_category].push(product);
      return acc;
    }, {});

    res.status(200).json(categories);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).json({ error: "An error occurred while fetching categories.", details: err.message });
  }
});

console.log('Email:', process.env.EMAIL); // Debugging
console.log('Email Password:', process.env.EMAIL_PASSWORD); // Debugging
console.log('Owner Email:', process.env.OWNER_EMAIL); // Debugging
app.post('/send-email', async (req, res) => {
  const { name, email, phone, productId } = req.body;
  if (!name || !email || !phone || !productId) {
    return res.status(400).send('All fields are required');
  }

  try {
    // Fetch product details for all available sizes from the 'prices' table
    const [productRows] = await pool1.execute(
      'SELECT product_name, product_size, price FROM prices WHERE product_id = ?',
      [productId]
    );

    if (productRows.length === 0) {
      return res.status(404).send('Product not found');
    }

    // Assuming product_name is the same for all sizes, so we take it from the first row
    const productName = productRows[0].product_name;

    // Format sizes and prices for email
    const sizePriceDetails = productRows.map(row => `Size: ${row.product_size}, Price:Rs ${row.price}`).join('\n');

    // Configure email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.EMAIL_PASSWORD // Your email password
      }
    });

    // Email to the user with product details
    const userMailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Product Details for ${productName}`,
      text: `Hello ${name},

Here are the details of the product you requested:

Product Name: ${productName}
Available Sizes and Prices:
${sizePriceDetails}

Thank you for your interest.

Best regards,
SDM Orthpaedic`
    };

    // Email to the owner with user's details and product details
    const ownerMailOptions = {
      from: process.env.EMAIL,
      to: process.env.OWNER_EMAIL, // Your email
      subject: 'New Product Inquiry',
      text: `A new inquiry has been received.

User Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Requested Product Details:
Product Name: ${productName}
Available Sizes and Prices:
${sizePriceDetails}`
    };

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(ownerMailOptions);
    res.status(200).send('Emails sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email: ' + error.message);
  }
});



// app.post('/submit-form', (req, res) => {
//   const { name, email, phone, productId } = req.body;
//   setTimeout(() => {
//     let options = {
//       mode: 'text',
//       pythonOptions: ['-u'], // get print results in real-time
//       args: [name, email, phone, productId]
//     };

//     PythonShell.run('send_email.py', options, function (err, result) {
//       if (err) throw err;
//       console.log('result: ', result.toString());
//     });
//   }, 3000);

//   res.send('Form submitted successfully!');
// });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
