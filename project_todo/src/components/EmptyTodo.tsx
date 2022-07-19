import toDoImg from "../assets/to-do-list.svg";
import React, { FunctionComponent } from "react";
import tw from "tailwind-styled-components/dist/tailwind";

interface EmptyTodoProps {}

const EmptyTodo: FunctionComponent<EmptyTodoProps> = () => {
  const Wrapper = tw.div`
    flex
    flex-col 
    justify-center
    items-center
    gap-4
  `;

  return (
    <Wrapper>
      <img src={toDoImg} alt="To do list" className="opacity-50 w-2/3" />
      <p className="sm:text-2xl font-bold">Add your first todo</p>
      <p>What do you want to get done?</p>
    </Wrapper>
  );
};

export default EmptyTodo;
