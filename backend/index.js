const express = require("express");
const { get } = require("mongoose");

const app = express();

app.get(
    "/",
    (req, res) => { 
        res.send("Hello from the backend");
    }
);

app.listen(
    5000,
    ()=>console.log("Backend is runnig")
)