"use client"
import { store } from "@/app/redux/store"
import { Provider } from "react-redux"
interface Props{
    children: React.ReactNode;
}
const Layout = ({children}:Props) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Layout