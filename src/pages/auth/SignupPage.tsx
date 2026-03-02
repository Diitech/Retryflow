import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Mail, Lock, User, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/App';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    login(formData.email, formData.password);
    navigate('/dashboard');
  };

  const nextStep = () => setStep(step + 1);

  if (step === 3) {
    return (
      <div className="w-full max-w-md text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="font-display font-bold text-2xl text-navy mb-4">
          Welcome to RetryFlow!
        </h2>
        <p className="text-gray mb-8">
          Your account has been created. We're redirecting you to your dashboard...
        </p>
        <div className="animate-pulse">
          <div className="h-2 bg-blue/20 rounded-full w-48 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="font-display font-bold text-3xl text-navy mb-2">
          {step === 1 ? 'Create your account' : 'Set up your profile'}
        </h1>
        <p className="text-gray">
          {step === 1 
            ? 'Start your 14-day free trial. No credit card required.' 
            : 'Just a few more details to get you started.'}
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-blue' : 'bg-gray-200'}`}></div>
        <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-blue' : 'bg-gray-200'}`}></div>
        <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-blue' : 'bg-gray-200'}`}></div>
      </div>

      {step === 1 ? (
        <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Full name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray" />
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-12 h-12 rounded-xl"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Work email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray" />
              <Input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-12 h-12 rounded-xl"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-12 pr-12 h-12 rounded-xl"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray hover:text-navy"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray mt-2">
              Must be at least 8 characters with a number and special character
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-navy/70">
              I agree to the{' '}
              <a href="#" className="text-blue hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue hover:underline">Privacy Policy</a>
            </label>
          </div>

          <Button
            type="submit"
            disabled={!formData.agreeToTerms}
            className="w-full bg-blue hover:bg-blue/90 text-white h-12 rounded-xl text-base font-medium"
          >
            Continue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Company name
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray" />
              <Input
                type="text"
                placeholder="Acme Inc"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="pl-12 h-12 rounded-xl"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              What's your current MRR?
            </label>
            <select
              className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm"
              required
            >
              <option value="">Select MRR range</option>
              <option value="<10k">Less than $10K</option>
              <option value="10k-50k">$10K - $50K</option>
              <option value="50k-100k">$50K - $100K</option>
              <option value="100k-500k">$100K - $500K</option>
              <option value="500k+">More than $500K</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Which payment processor do you use?
            </label>
            <select
              className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm"
              required
            >
              <option value="">Select processor</option>
              <option value="stripe">Stripe</option>
              <option value="chargebee">Chargebee</option>
              <option value="paddle">Paddle</option>
              <option value="braintree">Braintree</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue hover:bg-blue/90 text-white h-12 rounded-xl text-base font-medium"
          >
            {isLoading ? (
              'Creating account...'
            ) : (
              <>
                Start free trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      )}

      <div className="mt-8 text-center">
        <p className="text-gray">
          Already have an account?{' '}
          <Link to="/login" className="text-blue hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>

      {step === 1 && (
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-sm text-gray mb-4">
            Or sign up with
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
