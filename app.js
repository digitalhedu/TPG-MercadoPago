const express = require('express');
const cors = require('cors');
const static = require('./modules/static');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3030
const listen = () => console.log(`Starting on http://localhost:${port}`);
app.set('view engine', 'ejs');
app.set('views', './views')
app.listen(port,listen());
app.use(cors());
app.use(static('../public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
}));

// Step 2
app.use(require('./middlewares/cart'))

app.use(require('./routes/main.routes'))
app.use('/checkout',require('./routes/checkout.routes'))