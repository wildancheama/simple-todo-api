import { listTodos, addTodo } from '../services/todo.service.js';

export const getTodos = (req, res) => {
  const todos = listTodos();
  res.status(200).json({
    todos
  })
};

export const createTodo = (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() == ''){
    return res.status(400).json({ messsage: "title is requires"});
  }

  const todo = addTodo(title.trim());
  res.status(201).json({ message: "created", todo})
}