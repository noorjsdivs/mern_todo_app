
import TodoForm from '@/components/TodoForm';
import Link from 'next/link';
import React from 'react'

const TodoPage = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-slate-100 via-slate-300 to slate-400 flex flex-col py-6 items-center px-2 md:p-4'>
      <div className=' w-full max-w-screen-md bg-bodyColor p-4 md:p-2 lg:p-10 rounded-md flex flex-col gap-5'>

        <Link href={"/"}>
          <p className='text-xl font-semibold w-40 underline-offset-1 decoration-[1px] bg-green-400 py-2 rounded-md px-4'>
            Go To Home</p>
        </Link>
        <TodoForm />
      </div>
    </div>
  )
}

export default TodoPage;
