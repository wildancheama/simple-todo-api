let todos = [];
let counter = 1;

export const listTodos = () => {
  return todos;
};

export const addTodo = (title) => {
  const newTodo = {id : counter++, title, done: false};
  todos.push(newTodo);
  return newTodo;
}