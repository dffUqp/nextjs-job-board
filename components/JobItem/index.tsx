import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { checkIsSavedJob, saveJob } from '../../store/slices/jobsSlice';
import { JobsType } from '../../ts/JobsTypes';
import { postedAt } from '../../utils';
import { BookMarkIcon, LocationIcon } from '../UI/icons';

const JobItem = ({
  id,
  title,
  address,
  pictures,
  createdAt,
}: JobsType): JSX.Element => {
  const isSavedJob = useAppSelector(checkIsSavedJob(`${id}`));
  const dispatch = useAppDispatch();

  return (
    <div
      className="mt-2 flex h-[164px] rounded-lg bg-white px-4 py-6 shadow-main 
      sm:h-[204px] sm:flex-col-reverse sm:justify-end sm:gap-2 sm:bg-white-200 sm:py-3"
    >
      <div className="flex w-full gap-2">
        <Image
          className="h-[85px] w-full max-w-[85px] rounded-full object-cover lg:h-[65px] lg:max-w-[65px]"
          src={pictures[0]}
          alt=""
          width={85}
          height={85}
        />
        <div className="max-w-[712px] sm:w-full">
          <p className="text-ellipsis text-xl font-bold capitalize text-dark line-clamp-2 sm:text-xl">
            {`${title} (VAC/WYC/TERN) ${title}`}
          </p>
          <span className="my-1 block text-secondary line-clamp-2">
            Departmen name - {address}
          </span>
          <span className="flex items-center gap-2 text-secondary">
            <LocationIcon className="mb-1" />
            Vienna, Austria
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between text-end ">
        <BookMarkIcon
          className="relative z-0 cursor-pointer sm:hidden"
          onClick={(e) => {
            e.preventDefault();
            dispatch(saveJob(`${id}`));
          }}
          fill={isSavedJob ? 'var(--gray)' : 'none'}
        />
        <span className="block whitespace-nowrap text-secondary">
          {postedAt(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default JobItem;
