const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://protbenj:kiL6FdhQql1cKVlx@myfirstdatabase.xlsj8vw.mongodb.net/locapic'

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));