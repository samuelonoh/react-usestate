import React from 'react';
import { useEffect, useRef } from 'react';

function Todolist() {
    const inputRef = useRef<HTMLInputElement;

    useEffect(() => {
        inputRef.current?.focus();
    }, );

  return (
    <div className='bg-[#ff565b] h-[50vh] w-full flex  flex-col justify-around items-end px-5'>
        <div ><button className='bg-[#ffffffff] h-10 w-20 rounded-3xl hover:bg-black hover:text-white transition duration-700'>Reset</button></div>
        <div className='w-full flex items-center justify-center gap-5'>
            <button className='bg-[#ffffffff] h-10 w-20 rounded-3xl text-xl hover:bg-black hover:text-white transition duration-700'>-</button>
            <input type="text" placeholder='Add a list' ref={inputRef} className='w-[50vw] h-10 rounded-3xl placeholder:pl-4 text:pl-4'/>
            <button className='bg-[#ffffffff] h-10 w-20 rounded-3xl text-xl hover:bg-black hover:text-white transition duration-700'>+</button>
        </div>
    </div>
  )
}

export default Todolist