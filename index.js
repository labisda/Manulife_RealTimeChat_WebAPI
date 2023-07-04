'use strict';

const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());


const chatController = require('./controllers/chatController')
const userRoutes = require('./routes/userRoute')(io);
const chatRoutes = require('./routes/chatRoute')(io);
app.use('/api', userRoutes);
app.use('/api', chatRoutes);



io.on('connection', async (socket) => {

    
    const chatList = await chatController.getChats();
    io.emit('chat_list', chatList);

    socket.on('connect', () => {
        console.log('Connected successfully! SocketId: ' + socket.id);
    });

    socket.on('disconnect', () => {
        console.log('Logged out.');
    })
});

server.listen(config.port, () => console.log('Server is listening on ' + config.url));