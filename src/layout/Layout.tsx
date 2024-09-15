"use client";
import { persistor, store } from "@/app/redux/store";
import Loading from "@/components/Loading";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default Layout;
