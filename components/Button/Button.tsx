import LoadingDots from 'components/States/LoadingDots';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

const Button = ({
  type,
  className,
  children,
  loading,
  disabled,
  ...props
}: Props): React.ReactElement => (
  <button
    type={type}
    className={`px-4 py-2 bg-gray-200 border border-gray-600 rounded-default ${
      loading
        ? 'cursor-wait'
        : disabled
        ? 'cursor-not-allowed'
        : 'cursor-pointer'
    } ${className}`}
    disabled={disabled || loading}
    {...props}
  >
    {loading ? <LoadingDots /> : children}
  </button>
);

Button.defaultProps = { type: 'button', loading: false };

export default Button;
