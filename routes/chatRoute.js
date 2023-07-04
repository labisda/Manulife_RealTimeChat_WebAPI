'use strict';

const express = require('express');

const chatController = require('../controllers/chatController');

function UsersRouters(io) {

    const router = express.Router();
    
    router.get('/getAllChat', async (req, res) => {
        const chatList = await chatController.getChats();
        io.emit('chat_list', chatList);

        res.send(chatList);
    });

    router.post('/createChat', async (req, res) => {
        const data = req.body
        const result = await chatController.addChat(data)
        
        const chatList = await chatController.getChats();
        io.emit('chat_list', chatList);
        res.send(result);
    })

    return router;
}

module.exports = UsersRouters;
