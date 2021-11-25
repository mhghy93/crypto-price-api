const express = require('express');
const connectDB = require('./utils/db');

const app = express();

// connect database
connectDB();

app.use(express.json());

// Define routes
app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
