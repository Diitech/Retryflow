import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Zap,
  BarChart3,
  RefreshCw,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: RefreshCw,
    title: 'Smart Retry Logic',
    description: 'AI-optimized retry timing based on issuer patterns, timezones, and customer behavior.',
  },
  {
    icon: Mail,
    title: 'White-Labeled Emails',
    description: 'Custom email sequences that look like they came from your brand, not a third party.',
  },
  {
    icon: MessageSquare,
    title: 'SMS Recovery',
    description: 'Reach customers where they are with personalized SMS recovery campaigns.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'See exactly what you\'ve recovered with detailed dashboards and reports.',
  },
];

const stats = [
  { value: '34%', label: 'Average recovery rate improvement' },
  { value: '$2.4M+', label: 'Revenue recovered for customers' },
  { value: '2min', label: 'Average setup time' },
  { value: '200+', label: 'SaaS companies trust us' },
];

const testimonials = [
  {
    quote: "We recovered $8,200 in the first month. That's 16x ROI.",
    author: 'Sarah Chen',
    role: 'Founder, CloudSync',
    avatar: '/testimonial_1.jpg',
  },
  {
    quote: "Setup took 10 minutes. We didn't need to bug our engineering team.",
    author: 'Marcus Johnson',
    role: 'CEO, DataFlow',
    avatar: '/testimonial_2.jpg',
  },
  {
    quote: "The AI retry timing is incredibly accurate. We've seen a 40% improvement.",
    author: 'Jennifer Liu',
    role: 'CFO, ScaleUp Inc',
    avatar: '/testimonial_3.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue/10 text-blue rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                No credit card required
              </div>

              <h1 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.08 }}>
                Stop losing revenue to failed payments
              </h1>

              <p className="text-lg text-gray mb-8 max-w-lg">
                Smart retry logic + personalized outreach. Recover 30% more failed payments automatically. No engineering required.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <Link to="/signup">
                  <Button className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2">
                    Start free recovery audit
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" className="rounded-full px-6 py-4 text-base font-medium border-navy/20">
                    See how it works
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray">
                <Zap className="w-4 h-4" />
                Works with Stripe · Chargebee · Paddle · Braintree
              </div>
            </div>

            {/* Right Content - Feature Card */}
            <div className="relative z-10">
              <div className="bg-white rounded-[28px] card-shadow card-border p-8">
                {/* Icon Row */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-blue" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue" />
                  </div>
                </div>

                <h3 className="font-display font-semibold text-2xl text-navy mb-6">
                  Everything you need to recover failed payments
                </h3>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-navy/80">
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0" />
                    <span>AI-optimized retry timing</span>
                  </li>
                  <li className="flex items-center gap-3 text-navy/80">
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0" />
                    <span>White-labeled email & SMS</span>
                  </li>
                  <li className="flex items-center gap-3 text-navy/80">
                    <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0" />
                    <span>Real-time recovery analytics</span>
                  </li>
                </ul>

                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/hero_portrait.jpg"
                    alt="Professional using RetryFlow"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display font-bold text-3xl lg:text-4xl text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/problem_office_1.jpg"
                  alt="Team collaboration"
                  className="rounded-2xl w-full h-64 object-cover"
                />
                <img
                  src="/problem_office_2.jpg"
                  alt="Working on laptop"
                  className="rounded-2xl w-full h-64 object-cover mt-8"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
                40% of churn is involuntary
              </h2>
              <p className="text-lg text-gray mb-6">
                Card expirations, insufficient funds, and false fraud blocks are silently killing your revenue. Most SaaS companies lose 15-20% of their MRR to failed payments every month.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">1</span>
                  </div>
                  <span className="text-navy/80">1 in 5 cards expire every year</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">2</span>
                  </div>
                  <span className="text-navy/80">Average SaaS loses $4,500/month per $50K MRR</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">3</span>
                  </div>
                  <span className="text-navy/80">70% of failed payments are recoverable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              Everything you need to recover revenue
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              From smart retry logic to personalized outreach, RetryFlow gives you all the tools to stop involuntary churn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate rounded-[28px] p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" className="rounded-full px-8 py-4 text-base font-medium border-navy/20">
                View all features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              From failed payment to recovered revenue—in 3 steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Plug className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium text-blue mb-2">Step 1</div>
              <h3 className="font-display font-semibold text-xl text-navy mb-3">Connect</h3>
              <p className="text-gray">Your Stripe, Chargebee, or Paddle account in 2 minutes. No code changes required.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium text-blue mb-2">Step 2</div>
              <h3 className="font-display font-semibold text-xl text-navy mb-3">Optimize</h3>
              <p className="text-gray">Our AI analyzes 12 data points to find the perfect retry window for each customer.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium text-blue mb-2">Step 3</div>
              <h3 className="font-display font-semibold text-xl text-navy mb-3">Recover</h3>
              <p className="text-gray">Smart retries + personalized email/SMS sequences bring customers back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              Trusted by 200+ SaaS companies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-[28px] p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              Simple pricing: We only win when you win
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              No monthly fees. No setup costs. Pay only for revenue we actually recover.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-[28px] p-8 card-shadow card-border">
              <div className="text-sm font-medium text-gray mb-2">Starter</div>
              <div className="font-display font-bold text-4xl text-navy mb-2">25%</div>
              <p className="text-gray text-sm mb-6">of recovered revenue</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle2 className="w-4 h-4 text-blue" />
                  Best for &lt;$10K MRR
                </li>
                <li className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle2 className="w-4 h-4 text-blue" />
                  Email sequences
                </li>
                <li className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle2 className="w-4 h-4 text-blue" />
                  Smart retry logic
                </li>
              </ul>
              <Link to="/signup" className="block">
                <Button variant="outline" className="w-full rounded-full">
                  Get started
                </Button>
              </Link>
            </div>

            <div className="bg-blue rounded-[28px] p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy text-white text-xs font-medium px-3 py-1 rounded-full">
                Most popular
              </div>
              <div className="text-sm font-medium text-white/70 mb-2">Growth</div>
              <div className="font-display font-bold text-4xl text-white mb-2">20%</div>
              <p className="text-white/70 text-sm mb-6">of recovered revenue</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  Best for $10K-$100K MRR
                </li>
                <li className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  Email + SMS recovery
                </li>
                <li className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  Advanced analytics
                </li>
              </ul>
              <Link to="/signup" className="block">
                <Button className="w-full rounded-full bg-white text-blue hover:bg-white/90">
                  Get started
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-[28px] p-8 card-shadow card-border">
              <div className="text-sm font-medium text-gray mb-2">Scale</div>
              <div className="font-display font-bold text-4xl text-navy mb-2">15%</div>
              <p className="text-gray text-sm mb-6">of recovered revenue</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle2 className="w-4 h-4 text-blue" />
                  Best for &gt;$100K MRR
                </li>
                <li className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle2 className="w-4 h-4 text-blue" />
                  API access
                </li>
                <li className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle2 className="w-4 h-4 text-blue" />
                  Dedicated manager
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button variant="outline" className="w-full rounded-full">
                  Contact sales
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/pricing">
              <Button variant="outline" className="rounded-full px-8 py-4 text-base font-medium border-navy/20">
                View full pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
            Ready to recover lost revenue?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Get a free recovery audit. See what you're losing—and how much RetryFlow can recover.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2">
                Start free recovery audit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-4 text-base font-medium">
                Talk to sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Need to import Plug for the How It Works section
import { Plug } from 'lucide-react';
