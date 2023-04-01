import React, { useRef } from "react";
import "../css/App.css"

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

const AddTodo = (props: Props) => {
  const taskText = useRef<HTMLInputElement>(null)

  const addTodo = () => {
    if (taskText.current === null) return
    if (taskText.current.value === "") return alert("Todoを入力してください!!");
    let todo = { id: 0, task: taskText.current.value, completed: false };
    if (props.todos.length === 0) {
      todo.id = 1;
    } else {
      todo.id = props.todos.length + 1;
    }
    const newTodos: Todos = [...props.todos, todo]
    props.setTodos(newTodos)
    taskText.current.value = ""
  }

  return (
    <>
      <div>
        <input className="inputTodo" type="text" placeholder="Todoを追加" ref={taskText} />
        <button onClick={addTodo}>追加</button>
      </div>
    </>
  );
};

export default AddTodo;
