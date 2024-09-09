import React from 'react'
import InputForm from '../conponent/InputForm'
import { Toaster } from 'react-hot-toast'
import Layoyt from '../conponent/Layoyt'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | Todo Application using Next js",
  description: "A todo application for education purpose",
};

const Homepage = () => {
  return (
    <div className='w-full min-h-screen flex flex-col py-5 items-center px-2 md:p-4'>
        <div className='w-full max-w-screen-md bg-slate-700 p-4  md:p-20 lg:p-10 rounded-md flex flex-col gap-5'>
            <Layoyt>
            <InputForm/>
            <Toaster position='bottom-right' toastOptions={{
                duration:3000,
                style:{
                    background:'#000000',
                    color:'#FFFFFF'
                }
            }}/>
            </Layoyt>
        </div>
    </div>
  )
}

export default Homepage