require('dotenv').config({ path: '../../.env' })
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true", analytics: false, force_version: false });

// The Generative Fill background transformation uses AI to fill in any whitespace
// that is created by extending or resizing an image

const url = cloudinary.url("backgrounds-microcourse/travel-5", {background: "gen_fill", crop: "pad", aspect_ratio: "21:9"});
// const url = cloudinary.url("backgrounds-microcourse/travel-2", {background: "gen_fill", crop: "pad", aspect_ratio: "16:9"});
// const url = cloudinary.url("backgrounds-microcourse/travel-2", {background: "gen_fill:ignore-foreground_true", crop: "pad", aspect_ratio: "16:9"});

console.log(url);