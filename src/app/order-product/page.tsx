'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function OrderProduct() {
   const router = useRouter();
   const handleClick = () => {
      console.log('Placing your order');
      router.push('/');
   };
   return (
      <div>
         <h1>OrderProduct</h1>
         <button
            className='p-4 bg-purple-700 rounded-xl text-white font-bold m-5 text-2xl'
            onClick={handleClick}
         >
            Place order
         </button>
      </div>
   );
}
