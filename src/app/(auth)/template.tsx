'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
   { name: 'Register', href: '/register' },
   { name: 'Login', href: '/login' },
   { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const pathname = usePathname();
   const [input, setInput] = useState('');
   return (
      <>
         <div>
            <input
               type='text'
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
         </div>
         <div className='text-center mt-3 mb-3'>
            {navLinks.map((link) => {
               const isActive = pathname.startsWith(link.href);
               return (
                  <Link
                     href={link.href}
                     key={link.name}
                     className={`font-bold p-4 ${
                        isActive ? 'text-blue-500' : 'text-gray-600'
                     }`}
                  >
                     {link.name}
                  </Link>
               );
            })}
         </div>
         <h2>Inner layout</h2>
         {children}
      </>
   );
}
