// Core
import type { GetStaticProps } from 'next';
// Packages
import axios from 'axios';
// Components
import withLayout from 'layout/withLayout';
// Interfaces and types
import { MenuItem } from 'types/menu.interface';

interface IProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });

  return {
    props: { menu, firstCategory },
  };
};

const Home = ({ menu, firstCategory }: IProps): JSX.Element => {
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
