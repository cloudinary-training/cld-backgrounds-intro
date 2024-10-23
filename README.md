# cld-backgrounds-intro

# Introduction to Backgrounds with Cloudinary

In this microcourse, delve into advanced image and video transformation techniques, focusing on background enhancements using Cloudinary. Learn how to effectively apply these transformations to elevate your digital assets, from basic adjustments to sophisticated optimizations.

Discover the power of b_auto and other transformations, including generative AI options like fill and gen_fill, to dynamically adjust and enhance background elements. Gain insights into using c_pad for maintaining aspect ratios and adding padding, with an emphasis on background removal to boost visual appeal and storytelling. Master techniques for manipulating backgrounds to create a stronger visual impact and more engaging content.

## Environment Setup

### Install Node.js and NPM:
You will need to install Node.js on your machine, version 10 or higher.
 Important - Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install node
```

#### Windows
[Download for windows](https://nodejs.org/en/download/)

#### Verify Node/NPM install:

```console
$ node --version
v19.2.0

$ npm --version
9.8.1
```

### Choose an IDE or Use Text Editor:

- [Visual Studio Code](https://code.visualstudio.com/download) - VSCode is our preferred IDE
- [WebStorm](https://www.jetbrains.com/webstorm/) 
- [Sublime](https://www.sublimetext.com/) 

### Download Repository:

[Introduction to Backgrounds with Cloudinary](https://github.com/cloudinary-training/cld-backgrounds-intro)

- Run code from root directory, like so:
```bash
node <file_name.js>
```

### Account Setup and Credentials:

1. If you don't have one already, create a free Cloudinary account at: https://www.cloudinary.com/signup.

2. Navigate Settings > API Keys. Copy the `CLOUDINARY_URL` into your clipboard (see yellow arrow).

![Dashboard](./assets/cld_credentials.png)

3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file, and replace the placeholder API key and secret with the values from your Seettings page.

There should be one line of code in your .env file, which should look like this:

```console
CLOUDINARY_URL=cloudinary://YOUR_API_KEY:YOUR_API_SECRET@YOUR_CLOUD_NAME
```
- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME

Doing this step properly is essential, as it will let Cloudinary know who you are and provide access to your cloud.

### Run Code: Install Node Libraries


```console
npm i
```
(You will be using the `cloudinary` and the `dotenv` libraries.)

### Run Code: Test Credentials

```console
node testCredentials.js
```

The output should look like this:
```console
your Cloud Name
your API Key
```

- Your API_SECRET is part of your CLOUDINARY_URL
- Remember to always keep your API_SECRET a secret!
  - This is why we programmed testCredentials.js to only output your cloud name and API Key (no need to keep these two credentials private)


### Run Code:

In order to upload all of the assets associated with these code examples and assign the correct Public ID to each, run this file:
```bash
node uploadSampleAssets.js
```

Now you're ready to get started! 