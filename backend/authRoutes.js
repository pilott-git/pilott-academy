const express = require("express");
const router = express.Router();

router.get("/discord", (req, res) => {
    res.send("Redirecting to Discord login...");
});

module.exports = router;
