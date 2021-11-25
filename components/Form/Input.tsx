import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label?: string;
}

const Input = ({
  name,
  label,
  className,
  ...props
}: Props): React.ReactElement => (
  <label
    htmlFor={name}
    className="flex flex-col w-full justify-start items-start"
  >
    {label ? (
      <p className="px-4 py-2 text-md font-bold text-black mb-2">{label}</p>
    ) : null}
    <input
      id={name}
      name={name}
      className={`w-full px-4 py-2 border border-gray-600 rounded-default ${className}`}
      {...props}
    />
  </label>
);

Input.defaultProps = { label: null };

export default Input;
