// Core
import Rating from 'components/Rating/Rating';
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [rating, setRating] = useState(4);

  return (
    <div>
      <Rating isEditable rating={rating} setRating={setRating} />
    </div>
  );
};

export default Home;
