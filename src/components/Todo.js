import { useState } from "react";
import { TodoModal } from "./TodoModal";

export const Todo = () => {
  const [todoModal, setTodoModal] = useState(false);

  return (
    <>
      <button
        className="btn-default btn-dark"
        onClick={() => setTodoModal(!todoModal)}
      >
        Todo
      </button>
      {todoModal && <TodoModal />}
    </>
  );
};
