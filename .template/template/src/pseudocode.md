# To do list Project

- UI - small and compact

* input field
* different states within the tasks or filters rather (All, active, completed)
* number of tasks left to complete

# Atomic Design

- atoms

* buttons
* check box to let user know if complete
* button to hard delete the completed tasks as far as understood

- molecules

* to do list item

- organisms

* to do list with its items and respective buttons

# Stories via Agile bologna

### As an anonymous user I can:

1.  view all of my to do list items so that I can see their statuses
2.  view the to do list as completed or not completed
3.  remove an item from the list to hide it from my view
4.  check off by selecting all items with one button to save time

# Procedural

## BEGIN

## INIT

- Load the todo list
- setup the variables, listeners, and initialize state
- Listen for Data INPUT such as a new to do item, update to existing list or a soft delete(sweep it under the rug)
- A listen for the user to switch views - to show all, completed, active, or the archived, filter it from state

## END

# Functional

## Do not forget CRUD - Create, Read, Update, Delete

After the thing is loaded

```
function createItem()
{
   - when input is put inside the input space, it is held and creates the output as a new item, press enter to finish the input
   - when enter key is pressed, invoke the makeUnique function
}

function readandUpdate()
{
after id is made within the array, update the dom in the correct order based on time of creation.
-update the id and data within the todo item
}

function makeUnique()
{
    when item is created, assign a number based on a sequence that is completely unique
    move the id into an array tracking all the id's of the items
}
function addTask()
{
when a button is pressed, adds the input prompt for the createItem function to be invoked later if there isn't one already
}
function softDeleteItem
{
if the task state is complete, remove it from the list, BUT KEEP ITS ID and its data

}

function completeItem(){
upon eventlisten, if task is not complete, make complete. if complete, undo the state to not-complete
}
function remainingItems()
{
return all items that are not complete
}
```

Question: How in the world do I do that? Justin suggested using the epoch or a timestamp to catch when it was posted
// Date.now in js could be an option
//https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13

## Object-Oriented Programming

```
Object toDoListId = {
 toDoItem : {
    label: the provided text from an input function.
    status: The states are active,completed,archived or deleted which determines sorting of state within the object //likely an integer since there are multiple states. I was hoping it would be easy and say boolean. 
    ID:[ ] a unique id based on the method of the fibonacci sequence that is infinite to prevent overlap in identification
    UpdateStatus: method to change the state of status based on input button

}


}
// thought for later: do we want to change order of items by click and drag with the UUID method we have?
```

## Thinking in React

### Components
- App Componenet 
 - primary responsibility of holding everything together, displaying the items, local storage will hold the ID of the todo items and their states


- ToDo List Component 
  - receives the todo item components as props and renders them (reminder that a component can only return one element at a time so you have to wrap them to trick React as not an element but children with their properties aka props)


- ToDoItem component.
 - This component represents an individual todo item.
 - It receives the todo item's properties (id, label, status) as props.
 - It includes the necessary UI elements (checkbox, label text, delete button) to interact with the todo item.
 - It communicates with the App component to update the todo item's status  or delete it.


- Footer Component
  - responsible for switching the views. all, active, completed.
  - This component provides options to filter the displayed todo items  based on their status (all, active, completed, archived).
  -It includes buttons or links to switch between the different filter options.
  - It communicates with the App component to update the current filter and display the appropriate todo items.


# Flowchart of React 
**This is Declarative Programming, not Imperative programming**
**Declarative Programming means you have an understanding of what you want.** **React's job is to run the steps to render what you want and give the necessary errors**
**Imperative is describing the steps on how to make the sandwich**
             App
               |
               |
             TodoList
               |
               |
        |---  --|--  --|
        Item   Item   Item


## Asking ChatGPt for insight on oop
Note: I take this at face value. I likely won't use all of it. Just parts that make sense 
TodoItem object:

Properties:
id: A unique identifier for the todo item.
label: The label or text content of the todo item. // do I really need that though?
status: The current status of the todo item (e.g., "active," "completed," "archived," or "deleted").
Methods:
updateLabel(newLabel): Updates the label of the todo item with a new value.
updateStatus(newStatus): Updates the status of the todo item with a new value.

## Asking ChatGpt for thinking in React
Note: will very much likely change the pseudocode as will be seen from prior commits

App Component:

This is the main component that serves as the entry point of the application.
It can hold the state for the todo list items and manage their creation, deletion, and status updates.
It renders the TodoList component and passes the necessary props.

TodoList Component:
This component receives the list of todo items as props and renders each TodoItem component.
It can also include a filtering mechanism to display only specific categories (e.g., all, active, completed, archived).
It renders the TodoItem components and the Footer component.

TodoItem Component:

This component represents an individual todo item.
It receives the todo item's properties (id, label, status) as props.
It includes the necessary UI elements (checkbox, label text, delete button) to interact with the todo item.
It communicates with the App component to update the todo item's status or delete it.

Footer Component:

This component provides options to filter the displayed todo items based on their status (all, active, completed, archived).
It includes buttons or links to switch between the different filter options.
It communicates with the App component to update the current filter and display the appropriate todo items.



