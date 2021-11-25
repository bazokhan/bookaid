import React from 'react';

const Stack: React.FC = ({ children }) => (
  <div className="w-full max-w-4xl mx-auto flex flex-col items-stretch justify-start space-y-4 p-4 border border-gray-700 rounded-default m-4">
    {children}
  </div>
);

export default Stack;
