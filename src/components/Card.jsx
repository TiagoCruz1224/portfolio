import React from 'react';

export default function Card({ title, description }) {
  return (
    <div className={`rounded-lg border-black border-2 w-64 h-64 overflow-auto flex mr-2 ml-2 mb-5`}>
      <div className='border-b-2 border-black h-6 w-full'>
        <div className='window-icons flex gap-2 items-center pl-2 h-full'>
          <div className='rounded-full bg-red-600 w-3 h-3'></div>
          <div className='rounded-full bg-yellow-500 w-3 h-3'></div>
          <div className='rounded-full bg-green-600 w-3 h-3'></div>
        </div>

        <div className='content flex flex-col pt-4 pl-4 pr-2 pb-2 gap-2'>
          <div className='title text-3xl'>{title}</div>
          <div className='description'>{description}</div>
        </div>
      </div>
    </div>
  );
}
