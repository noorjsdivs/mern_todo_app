import InputForm from '@/components/InputForm';
import TodoList from '@/components/TodoList';
import React from 'react';

const HomePage = () => {
  return (
    <div className='max-w-screen-2xl'>
      <div className='flex justify-between max-w-screen-lg my-8 mx-auto border p-8'>
        <InputForm />
        <TodoList/>
      </div>
    </div>
  );
};

export default HomePage;