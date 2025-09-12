"use client";

import { CSSProperties, ReactNode, useState } from "react";
import styles from "./todo.module.scss";

const ToDo = ({
  title,
  description,
  color = "#696767",
  icon,
  className
}: {
  title: string;
  description: string;
  color?: string;
  icon: ReactNode;
className?:string
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`${className} flex`}>
      <div
        style={{ background: (isChecked as never) && color }}
        className="rounded-xl w-14 flex justify-center p-4 bg-[#242424c9] mr-4"
      >
        {icon}
      </div>
      <div className="rounded-xl overflow-hidden h-max max-w-80 w-80 flex justify-between p-5 bg-[#242424c9]">
        <div className="h-max">
          <h3
            style={{ color: (isChecked as never) && color }}
            className={`break-all mr-1 text-lg ${isChecked && "line-through"}`}
          >
            {title}
          </h3>
          <p className="text-[#7d7a7a] break-all whitespace-normal">
            {description}
          </p>
        </div>
        <input
          style={{ "--check-color": color } as CSSProperties}
          className={styles.inputCheck}
          onClick={() => setIsChecked((prev) => !prev)}
          type="checkbox"
          name="check"
        />
      </div>
    </div>
  );
};

export default ToDo;
