import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoConfigure";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';



const persistConfig = {
  key: 'root',
  version: 1,
  storage
}


const persistedReducer = persistReducer(persistConfig, todoReducer);

 const store = configureStore ({
  reducer: {
    todo : persistedReducer,
  }
})

const persistor = persistStore(store);

export default store;
export {persistor};

