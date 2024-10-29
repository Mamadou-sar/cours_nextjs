import Card from '@/components/card';
import Link from 'next/link';
import React from 'react';

export default function ArchivedNotifications() {
   return (
      <Card>
         <div>ArchivedNotifications</div>
         <Link href='/complex-dashboard' className='underline text-blue-500'>
            Default
         </Link>
      </Card>
   );
}
