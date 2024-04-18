import { fetchCustomerById } from '@/app/lib/data';
import Image from 'next/image';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const customer = await fetchCustomerById(id);

  return (
    <div>
      <div className="flex gap-12">
        <Image
          src={customer.image_url}
          width={128}
          height={128}
          alt={`${customer.name} image profile`}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center gap-2">
          <p className="text-xl font-bold md:text-3xl ">{customer.name}</p>
          <p className="text-sm font-light text-gray-600 md:text-base ">
            {customer.email}
          </p>
        </div>
      </div>
    </div>
  );
}
