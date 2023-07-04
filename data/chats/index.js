'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql/msnodesqlv8');

const getChats = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('chats');
        let result = await pool.request().query(sqlQueries.getAllChats);
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}


const createChat = async (userData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('chats');
        const result = await pool.request()
            .input('user_id', sql.VarChar(50), userData.user_id)
            .input('message', sql.VarChar(50), userData.message)
            .query(sqlQueries.createChat);

        console.log(result);

        const message = {
            "message": "Successfully Created.",
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
    getChats,
    createChat
}