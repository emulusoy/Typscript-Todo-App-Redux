import React, { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodoById } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const [editable, setEditTable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id)); //bunu sil bu id olanı
  };
  const handleUpdate = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodoById(payload));
    setEditTable(false)
  };

  return (
    <div className="todo-app">
      {editable ? (
        <input
          style={{
            width: "400px",
            border: "none",
            borderBottom: "1px solid lightgrey",
            outline: "none",
          }}
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <CiSquareRemove onClick={handleRemoveTodo} className="icons" />
        {editable ? (
          <CiSquareCheck className="icons" onClick={handleUpdate} />
        ) : (
          <CiEdit onClick={() => setEditTable(true)} className="icons" />
        )}
      </div>
    </div>
  );
}

export default Todo;
