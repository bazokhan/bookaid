import Link from 'next/link';
import LoadingDots from 'components/States/LoadingDots';
import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
  loading?: boolean;
  disabled?: boolean;
}

const LinkButton = ({
  href,
  className,
  children,
  loading,
  disabled,
  ...props
}: Props): React.ReactElement => (
  <Link href={href}>
    <a
      className={`inline-block px-4 py-2 bg-gray-900 text-green-600 rounded-default ${
        loading
          ? 'cursor-wait'
          : disabled
          ? 'opacity-70 pointer-events-none'
          : 'cursor-pointer'
      } ${className}`}
      {...props}
    >
      {loading ? <LoadingDots /> : children}
    </a>
  </Link>
);

LinkButton.defaultProps = { loading: false, disabled: false };

export default LinkButton;
