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
    <main className="flex flex-col justify-between w-full">{children}</main>
    <Footer />
  </>
);

export default Layout;
