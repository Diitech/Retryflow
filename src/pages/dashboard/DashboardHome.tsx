import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  RefreshCw,
  ArrowRight,
  MoreHorizontal,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const stats = [
  {
    title: 'Revenue Recovered',
    value: '$12,450',
    change: '+23%',
    trend: 'up',
    icon: DollarSign,
    color: 'blue',
  },
  {
    title: 'Failed Payments',
    value: '156',
    change: '-8%',
    trend: 'down',
    icon: CreditCard,
    color: 'red',
  },
  {
    title: 'Recovery Rate',
    value: '34.2%',
    change: '+5.1%',
    trend: 'up',
    icon: RefreshCw,
    color: 'green',
  },
  {
    title: 'Active Retries',
    value: '42',
    change: '+12',
    trend: 'up',
    icon: TrendingUp,
    color: 'purple',
  },
];

const chartData = [
  { name: 'Jan', recovered: 4000, failed: 2400 },
  { name: 'Feb', recovered: 3000, failed: 1398 },
  { name: 'Mar', recovered: 2000, failed: 9800 },
  { name: 'Apr', recovered: 2780, failed: 3908 },
  { name: 'May', recovered: 1890, failed: 4800 },
  { name: 'Jun', recovered: 2390, failed: 3800 },
  { name: 'Jul', recovered: 3490, failed: 4300 },
];

const recentActivity = [
  {
    id: 1,
    customer: 'Acme Corp',
    amount: '$299.00',
    status: 'recovered',
    method: 'Smart retry',
    time: '2 minutes ago',
  },
  {
    id: 2,
    customer: 'TechStart Inc',
    amount: '$499.00',
    status: 'recovered',
    method: 'Email campaign',
    time: '15 minutes ago',
  },
  {
    id: 3,
    customer: 'CloudSync',
    amount: '$199.00',
    status: 'pending',
    method: 'Retry scheduled',
    time: '1 hour ago',
  },
  {
    id: 4,
    customer: 'DataFlow',
    amount: '$899.00',
    status: 'failed',
    method: 'Max retries reached',
    time: '2 hours ago',
  },
  {
    id: 5,
    customer: 'ScaleUp',
    amount: '$599.00',
    status: 'recovered',
    method: 'SMS recovery',
    time: '3 hours ago',
  },
];

export default function DashboardHome() {
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-navy">Dashboard</h1>
          <p className="text-gray">Welcome back! Here's what's happening with your payments.</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="h-10 px-4 rounded-xl border border-gray-200 bg-white text-sm"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <Link to="/dashboard/failed-payments">
            <Button className="bg-blue hover:bg-blue/90 text-white rounded-xl">
              View all payments
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 card-shadow card-border">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue/10' :
                  stat.color === 'red' ? 'bg-red/10' :
                  stat.color === 'green' ? 'bg-green/10' :
                  'bg-purple/10'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    stat.color === 'blue' ? 'text-blue' :
                    stat.color === 'red' ? 'text-red-500' :
                    stat.color === 'green' ? 'text-green-500' :
                    'text-purple-500'
                  }`} />
                </div>
                <span className={`text-sm font-medium flex items-center ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="text-gray text-sm">{stat.title}</p>
              <p className="font-display font-bold text-2xl text-navy">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Chart & Activity */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 card-shadow card-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-semibold text-lg text-navy">Revenue Recovery</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreHorizontal className="w-5 h-5 text-gray" />
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRecovered" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2D62FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2D62FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="recovered" 
                  stroke="#2D62FF" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorRecovered)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 card-shadow card-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-semibold text-lg text-navy">Recent Activity</h3>
            <Link to="/dashboard/failed-payments" className="text-sm text-blue hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-navy text-sm">{activity.customer}</p>
                  <p className="text-gray text-xs">{activity.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-navy text-sm">{activity.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.status === 'recovered' ? 'bg-green-100 text-green-700' :
                    activity.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue to-blue/80 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="font-display font-semibold text-xl mb-2">Ready to recover more revenue?</h3>
            <p className="text-white/80">Connect your payment processor to start recovering failed payments automatically.</p>
          </div>
          <Link to="/dashboard/integrations">
            <Button className="bg-white text-blue hover:bg-white/90 rounded-xl px-6">
              Connect integration
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
