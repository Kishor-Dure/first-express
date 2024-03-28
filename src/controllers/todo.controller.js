const TodoService = require('../services/todo.service');
const TodoRepository = require('../repositories/todo.repository');

const todoServices = new TodoService(new TodoRepository());

function getTodos(req, res) {
  const response = todoServices.getAllTodos();
  return res.json({
    data: response,
  });
}

function createTodo(req, res) {
  const todoText = req.body.todoText;
  todoServices.create(todoText);
  return res.json({
    data: 'New todo created',
  });
}

module.exports = {
  getTodos,
  createTodo,
};
