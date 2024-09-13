"use client"
import { persistor, store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './Loading'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading= {<Loading/>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default Layout