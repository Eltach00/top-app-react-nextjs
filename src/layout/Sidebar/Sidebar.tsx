import { SidebarProps } from "./Sidebar.props";
import styles from "./Header.module.css";
import cn from "classnames";

export function Sidebar({ ...props }: SidebarProps): JSX.Element {
  return <div {...props}>Sidebar</div>;
}
