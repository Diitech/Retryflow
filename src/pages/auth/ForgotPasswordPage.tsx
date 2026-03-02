import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md text-center py-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="font-display font-bold text-2xl text-navy mb-4">
          Check your email
        </h2>
        <p className="text-gray mb-8">
          We've sent a password reset link to <strong>{email}</strong>. Click the link to reset your password.
        </p>
        <div className="space-y-4">
          <p className="text-sm text-gray">
            Didn't receive the email? Check your spam folder or{' '}
            <button 
              onClick={() => setSubmitted(false)}
              className="text-blue hover:underline"
            >
              try again
            </button>
          </p>
          <Link to="/login">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign in
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="font-display font-bold text-3xl text-navy mb-2">
          Forgot password?
        </h1>
        <p className="text-gray">
          No worries. We'll send you a reset link.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-navy mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray" />
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-12 h-12 rounded-xl"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue hover:bg-blue/90 text-white h-12 rounded-xl text-base font-medium"
        >
          {isLoading ? (
            'Sending...'
          ) : (
            <>
              Send reset link
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-8 text-center">
        <Link 
          to="/login" 
          className="text-blue hover:underline font-medium inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
