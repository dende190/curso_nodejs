const mysql = require('mysql');
const {config} = require('../config/configuracion');
const USER = encodeURIComponent(config.dbUser);
const PASSWROD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const NAME = encodeURIComponent(config.dbName);

class MysqlLib {
  constructor() {
    this.client = mysql.createConnection({
      host: HOST,
      user: USER,
      password: PASSWROD,
      database: NAME,
    });
  }

  connect() {
    if (MysqlLib.connection) {
      return MysqlLib.connection;
    }

    return MysqlLib.connection = new Promise((resolve, reject) => {
      this.client.connect((error) => {
        if (error) {
          reject(error);
        }

        console.log('Connected succesfully to MySql');
        resolve(this.client);
      });
    });
  }

  get(query) {
    return this.connect().then((db) => {
      db.query(query, (error, results, fields) => {
        if (error) {
          return console.log(error);
        }

        console.log(results);
      });
    });
  }

  create(query) {

  }

  update(query) {

  }

  delete(query) {

  }
}

module.exports = MysqlLib;
