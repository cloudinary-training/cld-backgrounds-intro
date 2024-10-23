require('dotenv').config({ path: '../../.env' })
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true", analytics: false, force_version: false });

// Generative AI effects can be combined to create interesting transformations

const url = cloudinary.url("backgrounds-microcourse/food-2", {transformation: [
	{effect: "gen_remove:prompt_packet of fries"},
	{background: "gen_fill", crop: "pad", aspect_ratio: "16:9"}
]});

console.log(url);