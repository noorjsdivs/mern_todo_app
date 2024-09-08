import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducerConfig = {
  key: "root",
  version: 1,
  storage
}

 const persistedReducer = persistReducer(reducerConfig, todoReducer)

export const store = configureStore({

  reducer: {
    todo: persistedReducer,
  },
})
// LocalStorage
export const persistStor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch