// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard, Users, Shapes, ArrowLeft, ShieldCheck, Settings, TrendingUp } from "lucide-react";

// export default function AdminSidebar() {
//   const location = useLocation();

//   const navItems = [
//     { path: '/admin/mainContent', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
//     { path: '/admin/categories', label: 'Categories', icon: <Shapes className="w-5 h-5" /> },
//     { path: '/admin/users', label: 'Users', icon: <Users className="w-5 h-5" /> },
//     { path: '/admin/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
//     { path: '/admin/reports', label: 'Reports', icon: <TrendingUp className="w-5 h-5" /> },
//   ];

//   return (
//     <nav className="h-full flex flex-col p-6 bg-slate-900 text-slate-300 shadow-2xl border-r border-slate-800">
      
//       {/* Admin Header */}
//       <div className="mb-10 px-2">
//         <div className="flex items-center space-x-2 mb-2">
//           <ShieldCheck className="w-5 h-5 text-amber-500" />
//           <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
//             Admin Portal
//           </span>
//         </div>
//         <h2 className="text-2xl font-bold text-white">
//           Hi, <span className="text-amber-500">Rethmi</span>
//         </h2>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex-1 flex flex-col">
//         <ul className="space-y-2">
//           {navItems.map((item) => {
//             const active = location.pathname === item.path;
//             return (
//               <li key={item.path}>
//                 <Link
//                   to={item.path}
//                   className={`flex items-center gap-4 p-3.5 rounded-lg transition-all duration-200 font-medium ${
//                     active
//                       ? 'bg-amber-600 text-white shadow-md shadow-amber-900/30 border-l-4 border-amber-500'
//                       : 'text-slate-400 hover:bg-slate-800 hover:text-white hover:translate-x-1'
//                   }`}
//                 >
//                   {item.icon}
//                   <span className="text-sm">{item.label}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* Bottom Section */}
//       <div className="pt-6 border-t border-slate-800">
//         <Link
//           to="/"
//           className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all shadow-inner group"
//         >
//           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//           Exit to Gallery
//         </Link>
//       </div>
//     </nav>
//   );
// }

import {  type FC, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Shapes, 
  ArrowLeft, 
  ShieldCheck, 
  Settings, 
  TrendingUp 
} from "lucide-react";

interface NavItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { path: '/admin/mainContent', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { path: '/admin/categories', label: 'Categories', icon: <Shapes className="w-5 h-5" /> },
  { path: '/admin/users', label: 'Users', icon: <Users className="w-5 h-5" /> },
  { path: '/admin/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  { path: '/admin/reports', label: 'Reports', icon: <TrendingUp className="w-5 h-5" /> },
];

const AdminSidebar: FC = () => {
  const location = useLocation();

  return (
    <nav className="h-full flex flex-col bg-slate-900 text-slate-300 shadow-2xl border-r border-slate-800 p-6">
      
      {/* Header Section */}
      <div className="mb-10 px-2">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Admin Portal
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
            R
          </div>
          <h2 className="text-2xl font-bold text-white">
            Hi, <span className="text-amber-500">Rethmi</span>
          </h2>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-4 p-3.5 rounded-lg transition-all duration-200 font-medium ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-900/30 border-l-4 border-amber-500'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white hover:translate-x-1'
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
          className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all shadow-inner group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Exit to Gallery
        </Link>
      </div>
    </nav>
  );
};

export default AdminSidebar;

