import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Bookaid</title>
    </Head>
    <Header />
    <div className="flex flex-col justify-between w-full overflow-y-auto h-mainSm md:h-main">
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
