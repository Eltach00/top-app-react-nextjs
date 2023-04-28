import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export function P({
  children,
  size = "m",
  ...props
}: ParagraphProps): JSX.Element {
  return (
    <p
      {...props}
      className={cn(styles.p, {
        [styles.small]: size === "s",
        [styles.medium]: size === "m",
        [styles.large]: size === "l",
      })}>
      {children}
    </p>
  );
}
