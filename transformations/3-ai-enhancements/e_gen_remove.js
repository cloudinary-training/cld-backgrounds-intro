require('dotenv').config({ path: '../../.env' })
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true", analytics: false, force_version: false });

// The Generative Remove effect uses AI to remove specific parts of your image,
// replacing it with realistic content that doesn't look out of place

const url = cloudinary.url("backgrounds-microcourse/fashion-5", {effect: "gen_remove:prompt_street sign"});
// const url = cloudinary.url("backgrounds-microcourse/travel-4", {effect: "gen_remove:prompt_person"});
// const url = cloudinary.url("backgrounds-microcourse/ecomm-2", {effect: "gen_remove:region_(x_1375;y_425;w_370;h_410)"});
// const url = cloudinary.url("backgrounds-microcourse/food-3", {effect: "gen_remove:region_((x_0;y_450;w_650;h_320);(x_0;y_1370;w_650;h_250))"});

console.log(url);