import React from 'react';
import ErrorMessage from './ErrorMessage';
import LoadingDots from './LoadingDots';
import EmptyMessage from './EmptyMessage';

type Props = {
  error?: Error,
  loading?: boolean,
  data?: any[],
  emptyTitle?: string,
  children: React.ReactElement | React.ReactElement[]
};

const DataWrapper = ({
  error,
  loading,
  data,
  emptyTitle,
  children
}: Props): React.ReactElement => {
  if (error) return <ErrorMessage error={error} />;
  if (loading) return <LoadingDots />;
  if (!data?.length) return <EmptyMessage title={emptyTitle} />;
  return <>{children}</>;
};

DataWrapper.defaultProps = {
  error: null,
  loading: false,
  data: null,
  emptyTitle: null
};

export default DataWrapper;
