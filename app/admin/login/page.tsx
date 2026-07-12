'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Lock, Mail, Loader2 } from 'lucide-react';
import { login } from './actions';

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await login(formData);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--muted))] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-[hsl(var(--border))]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center mb-4">
            <Image src="/logo_path.jpg" alt="PathFinder DigiTech" width={40} height={40} className="object-contain rounded" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
            Sign in to manage events
          </p>
        </div>

        <form action={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" size={18} />
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full pl-10 pr-4 py-2.5 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                placeholder="you@pathfinder.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" size={18} />
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full pl-10 pr-4 py-2.5 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 bg-[hsl(var(--primary))] text-white py-2.5 rounded-lg font-semibold hover:bg-[hsl(var(--primary))]/90 transition-colors disabled:opacity-60"
          >
            {isPending && <Loader2 className="animate-spin" size={18} />}
            {isPending ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
