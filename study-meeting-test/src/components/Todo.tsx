import React from "react";
import "../css/App.css"

type Props = {
  todo: {
    id: number;
    task: string;
    completed: boolean;
  }
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[]
  setTodos: (todo: {
    id: number;
    task: string;
    completed: boolean;
  }[]) => void
}

type Todos = {
  id: number;
  task: string;
  completed: boolean;
}[];

const Todo = (props: Props) => {
  const toggleTodo = () => {
    const newtodos: Todos = props.todos.map((todo) => {
      if (todo.id === props.todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    props.setTodos(newtodos);
  }

  return <>
    <div className="todo">
      <input className="checkTodo" id={String(props.todo.id)} type="checkbox" checked={props.todo.completed} onChange={toggleTodo} readOnly />
      <label htmlFor={String(props.todo.id)}>Todo{props.todo.id} : {props.todo.task}</label>
    </div>
  </>;
};

export default Todo;
