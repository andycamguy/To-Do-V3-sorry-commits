import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer({ currentFilter, setFilter, todoItems }) {
  const handleFilterChange = (filter) => { // filter function based on state in local storage
    setFilter(filter);
  };

  const getFilteredItems = () => { // filters for the button
    if (currentFilter === "all") {
      return todoItems;
    } else if (currentFilter === "active") {
      return todoItems.filter((item) => !item.completed);
    } else if (currentFilter === "completed") {
      return todoItems.filter((item) => item.completed);
    }
    return [];
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="container text-center mt-4">
      <button
        className={`btn btn-sm ${currentFilter === "all" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button
        className={`btn btn-sm ${currentFilter === "active" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </button>
      <button
        className={`btn btn-sm ${currentFilter === "completed" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </button>
      {filteredItems.length > 0 ? ( // just displays the filtered items
        <div>
          {filteredItems.map((item) => (
            <div key={item.id}>{item.label}</div>
          ))}
        </div>
      ) : (null
      )}
    </div>
  );
}
