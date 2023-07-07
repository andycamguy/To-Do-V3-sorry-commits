import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, setTodoItems, setActiveTasksCount }) {
  useEffect(() => {
    // Calculate active tasks count
    const activeCount = todoItems.filter((item) => !item.completed).length;
    setActiveTasksCount(activeCount);
  }, [todoItems, setActiveTasksCount]);
  useEffect(() => {
    // Update local storage and calculate active tasks count whenever todoItems change
    localStorage.setItem('todoItems', JSON.stringify(todoItems));

    // Calculate active tasks count by filtering items with completed: false
    const activeCount = todoItems.filter((item) => !item.completed).length;

    // Call setActiveTasksCount to update active tasks count in parent component
    setActiveTasksCount(activeCount);
  }, [todoItems, setActiveTasksCount]);

  const addTodoItem = (newItem) => {
    // Add new todo item to todoItems array
    setTodoItems([...todoItems, newItem]);
  };

  const toggleTodoItem = (itemId) => {
    const updatedItems = todoItems.map((item) => {
      if (item.id === itemId) {
        const updatedItem = {
          ...item,
          completed: !item.completed
        };
        setActiveTasksCount((prevCount) =>
          updatedItem.completed ? prevCount - 1 : prevCount + 1
        );
        return updatedItem;
      }
      return item;
    });
    setTodoItems(updatedItems);
  };

  const deleteTodoItem = (itemId) => {
    const updatedItems = todoItems.filter((item) => item.id !== itemId);
    setTodoItems(updatedItems);
  };

  return (
    <div>
      <div className="container border border-dark p-4">
        <input
          className="container todoinput"
          placeholder="Add a new item"
          onKeyPress={(e) => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              const newItem = {
                id: Date.now(),
                label: e.target.value.trim(),
                completed: false
              };
              addTodoItem(newItem);
              e.target.value = '';
            }
          }}
        />
      </div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          label={item.label}
          completed={item.completed}
          onToggle={toggleTodoItem}
          onDelete={deleteTodoItem}
        />
      ))}
    </div>
  );
}
