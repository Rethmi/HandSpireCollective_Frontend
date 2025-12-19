// import React, { useState } from 'react';
// import { User, Mail, Lock, Eye, EyeOff, UserPlus, CheckCircle, AlertCircle, Palette, Scissors, Sparkles, PaintBucket } from 'lucide-react';

// interface UserDto {
//     id?: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//     password?: string;
//     role: 'USER';
// }

// const UserRegisterForm = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         firstName: '',
//         lastName: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState('');
//     const [registeredUser, setRegisteredUser] = useState<UserDto | null>(null);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         if (error) {
//             setError('');
//         }
//     };

//     const validateForm = () => {
//         const { email, firstName, lastName, password, confirmPassword } = formData;

//         if (!email || !firstName || !lastName || !password || !confirmPassword) {
//             return 'Please fill in all required fields';
//         }

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             return 'Please enter a valid email address';
//         }

//         if (firstName.trim().length < 2) {
//             return 'First name must be at least 2 characters long';
//         }

//         if (lastName.trim().length < 2) {
//             return 'Last name must be at least 2 characters long';
//         }

//         if (password.length < 6) {
//             return 'Password must be at least 6 characters long';
//         }

//         if (password !== confirmPassword) {
//             return 'Passwords do not match';
//         }

//         return null;
//     };

//     const registerUser = async (userData: Omit<UserDto, 'id'>) => {
//         try {
//             console.log('Registering user with data:', userData);

//             const response = await fetch('/api/user/save', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(userData),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json().catch(() => ({}));
//                 throw new Error(errorData.error || errorData.message || `Registration failed: ${response.status}`);
//             }

//             const result = await response.json();
//             console.log('Registration successful:', result);
//             return result;

//         } catch (error) {
//             console.error('Registration error:', error);
//             if (error instanceof TypeError && error.message.includes('fetch')) {
//                 throw new Error('Network error: Unable to connect to server. Please check your connection.');
//             }
//             throw error;
//         }
//     };

//     const handleSubmit = async () => {
//         const validationError = validateForm();
//         if (validationError) {
//             setError(validationError);
//             return;
//         }

//         setLoading(true);
//         setError('');
//         setSuccess(false);

//         try {
//             const userData: Omit<UserDto, 'id'> = {
//                 email: formData.email.trim(),
//                 firstName: formData.firstName.trim(),
//                 lastName: formData.lastName.trim(),
//                 password: formData.password,
//                 role: 'USER'
//             };

//             const result = await registerUser(userData);

//             setSuccess(true);
//             setRegisteredUser(result);

//             setFormData({
//                 email: '',
//                 firstName: '',
//                 lastName: '',
//                 password: '',
//                 confirmPassword: ''
//             });

//             setTimeout(() => {
//                 window.location.href = '/login';
//             }, 3000);

//         } catch (error) {
//             console.error('Registration error:', error);
//             setError(error instanceof Error ? error.message : 'Registration failed. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const getPasswordStrength = (password: string) => {
//         if (password.length === 0) return { strength: 0, label: '', color: '' };
//         if (password.length < 6) return { strength: 25, label: 'Weak', color: 'bg-red-500' };
//         if (password.length < 8) return { strength: 50, label: 'Fair', color: 'bg-yellow-500' };
//         if (password.length < 12) return { strength: 75, label: 'Good', color: 'bg-blue-500' };
//         return { strength: 100, label: 'Strong', color: 'bg-green-500' };
//     };

//     const passwordStrength = getPasswordStrength(formData.password);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 font-['Inter',_sans-serif] relative overflow-hidden">
//             {/* Animated Background Elements */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute top-20 left-10 text-pink-500/20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
//                     <Scissors className="w-16 h-16" />
//                 </div>
//                 <div className="absolute top-40 right-20 text-purple-500/20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
//                     <PaintBucket className="w-20 h-20" />
//                 </div>
//                 <div className="absolute bottom-32 left-1/4 text-blue-500/20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
//                     <Palette className="w-14 h-14" />
//                 </div>
//                 <div className="absolute top-1/3 right-1/4 text-pink-500/20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.8s' }}>
//                     <Sparkles className="w-12 h-12" />
//                 </div>
//                 <div className="absolute bottom-20 right-1/3 text-purple-500/20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.2s' }}>
//                     <Scissors className="w-10 h-10" />
//                 </div>
//             </div>

//             {/* Glowing orbs */}
//             <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>

//             <div className="w-full max-w-md relative z-10">
//                 {/* Success Message */}
//                 {success && registeredUser && (
//                     <div className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-xl animate-slideDown">
//                         <div className="flex items-center gap-3">
//                             <CheckCircle size={24} className="animate-bounce" />
//                             <div>
//                                 <h3 className="font-bold text-lg">Registration Successful!</h3>
//                                 <p className="text-green-100 text-sm">
//                                     Welcome {registeredUser.firstName}! Redirecting to login...
//                                 </p>
//                                 {registeredUser.id && (
//                                     <p className="text-green-100 text-xs mt-1">
//                                         User ID: {registeredUser.id}
//                                     </p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Error Message */}
//                 {error && (
//                     <div className="mb-6 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-2xl shadow-xl animate-shake">
//                         <div className="flex items-center gap-3">
//                             <AlertCircle size={24} />
//                             <div className="flex-1">
//                                 <h3 className="font-bold">Registration Failed</h3>
//                                 <p className="text-red-100 text-sm">{error}</p>
//                             </div>
//                             <button
//                                 onClick={() => setError('')}
//                                 className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
//                             >
//                                 ×
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 <div
//                     className="backdrop-blur-lg border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
//                     style={{ backgroundColor: 'rgba(31, 41, 55, 0.95)' }}
//                 >
//                     {/* Header */}
//                     <div className="p- text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a8a, #0f766e, #164e63)' }}>
//                         <div className="absolute inset-0 bg-blue-900/20 animate-pulse"></div>
//                         <div className="relative z-10">
//                             <div className="flex justify-center mb-3">
//                                 <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl animate-bounce">
//                                     <Palette className="w-8 h-8 text-white" />
//                                 </div>
//                             </div>
//                             <h2 className="text-2xl font-bold text-white tracking-wide font-['Playfair_Display',_serif]">
//                                 Join Our Creative Community
//                             </h2>
//                             <p className="text-purple-100 text-sm mt-2 font-light">
//                                 Start your artistic journey today
//                             </p>
//                         </div>
//                     </div>

//                     {/* Form Content */}
//                     <div className="p-8">
//                         <div className="space-y-5">
//                             {/* Email Field */}
//                             <div className="group">
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                                     <Mail size={16} className="text-purple-500" />
//                                     Email Address
//                                     <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:border-purple-300"
//                                     placeholder="Enter Your Email"
//                                     disabled={loading}
//                                     required
//                                 />
//                             </div>

//                             {/* Name Fields */}
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="group">
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                                         <User size={16} className="text-pink-500" />
//                                         First Name
//                                         <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={formData.firstName}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all hover:border-purple-300"
//                                         placeholder="First Name"
//                                         disabled={loading}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="group">
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                                         <User size={16} className="text-blue-500" />
//                                         Last Name
//                                         <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={formData.lastName}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-purple-300"
//                                         placeholder="Last Name"
//                                         disabled={loading}
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             {/* Password Field */}
//                             <div className="group">
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                                     <Lock size={16} className="text-purple-500" />
//                                     Password
//                                     <span className="text-red-500">*</span>
//                                 </label>
//                                 <div className="relative">
//                                     <input
//                                         type={showPassword ? "text" : "password"}
//                                         name="password"
//                                         value={formData.password}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 pr-12 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:border-purple-300"
//                                         placeholder="Create a strong password"
//                                         disabled={loading}
//                                         required
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
//                                         disabled={loading}
//                                     >
//                                         {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                                     </button>
//                                 </div>

//                                 {formData.password && (
//                                     <div className="mt-3">
//                                         <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
//                                             <span className="font-medium">Password Strength</span>
//                                             <span className={`font-bold ${
//                                                 passwordStrength.strength < 50 ? 'text-red-500' :
//                                                     passwordStrength.strength < 75 ? 'text-yellow-500' :
//                                                         passwordStrength.strength < 100 ? 'text-blue-500' : 'text-green-500'
//                                             }`}>
//                                                 {passwordStrength.label}
//                                             </span>
//                                         </div>
//                                         <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
//                                             <div
//                                                 className={`h-full transition-all duration-500 ${passwordStrength.color}`}
//                                                 style={{ width: `${passwordStrength.strength}%` }}
//                                             />
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Confirm Password Field */}
//                             <div className="group">
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                                     <Lock size={16} className="text-blue-500" />
//                                     Confirm Password
//                                     <span className="text-red-500">*</span>
//                                 </label>
//                                 <div className="relative">
//                                     <input
//                                         type={showConfirmPassword ? "text" : "password"}
//                                         name="confirmPassword"
//                                         value={formData.confirmPassword}
//                                         onChange={handleInputChange}
//                                         className={`w-full px-4 py-3 pr-12 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
//                                             formData.confirmPassword && formData.password !== formData.confirmPassword
//                                                 ? 'border-red-300 focus:ring-red-500 focus:border-transparent'
//                                                 : formData.confirmPassword && formData.password === formData.confirmPassword
//                                                     ? 'border-green-300 focus:ring-green-500 focus:border-transparent'
//                                                     : 'border-purple-200 focus:ring-purple-500 focus:border-transparent hover:border-purple-300'
//                                         }`}
//                                         placeholder="Confirm your password"
//                                         disabled={loading}
//                                         required
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
//                                         disabled={loading}
//                                     >
//                                         {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                                     </button>
//                                 </div>
//                                 {formData.confirmPassword && formData.password !== formData.confirmPassword && (
//                                     <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
//                                         <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
//                                         Passwords do not match
//                                     </p>
//                                 )}
//                                 {formData.confirmPassword && formData.password === formData.confirmPassword && (
//                                     <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
//                                         <CheckCircle size={12} />
//                                         Passwords match
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Submit Button */}
//                             <div className="pt-4">
//                                 <button
//                                     type="button"
//                                     onClick={handleSubmit}
//                                     disabled={loading}
//                                     className="w-full py-4 px-6 hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02]
//                                     hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 text-lg"
//                                     style={{ background: 'linear-gradient(to right, #1e3a8a, #0f766e, #164e63)' }}
//                                 >
//                                     {loading ? (
//                                         <>
//                                             <div className="animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent"></div>
//                                             <span>Creating Your Account...</span>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <UserPlus size={20} />
//                                             <span>Create Account</span>
//                                         </>
//                                     )}
//                                 </button>
//                             </div>

//                             {/* Sign In Link */}
//                             <div className="text-center pt-6 border-t border-gray-200">
//                                 <p className="text-gray-600 text-sm">
//                                     Already have an account?{' '}
//                                     <a href="/login" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors hover:underline">
//                                         Sign In
//                                     </a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             <style>{`
//                 @keyframes slideDown {
//                     from {
//                         opacity: 0;
//                         transform: translateY(-20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes shake {
//                     0%, 100% { transform: translateX(0); }
//                     25% { transform: translateX(-10px); }
//                     75% { transform: translateX(10px); }
//                 }

//                 .animate-slideDown {
//                     animation: slideDown 0.5s ease-out;
//                 }

//                 .animate-shake {
//                     animation: shake 0.5s ease-in-out;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default UserRegisterForm;
import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, UserPlus, CheckCircle, AlertCircle, Palette, Loader2, ArrowLeft, Sparkle } from 'lucide-react';

interface UserDto {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    password?: string;
    role: 'USER';
}

const UserRegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [registeredUser, setRegisteredUser] = useState<UserDto | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) {
            setError('');
        }
    };

    const validateForm = () => {
        const { email, firstName, lastName, password, confirmPassword } = formData;
        if (!email || !firstName || !lastName || !password || !confirmPassword) return 'Please fill in all required fields';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        if (firstName.trim().length < 2) return 'First name must be at least 2 characters long';
        if (lastName.trim().length < 2) return 'Last name must be at least 2 characters long';
        if (password.length < 6) return 'Password must be at least 6 characters long';
        if (password !== confirmPassword) return 'Passwords do not match';
        return null;
    };

    const registerUser = async (userData: Omit<UserDto, 'id'>) => {
        const response = await fetch('/api/user/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || errorData.message || `Registration failed: ${response.status}`);
        }
        return await response.json();
    };

    const handleSubmit = async () => {
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const userData: Omit<UserDto, 'id'> = {
                email: formData.email.trim(),
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                password: formData.password,
                role: 'USER'
            };
            const result = await registerUser(userData);
            setSuccess(true);
            setRegisteredUser(result);
            setFormData({ email: '', firstName: '', lastName: '', password: '', confirmPassword: '' });
            setTimeout(() => { window.location.href = '/login'; }, 3000);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const getPasswordStrength = (password: string) => {
        if (password.length === 0) return { strength: 0, label: '', color: '' };
        if (password.length < 6) return { strength: 25, label: 'Weak', color: 'bg-rose-500' };
        if (password.length < 8) return { strength: 50, label: 'Fair', color: 'bg-amber-500' };
        if (password.length < 12) return { strength: 75, label: 'Good', color: 'bg-blue-500' };
        return { strength: 100, label: 'Strong', color: 'bg-emerald-500' };
    };

    const passwordStrength = getPasswordStrength(formData.password);

    return (
        <div className="min-h-screen flex font-['Inter',_sans-serif] bg-white">
            {/* Left Side - Professional Branding Area */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-16 flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-slate-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-12 cursor-pointer" onClick={() => window.location.href = '/'}>
                        <div className="bg-amber-600 p-2.5 rounded-xl shadow-lg">
                            <Palette className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">HandyCraft</span>
                    </div>

                    <div className="max-w-md">
                        <h2 className="text-5xl font-black text-white leading-tight mb-6">
                            Join the <span className="text-amber-500">Artisan</span> Elite.
                        </h2>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">
                            Create your account to showcase your masterpieces, follow expert tutorials, and build your creative legacy.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-slate-500 text-sm font-bold tracking-widest uppercase">
                    <Sparkle className="w-4 h-4 text-amber-500" />
                    Secure Artisan Registration
                </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
                <div className="w-full max-w-md py-12">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-black text-slate-900 mb-2">Create Account</h2>
                        <p className="text-slate-500 font-medium">Get started with your creative journey today</p>
                    </div>

                    {/* Success Message */}
                    {success && (
                        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3 text-emerald-700 animate-in slide-in-from-top-2">
                            <CheckCircle size={20} />
                            <p className="text-sm font-bold tracking-tight">Registration successful! Redirecting...</p>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center justify-between text-rose-600 animate-in shake">
                            <div className="flex items-center gap-3">
                                <AlertCircle size={20} />
                                <p className="text-sm font-bold tracking-tight">{error}</p>
                            </div>
                            <button onClick={() => setError('')} className="text-rose-400 hover:text-rose-600">×</button>
                        </div>
                    )}

                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="Jane"
                                    disabled={loading}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="Doe"
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="artisan@example.com"
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Choose Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    disabled={loading}
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-600">
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {formData.password && (
                                <div className="px-1 pt-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Strength: {passwordStrength.label}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full transition-all duration-500 ${passwordStrength.color}`} style={{ width: `${passwordStrength.strength}%` }}></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Confirm Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    disabled={loading}
                                />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-600">
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full mt-4 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin text-amber-500" /> : <UserPlus className="w-4 h-4 text-amber-500" />}
                            {loading ? 'Creating Account...' : 'Complete Registration'}
                        </button>

                        <div className="pt-8 text-center space-y-4">
                            <p className="text-sm text-slate-500 font-medium">
                                Already a member?{' '}
                                <a href="/login" className="text-amber-600 font-bold hover:underline underline-offset-4">Sign In</a>
                            </p>
                            
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors group"
                            >
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-in.shake { animation: shake 0.3s ease-in-out; }
            `}</style>
        </div>
    );
};

export default UserRegisterForm;