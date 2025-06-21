const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://supriyakumariabcd20:evHZHTEGVBJ8QSiC@cluster0.pqjrhrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
    console.log("Connected to MongoDB successfully");
}
).catch(
    () => {
        console.log("Failed to connect to MongoDB");
    }
)