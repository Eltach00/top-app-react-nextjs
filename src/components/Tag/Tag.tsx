import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export default function Tag({
  children,
  size = "m",
  color,
  href,
  ...props
}: TagProps): JSX.Element {
  return (
    <div
      {...props}
      className={cn(styles.tag, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.grey]: color === "grey",
        [styles.ghost]: color === "ghost",
      })}>
      {href ? (
        <a href={href} className={styles.link}>
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  );
}
