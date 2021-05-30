const MysqlLib = require('../lib/mysql');

class StudentService {
  constructor() {
    this.table = 'usuarios';
    this.mysql = new MysqlLib();
  }

  async getAll() {
    const mysqlLib = await this.mysql.get(this.table);
    console.log(mysqlLib);
  }
}

module.exports = StudentService;
