import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import { FC } from "react";
import { ITodo } from "../";

const FavoriteTodo: FC<ITodo> = ({ title, description, className }) => {
  return (
    <PlatfomSection
      className={`${className} !bg-[#6F4C3E] max-w-[300px] w-[300px] min-w-[150px] h-2/4 flex px-4 py-3`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </PlatfomSection>
  );
};

export default FavoriteTodo;
