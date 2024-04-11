import React, { useState, useEffect } from "react";
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

let foodItem = {
  x: Math.floor(Math.random() * FIELD_SIZE),
  y: Math.floor(Math.random() * FIELD_SIZE),
};

const limitByField = (j: number) => {
  if (j >= FIELD_SIZE) return 0;
  if (j < 0) return FIELD_SIZE - 1;
  return j;
};

const newSnakePosition = (segments: CoordType[], direction: CoordType) => {
  const [head] = segments;
  const newHead = {
    x: limitByField(head.x + direction.x),
    y: limitByField(head.y + direction.y),
  };

  return [newHead, ...segments.slice(0, -1)];
};

const SnakeField = () => {
  const [snakeSegments, setSnakeSegments] = useState<CoordType[]>([
    { x: 8, y: 8 },
    { x: 8, y: 7 },
    { x: 8, y: 6 },
  ]);

  const [direction, setDirection] = useState(DIRECTION.LEFT);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnakeSegments((segments) => newSnakePosition(segments, direction));
    }, 500);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <>
        {FIELD_ROW.map((y) => (
          <div key={y} className="flex bg-neutral-focus gap-0.5">
            {FIELD_ROW.map((x) => (
              <div key={x} className="p-1">
                {getItem(x, y, snakeSegments)}
              </div>
            ))}
          </div>
        ))}
      </>
    </GameBoard>
  );
};

export default SnakeField;
