import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs, { Breadcrumb } from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
import CustomerCard from './CustomerCard';

export const metadata: Metadata = {
  title: 'Customers',
};

const breadcrumbs: Breadcrumb[] = [
  {
    label: 'Customers',
    href: '/dashboard/customers',
  },
];

export default async function CustomerPage() {
  const customers = await fetchCustomers();

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap gap-8">
        {customers.map((customer) => (
          <CustomerCard customer={customer} key={customer.id} />
        ))}
      </div>
    </div>
  );
}
