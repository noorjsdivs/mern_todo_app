"use client";
import { persistore, store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading="loading" persistor={persistore}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Layout;
