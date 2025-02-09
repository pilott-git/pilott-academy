const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
