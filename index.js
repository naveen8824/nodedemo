const express = require("express")

const app = express();

app.get("/",(req, res) => {
    res.send("<h1>WELCOME TO THE NODE APP</h1>")
});
app.listen(3000); 