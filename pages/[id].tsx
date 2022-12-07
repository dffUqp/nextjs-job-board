import { NextPage } from 'next';
import JodDetails from '../components/JodDetails';
import { wrapper } from '../store';
import { fetchJob } from '../store/slices/asyncActions/fetchJobs';

const JodDetailsPage: NextPage = () => {
  return <JodDetails />;
};

export default JodDetailsPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchJob());

    return {
      props: {},
    };
  }
);
