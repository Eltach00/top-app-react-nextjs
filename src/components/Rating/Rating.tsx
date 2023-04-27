import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState, KeyboardEvent } from "react";
import Star from "./star.svg";

export default function Rating({
  rating,
  isEditable = false,
  setRating,
  ...props
}: RatingProps): JSX.Element {
  const [ratingStars, setRatingStars] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const updateRatingStars = (currentRating: number) => {
    const stars = ratingStars.map((item, i) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < rating,
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
    });
    setRatingStars(stars);
  };

  const handleSpace = (rating: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== "Space") {
      return;
    }
    if (e.code === "Space") {
      updateRatingStars(rating);
      onClick(rating);
    }
  };

  const changeDisplayedStars = (rating: number) => () => {
    if (!isEditable) {
      return;
    }
    updateRatingStars(rating);
  };
  const onClick = (rating: number) => () => {
    if (!isEditable) {
      return;
    }
    setRating!(rating);
  };

  useEffect(() => {
    updateRatingStars(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingStars.map((item, i) => (
        <span key={i}> {item}</span>
      ))}
    </div>
  );
}
