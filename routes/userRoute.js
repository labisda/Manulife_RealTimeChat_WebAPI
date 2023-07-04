'use strict';

const express = require('express');

const userController = require('../controllers/userController');

function UsersRouters(io) {

    const router = express.Router();
    
    router.get('/getAllUsers', async (req, res) => {
        const usersList = await userController.getUsers();
        // res.send(usersList);
    });

    router.post('/createUser', async (req, res) => {
        const data = req.body;
        const result = await userController.addUser(data);
        res.send(result);
    });


    router.post('/login', async (req, res) => {
        const data = req.body;
        const result = await userController.login(data);
        res.send(result);
    })


    return router;
}

module.exports = UsersRouters;
