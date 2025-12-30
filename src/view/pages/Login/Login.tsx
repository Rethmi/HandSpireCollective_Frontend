// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { backendApi } from "../../../api.ts";
// import { getUserFromToken } from "../../../Auth/auth.ts";
// import type { UserData } from "../../../model/userData.ts";
// import { Palette, Mail, Lock, LogIn, ArrowLeft, Loader2, Sparkle } from "lucide-react";
// import { useState } from "react";

// type FormData = {
//     email: string;
//     password: string;
// };

// export function Login() {
//     const navigate = useNavigate();
//     const { register, handleSubmit } = useForm<FormData>();
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const authenticateUser = async (data: FormData) => {
//         try {
//             setLoading(true);
//             setError('');

//             const userCredentials = {
//                 email: data.email,
//                 password: data.password
//             };

//             const response = await backendApi.post('/auth/login', userCredentials);
//             const accessToken = response.data.accessToken;
//             const refreshToken = response.data.refreshToken;

//             localStorage.setItem('token', accessToken);
//             localStorage.setItem('refreshToken', refreshToken);

//             const user: UserData = getUserFromToken(accessToken);
//             localStorage.setItem('username', user.username as string);
//             localStorage.setItem('role', user.role as string);

//             navigate('/');
//         } catch (error) {
//             console.error('Login error:', error);
//             setError('Invalid email or password. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex font-['Inter',_sans-serif] bg-white">
//             {/* Left Side - Professional Branding Area */}
//             <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-16 flex-col justify-between relative overflow-hidden">
//                 {/* Background Texture */}
//                 <div className="absolute inset-0 opacity-10 pointer-events-none">
//                     <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
//                     <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-slate-500 rounded-full blur-[120px]"></div>
//                 </div>

//                 <div className="relative z-10">
//                     <div className="flex items-center space-x-3 mb-12">
//                         <div className="bg-amber-600 p-2.5 rounded-xl shadow-lg shadow-amber-900/20">
//                             <Palette className="w-6 h-6 text-white" />
//                         </div>
//                         <span className="text-xl font-bold text-white tracking-tight">HandyCraft</span>
//                     </div>

//                     <div className="max-w-md">
//                         <h2 className="text-5xl font-black text-white leading-tight mb-6">
//                             Start Your <span className="text-amber-500">Creative</span> Journey.
//                         </h2>
//                         <p className="text-lg text-slate-400 font-medium leading-relaxed">
//                             Access your personalized dashboard, manage your craft collection, and connect with artisans worldwide.
//                         </p>
//                     </div>
//                 </div>

//                 <div className="relative z-10">
//                     <div className="flex items-center gap-2 text-slate-500 text-sm font-bold tracking-widest uppercase">
//                         <Sparkle className="w-4 h-4 text-amber-500" />
//                         Est. 2024 • Artisans Community
//                     </div>
//                 </div>
//             </div>

//             {/* Right Side - Login Form */}
//             <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
//                 <div className="w-full max-w-sm">
//                     {/* Header */}
//                     <div className="mb-10">
//                         <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h2>
//                         <p className="text-slate-500 font-medium">Please enter your details to sign in</p>
//                     </div>

//                     {/* Error Display */}
//                     {error && (
//                         <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center gap-3 text-rose-600 animate-in slide-in-from-top-2 duration-300">
//                             <AlertCircleIcon size={18} />
//                             <p className="text-xs font-bold">{error}</p>
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit(authenticateUser)} className="space-y-5">
//                         {/* Email */}
//                         <div className="space-y-1.5">
//                             <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
//                             <div className="relative group">
//                                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
//                                 <input
//                                     type="email"
//                                     {...register("email", { required: true })}
//                                     className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
//                                     placeholder="name@company.com"
//                                     disabled={loading}
//                                 />
//                             </div>
//                         </div>

//                         {/* Password */}
//                         <div className="space-y-1.5">
//                             <div className="flex justify-between items-center px-1">
//                                 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
//                                 <a href="#" className="text-[11px] font-bold text-amber-600 hover:text-amber-700">Forgot password?</a>
//                             </div>
//                             <div className="relative group">
//                                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
//                                 <input
//                                     type="password"
//                                     {...register("password", { required: true })}
//                                     className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
//                                     placeholder="••••••••"
//                                     disabled={loading}
//                                 />
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                         >
//                             {loading ? (
//                                 <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
//                             ) : (
//                                 <LogIn className="w-4 h-4 text-amber-500" />
//                             )}
//                             {loading ? 'Authenticating...' : 'Sign In to Account'}
//                         </button>

//                         {/* Footer Links */}
//                         <div className="pt-8 text-center space-y-4">
//                             <p className="text-sm text-slate-500 font-medium">
//                                 Don't have an account?{' '}
//                                 <a href="/register" className="text-amber-600 font-bold hover:underline underline-offset-4">Join for Free</a>
//                             </p>
                            
//                             <button
//                                 type="button"
//                                 onClick={() => navigate("/")}
//                                 className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors group"
//                             >
//                                 <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
//                                 Return to Gallery
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Icon helper for the error message
// function AlertCircleIcon({ size }: { size: number }) {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//     );
// }
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { backendApi } from "../../../api.ts";
import { getUserFromToken } from "../../../Auth/auth.ts";
import type { UserData } from "../../../model/userData.ts";
import { Palette, Mail, Lock, LogIn, ArrowLeft, Loader2, Sparkle } from "lucide-react";
import { useState } from "react";
// 1. SweetAlert2 import කරන්න
import Swal from 'sweetalert2';

type FormData = {
    email: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormData>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const authenticateUser = async (data: FormData) => {
        try {
            setLoading(true);
            setError('');

            const userCredentials = {
                email: data.email,
                password: data.password
            };

            const response = await backendApi.post('/auth/login', userCredentials);
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const user: UserData = getUserFromToken(accessToken);
            localStorage.setItem('username', user.username as string);
            localStorage.setItem('role', user.role as string);

            // 2. සාර්ථක වූ විට පෙන්වන SweetAlert පණිවිඩය
            await Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: `Welcome back, ${user.username}!`,
                showConfirmButton: false,
                timer: 2000, // තත්පර 2කින් ඉබේම වැසී යයි
                background: '#fff',
                iconColor: '#d97706', // ඔබේ amber-600 වර්ණයට ගැලපෙන ලෙස
            });

            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex font-['Inter',_sans-serif] bg-white">
            {/* Left Side - Professional Branding Area */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-16 flex-col justify-between relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-slate-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-12">
                        <div className="bg-amber-600 p-2.5 rounded-xl shadow-lg shadow-amber-900/20">
                            <Palette className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">HandyCraft</span>
                    </div>

                    <div className="max-w-md">
                        <h2 className="text-5xl font-black text-white leading-tight mb-6">
                            Start Your <span className="text-amber-500">Creative</span> Journey.
                        </h2>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">
                            Access your personalized dashboard, manage your craft collection, and connect with artisans worldwide.
                        </p>
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold tracking-widest uppercase">
                        <span className="w-4 h-4 text-amber-500"><Sparkle className="w-4 h-4" /></span>
                        Est. 2024 • Artisans Community
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-sm">
                    {/* Header */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h2>
                        <p className="text-slate-500 font-medium">Please enter your details to sign in</p>
                    </div>

                    {/* Error Display */}
                    {error && (
                        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center gap-3 text-rose-600 animate-in slide-in-from-top-2 duration-300">
                            <AlertCircleIcon size={18} />
                            <p className="text-xs font-bold">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit(authenticateUser)} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="name@company.com"
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                                <a href="#" className="text-[11px] font-bold text-amber-600 hover:text-amber-700">Forgot password?</a>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                            ) : (
                                <LogIn className="w-4 h-4 text-amber-500" />
                            )}
                            {loading ? 'Authenticating...' : 'Sign In to Account'}
                        </button>

                        {/* Footer Links */}
                        <div className="pt-8 text-center space-y-4">
                            <p className="text-sm text-slate-500 font-medium">
                                Don't have an account?{' '}
                                <a href="/register" className="text-amber-600 font-bold hover:underline underline-offset-4">Join for Free</a>
                            </p>
                            
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors group"
                            >
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                                Return to Gallery
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function AlertCircleIcon({ size }: { size: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    );
}