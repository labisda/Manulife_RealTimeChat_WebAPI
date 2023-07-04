'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql/msnodesqlv8');

const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        let result = await pool.request().query(sqlQueries.getAllUsers);
        return list = result.recordset;
    } catch (error) {
        return error.message;
    }
}

const createUser = async (userData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const result = await pool.request()
            .input('firstname', sql.VarChar(50), userData.firstname)
            .input('lastname', sql.VarChar(50), userData.lastname)
            .input('username', sql.VarChar(50), userData.username)
            .input('password', sql.VarChar(50), userData.password)
            .query(sqlQueries.createUser);

        const message = {
            "message": "Successfully Created.",
            "status": true
        }
        return message;
        
    } catch (error) {

        const message = {
            "message": "Duplicated username.",
            "status": false
        }
        return message;
    }
}


const login = async (userData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const result = await pool.request()
            .input('username', sql.VarChar(50), userData.username)
            .input('password', sql.VarChar(50), userData.password)
            .query(sqlQueries.loginUser);

        const message = {
            "userId": result.recordset[0].user_id,
            "isValid": result.recordset.length === 1 ? true : false,
            "status": true
        }

        return message;
        
    } catch (error) {

        const message = {
            "message": error.message,
            "status": false
        }

        return message;
    }
}

module.exports = {
    getUsers,
    createUser,
    login
}