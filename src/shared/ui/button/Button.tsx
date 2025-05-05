import { IButton } from "@/shared/interfaces/button";
import style from "./Button.module.scss"
import { JSX } from "react";



const Button = (
  { 
    isActive = false,
    className,

    children,
    ...props
  }: IButton) => {

  const button: JSX.Element = ( 
    <button
    className={`${style.button} ${className} ${isActive && style.active}`}  
    {...props}>
    {children}
    </button>
  );

  return button
};

export default Button;
