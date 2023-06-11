import React from "react";

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

type Todos = {
  id: number;
  task: string;
  completed: boolean;
}[];

const DeleteTodo = (props: Props) => {
  const deleteTodo = () => {
    const newtodos: Todos = props.todos.filter((todo) => !todo.completed);
    let idCount = 1;
    newtodos.forEach((todo) => {
      todo.id = idCount;
      idCount++;
    });
    props.setTodos(newtodos);
  }

  return <>
    <button onClick={deleteTodo}>完了したTodoを削除</button>
  </>;
};

export default DeleteTodo;
