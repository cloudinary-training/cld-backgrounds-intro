require('dotenv').config({ path: '../../.env' })
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true", analytics: false, force_version: false });

// The Background blurred parameter creates a blurred version of the video
// which is then used as the background for that video when padding is applied

const url = cloudinary.url("backgrounds-microcourse/sofa-model", {resource_type: "video", background: "blurred", crop: "pad", width: 800, height: 800});
// const url = cloudinary.url("backgrounds-microcourse/sofa-model", {resource_type: "video", background: "blurred:1000", crop: "pad", width: 800, height: 800});
// const url = cloudinary.url("backgrounds-microcourse/sofa-model", {resource_type: "video", background: "blurred:1000:25", crop: "pad", width: 800, height: 800});

console.log(url);