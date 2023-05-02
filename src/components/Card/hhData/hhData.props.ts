import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface HHDataProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  count?: number;
  juniorSalary?: number;
  seniorSalary?: number;
  middleSalary?: number;
}
