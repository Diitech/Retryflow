import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import {
  User,
  Building2,
  Bell,
  Shield,
  CreditCard,
  Users,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

const settingsTabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'organization', label: 'Organization', icon: Building2 },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'team', label: 'Team Members', icon: Users },
];

const teamMembers = [
  { id: 1, name: 'Demo User', email: 'user@example.com', role: 'Owner', avatar: '/testimonial_2.jpg' },
  { id: 2, name: 'Sarah Chen', email: 'sarah@company.com', role: 'Admin', avatar: '/testimonial_1.jpg' },
  { id: 3, name: 'Marcus Johnson', email: 'marcus@company.com', role: 'Member', avatar: '/testimonial_4.jpg' },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-display font-bold text-2xl text-navy">Settings</h1>
        <p className="text-gray">Manage your account and organization settings.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl p-2 card-shadow card-border">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue/10 text-blue'
                      : 'text-navy/70 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                  {activeTab === tab.id && (
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {saved && (
            <div className="mb-6 bg-green-100 text-green-700 rounded-xl p-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Settings saved successfully
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="bg-white rounded-2xl p-8 card-shadow card-border space-y-6">
              <h2 className="font-display font-semibold text-xl text-navy">Profile</h2>
              
              <div className="flex items-center gap-6">
                <img
                  src="/testimonial_2.jpg"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <Button variant="outline" className="rounded-xl mb-2">
                    Change photo
                  </Button>
                  <p className="text-sm text-gray">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Full name
                  </label>
                  <Input defaultValue="Demo User" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Email
                  </label>
                  <Input defaultValue="user@example.com" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Job title
                  </label>
                  <Input defaultValue="CEO" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Phone
                  </label>
                  <Input defaultValue="+1 (555) 123-4567" className="rounded-xl" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-blue hover:bg-blue/90 text-white rounded-xl">
                  Save changes
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'organization' && (
            <div className="bg-white rounded-2xl p-8 card-shadow card-border space-y-6">
              <h2 className="font-display font-semibold text-xl text-navy">Organization</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Company name
                  </label>
                  <Input defaultValue="Acme Inc" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Website
                  </label>
                  <Input defaultValue="https://acme.com" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Industry
                  </label>
                  <select className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm">
                    <option>SaaS</option>
                    <option>E-commerce</option>
                    <option>Marketplace</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Company size
                  </label>
                  <select className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm">
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Billing email
                </label>
                <Input defaultValue="billing@acme.com" className="rounded-xl max-w-md" />
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-blue hover:bg-blue/90 text-white rounded-xl">
                  Save changes
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white rounded-2xl p-8 card-shadow card-border space-y-6">
              <h2 className="font-display font-semibold text-xl text-navy">Notifications</h2>
              
              <div className="space-y-4">
                {[
                  { label: 'Payment recovered', description: 'Get notified when a payment is successfully recovered', default: true },
                  { label: 'High-value failure', description: 'Get notified when a payment over $500 fails', default: true },
                  { label: 'Daily summary', description: 'Receive a daily email with your recovery stats', default: false },
                  { label: 'Weekly report', description: 'Receive a weekly report with detailed analytics', default: true },
                  { label: 'Campaign completed', description: 'Get notified when a recovery campaign completes', default: true },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium text-navy">{item.label}</p>
                      <p className="text-sm text-gray">{item.description}</p>
                    </div>
                    <Switch defaultChecked={item.default} />
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-blue hover:bg-blue/90 text-white rounded-xl">
                  Save changes
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white rounded-2xl p-8 card-shadow card-border space-y-6">
              <h2 className="font-display font-semibold text-xl text-navy">Security</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-navy mb-4">Change password</h3>
                  <div className="space-y-4 max-w-md">
                    <Input type="password" placeholder="Current password" className="rounded-xl" />
                    <Input type="password" placeholder="New password" className="rounded-xl" />
                    <Input type="password" placeholder="Confirm new password" className="rounded-xl" />
                    <Button variant="outline" className="rounded-xl">
                      Update password
                    </Button>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-medium text-navy mb-4">Two-factor authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-navy">Protect your account with 2FA</p>
                      <p className="text-sm text-gray">Add an extra layer of security</p>
                    </div>
                    <Button variant="outline" className="rounded-xl">
                      Enable 2FA
                    </Button>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-medium text-navy mb-4">Active sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-navy">Chrome on MacOS</p>
                        <p className="text-sm text-gray">San Francisco, CA · Current session</p>
                      </div>
                      <span className="text-green-600 text-sm font-medium">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="bg-white rounded-2xl p-8 card-shadow card-border space-y-6">
              <h2 className="font-display font-semibold text-xl text-navy">Billing</h2>
              
              <div className="bg-blue/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray">Current plan</p>
                    <p className="font-display font-bold text-xl text-navy">Growth</p>
                  </div>
                  <Button variant="outline" className="rounded-xl">
                    Change plan
                  </Button>
                </div>
                <p className="text-gray text-sm">20% of recovered revenue</p>
              </div>

              <div>
                <h3 className="font-medium text-navy mb-4">Payment method</h3>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-slate rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-navy">VISA</span>
                    </div>
                    <div>
                      <p className="text-navy">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray">Expires 12/27</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Update
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-navy mb-4">Billing history</h3>
                <div className="space-y-3">
                  {[
                    { date: 'Mar 1, 2026', amount: '$1,240.00', status: 'Paid' },
                    { date: 'Feb 1, 2026', amount: '$980.50', status: 'Paid' },
                    { date: 'Jan 1, 2026', amount: '$1,560.00', status: 'Paid' },
                  ].map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-navy">{invoice.date}</p>
                        <p className="text-sm text-gray">Invoice #{2026000 + index}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-medium text-navy">{invoice.amount}</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                          {invoice.status}
                        </span>
                        <Button variant="ghost" size="sm" className="text-blue">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="bg-white rounded-2xl p-8 card-shadow card-border space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display font-semibold text-xl text-navy">Team Members</h2>
                <Button className="bg-blue hover:bg-blue/90 text-white rounded-xl">
                  Invite member
                </Button>
              </div>
              
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-navy">{member.name}</p>
                        <p className="text-sm text-gray">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        member.role === 'Owner' ? 'bg-blue/10 text-blue' :
                        member.role === 'Admin' ? 'bg-purple/10 text-purple-600' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {member.role}
                      </span>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
