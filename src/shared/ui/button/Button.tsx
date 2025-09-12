import { IButton } from "@/shared/interfaces/button";
import style from "./Button.module.scss"
import { JSX } from "react";



const Button = (
  { 
    isActive = false,
    className,
    variant = "outline",
    children,
    ...props
  }: IButton) => {

  const button: JSX.Element = ( 
    <button
    className={`${variant === "containd" ? style.button : variant === "outline" ? style.buttonOutline : "py-2 px-5 hover:bg-slate-800 rounded-lg"} ${className} ${isActive && style.active}`}  
    {...props}>
    {children}
    </button>
  );

  return button
};

export default Button;
