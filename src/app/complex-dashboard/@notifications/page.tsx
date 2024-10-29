import Card from '@/components/card';
import Link from 'next/link';
import React from 'react';

export default function Notifications() {
   return (
      <Card>
         <div>Notifications</div>
         <Link
            href='/complex-dashboard/archived'
            className='underline text-blue-500'
         >
            Archived
         </Link>
      </Card>
   );
}
