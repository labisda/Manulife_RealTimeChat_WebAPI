'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();
const { PORT, HOST, HOST_URL, SQL_DATABASE , SQL_SERVER, SQL_DRIVER } = process.env;

assert(PORT, 'Port is required');
assert(HOST, 'Host is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        database: SQL_DATABASE,
        server: SQL_SERVER,
        driver: SQL_DRIVER,
        options: {
            trustedConnection: true
        }
    }
}