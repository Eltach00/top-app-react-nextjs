import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a target="_blank">Пользовательское соглашение</a>
      <a target="_blank">Политика конфиденциальности</a>
    </footer>
  );
}
