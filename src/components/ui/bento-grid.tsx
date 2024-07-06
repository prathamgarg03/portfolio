import React from "react";
import { cn } from "../../utils/cn";
import NewsComponent from "../NewsComponent/NewsComponent"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-1 md:grid-cols-8 gap-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  carousel = false,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  carousel?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento transition duration-200 shadow-input border border-transparent p-1",
        className
      )}
    >
      {carousel ? (
        <NewsComponent />
      ) : (
        icon
      )}
    </div>
  );
};
