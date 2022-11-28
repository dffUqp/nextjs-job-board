import React from 'react';

type JobDescriptionProps = {
  description: string;
  benefits: string[];
};

const JobDescription = ({
  description,
  benefits,
}: JobDescriptionProps): JSX.Element => {
  return (
    <div className="mb-5">
      <p className="mb-11 mt-3.5 font-Roboto text-md text-dark">
        At WellStar, we all share common goals. That’s what makes us so
        successful – and such an integral part of our communities. We want the
        same things, for our organization, for our patients, and for our
        colleagsdues. As the most integrated healthcare provider in Georgia,
        this means we pride ourselves on investing in the communities that we
        serve. We continue to provide innovative care models, focused on
        improving quality and access to healthcare.
      </p>

      <div className="mb-11">
        <span className="mb-4 block text-xl font-semibold text-dark">
          Responsopilities
        </span>
        <p className="font-Roboto text-md text-dark">{description}</p>
      </div>
      <div>
        <span className="mb-4 block text-xl font-semibold text-dark">
          Compensation & Benefits:
        </span>
        <ul>
          {benefits.map((elem, index) => (
            <li
              key={index}
              className="before:text-bold relative font-Roboto text-md
              text-dark before:absolute before:left-[-17px] before:inline before:text-gray before:content-['■'] md:ml-[17px]"
            >
              {elem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
