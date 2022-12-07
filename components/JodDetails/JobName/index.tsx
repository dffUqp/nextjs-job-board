import { postedAt } from '../../../utils';

type JobNameProps = {
  title: string;
  salary: string;
  createdAt: string;
};

const JobName = ({ title, salary, createdAt }: JobNameProps) => {
  return (
    <div className="flex w-full flex-wrap justify-between gap-y-2 md:items-center">
      <div className="basis-[500px] sm:basis-full">
        <p className="max-w-[500px] text-xxl font-bold text-dark">
          {title} {title}
        </p>
      </div>

      <div className="flex flex-col md:order-3 md:basis-2/4 md:flex-col-reverse md:items-end">
        <span className="block text-xl font-bold text-dark">€ {salary}</span>
        <span className="block text-md text-dark">Brutto, per year</span>
      </div>
      <span className="basis-2/4 font-Roboto text-md text-gray md:order-2 md:text-base">
        {postedAt(createdAt)}
      </span>
    </div>
  );
};

export default JobName;
