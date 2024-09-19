import { configureStore } from '@reduxjs/toolkit';
import todo from './slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage, // make sure the storage object is correctly imported
};

const persistedReducer = persistReducer(persistConfig, todo);

export const store = configureStore({
  reducer: {
    userTodo: persistedReducer,
  },
});

export const persistor = persistStore(store);
