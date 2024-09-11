// "use client"
// import { configureStore } from '@reduxjs/toolkit'
// import todoReducer from './todoSlice'
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig  = {
//       Key: "root",
//       version: 1,
//       storage,
// };

// const persistedReducer = persistReducer(persistConfig, todoReducer)


// export const store = configureStore({

//       reducer: {
//             todo: persistedReducer
//       },
// })


// export let persistor = persistStore(store)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch



import todoReducer from "./todoSlice"
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persist configuration
const persistConfig = {
      key: 'root',
      version: 1,
      storage,
};

// Creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
      reducer: {
            todo: persistedReducer,
      },
});

export const persistor = persistStore(store);
// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;