import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  checkIsSavedJob,
  saveJob,
  selectJobById,
} from '../../store/slices/jobsSlice';
import { ArrowLeftIcon, BookMarkIcon, ShareIcon } from '../UI/icons';
import MainButton from '../UI/MainButton';
import JobAdditional from './JobAdditional';
import JobDescription from './JobDescription';
import JobName from './JobName';
import Head from 'next/head';

const JodDetails = (): JSX.Element | null => {
  const router = useRouter();
  const { id } = router.query;
  const currentJob = useAppSelector(selectJobById(`${id}`));
  const isSavedJob = useAppSelector(checkIsSavedJob(`${id}`));
  const dispatch = useAppDispatch();

  if (currentJob === undefined) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{currentJob.title}</title>
      </Head>
      <div className="container flex pb-20 pt-14">
        <div className="mx-auto w-full max-w-[774px]">
          <div className="relative mb-5 flex items-center justify-between border-b border-gray pb-2 sm:mb-[70px]">
            <span className="block text-xxl font-bold text-dark">
              Job Details
            </span>
            <div className="flex gap-6 text-md sm:absolute sm:top-[50px]">
              <div className="flex items-center">
                <BookMarkIcon
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(saveJob(`${id}`));
                  }}
                  fill={isSavedJob ? 'var(--gray)' : 'none'}
                />
                <span>Save to my list</span>
              </div>

              <div className="flex items-center">
                <ShareIcon />
                <span>Share</span>
              </div>
            </div>
          </div>

          <MainButton className="mb-5 bg-dark-100 text-white sm:hidden">
            Apply now
          </MainButton>

          <JobName
            title={currentJob.title}
            salary={currentJob.salary}
            createdAt={currentJob.createdAt}
          />

          <JobDescription
            description={currentJob.description}
            benefits={currentJob.benefits}
          />

          <MainButton className="mb-20 bg-dark-100 text-white">
            Apply now
          </MainButton>

          <JobAdditional
            employment_type={currentJob.employment_type}
            benefits={currentJob.benefits}
            images={currentJob.pictures}
          />

          <MainButton
            className="ml-[-85px] gap-1 bg-dark-100-opacity text-dark lg:ml-[0px] md:hidden"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon fill="var(--dark-100)" opacity={0.85} />
            RETURN TO JOB BOARD
          </MainButton>
        </div>
      </div>
    </>
  );
};

export default JodDetails;
