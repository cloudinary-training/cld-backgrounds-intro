require('dotenv').config({ path: '../../.env' })
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true", analytics: false, force_version: false });

// The Background Removal effect uses the Cloudinary AI Background Removal add-on's
// deep-learning to detect foregound objects and removes the background around them

const url = cloudinary.url("backgrounds-microcourse/couch-dog.png", {effect: "background_removal"});
// const url = cloudinary.url("backgrounds-microcourse/car-sign.png", {effect: "background_removal"});
// const url = cloudinary.url("backgrounds-microcourse/car-sign.png", {effect: "background_removal:hints_(car)"});

console.log(url);