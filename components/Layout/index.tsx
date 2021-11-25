import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => (
  <div className="bg-gray-800 h-screen w-screen overflow-hidden flex flex-col justify-start text-gray-100">
    <Head>
      <title>AuthExample</title>
    </Head>
    <Header />
    <main className="flex flex-col justify-between w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-green-600">
      {children}
      <Footer />
    </main>
  </div>
);

export default Layout;
