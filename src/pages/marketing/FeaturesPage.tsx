import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  RefreshCw,
  Mail,
  MessageSquare,
  BarChart3,
  Shield,
  Plug,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Settings,
  Globe,
  Lock,
} from 'lucide-react';

const features = [
  {
    icon: RefreshCw,
    title: 'Smart Retry Engine',
    description: 'Our AI analyzes card type, bank, timezone, failure reason, and historical data to retry at the exact moment most likely to succeed.',
    benefits: [
      'Machine learning optimization',
      '12+ data points per transaction',
      'Automatic timing adjustments',
      'A/B tested retry sequences',
    ],
    image: '/timing_meeting.jpg',
  },
  {
    icon: Mail,
    title: 'White-Labeled Outreach',
    description: 'Your brand, your voice, your recovery. Customers never know we\'re here.',
    benefits: [
      'Custom email templates',
      'SMS with your sender ID',
      'In-app notification support',
      'Multi-language support',
    ],
    image: '/experience_support.jpg',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Know exactly what\'s working and what\'s not. Down to the dollar.',
    benefits: [
      'Live recovery dashboard',
      'Failure reason breakdown',
      'Campaign performance metrics',
      'Revenue impact reports',
    ],
    image: '/analytics_dashboard.jpg',
  },
  {
    icon: Plug,
    title: 'One-Click Integrations',
    description: 'Connect your existing stack in minutes, not days.',
    benefits: [
      'Stripe (2-minute setup)',
      'Chargebee',
      'Paddle',
      'Braintree',
      'API for custom platforms',
    ],
    image: '/integrations_coding.jpg',
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    description: 'Enterprise-grade security from day one.',
    benefits: [
      'SOC 2 Type II certified',
      'GDPR & CCPA compliant',
      'Bank-level encryption (AES-256)',
      'PCI DSS compliant',
    ],
    image: '/security_lock.jpg',
  },
  {
    icon: Settings,
    title: 'Advanced Controls',
    description: 'Set it and forget it, or micromanage every detail.',
    benefits: [
      'Custom retry schedules',
      'Segment-specific rules',
      'A/B testing for messages',
      'Webhook notifications',
    ],
    image: '/campaigns_whiteboard.jpg',
  },
];

const additionalFeatures = [
  { icon: Clock, title: 'Smart Timing', description: 'Retry at optimal times based on customer timezone' },
  { icon: Users, title: 'Segmentation', description: 'Different strategies for different customer types' },
  { icon: Globe, title: 'Global Support', description: 'Multi-currency and multi-language support' },
  { icon: Lock, title: 'Data Privacy', description: 'Your data never leaves your infrastructure' },
  { icon: Zap, title: 'Instant Setup', description: 'Connect and start recovering in under 2 minutes' },
  { icon: MessageSquare, title: 'SMS Recovery', description: 'Reach customers via text for higher conversion' },
];

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.08 }}>
            Everything you need to stop involuntary churn
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto mb-8">
            From smart retry logic to personalized outreach, RetryFlow gives you all the tools to recover failed payments automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2">
                Start free trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-6 py-4 text-base font-medium border-navy/20">
                Talk to sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue" />
                    </div>
                    <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.1 }}>
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-navy/80">
                          <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="rounded-[28px] overflow-hidden card-shadow">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              And there's more
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Every feature you need to maximize your recovery rate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate rounded-[28px] p-8">
                  <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              How we compare
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              See why RetryFlow outperforms native payment processor retries.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-display font-semibold text-navy">Feature</th>
                  <th className="text-center py-4 px-6 font-display font-semibold text-navy">Stripe Smart Retries</th>
                  <th className="text-center py-4 px-6 font-display font-semibold text-blue bg-blue/5 rounded-t-xl">RetryFlow</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Basic retry logic', stripe: true, retryflow: true },
                  { feature: 'AI-optimized timing', stripe: false, retryflow: true },
                  { feature: 'Email campaigns', stripe: false, retryflow: true },
                  { feature: 'SMS recovery', stripe: false, retryflow: true },
                  { feature: 'White-labeling', stripe: false, retryflow: true },
                  { feature: 'Real-time analytics', stripe: 'Limited', retryflow: true },
                  { feature: 'Custom retry rules', stripe: false, retryflow: true },
                  { feature: 'A/B testing', stripe: false, retryflow: true },
                  { feature: 'Multi-processor support', stripe: false, retryflow: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 text-navy/80">{row.feature}</td>
                    <td className="text-center py-4 px-6">
                      {row.stripe === true ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : row.stripe === false ? (
                        <span className="text-gray">—</span>
                      ) : (
                        <span className="text-gray text-sm">{row.stripe}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6 bg-blue/5">
                      <CheckCircle2 className="w-5 h-5 text-blue mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
            Ready to see it in action?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Start your free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2">
                Start free trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-4 text-base font-medium">
                Schedule a demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
