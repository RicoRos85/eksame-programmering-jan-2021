const Image = require("../models/images.js");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./localStorage");
const userData = "../userData.json";

const uploadImage = () => {}
const deleteImage = () => {}

module.exports = {
    uploadImage,
    deleteImage
};