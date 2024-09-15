import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
    reducer:{
        todo: persistedReducer
    }
})

export let persistor = persistStore(store)