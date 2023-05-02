import { AdvanatagesProps } from "./Advantages.props";
import styles from "./Htag.module.css";

export function Advantages({
  children,
  ...props
}: AdvanatagesProps): JSX.Element {
  return <div> {children} </div>;
}
