import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Customer First',
    description: 'We measure success by the revenue we recover for our customers, not by our own metrics.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We handle sensitive payment data with the highest standards of security and compliance.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Our AI models learn from every transaction to improve recovery rates over time.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    description: 'No hidden fees, no surprises. You always know exactly what you\'re paying for.',
  },
];

const testimonials = [
  {
    quote: "We recovered $8,200 in the first month. That's 16x ROI. RetryFlow paid for itself immediately.",
    author: 'Sarah Chen',
    role: 'Founder, CloudSync',
    avatar: '/testimonial_1.jpg',
    company: 'CloudSync',
    metric: '$8,200',
    metricLabel: 'recovered in month 1',
  },
  {
    quote: "Setup took 10 minutes. We didn't need to bug our engineering team. It just worked.",
    author: 'Marcus Johnson',
    role: 'CEO, DataFlow',
    avatar: '/testimonial_2.jpg',
    company: 'DataFlow',
    metric: '10 min',
    metricLabel: 'setup time',
  },
  {
    quote: "The AI retry timing is incredibly accurate. We've seen a 40% improvement in our recovery rate.",
    author: 'Jennifer Liu',
    role: 'CFO, ScaleUp Inc',
    avatar: '/testimonial_3.jpg',
    company: 'ScaleUp Inc',
    metric: '40%',
    metricLabel: 'recovery improvement',
  },
  {
    quote: "Best decision we made this year. Our churn dropped by 60% in the first quarter.",
    author: 'David Park',
    role: 'Head of Revenue, TechStart',
    avatar: '/testimonial_4.jpg',
    company: 'TechStart',
    metric: '60%',
    metricLabel: 'churn reduction',
  },
];

const stats = [
  { value: '$2.4M+', label: 'Revenue recovered' },
  { value: '200+', label: 'Happy customers' },
  { value: '34%', label: 'Avg. recovery improvement' },
  { value: '99.9%', label: 'Uptime' },
];

const team = [
  {
    name: 'Alex Rivera',
    role: 'CEO & Co-founder',
    bio: 'Former Stripe engineer. Built payment systems processing $10B+ annually.',
    avatar: '/testimonial_2.jpg',
  },
  {
    name: 'Maya Patel',
    role: 'CTO & Co-founder',
    bio: 'ML researcher from Google. PhD in Computer Science from MIT.',
    avatar: '/testimonial_3.jpg',
  },
  {
    name: 'James Wilson',
    role: 'Head of Customer Success',
    bio: '10+ years in SaaS customer success. Previously at Zendesk.',
    avatar: '/testimonial_4.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.08 }}>
                We're on a mission to end involuntary churn
              </h1>
              <p className="text-lg text-gray mb-8">
                RetryFlow was founded in 2024 by a team of payments engineers and ML researchers who were tired of seeing SaaS companies lose revenue to preventable payment failures.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link to="/contact">
                  <Button className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2">
                    Get in touch
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button variant="outline" className="rounded-full px-6 py-4 text-base font-medium border-navy/20">
                    Join our team
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/timing_meeting.jpg"
                alt="Team meeting"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="/campaigns_whiteboard.jpg"
                alt="Team collaboration"
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Story */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
            Our story
          </h2>
          <div className="space-y-6 text-lg text-gray">
            <p>
              It started with a simple observation: SaaS companies were losing millions in revenue to failed payments, and the existing solutions were either too basic or required significant engineering effort.
            </p>
            <p>
              We built RetryFlow to solve this problem. Our team combines deep expertise in payment systems with cutting-edge machine learning to create a solution that just works—no engineering required.
            </p>
            <p>
              Today, we're helping hundreds of SaaS companies recover revenue they thought was lost forever. And we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              Our values
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-slate rounded-[28px] p-8">
                  <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              Loved by SaaS companies
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                <div className="flex items-center justify-between">
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
                  <div className="text-right">
                    <p className="font-display font-bold text-xl text-blue">{testimonial.metric}</p>
                    <p className="text-white/60 text-xs">{testimonial.metricLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
              Meet the team
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              We're a small but mighty team of payments experts and ML researchers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="font-display font-semibold text-xl text-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-blue text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
            Want to join our mission?
          </h2>
          <p className="text-lg text-gray mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who are passionate about helping SaaS companies succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/careers">
              <Button className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2">
                View open positions
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-6 py-4 text-base font-medium border-navy/20">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
