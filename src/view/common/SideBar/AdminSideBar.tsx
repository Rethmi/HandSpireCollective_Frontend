// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard, Image, Users, Shapes } from "lucide-react";

// export default function AdminSidebar() {
//     const location = useLocation();

//     const navItems = [
//         { path: '/admin/mainContent', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
//         { path: '/admin/categories', label: 'Categories', icon: <Shapes className="w-5 h-5" /> },
//         { path: '/admin/users', label: 'Users', icon: <Users className="w-5 h-5" /> },
//     ];

//     return (
//         <nav className="h-full flex flex-col p-6 bg-[#D9E9CF] shadow-md rounded-r-2xl border-r border-gray-100">
//             {/* Header */}
//             <div className="mb-8">
//                 <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-800 via-purple-500 to-purple-600 bg-clip-text text-transparent">
//                     🎨 Hi Nethu
//                 </h2>
//             </div>

//             {/* Navigation Links  */}
//             <div className="flex-1 flex flex-col">
//                 <ul className="space-y-4 text-base">
//                     {navItems.map((item) => (
//                         <li key={item.path}>
//                             <Link
//                                 to={item.path}
//                                 className={`flex items-center gap-4 p-3 rounded-xl transition duration-300 font-semibold text-lg ${
//                                     location.pathname === item.path
//                                         ? 'bg-white-900 text-gray shadow-sm'
//                                         : 'text-gray-600 hover:bg-blue-100 hover:text-blue-900'
//                                 }`}
//                             >
//                                 {item.icon}
//                                 {item.label}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 <div className="flex-1"></div>
//             </div>

//             <div className="pt-6 border-t border-gray-200">
//                 <Link
//                     to="/"
//                     className="flex items-center justify-center w-full px-4 py-2 text-sm text-white
//                     bg-gradient-to-r from-gray-600 to-black
//                     hover:from-gray-600 hover:to-black
//                     rounded-xl shadow transition-all duration-300"
//                 >
//                     ← Back
//                 </Link>
//             </div>
//         </nav>
//     );
// }

import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Shapes, ArrowLeft, ShieldCheck } from "lucide-react";

export default function AdminSidebar() {
    const location = useLocation();

    const navItems = [
        { path: '/admin/mainContent', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
        { path: '/admin/categories', label: 'Categories', icon: <Shapes className="w-5 h-5" /> },
        { path: '/admin/users', label: 'Users', icon: <Users className="w-5 h-5" /> },
    ];

    return (
        <nav className="h-full flex flex-col p-6 bg-slate-900 text-slate-300 shadow-2xl border-r border-slate-800">
            {/* Admin Profile Header */}
            <div className="mb-10 px-2">
                <div className="flex items-center space-x-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Admin Portal</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                    Hi, <span className="text-amber-500">Rethmi</span>
                </h2>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col">
                <ul className="space-y-2">
                    {navItems.map((item) => {
                        const active = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-4 p-3.5 rounded-xl transition-all duration-200 font-medium ${
                                        active
                                            ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/20'
                                            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`}
                                >
                                    {item.icon}
                                    <span className="text-sm">{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Bottom Section */}
            <div className="pt-6 border-t border-slate-800">
                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Exit to Gallery
                </Link>
            </div>
        </nav>
    );
}