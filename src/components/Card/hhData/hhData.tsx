import { HHDataProps } from "./hhData.props";
import styles from "./hhData.module.css";
import cn from "classnames";
import { Card } from "../Card";
import StarSalary from "./star-salary.svg";
import { priceRu } from "@/helpers/helpers";

export function HHdata({
  count,

  juniorSalary,
  middleSalary,
  seniorSalary,
  ...props
}: HHDataProps): JSX.Element {
  return (
    <div className={styles.hh} {...props}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий </div>
        <div className={styles.countCalue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div className={styles.junior}>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryCalue}>
            {juniorSalary && priceRu(juniorSalary)}
          </div>
          <div className={styles.rate}>
            <StarSalary className={styles.filled} />
            <StarSalary />
            <StarSalary />
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryCalue}>
            {middleSalary && priceRu(middleSalary)}
          </div>
          <div className={styles.rate}>
            <StarSalary className={styles.filled} />
            <StarSalary className={styles.filled} />
            <StarSalary />
          </div>
        </div>
        <div className={styles.senior}>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryCalue}>
            {seniorSalary && priceRu(seniorSalary)}
          </div>
          <div className={styles.rate}>
            <StarSalary className={styles.filled} />
            <StarSalary className={styles.filled} />
            <StarSalary className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
}
