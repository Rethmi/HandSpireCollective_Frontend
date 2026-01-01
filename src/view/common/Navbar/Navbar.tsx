// import {useEffect, useState} from 'react';
// import {Menu, Palette} from "lucide-react";
// import {Link} from "react-router-dom";

// export const Navbar = () => {

//     const [userRole , setUserRole]  = useState<string | null>(null);
//     useEffect(()=>{

//          const storedRole = localStorage.getItem("role");

//          setUserRole(storedRole)



//     } , [])
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Logo */}
//                     <div className="flex items-center space-x-2">
//                         <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-xl">
//                             <Palette className="w-6 h-6 text-white" />
//                         </div>
//                         <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//               CraftGallery
//             </span>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center space-x-8">
//                         <a href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
//                             Home
//                         </a>
//                         {/*<a href="/viewProjects" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">*/}
//                         {/*    Browse Projects*/}
//                         {/*</a>*/}
//                         <a href="/addProjects" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
//                             Upload
//                         </a>
//                         <Link to="/my-projects" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
//                             My Projects
//                         </Link>
//                         <a href="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
//                             Contact
//                         </a>

//                         { userRole === "ADMIN" ? (
//                             <a href="/admin/mainContent"
//                                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">Go To
//                                 Dashboard</a>
//                         ) : (
//                             <p>

//                         </p> )}
//                         <div>
//                             <Link className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium" to="/login">
//                                 <button className="w-full mt-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium">
//                                     Sign In
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={toggleMenu}
//                             className="text-gray-700 hover:text-purple-600"
//                         >
//                             <Menu className="w-6 h-6" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 <div id="mobile-menu" className={`md:hidden bg-white/90 backdrop-blur-md rounded-b-2xl shadow-lg transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
//                     <div className="px-2 pt-2 pb-3 space-y-1">
//                         <a href="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors">
//                             Home
//                         </a>
//                         <a href="/viewProjects" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
//                             Browse Projects
//                         </a>
//                         <a href="/addProjects" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
//                             Upload
//                         </a>
//                         <Link to="/my-projects" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
//                             My Projects
//                         </Link>
//                         <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
//                             Contact
//                         </a>

//                         { userRole === "ADMIN" ? (
//                             <a href="/admin/mainContent"
//                                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">Go To
//                                 Dashboard</a>
//                         ) : (
//                             <p>

//                             </p> )}
//                         </div>
//                         <div>
//                             <Link className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium" to="/login">
//                                 <button className="w-full mt-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium">
//                                     Sign In
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//         </nav>
//     );
// };

import { useEffect, useState } from 'react';
import { Menu, Palette, X, LayoutDashboard, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Home, PlusSquare, FolderHeart, Mail } from 'lucide-react';

export const Navbar = () => {
    const [userRole, setUserRole] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const storedRole = localStorage.getItem("role");
        setUserRole(storedRole);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Helper to check active route
    const isActive = (path: string) => location.pathname === path;

    const navLinkClass = (path: string) => `
        text-sm font-semibold transition-all duration-200
        ${isActive(path) 
            ? "text-amber-700 underline underline-offset-8 decoration-2" 
            : "text-gray-600 hover:text-amber-600"}
    `;

    return (
        <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-[100] border-b border-amber-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                            <Palette className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            Handy<span className="text-amber-600">Craft</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                       <Link to="/" className={navLinkClass("/")}>
  <Home size={13} />
  <span>Home</span>
</Link>

<Link to="/addProjects" className={navLinkClass("/addProjects")}>
  <PlusSquare size={13} />
  <span>Publish</span>
</Link>

<Link to="/my-projects" className={navLinkClass("/my-projects")}>
  <FolderHeart size={13} />
  <span>My Stuff</span>
</Link>

<Link to="/contact" className={navLinkClass("/contact")}>
  <Mail size={13} />
  <span>Contact</span>
</Link>
                        {userRole === "ADMIN" && (
                            <Link to="/admin/mainContent" className="flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 px-3 py-1 rounded-full">
                                <LayoutDashboard className="w-4 h-4 mr-1" />
                                Admin
                            </Link>
                        )}
                    </div>

                    {/* Auth Section */}
                    <div className="hidden md:flex items-center space-x-4 border-l pl-8 border-gray-100">
                        <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors">
                            Sign In
                        </Link>
                        <Link to="/register" className="bg-amber-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-amber-700 transition-all shadow-md hover:shadow-amber-100">
                            Join Free
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="p-2 text-gray-600">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
                    <Link to="/" className="block px-3 py-3 text-base font-medium text-gray-700 border-b border-gray-50">Home</Link>
                    <Link to="/addProjects" className="block px-3 py-3 text-base font-medium text-gray-700 border-b border-gray-50">Upload</Link>
                    <Link to="/my-projects" className="block px-3 py-3 text-base font-medium text-gray-700 border-b border-gray-50">My Collection</Link>
                    
                    {userRole === "ADMIN" && (
                        <Link to="/admin/mainContent" className="block px-3 py-3 text-base font-medium text-orange-600">Dashboard</Link>
                    )}
                    
                    <div className="pt-4 grid grid-cols-2 gap-3">
                        <Link to="/login" className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 text-sm font-bold text-gray-700">
                            Sign In
                        </Link>
                        <Link to="/register" className="flex items-center justify-center px-4 py-3 rounded-lg bg-amber-600 text-white text-sm font-bold">
                            Join Free
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};