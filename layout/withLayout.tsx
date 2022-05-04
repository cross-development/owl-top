// Core
import { FC } from 'react';
// Components
import Layout from './Layout';
// Context
import { AppContextProvider, IAppContext } from 'context/app.context';

const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};

export default withLayout;
