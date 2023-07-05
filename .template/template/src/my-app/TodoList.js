import React from "react";


export default function TodoList() {
    return(
        <>
 <form className="new-item-form">
    <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
 </form>
 <h1 className="header">Todo List</h1>
 <ul className="list">
    <li>
        <label>
            <input type ="checkbox" />
            Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
        <label>
            <input type ="checkbox" />
            Item 2
        </label>
        <button className="btn btn-danger">Delete</button>
    </li>
 </ul>
 </>   
    )
}