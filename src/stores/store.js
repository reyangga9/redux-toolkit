import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../stores/counterSlice";
import { pokemonApi } from "./pokemonApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterSlice from "../stores/counterSlice2";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
