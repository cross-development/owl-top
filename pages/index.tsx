// Core
import { useState } from 'react';
import type { GetStaticProps } from 'next';
// Packages
import axios from 'axios';
// Components
import withLayout from 'layout/withLayout';
import { MenuItem } from 'types/menu.interface';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Home = ({ menu, firstCategory }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState(4);

  return (
    <>
      <ul>
        {menu.map(m => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });

  return {
    props: { menu, firstCategory },
  };
};
