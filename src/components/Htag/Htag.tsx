import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export function Htag(props: HtagProps): JSX.Element {
  return (
    <props.tag className={styles[props.tag]}> {props.children} </props.tag>
  );
}
