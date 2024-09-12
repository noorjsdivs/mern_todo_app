import InputForm from '@/components/InputForm'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Home | todo application",
  description: "todo application",
};
const HomePage = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-green-200 via-blue-200 to-blue-200 '>
      <div className=' w-full max-w-screen-md mx-2 flex flex-col rounded-md gap-5 mt-4'>
        <InputForm />
      </div>
    </div>
  )
}

export default HomePage