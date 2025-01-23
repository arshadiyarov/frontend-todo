import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";
import { CardSizeType } from "./card";
import { cardDefaultStyles, cardSizes } from "./card.config";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardSizeType;
}

export const Card = ({ size = "default", className, ...props }: CardProps) => {
  return (
    <div
      className={cn(cardDefaultStyles, cardSizes[size], className)}
      {...props}
    />
  );
};
