import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { JobsType } from '../../ts/JobsTypes';
import { fetchJob } from './asyncActions/fetchJobs';
import localAPI from '../../localAPI.json';
import { AppState } from '..';

type jobState = {
  data: JobsType[];
  savedJobs: string[];
};

const initialState: jobState = {
  data: [],
  savedJobs: [],
};

const jobsSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    saveJob: (state, action: PayloadAction<string>) => {
      if (state.savedJobs.includes(action.payload)) {
        state.savedJobs = state.savedJobs.filter((e) => e !== action.payload);
      } else {
        state.savedJobs.push(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        data: action.payload.jobReducer.data,
      };
    });

    builder.addCase(
      fetchJob.fulfilled.type,
      (state, action: PayloadAction<JobsType[]>) => {
        state.data = action.payload;
      }
    );

    builder.addCase(fetchJob.rejected.type, (state) => {
      state.data = localAPI;
    });
  },
});

export const selectJobById = (id: string) => (state: AppState) =>
  state.jobReducer.data.find((item) => item.id == id);

export const checkIsSavedJob = (id: string) => (state: AppState) =>
  state.jobReducer.savedJobs.includes(id);

export const { saveJob } = jobsSlice.actions;

export default jobsSlice.reducer;
