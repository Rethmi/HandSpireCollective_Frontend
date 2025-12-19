// export function Contact() {
//     return (
//         <></>
//     );
// }
import React, { useState } from 'react';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    MessageSquare, 
    Clock, 
    ChevronRight,
    Loader2,
    Sparkles
} from 'lucide-react';

export function Contact() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-['Inter',_sans-serif]">
            {/* Header Section */}
            <div className="bg-slate-900 pt-20 pb-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
                </div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-500/20">
                        <Sparkles size={12} /> Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        We'd love to hear from you
                    </h1>
                    <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
                        Have a question about a project or want to collaborate? Our team of artisans is here to help.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Contact Info Cards */}
                    <div className="space-y-4 lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:border-amber-200 transition-all">
                            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Email Us</h3>
                            <p className="text-slate-500 text-sm font-medium">hello@handycraft.com</p>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:border-amber-200 transition-all">
                            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Call Support</h3>
                            <p className="text-slate-500 text-sm font-medium">+94 11 234 5678</p>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:border-amber-200 transition-all">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-4 group-hover:text-slate-900 transition-all">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Working Hours</h3>
                            <p className="text-slate-500 text-sm font-medium">Mon - Fri: 9am - 6pm</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                            <div className="p-8 md:p-12">
                                {submitted ? (
                                    <div className="text-center py-10 animate-in zoom-in duration-300">
                                        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Send size={40} />
                                        </div>
                                        <h2 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h2>
                                        <p className="text-slate-500 font-medium mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                                        <button 
                                            onClick={() => setSubmitted(false)}
                                            className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                                <input 
                                                    required
                                                    type="text" 
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all" 
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                                <input 
                                                    required
                                                    type="email" 
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all" 
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                            <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all appearance-none cursor-pointer">
                                                <option>General Inquiry</option>
                                                <option>Project Support</option>
                                                <option>Partnership</option>
                                                <option>Report an Issue</option>
                                            </select>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                            <textarea 
                                                required
                                                rows={5} 
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all resize-none" 
                                                placeholder="How can we help you today?"
                                            ></textarea>
                                        </div>

                                        <button 
                                            disabled={loading}
                                            type="submit" 
                                            className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-slate-200 transition-all active:scale-[0.98] disabled:opacity-70"
                                        >
                                            {loading ? (
                                                <Loader2 size={20} className="animate-spin text-amber-500" />
                                            ) : (
                                                <MessageSquare size={20} className="text-amber-500" />
                                            )}
                                            {loading ? 'Dispatching...' : 'Send Message'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}