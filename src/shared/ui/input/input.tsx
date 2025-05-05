import { IInput } from "@/shared/interfaces/input";
import style from"./Input.module.scss"

const Input= (
  { 
    className,
    ...props
  }: IInput
) => {
  return <input 
  className={`${className} ${style.input}`}
  {...props} />;
};

export default Input;
