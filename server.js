const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const prodRouter = require('./router/prodRoutes');
const notFound = require('./middleware/notFound');


connectDB();
const app = express(); 
app.use(cors());
app.use(express.json())
    app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.json('Welcome to the Store API application')
});

app.use('/api/v1/products',prodRouter);
app.use(notFound);


app.listen(port, () => 
    console.log(`server is running on port ${port}`)
);