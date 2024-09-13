"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Loding from "./LodingTodos";

const ProviderStore = ({ children }: { children: React.ReactNode }) => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loding />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ProviderStore;
