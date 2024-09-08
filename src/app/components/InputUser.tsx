'use client'
import { useState } from 'react';
import { addUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";

export default function Inputpage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

    const dispatch = useDispatch()
    const users = useSelector((state:any)=> state.users)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(addUser({id:users[users.length -1].id + 1 ,name,email}))
  };

  return (
    <div className='mt-5'>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-sky-400 shadow-md rounded-lg  ">
        <p className='text-xl font-semibold pb-2 '>Add new User</p>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <div className='relative'>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Enter your name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className=" mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
          
        />
        {name && (
            <RxCross1 className='absolute top-4 right-2 hover:text-red-600 duration-200' onClick={(e)=>setName('')} />
        )}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className='relative'>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter your email address'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
        {email && (
            <RxCross1 className='absolute top-4 right-2 hover:text-red-600 duration-200' onClick={(e)=>setEmail('')} />
        )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
}
