import React from "react";
import Todo from "./Todo";

type Props = {
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

const TodoList = (props: Props) => {
  return (
    <>
      {props.todos.map((todo) => {
        return <div key={todo.id}>
          <Todo todo={todo} todos={props.todos} setTodos={props.setTodos} />
        </div>
      })}
    </>)
};

export default TodoList;
