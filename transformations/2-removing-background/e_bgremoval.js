require('dotenv').config({ path: '../../.env' })
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true", analytics: false, force_version: false });

// The bgremoval effect removes the background when it is a solid colour

const url = cloudinary.url("backgrounds-microcourse/casual-yellow", {effect: "bgremoval"});

console.log(url);