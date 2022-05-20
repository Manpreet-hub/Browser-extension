import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoModal = () => {
  const getLocalStorageData = () => {
    const todos = localStorage.getItem("myTodo");
    if (todos) return JSON.parse(todos);
    else return [];
  };

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getLocalStorageData());
  const [toggleBtn, setToggleBtn] = useState(false);
  const [isEditTodo, setIsEditTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("myTodo", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (!todo) return;
    else if (todo && toggleBtn) {
      const updatedTodo = todoList.map((curEle) => {
        if (curEle.id === isEditTodo) return { ...curEle, title: todo };
        else return curEle;
      });
      setTodoList(updatedTodo);
      setToggleBtn(false);
      setTodo("");
    } else {
      setTodoList([
        ...todoList,
        { id: uuidv4(), title: todo, completed: false },
      ]);
      setTodo("");
    }
  };
  const deleteTodo = (id) => {
    const removedTodo = todoList.filter((curEle) => curEle.id !== id);
    setTodoList(removedTodo);
  };

  const editTodo = (id) => {
    const editTodoItem = todoList.find((curEle) => curEle.id === id);
    console.log(editTodoItem);
    setTodo(editTodoItem.title);
    setToggleBtn(true);
    setIsEditTodo(id);
  };

  const strikeTodoHandler = (id) => {
    const strikedTodo = todoList.map((curEle) =>
      curEle.id === id ? { ...curEle, completed: !curEle.completed } : curEle
    );
    setTodoList(strikedTodo);
  };

  return (
    <div className="todo-modal-container">
      <h2>All Todos</h2>
      <div className="todos-list-container">
        {todoList.map((todo) => {
          return (
            <div className="todos-list">
              <label htmlFor={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => strikeTodoHandler(todo.id)}
                />
                <span
                  style={
                    todo.completed
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {todo.title}
                </span>
              </label>
              <div>
                <span onClick={() => editTodo(todo.id)}>
                  <i className="fa-solid fa-pen-to-square icon"></i>
                </span>

                <span onClick={() => deleteTodo(todo.id)}>
                  <i className="fa-solid fa-trash icon"></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <input
          className="todo-input"
          type="text"
          placeholder="Add Todos"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="add-btn" onClick={addTodo}>
          {toggleBtn ? (
            <i className="fa-solid fa-pen-to-square"></i>
          ) : (
            <i className="fa-solid fa-circle-plus"></i>
          )}
        </button>
      </div>
    </div>
  );
};
