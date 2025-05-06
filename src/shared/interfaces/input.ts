import { HTMLAttributes } from "react";

export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    className?: HTMLAttributes<"input">["className"]
}
