import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data } = await supabase.from('user_roles').select('role').eq('user_id', session.user.id).eq('role', 'admin').single();
        if (data) navigate('/admin');
      }
    };
    checkSession();
  }, [navigate]);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
    } else {
      toast({ title: "Check your email", description: "A password reset link has been sent." });
      setIsForgotPassword(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin }
      });
      setLoading(false);
      if (error) {
        setErrorMsg(error.message);
      } else {
        toast({ title: "Account created!", description: "An admin will need to grant you access." });
        setIsSignUp(false);
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setLoading(false);
        setErrorMsg(error.message);
        return;
      }
      const { data: roleData } = await supabase.from('user_roles').select('role').eq('user_id', data.user.id).eq('role', 'admin').single();
      setLoading(false);
      if (roleData) {
        navigate('/admin');
      } else {
        setErrorMsg("Access Denied. You don't have admin access.");
        await supabase.auth.signOut();
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-12 font-sans">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 admin-animated-bg" />

      {/* Floating blurred blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#f97316]/30 blur-3xl admin-blob-a" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[45rem] h-[45rem] rounded-full bg-[#16a34a]/30 blur-3xl admin-blob-b" />
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] rounded-full bg-[#3b82f6]/25 blur-3xl admin-blob-c" />
      </div>

      {/* Glass card */}
      <div className="relative w-full max-w-md animate-admin-rise">
        <div className="rounded-2xl border border-white/25 bg-white/15 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.25)] p-8 md:p-10">
          <div className="text-center mb-7">
            <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-md">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {isForgotPassword ? 'Reset Password' : 'Ghetto Foundation Admin'}
            </h1>
            <p className="text-sm text-white/75 mt-2 font-light">
              {isForgotPassword
                ? 'Enter your email to receive a reset link'
                : 'Secure access for authorized staff only'}
            </p>
          </div>

          {errorMsg && (
            <div className="mb-4 flex items-start gap-2 rounded-lg border border-red-300/40 bg-red-500/20 px-3 py-2 text-sm text-red-50 backdrop-blur-md animate-fade-in">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {isForgotPassword ? (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <GlassField label="Email" id="email">
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  className="admin-input" placeholder="you@example.com" />
              </GlassField>
              <GlowButton loading={loading} label="Send Reset Link" />
              <div className="text-center">
                <button type="button" onClick={() => { setIsForgotPassword(false); setErrorMsg(null); }}
                  className="text-sm text-white/80 hover:text-white hover:underline">
                  Back to login
                </button>
              </div>
            </form>
          ) : (
            <>
              <form onSubmit={handleAuth} className="space-y-4">
                <GlassField label="Email" id="email">
                  <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required
                    className="admin-input" placeholder="you@example.com" />
                </GlassField>
                <GlassField label="Password" id="password">
                  <div className="relative">
                    <Input id="password" type={showPassword ? 'text' : 'password'} value={password}
                      onChange={e => setPassword(e.target.value)} required minLength={6}
                      className="admin-input pr-10" placeholder="••••••••" />
                    <button type="button" onClick={() => setShowPassword(s => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}>
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </GlassField>

                {!isSignUp && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-white/80 cursor-pointer select-none">
                      <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-white/40 bg-white/10 accent-[#f97316]" />
                      Remember me
                    </label>
                    <button type="button" onClick={() => { setIsForgotPassword(true); setErrorMsg(null); }}
                      className="text-white/80 hover:text-white hover:underline">
                      Forgot password?
                    </button>
                  </div>
                )}

                <GlowButton loading={loading} label={isSignUp ? 'Create Account' : 'Sign In'} />
              </form>

              <div className="text-center mt-5">
                <button onClick={() => { setIsSignUp(!isSignUp); setErrorMsg(null); }}
                  className="text-sm text-white/85 hover:text-white hover:underline">
                  {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                </button>
              </div>
            </>
          )}
        </div>

        <p className="text-center text-xs text-white/60 mt-6 font-light">
          © Ghetto Foundation · Protected portal
        </p>
      </div>

      <style>{`
        .admin-animated-bg {
          background: linear-gradient(125deg, #f97316, #16a34a, #3b82f6, #f97316);
          background-size: 300% 300%;
          animation: adminGradientShift 22s ease-in-out infinite;
        }
        @keyframes adminGradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .admin-blob-a { animation: adminFloatA 18s ease-in-out infinite; }
        .admin-blob-b { animation: adminFloatB 24s ease-in-out infinite; }
        .admin-blob-c { animation: adminFloatC 20s ease-in-out infinite; }
        @keyframes adminFloatA {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(60px,40px) scale(1.1); }
        }
        @keyframes adminFloatB {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-50px,-30px) scale(1.15); }
        }
        @keyframes adminFloatC {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-40px,50px) scale(0.95); }
        }
        @keyframes adminRise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-admin-rise { animation: adminRise 0.7s ease-out both; }
        .admin-input {
          background: rgba(15, 23, 42, 0.55) !important;
          border: 1px solid rgba(255,255,255,0.35) !important;
          color: #fff !important;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .admin-input::placeholder { color: rgba(255,255,255,0.7); }
        .admin-input:focus-visible {
          border-color: #f97316 !important;
          box-shadow: 0 0 0 3px rgba(249,115,22,0.35), 0 0 18px rgba(249,115,22,0.35) !important;
          background: rgba(15, 23, 42, 0.7) !important;
          outline: none;
        }
        .admin-input:-webkit-autofill,
        .admin-input:-webkit-autofill:hover,
        .admin-input:-webkit-autofill:focus {
          -webkit-text-fill-color: #fff !important;
          -webkit-box-shadow: 0 0 0 1000px rgba(15,23,42,0.75) inset !important;
          caret-color: #fff;
        }
        @media (prefers-reduced-motion: reduce) {
          .admin-animated-bg, .admin-blob-a, .admin-blob-b, .admin-blob-c { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

const GlassField = ({ label, id, children }: { label: string; id: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-white/90 text-sm font-medium">{label}</Label>
    {children}
  </div>
);

const GlowButton = ({ loading, label }: { loading: boolean; label: string }) => (
  <Button type="submit" disabled={loading}
    className="w-full h-11 font-semibold text-white border-0 bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#f97316] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]">
    {loading ? (
      <span className="flex items-center justify-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin" /> Please wait...
      </span>
    ) : label}
  </Button>
);

export default AdminLogin;
