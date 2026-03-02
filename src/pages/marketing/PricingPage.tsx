import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    fee: '25%',
    description: 'of recovered revenue',
    bestFor: '<$10K MRR',
    features: [
      'Smart retry logic',
      'Email sequences',
      'Basic dashboard',
      'Custom branding',
      'Email support',
      'Stripe integration',
    ],
    notIncluded: [
      'SMS recovery',
      'API access',
      'Custom retry rules',
    ],
    cta: 'Get started',
    ctaLink: '/signup',
    popular: false,
  },
  {
    name: 'Growth',
    fee: '20%',
    description: 'of recovered revenue',
    bestFor: '$10K-$100K MRR',
    features: [
      'Everything in Starter',
      'SMS recovery',
      'Advanced analytics',
      'Email + Chat support',
      'All integrations',
      'A/B testing',
      'Webhook notifications',
    ],
    notIncluded: [
      'API access',
      'Custom retry rules',
    ],
    cta: 'Get started',
    ctaLink: '/signup',
    popular: true,
  },
  {
    name: 'Scale',
    fee: '15%',
    description: 'of recovered revenue',
    bestFor: '>$100K MRR',
    features: [
      'Everything in Growth',
      'API access',
      'Custom retry rules',
      'Dedicated manager',
      'SLA guarantee',
      'Priority support',
      'Custom integrations',
    ],
    notIncluded: [],
    cta: 'Contact sales',
    ctaLink: '/contact',
    popular: false,
  },
];

const allFeatures = [
  'No setup fees',
  'No monthly platform fees',
  'Unlimited team members',
  'SOC 2 compliance',
  '99.9% uptime SLA',
  'Free migration assistance',
];

const faqs = [
  {
    question: 'Is there really no monthly fee?',
    answer: 'Correct. We only make money when you make money. No hidden charges, ever. You only pay a percentage of the revenue we successfully recover for you.',
  },
  {
    question: 'What counts as "recovered revenue"?',
    answer: 'Any payment that failed and was successfully charged through RetryFlow\'s retry logic or recovery campaigns. We track every dollar and provide detailed reports.',
  },
  {
    question: 'Can I change plans?',
    answer: 'Yes, upgrade or downgrade anytime. Your new rate will apply to the next billing cycle.',
  },
  {
    question: 'How does the 14-day free trial work?',
    answer: 'You get full access to all features for 14 days. No credit card required. At the end of the trial, you can choose to continue or cancel with no charges.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Since we only charge for recovered revenue, there are no refunds. If we don\'t recover anything, you don\'t pay anything.',
  },
  {
    question: 'What payment processors do you support?',
    answer: 'We support Stripe, Chargebee, Paddle, and Braintree out of the box. For custom integrations, contact our sales team.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue/10 text-blue rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            No monthly fees. Pay only for what we recover.
          </div>

          <h1 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.08 }}>
            Simple, success-based pricing
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto mb-8">
            No setup costs. No hidden fees. We only win when you win.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-[28px] p-8 ${
                  plan.popular
                    ? 'bg-blue text-white'
                    : 'bg-white card-shadow card-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`font-display font-semibold text-xl mb-2 ${plan.popular ? 'text-white' : 'text-navy'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-display font-bold text-4xl ${plan.popular ? 'text-white' : 'text-navy'}`}>
                      {plan.fee}
                    </span>
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className={`text-sm mb-6 ${plan.popular ? 'text-white/80' : 'text-navy/70'}`}>
                  Best for: <span className="font-medium">{plan.bestFor}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white/20' : 'bg-blue/10'}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-blue'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-navy/80'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-50">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white/10' : 'bg-gray-100'}`}>
                        <span className={`text-xs ${plan.popular ? 'text-white/50' : 'text-gray'}`}>—</span>
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-white/50' : 'text-gray'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to={plan.ctaLink} className="block">
                  <Button
                    className={`w-full rounded-full py-4 ${
                      plan.popular
                        ? 'bg-white text-blue hover:bg-white/90'
                        : 'bg-blue text-white hover:bg-blue/90'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* All Plans Include */}
          <div className="mt-16 bg-slate rounded-[28px] p-8">
            <h3 className="font-display font-semibold text-lg text-navy mb-6 text-center">
              All plans include
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue" />
                  <span className="text-navy/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              Calculate your recovery potential
            </h2>
            <p className="text-lg text-gray">
              See how much revenue RetryFlow could recover for your business.
            </p>
          </div>

          <RecoveryCalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl card-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-navy">{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-gray transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
            Still have questions?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the right plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2">
                Contact sales
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="mailto:hello@retryflow.com">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-4 text-base font-medium">
                Email us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Recovery Calculator Component
function RecoveryCalculator() {
  const [mrr, setMrr] = useState(50000);
  const [failureRate, setFailureRate] = useState(15);
  const [recoveryRate] = useState(34);

  const monthlyFailed = (mrr * failureRate) / 100;
  const monthlyRecovered = (monthlyFailed * recoveryRate) / 100;
  const annualRecovered = monthlyRecovered * 12;
  const retryflowFee = monthlyRecovered * 0.2; // Using Growth plan rate
  const netRecovery = monthlyRecovered - retryflowFee;

  return (
    <div className="bg-slate rounded-[28px] p-8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block text-sm font-medium text-navy mb-2">
            Monthly Recurring Revenue (MRR)
          </label>
          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={mrr}
            onChange={(e) => setMrr(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue"
          />
          <div className="mt-2 text-2xl font-display font-bold text-navy">
            ${mrr.toLocaleString()}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy mb-2">
            Current failure rate
          </label>
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={failureRate}
            onChange={(e) => setFailureRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue"
          />
          <div className="mt-2 text-2xl font-display font-bold text-navy">
            {failureRate}%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 text-center">
          <div className="text-sm text-gray mb-1">Monthly failed</div>
          <div className="text-2xl font-display font-bold text-navy">
            ${monthlyFailed.toLocaleString()}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center">
          <div className="text-sm text-gray mb-1">Monthly recovered</div>
          <div className="text-2xl font-display font-bold text-green-600">
            ${monthlyRecovered.toLocaleString()}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center">
          <div className="text-sm text-gray mb-1">RetryFlow fee (20%)</div>
          <div className="text-2xl font-display font-bold text-blue">
            ${retryflowFee.toLocaleString()}
          </div>
        </div>
        <div className="bg-blue rounded-2xl p-6 text-center">
          <div className="text-sm text-white/70 mb-1">Your net recovery</div>
          <div className="text-2xl font-display font-bold text-white">
            ${netRecovery.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray text-sm">
          Annual impact: <span className="font-semibold text-navy">${annualRecovered.toLocaleString()}</span> in recovered revenue
        </p>
      </div>
    </div>
  );
}
