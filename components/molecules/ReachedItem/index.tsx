import React from "react";

interface ReachedItemProps {
  amount: string;
  desc: string;
}

export default function ReachedItem(props: ReachedItemProps) {
  const { amount, desc } = props;
  return (
    <div className="meLg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {amount}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {desc}
      </p>
    </div>
  );
}
