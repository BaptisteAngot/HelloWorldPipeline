const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur Express démarré sur le port ${PORT}`);
});
