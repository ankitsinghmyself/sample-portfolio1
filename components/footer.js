import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center p-2 w-full pt-8 border-t border-gray-200 text-center">
        ANKIT @{new Date().getFullYear()} 
        <a href="mailto:ankitsinghmyself@gmail.com"><EnvelopeIcon className='w-[32px] px-1'/></a>
       
      </div>
    </footer>
  );
}
