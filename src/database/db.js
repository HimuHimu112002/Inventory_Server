const mongoose = require('mongoose')
function DatabaseConnection() {
    mongoose.connect('mongodb+srv://inventory:Nkfiq4uwkqzH0D7M@cluster0.o72kxch.mongodb.net/inventory?retryWrites=true&w=majority').then(() =>{
        console.log("Database Connection Complete")
    });
}
module.exports = DatabaseConnection;