require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path')
const serveStatic = require('serve-static')


//connecting db
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));


server.use(express.json());
server.use(cors());
server.use(serveStatic(__dirname + '/dist'));


//telling the server how to access the DB and what to do wif it
const router = require('./characterRoutes');
server.use('/characterRoutes', router);


const port = process.env.PORT || 3000

server.listen(port, () => console.log("Server started!"));