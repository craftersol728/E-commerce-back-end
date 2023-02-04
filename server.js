//https://www.npmjs.com/package/mysql2#installation
//https://www.npmjs.com/package/inquirer/v/8.2.4
//npm install console.table --save
const express = require ('express');
const routes = require ('./routes');

// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

// does this work with the port keyword?
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on ${PORT}'));
});