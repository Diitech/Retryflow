import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Mail,
  MessageSquare,
  Plus,
  MoreHorizontal,
  Play,
  Pause,
  Edit2,
  Clock,
  Send,
} from 'lucide-react';

const campaigns = [
  {
    id: 1,
    name: 'Standard Recovery Sequence',
    type: 'email',
    status: 'active',
    steps: 4,
    sent: 1240,
    opened: 868,
    clicked: 434,
    recovered: 289,
    recoveryRate: 23.3,
    lastEdited: '2 days ago',
  },
  {
    id: 2,
    name: 'High-Value Customer Recovery',
    type: 'mixed',
    status: 'active',
    steps: 6,
    sent: 456,
    opened: 365,
    clicked: 228,
    recovered: 156,
    recoveryRate: 34.2,
    lastEdited: '1 week ago',
  },
  {
    id: 3,
    name: 'SMS-First Recovery',
    type: 'sms',
    status: 'paused',
    steps: 3,
    sent: 320,
    opened: 288,
    clicked: 160,
    recovered: 96,
    recoveryRate: 30.0,
    lastEdited: '2 weeks ago',
  },
  {
    id: 4,
    name: 'Final Attempt Sequence',
    type: 'email',
    status: 'draft',
    steps: 2,
    sent: 0,
    opened: 0,
    clicked: 0,
    recovered: 0,
    recoveryRate: 0,
    lastEdited: '3 days ago',
  },
];

const templates = [
  { id: 1, name: 'Friendly Reminder', type: 'email', category: 'Recovery' },
  { id: 2, name: 'Urgent: Payment Failed', type: 'email', category: 'Recovery' },
  { id: 3, name: 'SMS - Quick Update', type: 'sms', category: 'Recovery' },
  { id: 4, name: 'Final Notice', type: 'email', category: 'Recovery' },
  { id: 5, name: 'Welcome Back', type: 'email', category: 'Retention' },
];

export default function Campaigns() {
  const [activeTab, setActiveTab] = useState('campaigns');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-navy">Campaigns</h1>
          <p className="text-gray">Manage your recovery email and SMS campaigns.</p>
        </div>
        <Link to="/dashboard/campaigns/new">
          <Button className="bg-blue hover:bg-blue/90 text-white rounded-xl">
            <Plus className="w-4 h-4 mr-2" />
            Create campaign
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-slate p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('campaigns')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'campaigns'
              ? 'bg-white text-navy shadow-sm'
              : 'text-gray hover:text-navy'
          }`}
        >
          Campaigns
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'templates'
              ? 'bg-white text-navy shadow-sm'
              : 'text-gray hover:text-navy'
          }`}
        >
          Templates
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'analytics'
              ? 'bg-white text-navy shadow-sm'
              : 'text-gray hover:text-navy'
          }`}
        >
          Analytics
        </button>
      </div>

      {activeTab === 'campaigns' && (
        <>
          {/* Stats */}
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 card-shadow card-border">
              <p className="text-gray text-sm mb-1">Active campaigns</p>
              <p className="font-display font-bold text-2xl text-navy">3</p>
            </div>
            <div className="bg-white rounded-2xl p-6 card-shadow card-border">
              <p className="text-gray text-sm mb-1">Total sent</p>
              <p className="font-display font-bold text-2xl text-navy">2,016</p>
            </div>
            <div className="bg-white rounded-2xl p-6 card-shadow card-border">
              <p className="text-gray text-sm mb-1">Avg. open rate</p>
              <p className="font-display font-bold text-2xl text-navy">68.5%</p>
            </div>
            <div className="bg-white rounded-2xl p-6 card-shadow card-border">
              <p className="text-gray text-sm mb-1">Total recovered</p>
              <p className="font-display font-bold text-2xl text-navy">541</p>
            </div>
          </div>

          {/* Campaigns List */}
          <div className="bg-white rounded-2xl card-shadow card-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray">Campaign</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray">Sent</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray">Opened</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray">Recovered</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray">Rate</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            campaign.type === 'email' ? 'bg-blue/10' :
                            campaign.type === 'sms' ? 'bg-green/10' :
                            'bg-purple/10'
                          }`}>
                            {campaign.type === 'email' ? (
                              <Mail className="w-5 h-5 text-blue" />
                            ) : campaign.type === 'sms' ? (
                              <MessageSquare className="w-5 h-5 text-green-500" />
                            ) : (
                              <Send className="w-5 h-5 text-purple-500" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-navy">{campaign.name}</p>
                            <p className="text-sm text-gray">{campaign.steps} steps</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'active' ? 'bg-green-100 text-green-700' :
                          campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {campaign.status === 'active' && <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                          {campaign.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-navy">{campaign.sent.toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-navy">{campaign.opened.toLocaleString()}</p>
                          <p className="text-sm text-gray">
                            {campaign.sent > 0 ? Math.round((campaign.opened / campaign.sent) * 100) : 0}% open rate
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-navy">{campaign.recovered.toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-green-600">
                          {campaign.recoveryRate}%
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          {campaign.status === 'active' ? (
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray" title="Pause">
                              <Pause className="w-4 h-4" />
                            </button>
                          ) : campaign.status === 'paused' ? (
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray" title="Resume">
                              <Play className="w-4 h-4" />
                            </button>
                          ) : (
                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray" title="Publish">
                              <Play className="w-4 h-4" />
                            </button>
                          )}
                          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray" title="Edit">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray" title="More">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'templates' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-2xl p-6 card-shadow card-border">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  template.type === 'email' ? 'bg-blue/10' : 'bg-green/10'
                }`}>
                  {template.type === 'email' ? (
                    <Mail className="w-5 h-5 text-blue" />
                  ) : (
                    <MessageSquare className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <span className="px-2 py-1 bg-slate rounded text-xs text-gray">
                  {template.category}
                </span>
              </div>
              <h3 className="font-display font-semibold text-navy mb-2">{template.name}</h3>
              <p className="text-gray text-sm mb-4">{template.type.toUpperCase()} template</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="rounded-lg flex-1">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="rounded-lg">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          <button className="bg-slate rounded-2xl p-6 border-2 border-dashed border-gray-200 hover:border-blue/50 transition-colors flex flex-col items-center justify-center gap-4 min-h-[200px]">
            <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-blue" />
            </div>
            <span className="font-medium text-navy">Create new template</span>
          </button>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="bg-white rounded-2xl p-8 card-shadow card-border text-center">
          <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-blue" />
          </div>
          <h3 className="font-display font-semibold text-xl text-navy mb-2">
            Campaign analytics coming soon
          </h3>
          <p className="text-gray max-w-md mx-auto">
            We're working on detailed analytics for your campaigns. Check back soon for insights on open rates, click rates, and recovery performance.
          </p>
        </div>
      )}
    </div>
  );
}
