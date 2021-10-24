import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface AboutState {
  numberOfDogsShown: number;
}

const initialState: AboutState = {
  numberOfDogsShown: 0,
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    incrementNumberOfDogsShown: (state) => {
      state.numberOfDogsShown += 1;
    },
  },
});

export const { incrementNumberOfDogsShown } = aboutSlice.actions;

export const selectNumberOfDogsShown = (state: RootState) => state.about.numberOfDogsShown;

export default aboutSlice.reducer;
