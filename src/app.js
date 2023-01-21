const express = require('express');
const app = express();
//Routes
const homeRouter = require('./routes/home');
const useRouter = require('./routes/user')
const productRouter = require('./routes/product');

app.use(express.json());

app.use(homeRouter);
app.use(useRouter);
app.use(productRouter);

module.exports = app;