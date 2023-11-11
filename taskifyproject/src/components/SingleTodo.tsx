import React, { useState } from "react";
import { Todo } from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false); // track button
  const [editTodo, setEditTodo] = useState<string>(todo.todo); // to hold edit value

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handledelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <form className="todos_single">
      {edit ? (
        <input value={todo.todo} onChange={e=>setEditTodo(e.target.value)} className="todos_single--test"/>
      ) : todo.isDone ? (
        <s className="todos_single--text"> {todo.todo}</s>
      ) : (
        <span className="todos_single--text"> {todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handledelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
