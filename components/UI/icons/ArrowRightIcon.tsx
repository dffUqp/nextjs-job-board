import React from 'react';

const ArrowRightIcon = ({
  ...props
}: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="var(--gray)"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5026 1.51303C8.32959 0.686035 9.67041 0.686036 10.4974 1.51303L16.487 7.50264C17.314 8.32963 17.314 9.67045 16.487 10.4974L10.4974 16.4871C9.67041 17.314 8.32959 17.314 7.5026 16.4871C6.67561 15.6601 6.67561 14.3192 7.5026 13.4922L11.9948 9.00004L7.5026 4.50783C6.6756 3.68084 6.67561 2.34002 7.5026 1.51303Z"
        fill="current"
      />
    </svg>
  );
};

export default ArrowRightIcon;
