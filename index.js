const express = require('express');
const path = require('path');

const userRoutes = require('./routes/user.routes');
const app = express();

/**post middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');
//views dir
app.set('views', path.join(__dirname, 'views'));

//route

app.use('/', (req, res, next) => {
  res.send('<h1>I love javascript</h1>');
});
app.use('/user', userRoutes);

app.get('/api/v1/user', (req, res, next) => {
  res.send('<h1>I love javascript</h1>');
});

const PORT = process.env.PORT || 3000;

// console.log(path.join(__dirname, 'views'));

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`),
);

//TODO: CRUD

//data structure: how you organize your data on the server

//user
//product
//like -> product id
//cart -> product id, qty
