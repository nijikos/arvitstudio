import React from "react";

type FurnitureProps = {
  test?: string;
};

export default function Furniture({ test }: FurnitureProps) {
  return (
    <div
      className=''
      style={{
        backgroundColor: "var(--primary)",
      }}
    >
      Furniture
    </div>
  );
}
