import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ParagraphProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: "s" | "m" | "l";
}
