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
        "rounded-xl group/bento transition duration-200 shadow-input border border-transparent justify-between flex flex-col space-y-4 p-1",
        className
      )}
    >
      <div>
        <div className="font-bold text-neutral-600 mb-2 mt-2 flex items-center space-x-2">
          {title}
        </div>
        <div className="font-normal text-neutral-600 text-xs">
          {description}
        </div>
        {carousel ? (
          <NewsComponent />
        ) : (
          icon
        )}
      </div>
    </div>
  );
};
