'use strict';

const userData = require('../data/users');

const getUsers = async (req, res, next) => {
    try {
        const users = await userData.getUsers();
        return users;
    } catch(error) {
        return error.message;
    }
}


const addUser = async (req, res, next) => {
    try {
        const data = req;
        const created = await userData.createUser(data);
        
        // const users = await userData.getUsers();
        return created;
    } catch (error) {
        console.log(error)
        return error.message;
    }
}


const login = async (req, res, next) => {

    const userdata = req;

    try {
        const unique = await userData.login(userdata);
        // console.log(unique)
        return unique;
    } catch(error) {
        return error.message;
    }
}

module.exports = {
    getUsers,
    addUser,
    login
}