import { MenuProps } from "./Menu.props";
import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.inteface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevel } from "@/helpers/helpers";

export function Menu({ ...props }: MenuProps): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondCategory = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const buildFisrtLevel = () => {
    return (
      <>
        {firstLevel.map((m) => (
          <div key={m.route}>
            <Link href={"/" + m.route}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <>
        {menu.map((item) => {
          if (
            item.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            item.isOpened = true;
          }
          return (
            <div key={item._id.secondCategory} className={styles.secondBlock}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondCategory(item._id.secondCategory)}>
                {item._id.secondCategory}
                <div
                  className={cn(styles.secondLevelBlock, {
                    [styles.secondLevelBlockOpened]: item.isOpened,
                  })}>
                  {buildThirdLevel(item.pages, menuItem.route)}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const buildThirdLevel = (page: PageItem[], route: string) => {
    return page.map((p) => {
      return (
        <Link
          href={`/${route}/${p.alias}`}
          key={p._id}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
          })}>
          {p.category}
        </Link>
      );
    });
  };

  return (
    <div {...props} className={styles.menu}>
      {buildFisrtLevel()}
    </div>
  );
}
