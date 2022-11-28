import React from 'react';
import JodDetails from '../components/JodDetalis';
import { wrapper } from '../store';
import { fetchJob } from '../store/slices/asyncActions/fetchJobs';

const JodDetailsPage = (): JSX.Element | null => {
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
