const express = require('express');
const StudentService = require('../services/student');

function userRoutes(app) {
  const router = express.Router();
  app.use('/', router);

  const studentService = new StudentService();
  router.get('/', (req, res, next) => {
    try {
      studentService.getAll();
      res.status(200).send('test');
    } catch (error) {
      next(error);
    }
  });
}

module.exports = userRoutes;
