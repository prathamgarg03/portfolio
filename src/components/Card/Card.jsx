import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { items } from "../../constants";

export function Card() {
  const classmap = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-4 md:row-span-2",
  ]
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
          carousel={item.carousel}
          className={
            classmap[i]
          }
        >
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
}
