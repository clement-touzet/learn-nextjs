'use client';

import { Customer } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const CustomerCard = ({ customer }: { customer: Customer }) => {
  return (
    <Link
      key={customer.id}
      className="flex h-48 w-48 flex-col items-center justify-center rounded-md bg-gray-100 p-4 hover:cursor-pointer hover:bg-gray-200"
      href={`/dashboard/customers/${customer.id}`}
    >
      <Image
        src={customer.image_url}
        width={64}
        height={64}
        alt={`${customer.name} image profile`}
        className="rounded-full"
      />
      <p className="pt-4 text-center text-lg">{customer.name}</p>
      <p className="text-gray-500">{customer.email}</p>
    </Link>
  );
};

export default CustomerCard;
