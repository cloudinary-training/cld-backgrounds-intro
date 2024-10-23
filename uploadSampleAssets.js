require('dotenv').config()
const cloudinary = require('cloudinary').v2

const assetsToUpload = [
	{path: "assets/handbag-model.jpg", resourceType: "image"},
	{path: "assets/men-laughing.jpg", resourceType: "image"},
	{path: "assets/casual-yellow.png", resourceType: "image"},
	{path: "assets/couch-dog.jpg", resourceType: "image"},
	{path: "assets/car-sign.jpg", resourceType: "image"},
	{path: "assets/ecomm-1.jpg", resourceType: "image"},
	{path: "assets/ecomm-2.jpg", resourceType: "image"},
	{path: "assets/ecomm-3.jpg", resourceType: "image"},
	{path: "assets/ecomm-4.jpg", resourceType: "image"},
	{path: "assets/ecomm-5.jpg", resourceType: "image"},
	{path: "assets/fashion-1.jpg", resourceType: "image"},
	{path: "assets/fashion-2.jpg", resourceType: "image"},
	{path: "assets/fashion-3.jpg", resourceType: "image"},
	{path: "assets/fashion-4.jpg", resourceType: "image"},
	{path: "assets/fashion-5.jpg", resourceType: "image"},
	{path: "assets/food-1.jpg", resourceType: "image"},
	{path: "assets/food-2.jpg", resourceType: "image"},
	{path: "assets/food-3.jpg", resourceType: "image"},
	{path: "assets/food-4.jpg", resourceType: "image"},
	{path: "assets/food-5.jpg", resourceType: "image"},
	{path: "assets/product-1.jpg", resourceType: "image"},
	{path: "assets/product-2.jpg", resourceType: "image"},
	{path: "assets/product-3.jpg", resourceType: "image"},
	{path: "assets/product-4.jpg", resourceType: "image"},
	{path: "assets/product-5.jpg", resourceType: "image"},
	{path: "assets/profile-1.jpg", resourceType: "image"},
	{path: "assets/profile-2.jpg", resourceType: "image"},
	{path: "assets/profile-3.jpg", resourceType: "image"},
	{path: "assets/profile-4.jpg", resourceType: "image"},
	{path: "assets/profile-5.jpg", resourceType: "image"},
	{path: "assets/portrait.png", resourceType: "image"},
	{path: "assets/travel-1.jpg", resourceType: "image"},
	{path: "assets/travel-2.jpg", resourceType: "image"},
	{path: "assets/travel-3.jpg", resourceType: "image"},
	{path: "assets/travel-4.jpg", resourceType: "image"},
	{path: "assets/travel-5.jpg", resourceType: "image"},
	{path: "assets/sofa-model.mp4", resourceType: "video"},
];

// Function to upload a single file
const uploadFile = async (file) => {
	// Strip folder and extension for each file
	const publicID = file.path.match(/([^\/]+)(?=\.\w+$)/)[0];

	try {
		await cloudinary.uploader.upload(file.path, {
			folder: 'backgrounds-microcourse',
			resource_type: file.resourceType,
			public_id: publicID
		});
		console.log(`Uploaded ${file.path}`);
	} catch (error) {
		console.error(`Error uploading ${file.path}:`, error);
	}
};

// Sequentially upload assets
const uploadSampleAssets = async () => {
	for (const asset of assetsToUpload) {
		await uploadFile(asset);
	}
};

// Upload the assets to be worked with in this microcourse, and assign
// public IDs that match the code in this repo for easy referencing
console.log("Uploading assets to your cloud...");
uploadSampleAssets();
