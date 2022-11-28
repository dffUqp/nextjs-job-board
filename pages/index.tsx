import JobItem from '../components/JobItem';
import { wrapper } from '../store';
import { useAppSelector } from '../store/hooks';
import { fetchJob } from '../store/slices/asyncActions/fetchJobs';
import { useRouter } from 'next/router';
import Pagination from '../components/Pagination';
import Link from 'next/link';
import { PaginationEventType } from '../ts/GeneralTypes';
import { usePagination } from '../hooks/usePagination';
import Error from 'next/error';

export default function Home(): JSX.Element {
  const data = useAppSelector((state) => state.jobReducer.data);
  const router = useRouter();
  const page = !Number(router.query.page) ? 0 : Number(router.query.page) - 1;
  const { pageCount, currentItems } = usePagination(data, page, 4);

  if (page + 1 > pageCount) {
    return <Error statusCode={404} />;
  }

  const onPageChange = (event: PaginationEventType) => {
    window.scrollTo(0, 0);

    router.push(
      {
        query: { page: event.selected + 1 },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="container">
      {currentItems.map((item) => (
        <Link key={item.id} href={`/${item.id}`}>
          <JobItem {...item} />
        </Link>
      ))}
      <div className="my-5 flex justify-center">
        <Pagination
          onPageChange={onPageChange}
          pageCount={pageCount}
          page={page}
        />
      </div>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchJob());

    return {
      props: {},
    };
  }
);
