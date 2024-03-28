function createTodoValidator(req, res, next) {
  if (!req.body.todoText) {
    return res.json({ msg: 'invalid request' });
  }

  next();
}

module.exports = {
  createTodoValidator,
};
