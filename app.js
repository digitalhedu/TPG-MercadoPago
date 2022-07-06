const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3030
const listen = () => console.log(`Starting on http://localhost:${port}`);
app.listen(port,listen());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/checkout',require('./routes/checkout.routes'))