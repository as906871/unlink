import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUpcomingLaunches = createAsyncThunk(
  'launches/fetchUpcoming',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
    return response.data;
  }
);

export const fetchPreviousLaunches = createAsyncThunk(
  'launches/fetchPrevious',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/launches/past');
    return response.data;
  }
);

const launchesSlice = createSlice({
  name: 'launches',
  initialState: {
    upcoming: [],
    previous: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingLaunches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUpcomingLaunches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.upcoming = action.payload;
      })
      .addCase(fetchPreviousLaunches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPreviousLaunches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.previous = action.payload;
      });
  },
});

export default launchesSlice.reducer;