const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../api/auth/authRouter.js');
const usersRouter = require('../api/users/usersRouter.js');
const authenticator = require('../api/auth/authenticator.js');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api/users',authenticator, usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req,res) =>{
    res.json({ api: 'up'})
})

module.exports = server;
