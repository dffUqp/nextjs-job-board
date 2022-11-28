import React, { ButtonHTMLAttributes } from 'react';

type MainButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const MainButton = ({ children, className, ...props }: MainButtonProps) => {
  return (
    <button
      className={`${className} flex items-center rounded-lg py-4 px-6 text-lg font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MainButton;
