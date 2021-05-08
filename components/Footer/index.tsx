import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="relative flex flex-col items-center justify-center p-6 bg-footer">
    <div className="absolute top-0 left-0 w-full h-full bg-white backdrop-filter backdrop-blur-xl bg-opacity-20" />
    <Link href="/">
      <a className="z-1">
        <p>Bookaid</p>
      </a>
    </Link>
    <p className="w-full mt-4 mb-6 text-center text-white opacity-70 md:w-96 ">
      Placeholder text for footer.
    </p>
    <p className="text-white z-1">info@bookaid.com</p>
  </footer>
);

export default Footer;
