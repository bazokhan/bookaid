import React from 'react';

type Props = { error?: Error };

const ErrorMessage: React.FC<Props> = ({ error }) => (
  <p className="w-full py-2 px-4 text-center text-lg font-bold text-red-500">
    {error?.message ?? 'Something went wrong!'}
  </p>
);

export default ErrorMessage;
