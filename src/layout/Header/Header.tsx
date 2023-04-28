import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";

export function Header({ ...props }: HeaderProps): JSX.Element {
  return <div {...props}>Header</div>;
}
