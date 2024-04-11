import React, { useState, useEffect, useRef } from "react";
import GameBoard from "../GameBoard/GameBoard";

type CoordType = {
  x: number;
  y: number;
};

const FIELD_SIZE = 30;
const FIELD_ROW = Array.from({ length: FIELD_SIZE }, (_, i) => i);
const DIRECTION = {
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
};
const START_SNAKE = [
  { x: 15, y: 15 },
  { x: 15, y: 14 },
  { x: 15, y: 13 },
  { x: 15, y: 12 },
  { x: 15, y: 11 },
  { x: 15, y: 10 },
  { x: 15, y: 9 },
  { x: 15, y: 8 },
];

const placeFoodItem = () => {
  return {
    x: Math.floor(Math.random() * FIELD_SIZE),
    y: Math.floor(Math.random() * FIELD_SIZE),
  };
};

const limitByField = (j: number) => {
  if (j >= FIELD_SIZE) return 0;
  if (j < 0) return FIELD_SIZE - 1;
  return j;
};

const newSnakePosition = (
  segments: CoordType[],
  direction: CoordType,
  foodItem: CoordType
) => {
  const [head] = segments;
  const newHead = {
    x: limitByField(head.x + direction.x),
    y: limitByField(head.y + direction.y),
  };

  if (collidesWithFood(newHead, foodItem)) {
    return [newHead, ...segments];
  }

  return [newHead, ...segments.slice(0, -1)];
};

const collidesWithFood = (head: CoordType, foodItem: CoordType) => {
  return head.x === foodItem.x && head.y === foodItem.y;
};

const SnakeField = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [foodItem, setFoodItem] = useState({ x: 0, y: 0 });

  const handleKeyPress = (event: any) => {
    if (event.key === "ArrowRight") setDirection(DIRECTION.RIGHT);
    if (event.key === "ArrowUp") setDirection(DIRECTION.UP);
    if (event.key === "ArrowLeft") setDirection(DIRECTION.LEFT);
    if (event.key === "ArrowDown") setDirection(DIRECTION.DOWN);
    return;
  };

  const [snakeSegments, setSnakeSegments] = useState<CoordType[]>(START_SNAKE);

  const [direction, setDirection] = useState(DIRECTION.RIGHT);
  const [head, ...tail] = snakeSegments;

  const intersectsWithItself = tail.some(
    (segment) => segment.x === head.x && segment.y === head.y
  );

  useEffect(() => {
    const inputElement = containerRef.current;
    inputElement && inputElement.focus();
  });

  useEffect(() => {
    setFoodItem(placeFoodItem());
  }, []);

  useEffect(() => {
    setFoodItem(placeFoodItem());
  }, [snakeSegments.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnakeSegments((segments) =>
        newSnakePosition(segments, direction, foodItem)
      );
    }, 200);

    if (intersectsWithItself) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [direction, foodItem, intersectsWithItself]);

  const getItem = (x: number, y: number, snakeSegments: CoordType[]) => {
    if (foodItem.x === x && foodItem.y === y)
      return <div className="p-2 rounded-full bg-red-600"></div>;

    for (const segment of snakeSegments) {
      if (segment.x === x && segment.y === y)
        return <div className="p-2 bg-green"></div>;
    }
    return <div className="p-2 rounded-full bg-neutral-700"></div>;
  };

  return (
    <GameBoard>
      {intersectsWithItself ? (
        <div className="flex flex-col items-center uppercase">
          <h1 className="text-5xl my-10">Game over</h1>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="focus:outline-none"
          tabIndex={-1}
          onKeyDown={handleKeyPress}
        >
          {FIELD_ROW.map((y) => (
            <div key={y} className="flex bg-neutral-focus gap-0.5">
              {FIELD_ROW.map((x) => (
                <div key={x} className="p-1">
                  {getItem(x, y, snakeSegments)}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </GameBoard>
  );
};

export default SnakeField;
