import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export default function P({
  children,
  size = "m",
  className,
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
