// Add your CLOUDINARY_URL (API environment variable) to a .env file
// See .env.sample for an example

// Read .env into process.env
require('dotenv').config();

// Load Cloudinary node.js library
const cloudinary = require('cloudinary').v2;

// Execute Cloudinary config to extract your credentials from your CLOUDINARY_URL
const credentials = cloudinary.config({'secure':'true'})
console.log(credentials.cloud_name)
console.log(credentials.api_key)

// Remember to always keep your secret private! 
// console.log(credentials.api_secret)