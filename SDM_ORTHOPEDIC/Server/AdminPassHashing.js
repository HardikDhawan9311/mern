import bcrypt from 'bcryptjs';

// Example code for registering a user
const hashedPassword = await bcrypt.hash('#prabhjeet18', 10);
console.log(hashedPassword)