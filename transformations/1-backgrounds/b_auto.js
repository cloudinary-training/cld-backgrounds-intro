require('dotenv').config({ path: '../../.env' })
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true", analytics: false, force_version: false });

// The Background Auto parameter automatically chooses the background
// colour by calulating the predominant colours in the asset

const url = cloudinary.url("sample", {background: "auto", crop: "pad", width: 800, height: 400});
// const url = cloudinary.url("sample", {background: "auto:predominant", crop: "pad", width: 800, height: 400});
// const url = cloudinary.url("sample", {background: "auto:border_contrast", crop: "pad", width: 800, height: 400});
// const url = cloudinary.url("sample", {background: "auto:predominant_contrast", crop: "pad", width: 800, height: 400});

console.log(url);