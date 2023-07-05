import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
export default function App()
{
    // talk this through yourself slowly

const [todoItems,setTodoItems] = useState([]) /*
this creates the useState functional component hook
todoItems is your variable of useState. setTodoItems is your 
setter function to change the status of the variable
*/
useEffect(() => {
const storedItems = localStorage.getItem('todoItems');
if (storedItems) {
    setTodoItems(JSON.parse(storedItems));
}
},[]);
const addToddoItem = (newItem) => {
    setTodoItems([...todoItems,newItem]);
    localStorage.setItem('todoItems', JSON.stringify(updatedItems));
}
//this adds a new todo item. by using "..." it makes a it clone of the items.
//newItem is the prop

const updateTodoItemStatus = (itemId,newStatus) =>{
    const updatedItems = todoItems.map((item) =>
    item.id ===itemId ? {...item,status:newStatus} : item,
    localStorage.setItem('todoItems', JSON.stringify(updatedItems))
    );
}
const deleteTodoItem = (itemID) => {
    const filteredItems =todoItems.filter((item) => item.id !==itemID);
    setTodoItems(filteredItems);
    localStorage.setItem('todoItems', JSON.stringify(updatedItems));
} 
return (
    <div>
        <TodoList
        todoItems ={todoItems}
        updateTodoItemStatus={updateTodoItemStatus}
        deleteTodoItem={deleteTodoItem}
        />
        <Footer />
    </div>

)  

}