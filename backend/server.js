const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Serveur Express démarré sur le port ${PORT}`);
    });
}

module.exports = app; // Exportation pour Jest
