"use server";
import Svg from "@public/logo.svg";
import styles from "./todoList.module.scss";
// import ToDo from "@/entities/todo";
import { Home, Ruler, Earth } from "lucide-react";
import dynamic from "next/dynamic";
import Button from "@/shared/ui/button/Button";
import Main from "@/shared/ui/main";
const ToDo = dynamic(() => import("@/entities/todo"));
const ToDoList = () => {
  const todoList = [
    {
      id: 1,
    title: "Job",
    description: "make beatifule",
    color: "green",
    icon: <Ruler className="w-4 h-4" width={15} height={15}/>,
  },
    {
      id: 2,
    title: "Home",
    description: "dasdsadasdasdadasdsadasdas",
    color: "blue",
    icon: <Home className="w-4 h-4" width={15} height={15}/>,
  },
    {
      id: 3,
    title: "Earch",
    description: "make Earch ",
    color: "red",
    icon: <Earth className="w-4 h-4" width={15} height={15}/>,
  },
]
  return (
    <Main className="flex justify-center flex-col">
      {todoList.map((todo => {
        return (
          <ToDo
          className="mb-3"
          key={todo.id}
          icon={todo.icon}
          color={todo.color}
          title={todo.title}
          description={todo.description}
        />
        )
      }))
      }
      <Button variant="containd" >add toDo</Button>
    </Main>
  );
};

export default ToDoList;
