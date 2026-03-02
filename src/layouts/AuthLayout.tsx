import { Outlet, Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-navy flex-col justify-between p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl text-white">RetryFlow</span>
          </Link>
        </div>

        <div className="relative z-10">
          <blockquote className="text-white/90 text-xl font-medium mb-4">
            "We recovered $8,200 in the first month. That's 16x ROI."
          </blockquote>
          <div className="flex items-center gap-3">
            <img
              src="/testimonial_1.jpg"
              alt="Sarah Chen"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-white font-medium">Sarah Chen</p>
              <p className="text-white/60 text-sm">Founder, CloudSync</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-white/40 text-sm">
          © 2026 RetryFlow. All rights reserved.
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="lg:hidden p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-navy">RetryFlow</span>
          </Link>
        </div>

        {/* Auth Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
