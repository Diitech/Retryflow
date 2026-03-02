import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ExternalLink, RefreshCw, Settings, Plus } from 'lucide-react';

const integrations = [
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Connect your Stripe account to automatically sync failed payments.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
      </svg>
    ),
    connected: true,
    lastSync: '2 minutes ago',
    stats: { recovered: '$12,450', failed: 156 },
  },
  {
    id: 'chargebee',
    name: 'Chargebee',
    description: 'Sync your Chargebee subscriptions and failed invoices.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15v10l7-5-7-5z"/>
      </svg>
    ),
    connected: false,
    lastSync: '-',
    stats: null,
  },
  {
    id: 'paddle',
    name: 'Paddle',
    description: 'Connect Paddle to recover failed subscription payments.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    connected: false,
    lastSync: '-',
    stats: null,
  },
  {
    id: 'braintree',
    name: 'Braintree',
    description: 'Integrate with Braintree for comprehensive payment recovery.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2-6h4v-2h-4v2zm0-4h4V6h-4v6z"/>
      </svg>
    ),
    connected: false,
    lastSync: '-',
    stats: null,
  },
];

const webhooks = [
  {
    id: 1,
    name: 'Payment Failed',
    url: 'https://api.retryflow.com/webhooks/stripe',
    status: 'active',
    events: ['invoice.payment_failed'],
  },
  {
    id: 2,
    name: 'Payment Succeeded',
    url: 'https://api.retryflow.com/webhooks/stripe',
    status: 'active',
    events: ['invoice.payment_succeeded'],
  },
];

export default function Integrations() {
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleConnect = (integrationId: string) => {
    setConnecting(integrationId);
    // Simulate connection
    setTimeout(() => {
      setConnecting(null);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-display font-bold text-2xl text-navy">Integrations</h1>
        <p className="text-gray">Connect your payment processors to start recovering failed payments.</p>
      </div>

      {/* Payment Processors */}
      <div className="grid md:grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className={`bg-white rounded-2xl p-6 card-shadow card-border ${
              integration.connected ? 'border-blue/30' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate rounded-xl flex items-center justify-center text-navy">
                  {integration.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-navy flex items-center gap-2">
                    {integration.name}
                    {integration.connected && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                  </h3>
                  <p className="text-gray text-sm">
                    {integration.connected ? `Last sync: ${integration.lastSync}` : 'Not connected'}
                  </p>
                </div>
              </div>
              {integration.connected ? (
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray">
                    <RefreshCw className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <Button
                  onClick={() => handleConnect(integration.id)}
                  disabled={connecting === integration.id}
                  className="bg-blue hover:bg-blue/90 text-white rounded-xl"
                >
                  {connecting === integration.id ? (
                    'Connecting...'
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Connect
                    </>
                  )}
                </Button>
              )}
            </div>

            <p className="text-gray text-sm mb-4">{integration.description}</p>

            {integration.connected && integration.stats && (
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-gray text-xs">Recovered</p>
                  <p className="font-display font-bold text-navy">{integration.stats.recovered}</p>
                </div>
                <div>
                  <p className="text-gray text-xs">Failed payments</p>
                  <p className="font-display font-bold text-navy">{integration.stats.failed}</p>
                </div>
                <div className="ml-auto">
                  <a
                    href="#"
                    className="text-sm text-blue hover:underline flex items-center gap-1"
                  >
                    View details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Webhooks */}
      <div className="bg-white rounded-2xl p-6 card-shadow card-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-display font-semibold text-lg text-navy">Webhook Endpoints</h3>
            <p className="text-gray text-sm">Manage your webhook configurations</p>
          </div>
          <Button variant="outline" className="rounded-xl">
            <Plus className="w-4 h-4 mr-2" />
            Add webhook
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray">URL</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray">Events</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray">Actions</th>
              </tr>
            </thead>
            <tbody>
              {webhooks.map((webhook) => (
                <tr key={webhook.id} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-4 font-medium text-navy">{webhook.name}</td>
                  <td className="px-4 py-4 text-gray text-sm font-mono">{webhook.url}</td>
                  <td className="px-4 py-4">
                    {webhook.events.map((event) => (
                      <span
                        key={event}
                        className="inline-block px-2 py-1 bg-slate rounded text-xs text-navy mr-1"
                      >
                        {event}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray">
                      <Settings className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* API Keys */}
      <div className="bg-white rounded-2xl p-6 card-shadow card-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-display font-semibold text-lg text-navy">API Keys</h3>
            <p className="text-gray text-sm">Manage your API keys for custom integrations</p>
          </div>
          <Button variant="outline" className="rounded-xl">
            <Plus className="w-4 h-4 mr-2" />
            Generate new key
          </Button>
        </div>

        <div className="bg-slate rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-navy">Production API Key</p>
              <p className="text-gray text-sm">Created on Jan 15, 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <code className="px-3 py-1 bg-white rounded-lg text-sm font-mono text-navy">
                rk_live_••••••••••••••••
              </code>
              <Button variant="outline" size="sm" className="rounded-lg">
                Reveal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
