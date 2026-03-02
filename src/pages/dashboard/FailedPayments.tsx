import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  Filter,
  RefreshCw,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageSquare,
} from 'lucide-react';

const payments = [
  {
    id: 'pay_123456',
    customer: 'Acme Corporation',
    email: 'billing@acme.com',
    amount: '$299.00',
    currency: 'USD',
    status: 'pending',
    retryCount: 2,
    nextRetry: '2026-03-03 14:30',
    failureReason: 'Insufficient funds',
    date: '2026-03-01',
  },
  {
    id: 'pay_123457',
    customer: 'TechStart Inc',
    email: 'payments@techstart.io',
    amount: '$499.00',
    currency: 'USD',
    status: 'recovered',
    retryCount: 1,
    nextRetry: '-',
    failureReason: 'Card expired',
    date: '2026-03-01',
  },
  {
    id: 'pay_123458',
    customer: 'CloudSync Labs',
    email: 'finance@cloudsync.io',
    amount: '$199.00',
    currency: 'USD',
    status: 'pending',
    retryCount: 0,
    nextRetry: '2026-03-02 09:00',
    failureReason: 'Bank declined',
    date: '2026-02-28',
  },
  {
    id: 'pay_123459',
    customer: 'DataFlow Systems',
    email: 'billing@dataflow.co',
    amount: '$899.00',
    currency: 'USD',
    status: 'failed',
    retryCount: 4,
    nextRetry: '-',
    failureReason: 'Invalid card number',
    date: '2026-02-28',
  },
  {
    id: 'pay_123460',
    customer: 'ScaleUp Ventures',
    email: 'payments@scaleup.vc',
    amount: '$599.00',
    currency: 'USD',
    status: 'recovered',
    retryCount: 2,
    nextRetry: '-',
    failureReason: 'Insufficient funds',
    date: '2026-02-27',
  },
  {
    id: 'pay_123461',
    customer: 'InnovateTech',
    email: 'billing@innovatetech.com',
    amount: '$349.00',
    currency: 'USD',
    status: 'pending',
    retryCount: 1,
    nextRetry: '2026-03-02 16:00',
    failureReason: 'Card expired',
    date: '2026-02-27',
  },
  {
    id: 'pay_123462',
    customer: 'GrowthLabs',
    email: 'finance@growthlabs.io',
    amount: '$799.00',
    currency: 'USD',
    status: 'recovered',
    retryCount: 1,
    nextRetry: '-',
    failureReason: 'Bank declined',
    date: '2026-02-26',
  },
  {
    id: 'pay_123463',
    customer: 'NextGen SaaS',
    email: 'billing@nextgen.io',
    amount: '$449.00',
    currency: 'USD',
    status: 'pending',
    retryCount: 0,
    nextRetry: '2026-03-02 11:00',
    failureReason: 'Insufficient funds',
    date: '2026-02-26',
  },
];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  recovered: 'bg-green-100 text-green-700',
  failed: 'bg-red-100 text-red-700',
};

export default function FailedPayments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch = 
      payment.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleSelection = (id: string) => {
    setSelectedPayments(prev =>
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedPayments.length === filteredPayments.length) {
      setSelectedPayments([]);
    } else {
      setSelectedPayments(filteredPayments.map(p => p.id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-navy">Failed Payments</h1>
          <p className="text-gray">Manage and recover your failed payments.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue hover:bg-blue/90 text-white rounded-xl">
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry selected
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 card-shadow card-border">
          <p className="text-gray text-sm mb-1">Pending</p>
          <p className="font-display font-bold text-2xl text-navy">24</p>
          <p className="text-yellow-600 text-sm">$8,450 total</p>
        </div>
        <div className="bg-white rounded-2xl p-6 card-shadow card-border">
          <p className="text-gray text-sm mb-1">Recovered (this month)</p>
          <p className="font-display font-bold text-2xl text-navy">89</p>
          <p className="text-green-600 text-sm">$32,180 total</p>
        </div>
        <div className="bg-white rounded-2xl p-6 card-shadow card-border">
          <p className="text-gray text-sm mb-1">Failed permanently</p>
          <p className="font-display font-bold text-2xl text-navy">12</p>
          <p className="text-red-600 text-sm">$4,230 lost</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray" />
          <Input
            type="text"
            placeholder="Search by customer, email, or payment ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 rounded-xl"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-12 px-4 rounded-xl border border-gray-200 bg-white text-sm"
        >
          <option value="all">All statuses</option>
          <option value="pending">Pending</option>
          <option value="recovered">Recovered</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl card-shadow card-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedPayments.length === filteredPayments.length && filteredPayments.length > 0}
                    onChange={selectAll}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray">Retries</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray">Next Retry</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray">Failure Reason</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedPayments.includes(payment.id)}
                      onChange={() => toggleSelection(payment.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-navy">{payment.customer}</p>
                      <p className="text-sm text-gray">{payment.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-navy">{payment.amount}</p>
                    <p className="text-sm text-gray">{payment.currency}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[payment.status]}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-navy">{payment.retryCount}/4</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-navy">{payment.nextRetry}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray text-sm">{payment.failureReason}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {payment.status === 'pending' && (
                        <>
                          <button className="p-2 hover:bg-blue/10 rounded-lg text-blue" title="Retry now">
                            <RefreshCw className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-blue/10 rounded-lg text-blue" title="Send email">
                            <Mail className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-blue/10 rounded-lg text-blue" title="Send SMS">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-gray">
            Showing <span className="font-medium">1-8</span> of <span className="font-medium">156</span> payments
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50" disabled>
              <ChevronLeft className="w-5 h-5 text-gray" />
            </button>
            <button className="w-8 h-8 bg-blue text-white rounded-lg text-sm font-medium">1</button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm text-navy">2</button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm text-navy">3</button>
            <span className="text-gray">...</span>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm text-navy">20</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronRight className="w-5 h-5 text-gray" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
