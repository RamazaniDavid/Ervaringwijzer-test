import { ReactNode } from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: IMainProps) => (
  <>
    {props.meta}
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  </>
);

export { Layout };
