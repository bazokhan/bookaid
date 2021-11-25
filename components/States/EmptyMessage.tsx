import React from 'react';

type Props = { title?: string };

const EmptyMessage: React.FC<Props> = ({ title }) => (
  <p className="w-full py-2 px-4 text-center text-lg font-bold text-gray-200">
    {title ?? 'No available data!'}
  </p>
);

export default EmptyMessage;
