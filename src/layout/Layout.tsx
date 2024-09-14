"use client";
import { store } from "@/app/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default Layout;
