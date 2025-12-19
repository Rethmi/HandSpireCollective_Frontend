// import { Palette } from 'lucide-react';

// export const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <div className="flex flex-col md:flex-row justify-between items-center">
//                     <div className="flex items-center space-x-2 mb-4 md:mb-0">
//                         <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-xl">
//                             <Palette className="w-6 h-6 text-white" />
//                         </div>
//                         <span className="text-2xl font-bold">CraftGallery</span>
//                     </div>
//                     <div className="flex space-x-6 text-gray-400">
//                         <a href="#" className="hover:text-white transition-colors">Privacy</a>
//                         <a href="#" className="hover:text-white transition-colors">Terms</a>
//                         <a href="#" className="hover:text-white transition-colors">Support</a>
//                         <a href="#" className="hover:text-white transition-colors">Contact</a>
//                     </div>
//                 </div>
//                 <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//                     <p>&copy; 2025 CraftGallery. Made with love for creative minds everywhere.</p>
//                 </div>
//             </div>
//         </footer>
//     );
// };
import { Heart, Instagram, Twitter, Facebook, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-white text-xl font-bold flex items-center justify-center md:justify-start">
                            <span className="text-amber-500 mr-2">✦</span> 
                            HandyCraft
                        </h2>
                        <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            The world's leading community for creators, makers, and DIY enthusiasts.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex justify-center md:justify-start space-x-8 text-sm font-medium">
                        <a href="#" className="hover:text-amber-500 transition-colors">Discover</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Tutorials</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Community</a>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <div className="flex space-x-4">
                            <Instagram className="w-5 h-5 hover:text-amber-500 cursor-pointer" />
                            <Twitter className="w-5 h-5 hover:text-amber-500 cursor-pointer" />
                            <Facebook className="w-5 h-5 hover:text-amber-500 cursor-pointer" />
                        </div>
                        <div className="flex items-center text-xs">
                            <Mail className="w-3 h-3 mr-2" />
                            hello@handycraft.com
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p className="copyright">
                        © {new Date().getFullYear()} <span className="business-name text-white font-medium">HandyCraft</span>. All rights reserved.
                    </p>
                    <p className="mt-4 md:mt-0 flex items-center">
                        Made with <Heart className="w-3 h-3 mx-1 text-rose-500 fill-rose-500" /> for the community
                    </p>
                </div>
            </div>
        </footer>
    );
}