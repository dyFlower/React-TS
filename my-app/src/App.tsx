import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((current) => {
      return current.concat(newTodo);
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((current) => {
      return current.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;