import { createAsyncThunk } from '@reduxjs/toolkit';
import jobService from '../../../services/jobService';

export const fetchJob = createAsyncThunk(
  'users/fetchJobs',

  async () => {
    const response = await jobService.getJobs();

    return response.data;
  }
);
