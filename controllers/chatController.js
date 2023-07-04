'use strict';

const chatData = require('../data/chats');

const getChats = async (req, res, next) => {
    try {
        const chats = await chatData.getChats();
        return chats;
    } catch(error) {
        return error.message;
    }
}

const addChat = async (req, res, next) => {
    try {
        const data = req;
        const created = await chatData.createChat(data);
        
        // const users = await userData.getUsers();
        return created;
    } catch (error) {
        console.log(error)
        return error.message;
    }
}

module.exports = {
    getChats,
    addChat
}