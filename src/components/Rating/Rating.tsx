import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState, KeyboardEvent } from "react";
import Star from "./star.svg";

export function Rating({
  rating,
  isEditable = false,
  setRating,
  ...props
}: RatingProps): JSX.Element {
  const stars = new Array(5).fill(<></>);

  const [currentRating, setCurrentRating] = useState<number>(0);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  const handleSpace = (rating: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== "Space") {
      return;
    }
    if (e.code === "Space") {
      onClick(rating);
    }
  };

  const changeDisplayedStars = (rating: number) => () => {
    if (!isEditable) {
      return;
    }
    setCurrentRating(rating);
  };

  const onClick = (rating: number) => () => {
    if (!isEditable) {
      return;
    }
    setRating!(rating);
  };

  return (
    <div {...props}>
      {stars.map((item, i) => {
        return (
          <span
            key={i}
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={changeDisplayedStars(i + 1)}
            onMouseLeave={changeDisplayedStars(rating)}
            onClick={onClick(i + 1)}>
            <Star
              onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          </span>
        );
      })}
    </div>
  );
}
