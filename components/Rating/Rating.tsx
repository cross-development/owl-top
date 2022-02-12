// Core
import { DetailedHTMLProps, HTMLAttributes, KeyboardEvent, useEffect, useState } from 'react';
// Packages
import cn from 'classnames';
// Assets
import StarIcon from 'assets/star.svg';
// Styles
import styles from './Rating.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

type TRating = JSX.Element;

const Rating = ({ isEditable = false, rating, setRating, ...props }: IProps) => {
  const [ratingArray, setRatingArray] = useState<TRating[]>(new Array(5).fill(<></>));

  useEffect(() => {
    handleCreateRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const handleCreateRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: TRating, i: number) => (
      <span
        onClick={() => handleChangeRating(i + 1)}
        onMouseEnter={() => handleDisplayRating(i + 1)}
        onMouseLeave={() => handleDisplayRating(rating)}
        className={cn(styles.star, {
          [styles.isEditable]: isEditable,
          [styles.filled]: i < currentRating,
        })}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handlePressSpace(e, i + 1)}
        />
      </span>
    ));

    setRatingArray(updatedArray);
  };

  const handleDisplayRating = (i: number) => {
    isEditable && handleCreateRating(i);
  };

  const handleChangeRating = (i: number) => {
    isEditable && setRating && setRating(i);
  };

  const handlePressSpace = (e: KeyboardEvent<SVGAElement>, i: number) => {
    e.code === 'Space' && setRating && setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r: TRating, i: number) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
