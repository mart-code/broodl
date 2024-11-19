import React from "react";
import { Fugaz_One } from "next/font/google";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function Button(props) {
  const { text, dark, full, clickHandler } = props;
  return (
    <button onClick={clickHandler}
      className={
        "border-solid rounded-full overflow-hidden border-2 duration-200 hover:opacity-60 border-green-600 " +
        (dark ? " text-white bg-green-600 " : " text-green-600 ") + (full ? 'grid place-items-center w-full ': ' ')
      }
    >
      <p
        className={
          "px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 " + fugaz.className
        }
      >
        {text}
      </p>
    </button>
  );
}