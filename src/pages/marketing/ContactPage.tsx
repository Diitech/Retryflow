import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email us',
    content: 'hello@retryflow.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call us',
    content: '+1 (555) 014-2200',
    description: 'Mon-Fri 9am-6pm PT',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    content: 'San Francisco, CA',
    description: '1200 Innovation Drive, Suite 400',
  },
  {
    icon: Clock,
    title: 'Support hours',
    content: '24/7 for Scale plan',
    description: 'Business hours for other plans',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    mrr: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.08 }}>
              Get in touch
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Have a question? Want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-slate rounded-2xl p-6">
                    <div className="w-10 h-10 bg-blue/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-blue" />
                    </div>
                    <h3 className="font-display font-semibold text-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-navy font-medium">{item.content}</p>
                    <p className="text-gray text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[28px] card-shadow card-border p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display font-semibold text-2xl text-navy mb-4">
                      Message sent!
                    </h3>
                    <p className="text-gray mb-6">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-display font-semibold text-xl text-navy mb-6">
                      Send us a message
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-xl"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Company
                        </label>
                        <Input
                          type="text"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Monthly Recurring Revenue (MRR)
                        </label>
                        <select
                          value={formData.mrr}
                          onChange={(e) => setFormData({ ...formData, mrr: e.target.value })}
                          className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm"
                        >
                          <option value="">Select MRR range</option>
                          <option value="<10k">Less than $10K</option>
                          <option value="10k-50k">$10K - $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-500k">$100K - $500K</option>
                          <option value="500k+">More than $500K</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-navy mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="How can we help?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2"
                    >
                      Send message
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 lg:py-32 bg-slate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1 }}>
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray mb-8">
            Can't find what you're looking for? Check our comprehensive FAQ.
          </p>
          <Link to="/pricing">
            <Button variant="outline" className="rounded-full px-8 py-4 text-base font-medium border-navy/20">
              View all FAQs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
