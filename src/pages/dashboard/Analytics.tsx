import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Download,
  Calendar,
  TrendingUp,
  DollarSign,
  Percent,
  Users,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const recoveryData = [
  { name: 'Jan', amount: 4200 },
  { name: 'Feb', amount: 3800 },
  { name: 'Mar', amount: 5100 },
  { name: 'Apr', amount: 4600 },
  { name: 'May', amount: 6200 },
  { name: 'Jun', amount: 5800 },
  { name: 'Jul', amount: 7100 },
];

const failureReasons = [
  { name: 'Insufficient funds', value: 45, color: '#2D62FF' },
  { name: 'Card expired', value: 25, color: '#10B981' },
  { name: 'Bank declined', value: 15, color: '#F59E0B' },
  { name: 'Invalid card', value: 10, color: '#EF4444' },
  { name: 'Other', value: 5, color: '#6B7280' },
];

const retryPerformance = [
  { name: 'Retry 1', success: 45, failed: 55 },
  { name: 'Retry 2', success: 35, failed: 65 },
  { name: 'Retry 3', success: 25, failed: 75 },
  { name: 'Retry 4', success: 15, failed: 85 },
];

const campaignData = [
  { name: 'Email - Day 1', sent: 120, opened: 85, clicked: 42, recovered: 28 },
  { name: 'Email - Day 3', sent: 98, opened: 72, clicked: 38, recovered: 24 },
  { name: 'SMS - Day 5', sent: 76, opened: 68, clicked: 35, recovered: 22 },
  { name: 'Final - Day 7', sent: 54, opened: 48, clicked: 28, recovered: 18 },
];

const stats = [
  {
    title: 'Total Recovered',
    value: '$42,580',
    change: '+18.2%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Recovery Rate',
    value: '34.8%',
    change: '+2.4%',
    trend: 'up',
    icon: Percent,
  },
  {
    title: 'Avg. Recovery Time',
    value: '2.3 days',
    change: '-0.5 days',
    trend: 'up',
    icon: Calendar,
  },
  {
    title: 'Customers Saved',
    value: '127',
    change: '+15',
    trend: 'up',
    icon: Users,
  },
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-navy">Analytics</h1>
          <p className="text-gray">Track your recovery performance and insights.</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="h-10 px-4 rounded-xl border border-gray-200 bg-white text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <Button variant="outline" className="rounded-xl">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 card-shadow card-border">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blue/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue" />
                </div>
                <span className="text-sm font-medium text-green-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </span>
              </div>
              <p className="text-gray text-sm">{stat.title}</p>
              <p className="font-display font-bold text-2xl text-navy">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Revenue Recovery Chart */}
        <div className="bg-white rounded-2xl p-6 card-shadow card-border">
          <h3 className="font-display font-semibold text-lg text-navy mb-6">Revenue Recovery</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={recoveryData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
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
                  dataKey="amount" 
                  stroke="#2D62FF" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorAmount)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Failure Reasons Pie Chart */}
        <div className="bg-white rounded-2xl p-6 card-shadow card-border">
          <h3 className="font-display font-semibold text-lg text-navy mb-6">Failure Reasons</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={failureReasons}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {failureReasons.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Retry Performance */}
        <div className="bg-white rounded-2xl p-6 card-shadow card-border">
          <h3 className="font-display font-semibold text-lg text-navy mb-6">Retry Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={retryPerformance}>
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
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="success" name="Success Rate" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="failed" name="Failure Rate" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white rounded-2xl p-6 card-shadow card-border">
          <h3 className="font-display font-semibold text-lg text-navy mb-6">Campaign Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignData}>
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
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="sent" name="Sent" fill="#6B7280" radius={[4, 4, 0, 0]} />
                <Bar dataKey="opened" name="Opened" fill="#2D62FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="recovered" name="Recovered" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-blue/5 rounded-2xl p-6">
        <h3 className="font-display font-semibold text-lg text-navy mb-4">Insights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-navy text-sm">Best retry time</p>
              <p className="text-gray text-sm">Tuesday at 10 AM has the highest success rate (42%)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4 text-blue" />
            </div>
            <div>
              <p className="font-medium text-navy text-sm">Top recovery method</p>
              <p className="text-gray text-sm">Email campaigns recover 28% more than retries alone</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="font-medium text-navy text-sm">Seasonal trend</p>
              <p className="text-gray text-sm">Recovery rates drop 15% during holiday weekends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
