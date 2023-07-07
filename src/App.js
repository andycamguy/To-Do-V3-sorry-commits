import React, { useState } from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [todoItems, setTodoItems] = useState([]);
  const [activeTasksCount, setActiveTasksCount] = useState(0);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoList
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        setActiveTasksCount={setActiveTasksCount}
      />
      <Footer
        currentFilter={currentFilter}
        setFilter={setCurrentFilter}
        todoItems={todoItems}
      />
      <div className="text-center">{activeTasksCount} left to do</div>
    </div>
  );
}
