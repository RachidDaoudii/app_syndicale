import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./service/auth/authApi";
import { appartementApi } from "./service/appartement/appartementApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [appartementApi.reducerPath]: appartementApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      appartementApi.middleware
    ),
});

export default store;
