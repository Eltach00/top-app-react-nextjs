import { MenuProps } from "./Menu.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";

export function Menu({ ...props }: MenuProps): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div {...props}>
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}> {item._id.secondCategory} </li>
        ))}
      </ul>
    </div>
  );
}
