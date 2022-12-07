const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://renandev:renandev@cluster0.w3vxuyp.mongodb.net/test');
}

module.exports = startDB;