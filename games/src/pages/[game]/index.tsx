import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import SnakeField from "@/components/Snake/SnakeField";

const GameItem = () => {
  return (
    <BaseLayout>
      <SnakeField />
    </BaseLayout>
  );
};

export default GameItem;
