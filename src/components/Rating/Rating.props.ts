import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface RatingProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}
