import { configureStore } from '@reduxjs/toolkit';
import launchesReducer from "../Redux/reducer/launches/launchesSlice"
import rocketsReducer from "../Redux/reducer/rockets/rocketsSlice"

export const store = configureStore({
  reducer: {
    launches: launchesReducer,
    rockets: rocketsReducer,
  },
});
