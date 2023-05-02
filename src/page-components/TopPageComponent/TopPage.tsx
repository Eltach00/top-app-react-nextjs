import { TopPageProps } from "./TopPage.props";
import styles from "./TopPage.module.css";
import { Card, HHdata, Htag } from "@/components";
import { Tag } from "@/components/Tag/Tag";
import Sort from "./sort.svg";
import { firstLevel } from "@/helpers/helpers";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Advantages } from "@/components/Advantages/Advantages";

export function TopPageComponent({
  firstCategory,
  products,
  page,
}: TopPageProps): JSX.Element {
  console.log(page.advantages);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h2"> {page.title} </Htag>
        {products && (
          <Tag color="gray" size="m">
            {" "}
            {products.length}
          </Tag>
        )}
        <div>
          <Sort /> По рейтингу
        </div>
      </div>
      <div className={styles.products}>
        {products && products.map((p) => <div key={p._id}> {p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2"> Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && (
        <HHdata
          count={page.hh?.count}
          juniorSalary={page.hh?.juniorSalary}
          middleSalary={page.hh?.middleSalary}
          seniorSalary={page.hh?.seniorSalary}
        />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <Advantages>
          <Htag tag="h2">Преимущетсва</Htag>
        </Advantages>
      )}
    </div>
  );
}
