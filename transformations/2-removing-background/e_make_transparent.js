require('dotenv').config({ path: '../../.env' })
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true", analytics: false, force_version: false });

// The Make Transparent effect removes the background by removing any pixels
// that are of a similar colour to those of the pixels on the edges of your asset

const url = cloudinary.url("backgrounds-microcourse/portrait", {effect: "make_transparent"});
// const url = cloudinary.url("backgrounds-microcourse/portrait", {color: "white", effect: "make_transparent:17"});

console.log(url);