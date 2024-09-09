import React from "react";
import { twMerge } from "tailwind-merge";

interface props {
  className?: string;
  date: string;
}

const DateFormate = ({ className, date: dateString }: props) => {
  const date = new Date(dateString);
  const showDateString = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${date.toLocaleTimeString('en-US',{ hour: "2-digit", minute: "2-digit" })}`;
  return (
    <div className={twMerge("text-[10px] font-medium text-gray-400 flex justify-end", className)}>
      <p>compleated at: {showDateString}</p>
    </div>
  );
};

export default DateFormate;
