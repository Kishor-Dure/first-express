const express = require('express');
const homePingController = require('../../controllers/home.controller');
const todoRouter = require('./todo.routes');
const { createTodoValidator } = require('../../validators/todo.validator');

const router = express.Router();

router.use('/todos', createTodoValidator, todoRouter);

router.get('/ping', homePingController);

module.exports = router;
