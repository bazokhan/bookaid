import React from 'react';

const Title: React.FC = ({ children }) => (
  <h1 className="w-full py-2 px-4 text-center text-2xl font-bold text-black">
    {children}
  </h1>
);

export default Title;
