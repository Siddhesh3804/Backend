const app = require("./src/app");

const mongoose = require("mongoose");

function connectTodb() {
    mongoose.connect("MONGODB_CONNECTION_STRING_HERE")
    .then(() => {
        console.log("Connected to Database");
    })
}
connectTodb();

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});