import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/usersSlice';

const Store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default Store;
