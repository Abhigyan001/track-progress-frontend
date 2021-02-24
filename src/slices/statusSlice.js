/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'status',
  initialState: {
    login: false,
    currentUser: {},
    currentActivity: {},
    currentPage: 'track progress',
    lastPage: '',
    goals: [
      {
        kind: 'jogging',
        amount: 80,
      },
      {
        kind: 'pushup',
        amount: 10,
      },
      {
        kind: 'skipping',
        amount: 50,
      },
      {
        kind: 'squats',
        amount: 60,
      },
      {
        kind: 'swimming',
        amount: 1000,
      },
    ],
  },
  reducers: {
    sigIn: state => {
      state.login = true;
    },
    sigOut: state => {
      state.login = false;
    },
    setCurrentPage: (state, action) => {
      const { payload } = action;
      state.lastPage = state.currentPage;
      state.currentPage = payload;
    },
    setCurrentUser: (state, action) => {
      const { payload } = action;
      state.currentUser = payload;
    },
    setCurrentActivity: (state, action) => {
      const { payload } = action;
      state.currentActivity = payload;
    },
    setGoal: (state, action) => {
      const { kind, amount } = action.payload;

      const findGoal = state.goals.find(goal => goal.kind === kind);

      if (findGoal) {
        findGoal.amount = amount;
      } else {
        state.goals.push({
          kind, amount,
        });
      }
    },
  },
});

export const {
  sigIn,
  sigOut,
  setCurrentPage,
  setCurrentUser,
  setCurrentActivity,
  setGoal,
} = slice.actions;

export default slice.reducer;
