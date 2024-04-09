import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { useInfo } from "../../../hook/useInfo";

const GRID_SIZE = 30;
const SNAKE_LENGTH  = 3;

const getArr = (count: number) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }
  return arr;
};

const GameItem = () => {
  const mainInfo = useInfo();
  const count = getArr(GRID_SIZE);
  const snake = getArr(SNAKE_LENGTH);

  return (
    <BaseLayout>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="uppercase">{mainInfo?.text}</div>
        <div
          data-name="gameBoard"
          className="bg-neutral-focus min-h-24 p-8 grid gap-0.5 mb-8"
        >
          {count.map((row) => (
            <div key={row} id={row.toString()} className="flex bg-neutral-focus gap-0.5">
              {count.map((col) => (
                <div key={col} id={row.toString()} className="p-2 bg-neutral-700"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default GameItem;
