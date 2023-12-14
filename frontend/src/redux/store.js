import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./service/auth/authApi";
import { appartementApi } from "./service/appartement/appartementApi";
import { clientApi } from "./service/client/clientApi";
import { paiementApi } from "./service/paiement/paiementApi";
import authSlice from "./features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer,
  [appartementApi.reducerPath]: appartementApi.reducer,
  [clientApi.reducerPath]: clientApi.reducer,
  [paiementApi.reducerPath]: paiementApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      appartementApi.middleware,
      clientApi.middleware,
      paiementApi.middleware
    ),
});

export default store;
