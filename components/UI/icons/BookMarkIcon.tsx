import React from 'react';

const BookMarkIcon = ({
  ...props
}: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7.99992C8 6.52716 9.19391 5.33325 10.6667 5.33325H21.3333C22.8061 5.33325 24 6.52716 24 7.99992V23.9933C24 25.1593 22.609 25.7636 21.7567 24.9679L16.9099 20.4426C16.3976 19.9642 15.6024 19.9642 15.0901 20.4426L10.2433 24.9679C9.39104 25.7636 8 25.1593 8 23.9933V7.99992Z"
        stroke="#70778B"
        strokeWidth="2"
      />
    </svg>
  );
};

export default BookMarkIcon;
