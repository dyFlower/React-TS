import React from 'react';

const TodosContext = React.createContext({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
