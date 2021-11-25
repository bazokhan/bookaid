import React from 'react';

const LoadingDots: React.FC = () => (
  <div className="w-full flex justify-center items-center space-x-2 px-4 py-2">
    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
    <div
      className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"
      style={{ animationDelay: '300ms' }}
    />
    <div
      className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"
      style={{ animationDelay: '600ms' }}
    />
  </div>
);

export default LoadingDots;
