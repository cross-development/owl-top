// Core
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
// Packages
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
// Components
import withLayout from 'layout/withLayout';
// Interfaces and types
import { MenuItem } from 'types/menu.interface';
import { TopPageModel } from 'types/page.interface';
import { ProductModel } from 'types/product.interface';

interface IProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: TopPageModel;
  firstCategory: number;
  products: ProductModel[];
}

const firstCategory = 0;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory,
  });

  return {
    paths: menu.flatMap(m => m.pages.map(p => `/courses/${p.alias}`)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return { notFound: true };
  }

  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory,
  });

  const { data: page } = await axios.get<TopPageModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`,
  );

  const { data: products } = await axios.post<ProductModel[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find/`,
    { category: page.category, limit: 10 },
  );

  return {
    props: { menu, firstCategory, page, products },
  };
};

const Course = ({ menu, page, products }: IProps): JSX.Element => {
  return <></>;
};

export default withLayout(Course);
