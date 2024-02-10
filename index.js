const app=require("./app");
const DatabaseConnection = require("./src/database/db");
const PORT=5050;

DatabaseConnection()
app.listen(PORT,function () {
    console.log("App Run")
})