import React from 'react';
import LinkButton from 'components/Button/LinkButton';

const Footer: React.FC = () => (
  <footer className="flex flex-col items-center justify-center p-6 bg-footer text-black">
    <LinkButton href="/">Bookaid</LinkButton>
    <p className="w-full mt-4 mb-6 text-center md:w-96 ">
      Placeholder text for footer.
    </p>
    <p>info@bookaid.com</p>
  </footer>
);

export default Footer;
