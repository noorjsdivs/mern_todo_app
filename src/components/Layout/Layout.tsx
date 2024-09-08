"use client"
import { persister, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "../Loading";

const Layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <Provider store={store}>
                  <PersistGate loading={(<Loading />)} persistor={persister}>
                        {children}
                  </PersistGate>
            </Provider>

      );
};

export default Layout;