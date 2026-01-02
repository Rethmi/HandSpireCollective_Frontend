// // // // import { useEffect, useState } from 'react';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import {
// // // //     Search,
// // // //     Eye,
// // // //     Filter,
// // // //     SortAsc,
// // // //     SortDesc,
// // // //     X,
// // // //     Trash2,
// // // //     User,
// // // //     Mail,
// // // //     ShieldCheck,
// // // //     RefreshCw,
// // // //     AlertCircle,
// // // //     Users
// // // // } from 'lucide-react';

// // // // import type { RootState, AppDispatch } from '../../../store/store';
// // // // import {
// // // //     clearError,
// // // //     clearSelectedUser,
// // // //     deleteUser,
// // // //     fetchUsers,
// // // //     setSelectedUser,
// // // //     type UserDTO
// // // // } from "../../../slices/viewUsersSlice.ts";

// // // // const ViewUsersPage = () => {
// // // //     const dispatch = useDispatch<AppDispatch>();
// // // //     const { users, loading, error, selectedUser } = useSelector((state: RootState) => state.manageUsers);

// // // //     const [searchTerm, setSearchTerm] = useState('');
// // // //     const [sortBy, setSortBy] = useState<'firstName' | 'email' | 'id' | 'role' | 'username'>('firstName');
// // // //     const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
// // // //     const [showDetailModal, setShowDetailModal] = useState(false);
// // // //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// // // //     const [isSubmitting, setIsSubmitting] = useState(false);

// // // //     useEffect(() => {
// // // //         dispatch(fetchUsers());
// // // //     }, [dispatch]);

// // // //     const filteredAndSortedUsers = users
// // // //         .filter(user =>
// // // //             user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //             user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //             user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //             user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //             user.role?.toLowerCase().includes(searchTerm.toLowerCase())
// // // //         )
// // // //         .sort((a, b) => {
// // // //             let comparison = 0;
// // // //             switch (sortBy) {
// // // //                 case 'firstName': comparison = (a.firstName || '').localeCompare(b.firstName || ''); break;
// // // //                 case 'username': comparison = (a.username || '').localeCompare(b.username || ''); break;
// // // //                 case 'email': comparison = (a.email || '').localeCompare(b.email || ''); break;
// // // //                 case 'id': comparison = (a.id || 0) - (b.id || 0); break;
// // // //                 case 'role': comparison = (a.role || '').localeCompare(b.role || ''); break;
// // // //             }
// // // //             return sortOrder === 'asc' ? comparison : -comparison;
// // // //         });

// // // //     const handleUserView = (user: UserDTO) => {
// // // //         dispatch(setSelectedUser(user));
// // // //         setShowDetailModal(true);
// // // //     };

// // // //     const handleDeleteUser = (user: UserDTO) => {
// // // //         dispatch(setSelectedUser(user));
// // // //         setShowDeleteModal(true);
// // // //     };

// // // //     const handleConfirmDelete = async () => {
// // // //         if (!selectedUser?.id) return;
// // // //         setIsSubmitting(true);
// // // //         try {
// // // //             await dispatch(deleteUser(selectedUser.id)).unwrap();
// // // //             setShowDeleteModal(false);
// // // //             dispatch(clearSelectedUser());
// // // //         } catch (error) {
// // // //             console.error('Error deleting user:', error);
// // // //         } finally {
// // // //             setIsSubmitting(false);
// // // //         }
// // // //     };

// // // //     const closeDetailModal = () => {
// // // //         setShowDetailModal(false);
// // // //         dispatch(clearSelectedUser());
// // // //     };

// // // //     const closeDeleteModal = () => {
// // // //         setShowDeleteModal(false);
// // // //         dispatch(clearSelectedUser());
// // // //     };

// // // //     const getUserAvatar = (firstName?: string, lastName?: string) => {
// // // //         if (!firstName && !lastName) return '??';
// // // //         return ((firstName?.charAt(0) || '') + (lastName?.charAt(0) || '')).toUpperCase();
// // // //     };

// // // //     const getFullName = (firstName?: string, lastName?: string) => {
// // // //         return `${firstName || ''} ${lastName || ''}`.trim() || 'N/A';
// // // //     };

// // // //     const getRoleColor = (role?: string) => {
// // // //         switch (role?.toLowerCase()) {
// // // //             case 'admin': return 'bg-amber-100 text-amber-900 ring-1 ring-amber-200';
// // // //             case 'user': return 'bg-slate-100 text-slate-700 ring-1 ring-slate-200';
// // // //             default: return 'bg-gray-50 text-gray-600';
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="space-y-6 font-['Inter',_sans-serif] animate-in fade-in duration-500">
// // // //             {/* Header Card */}
// // // //             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
// // // //                 <div>
// // // //                     <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
// // // //                         <Users className="w-6 h-6 text-amber-600" />
// // // //                         User Directory
// // // //                     </h1>
// // // //                     <p className="text-sm text-slate-500 mt-1 font-medium">Manage artisan accounts and system access</p>
// // // //                 </div>
// // // //                 <div className="flex items-center gap-2">
// // // //                     <button 
// // // //                         onClick={() => dispatch(fetchUsers())} 
// // // //                         className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
// // // //                         disabled={loading}
// // // //                     >
// // // //                         <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
// // // //                     </button>
// // // //                     <div className="h-8 w-[1px] bg-slate-100 mx-2 hidden md:block"></div>
// // // //                     <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
// // // //                         {filteredAndSortedUsers.length} MEMBERS
// // // //                     </span>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Filter Bar */}
// // // //             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col lg:flex-row gap-4">
// // // //                 <div className="relative flex-1">
// // // //                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
// // // //                     <input
// // // //                         type="text"
// // // //                         placeholder="Search by name, email, or role..."
// // // //                         className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
// // // //                         value={searchTerm}
// // // //                         onChange={(e) => setSearchTerm(e.target.value)}
// // // //                     />
// // // //                 </div>
// // // //                 <div className="flex items-center gap-2">
// // // //                     <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-1">
// // // //                         <Filter size={14} className="text-slate-400" />
// // // //                         <select
// // // //                             value={sortBy}
// // // //                             onChange={(e) => setSortBy(e.target.value as any)}
// // // //                             className="bg-transparent text-sm font-semibold text-slate-700 outline-none py-1.5"
// // // //                         >
// // // //                             <option value="firstName">Name</option>
// // // //                             <option value="username">Username</option>
// // // //                             <option value="email">Email</option>
// // // //                             <option value="role">Role</option>
// // // //                             <option value="id">ID</option>
// // // //                         </select>
// // // //                     </div>
// // // //                     <button 
// // // //                         onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
// // // //                         className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors"
// // // //                     >
// // // //                         {sortOrder === 'asc' ? <SortAsc size={18} /> : <SortDesc size={18} />}
// // // //                     </button>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Error Message */}
// // // //             {error && (
// // // //                 <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl flex justify-between items-center animate-in slide-in-from-top-2">
// // // //                     <div className="flex items-center gap-3">
// // // //                         <AlertCircle size={18} />
// // // //                         <span className="text-sm font-semibold">{error}</span>
// // // //                     </div>
// // // //                     <button onClick={() => dispatch(clearError())} className="hover:bg-rose-100 p-1 rounded-md transition-colors"><X size={16}/></button>
// // // //                 </div>
// // // //             )}

// // // //             {/* Users Table */}
// // // //             <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
// // // //                 <div className="overflow-x-auto">
// // // //                     <table className="w-full text-left border-collapse">
// // // //                         <thead>
// // // //                             <tr className="bg-slate-50/50 border-b border-slate-100">
// // // //                                 <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Artisan</th>
// // // //                                 <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Contact Info</th>
// // // //                                 <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Status & Role</th>
// // // //                                 <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
// // // //                             </tr>
// // // //                         </thead>
// // // //                         <tbody className="divide-y divide-slate-50">
// // // //                             {loading ? (
// // // //                                 <tr><td colSpan={4} className="py-20 text-center text-slate-400 animate-pulse font-medium">Loading user data...</td></tr>
// // // //                             ) : filteredAndSortedUsers.length === 0 ? (
// // // //                                 <tr><td colSpan={4} className="py-20 text-center text-slate-400 font-medium">No users found matching your search.</td></tr>
// // // //                             ) : filteredAndSortedUsers.map((user) => (
// // // //                                 <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
// // // //                                     <td className="px-6 py-4">
// // // //                                         <div className="flex items-center gap-4">
// // // //                                             <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold ring-2 ring-slate-50">
// // // //                                                 {getUserAvatar(user.firstName, user.lastName)}
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <div className="text-sm font-bold text-slate-900">{getFullName(user.firstName, user.lastName)}</div>
// // // //                                                 <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-tighter">ID: #{user.id}</div>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </td>
// // // //                                     <td className="px-6 py-4">
// // // //                                         <div className="flex flex-col gap-1">
// // // //                                             <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
// // // //                                                 <Mail size={14} className="text-slate-300" />
// // // //                                                 {user.email}
// // // //                                             </div>
// // // //                                             <div className="text-xs text-slate-400 pl-5">@{user.username}</div>
// // // //                                         </div>
// // // //                                     </td>
// // // //                                     <td className="px-6 py-4 text-center">
// // // //                                         <span className={`inline-flex px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${getRoleColor(user.role)}`}>
// // // //                                             {user.role}
// // // //                                         </span>
// // // //                                     </td>
// // // //                                     <td className="px-6 py-4">
// // // //                                         <div className="flex justify-end gap-2">
// // // //                                             <button onClick={() => handleUserView(user)} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all" title="View Profile">
// // // //                                                 <Eye size={18} />
// // // //                                             </button>
// // // //                                             <button onClick={() => handleDeleteUser(user)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all" title="Delete User">
// // // //                                                 <Trash2 size={18} />
// // // //                                             </button>
// // // //                                         </div>
// // // //                                     </td>
// // // //                                 </tr>
// // // //                             ))}
// // // //                         </tbody>
// // // //                     </table>
// // // //                 </div>
// // // //             </div>

// // // //             {/* View Profile Modal */}
// // // //             {showDetailModal && selectedUser && (
// // // //                 <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
// // // //                     <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
// // // //                         <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
// // // //                             <h3 className="text-lg font-bold flex items-center gap-2">
// // // //                                 <ShieldCheck className="w-5 h-5 text-amber-500" />
// // // //                                 User Profile
// // // //                             </h3>
// // // //                             <button onClick={closeDetailModal} className="hover:rotate-90 transition-transform"><X size={20}/></button>
// // // //                         </div>
// // // //                         <div className="p-8 space-y-8">
// // // //                             <div className="flex items-center gap-5">
// // // //                                 <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center text-2xl font-black ring-4 ring-amber-50/50">
// // // //                                     {getUserAvatar(selectedUser.firstName, selectedUser.lastName)}
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <h4 className="text-2xl font-black text-slate-900 leading-tight">{getFullName(selectedUser.firstName, selectedUser.lastName)}</h4>
// // // //                                     <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${getRoleColor(selectedUser.role)}`}>
// // // //                                         {selectedUser.role}
// // // //                                     </span>
// // // //                                 </div>
// // // //                             </div>
                            
// // // //                             <div className="grid grid-cols-1 gap-4">
// // // //                                 <div className="space-y-1">
// // // //                                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
// // // //                                     <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">
// // // //                                         <Mail size={16} className="text-slate-400" />
// // // //                                         {selectedUser.email}
// // // //                                     </div>
// // // //                                 </div>
// // // //                                 <div className="space-y-1">
// // // //                                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Unique Username</label>
// // // //                                     <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">
// // // //                                         <User size={16} className="text-slate-400" />
// // // //                                         @{selectedUser.username}
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                         <div className="p-6 border-t border-slate-50 bg-slate-50/50 flex justify-end">
// // // //                             <button onClick={closeDetailModal} className="px-8 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-slate-100 transition-all">Dismiss</button>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             )}

// // // //             {/* Delete Confirmation Modal */}
// // // //             {showDeleteModal && selectedUser && (
// // // //                 <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in zoom-in-95 duration-200">
// // // //                     <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-8 text-center border border-slate-100">
// // // //                         <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
// // // //                             <Trash2 size={32} />
// // // //                         </div>
// // // //                         <h3 className="text-xl font-black text-slate-900 mb-2">Delete Account?</h3>
// // // //                         <p className="text-slate-500 text-sm mb-8 font-medium px-4">
// // // //                             You are about to remove <span className="font-bold text-slate-900">@{selectedUser.username}</span>. This artisan will lose all access to the gallery.
// // // //                         </p>
// // // //                         <div className="flex gap-3">
// // // //                             <button onClick={closeDeleteModal} className="flex-1 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all">Discard</button>
// // // //                             <button 
// // // //                                 onClick={handleConfirmDelete} 
// // // //                                 disabled={isSubmitting} 
// // // //                                 className="flex-1 py-3 text-sm font-bold bg-rose-600 text-white hover:bg-rose-700 rounded-xl shadow-lg shadow-rose-200 transition-all flex items-center justify-center gap-2"
// // // //                             >
// // // //                                 {isSubmitting ? <RefreshCw className="animate-spin w-4 h-4" /> : 'Confirm'}
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ViewUsersPage;

// // // import { useEffect, useState } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import {
// // //     Search,
// // //     Eye,
// // //     Filter,
// // //     SortAsc,
// // //     SortDesc,
// // //     X,
// // //     Trash2,
// // //     User,
// // //     Mail,
// // //     ShieldCheck,
// // //     RefreshCw,
// // //     AlertCircle,
// // //     Users
// // // } from 'lucide-react';

// // // import type { RootState, AppDispatch } from '../../../store/store';
// // // import {
// // //     clearError,
// // //     clearSelectedUser,
// // //     deleteUser,
// // //     fetchUsers,
// // //     setSelectedUser,
// // //     type UserDTO
// // // } from "../../../slices/viewUsersSlice.ts";

// // // const ViewUsersPage = () => {
// // //     const dispatch = useDispatch<AppDispatch>();
// // //     const { users, loading, error, selectedUser } = useSelector(
// // //         (state: RootState) => state.manageUsers
// // //     );

// // //     const [searchTerm, setSearchTerm] = useState('');
// // //     const [sortBy, setSortBy] = useState<'firstName' | 'email' | 'id' | 'role' | 'username'>('firstName');
// // //     const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
// // //     const [showDetailModal, setShowDetailModal] = useState(false);
// // //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// // //     const [isSubmitting, setIsSubmitting] = useState(false);

// // //     useEffect(() => {
// // //         dispatch(fetchUsers());
// // //     }, [dispatch]);

// // //     const filteredAndSortedUsers = users
// // //         .filter(user =>
// // //             user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //             user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //             user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //             user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //             user.role?.toLowerCase().includes(searchTerm.toLowerCase())
// // //         )
// // //         .sort((a, b) => {
// // //             let comparison = 0;
// // //             switch (sortBy) {
// // //                 case 'firstName': comparison = (a.firstName || '').localeCompare(b.firstName || ''); break;
// // //                 case 'username': comparison = (a.username || '').localeCompare(b.username || ''); break;
// // //                 case 'email': comparison = (a.email || '').localeCompare(b.email || ''); break;
// // //                 case 'id': comparison = (a.id || 0) - (b.id || 0); break;
// // //                 case 'role': comparison = (a.role || '').localeCompare(b.role || ''); break;
// // //             }
// // //             return sortOrder === 'asc' ? comparison : -comparison;
// // //         });

// // //     const handleUserView = (user: UserDTO) => {
// // //         dispatch(setSelectedUser(user));
// // //         setShowDetailModal(true);
// // //     };

// // //     const handleDeleteUser = (user: UserDTO) => {
// // //         dispatch(setSelectedUser(user));
// // //         setShowDeleteModal(true);
// // //     };

// // //     const handleConfirmDelete = async () => {
// // //         if (!selectedUser?.id) return;
// // //         setIsSubmitting(true);
// // //         try {
// // //             await dispatch(deleteUser(selectedUser.id)).unwrap();
// // //             setShowDeleteModal(false);
// // //             dispatch(clearSelectedUser());
// // //         } finally {
// // //             setIsSubmitting(false);
// // //         }
// // //     };

// // //     const getUserAvatar = (f?: string, l?: string) =>
// // //         ((f?.[0] || '') + (l?.[0] || '')).toUpperCase() || '??';

// // //     const getFullName = (f?: string, l?: string) =>
// // //         `${f || ''} ${l || ''}`.trim() || 'N/A';

// // //     const getRoleBadge = (role?: string) => {
// // //         switch (role?.toLowerCase()) {
// // //             case 'admin': return 'bg-indigo-50 text-indigo-700 ring-indigo-200';
// // //             case 'user': return 'bg-slate-100 text-slate-700 ring-slate-200';
// // //             default: return 'bg-gray-100 text-gray-600 ring-gray-200';
// // //         }
// // //     };

// // //     return (
// // //         <div className="p-6 space-y-6 font-['Inter'] bg-slate-50 min-h-screen">

// // //             {/* Header */}
// // //             <div className="flex justify-between items-center bg-white p-6 rounded-xl border shadow-sm">
// // //                 <div>
// // //                     <h1 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
// // //                         <Users className="text-indigo-600" />
// // //                         User Management
// // //                     </h1>
// // //                     <p className="text-sm text-slate-500 mt-1">
// // //                         Manage system users & access roles
// // //                     </p>
// // //                 </div>
// // //                 <button
// // //                     onClick={() => dispatch(fetchUsers())}
// // //                     className="p-2 rounded-lg border hover:bg-slate-100"
// // //                 >
// // //                     <RefreshCw className={loading ? 'animate-spin' : ''} />
// // //                 </button>
// // //             </div>

// // //             {/* Filters */}
// // //             <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-xl border shadow-sm">
// // //                 <div className="relative flex-1">
// // //                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
// // //                     <input
// // //                         className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
// // //                         placeholder="Search users..."
// // //                         value={searchTerm}
// // //                         onChange={e => setSearchTerm(e.target.value)}
// // //                     />
// // //                 </div>

// // //                 <div className="flex gap-2">
// // //                     <select
// // //                         value={sortBy}
// // //                         onChange={e => setSortBy(e.target.value as any)}
// // //                         className="border rounded-lg px-3 py-2 text-sm"
// // //                     >
// // //                         <option value="firstName">Name</option>
// // //                         <option value="username">Username</option>
// // //                         <option value="email">Email</option>
// // //                         <option value="role">Role</option>
// // //                         <option value="id">ID</option>
// // //                     </select>

// // //                     <button
// // //                         onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
// // //                         className="border rounded-lg px-3"
// // //                     >
// // //                         {sortOrder === 'asc' ? <SortAsc /> : <SortDesc />}
// // //                     </button>
// // //                 </div>
// // //             </div>

// // //             {/* Error */}
// // //             {error && (
// // //                 <div className="flex items-center justify-between bg-red-50 border border-red-200 p-4 rounded-lg text-red-700">
// // //                     <div className="flex items-center gap-2">
// // //                         <AlertCircle size={18} />
// // //                         <span className="text-sm font-medium">{error}</span>
// // //                     </div>
// // //                     <button onClick={() => dispatch(clearError())}>
// // //                         <X size={16} />
// // //                     </button>
// // //                 </div>
// // //             )}

// // //             {/* Table */}
// // //             <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
// // //                 <table className="w-full text-sm">
// // //                     <thead className="bg-slate-100 text-slate-600">
// // //                         <tr>
// // //                             <th className="px-6 py-3 text-left">User</th>
// // //                             <th className="px-6 py-3">Email</th>
// // //                             <th className="px-6 py-3 text-center">Role</th>
// // //                             <th className="px-6 py-3 text-right">Actions</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {filteredAndSortedUsers.map(user => (
// // //                             <tr key={user.id} className="border-t hover:bg-slate-50">
// // //                                 <td className="px-6 py-4 flex items-center gap-3">
// // //                                     <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
// // //                                         {getUserAvatar(user.firstName, user.lastName)}
// // //                                     </div>
// // //                                     <div>
// // //                                         <p className="font-medium text-slate-900">
// // //                                             {getFullName(user.firstName, user.lastName)}
// // //                                         </p>
// // //                                         <p className="text-xs text-slate-400">@{user.username}</p>
// // //                                     </div>
// // //                                 </td>
// // //                                 <td className="px-6 py-4 text-slate-600">{user.email}</td>
// // //                                 <td className="px-6 py-4 text-center">
// // //                                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ring-1 ${getRoleBadge(user.role)}`}>
// // //                                         {user.role}
// // //                                     </span>
// // //                                 </td>
// // //                                 <td className="px-6 py-4 text-right space-x-2">
// // //                                     <button onClick={() => handleUserView(user)} className="text-indigo-600 hover:text-indigo-800">
// // //                                         <Eye size={18} />
// // //                                     </button>
// // //                                     <button onClick={() => handleDeleteUser(user)} className="text-red-500 hover:text-red-700">
// // //                                         <Trash2 size={18} />
// // //                                     </button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default ViewUsersPage;
// // import { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import {
// //     Search,
// //     Eye,
// //     SortAsc,
// //     SortDesc,
// //     X,
// //     Trash2,
// //     RefreshCw,
// //     AlertCircle,
// //     Users
// // } from 'lucide-react';

// // import type { RootState, AppDispatch } from '../../../store/store';
// // import {
// //     clearError,
// //     clearSelectedUser,
// //     deleteUser,
// //     fetchUsers,
// //     setSelectedUser,
// //     type UserDTO
// // } from "../../../slices/viewUsersSlice.ts";

// // const ViewUsersPage = () => {
// //     const dispatch = useDispatch<AppDispatch>();
// //     const { users, loading, error, selectedUser } = useSelector(
// //         (state: RootState) => state.manageUsers
// //     );

// //     const [searchTerm, setSearchTerm] = useState('');
// //     const [sortBy, setSortBy] = useState<'firstName' | 'email' | 'id' | 'role' | 'username'>('firstName');
// //     const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
// //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// //     const [isSubmitting, setIsSubmitting] = useState(false);

// //     useEffect(() => {
// //         dispatch(fetchUsers());
// //     }, [dispatch]);

// //     const filteredAndSortedUsers = users
// //         .filter(user =>
// //             user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //             user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //             user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //             user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //             user.role?.toLowerCase().includes(searchTerm.toLowerCase())
// //         )
// //         .sort((a, b) => {
// //             let comparison = 0;
// //             switch (sortBy) {
// //                 case 'firstName': comparison = (a.firstName || '').localeCompare(b.firstName || ''); break;
// //                 case 'username': comparison = (a.username || '').localeCompare(b.username || ''); break;
// //                 case 'email': comparison = (a.email || '').localeCompare(b.email || ''); break;
// //                 case 'id': comparison = (a.id || 0) - (b.id || 0); break;
// //                 case 'role': comparison = (a.role || '').localeCompare(b.role || ''); break;
// //             }
// //             return sortOrder === 'asc' ? comparison : -comparison;
// //         });

// //     const handleDeleteUser = (user: UserDTO) => {
// //         dispatch(setSelectedUser(user));
// //         setShowDeleteModal(true);
// //     };

// //     const handleConfirmDelete = async () => {
// //         if (!selectedUser?.id) return;
// //         setIsSubmitting(true);
// //         try {
// //             await dispatch(deleteUser(selectedUser.id)).unwrap();
// //             setShowDeleteModal(false);
// //             dispatch(clearSelectedUser());
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     const getUserAvatar = (f?: string, l?: string) =>
// //         ((f?.[0] || '') + (l?.[0] || '')).toUpperCase() || '??';

// //     const getFullName = (f?: string, l?: string) =>
// //         `${f || ''} ${l || ''}`.trim() || 'N/A';

// //     return (
// //         /* Outer container now takes full height and width with no max-width constraints */
// //         <div className="flex flex-col min-h-screen w-full bg-slate-50 font-['Inter']">
            
// //             {/* Header Section - Sticky to top */}
// //             <div className="sticky top-0 z-10 bg-white border-b px-8 py-5 flex justify-between items-center shadow-sm">
// //                 <div>
// //                     <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
// //                         <div className="p-2 bg-slate-900 rounded-lg">
// //                             <Users className="text-white" size={24} />
// //                         </div>
// //                         User Management
// //                     </h1>
// //                     <p className="text-sm text-slate-500 mt-1">Manage system access and monitor user activity</p>
// //                 </div>
// //                 <div className="flex items-center gap-3">
// //                      <button
// //                         onClick={() => dispatch(fetchUsers())}
// //                         className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
// //                     >
// //                         <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
// //                         Refresh Data
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* Toolbar Section */}
// //             <div className="px-8 py-4 bg-white border-b flex flex-col md:flex-row gap-4 items-center justify-between">
// //                 <div className="relative w-full md:w-96">
// //                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
// //                     <input
// //                         className="w-full pl-10 pr-4 py-2 bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-slate-900 border rounded-xl text-sm outline-none transition-all"
// //                         placeholder="Search by name, email, or role..."
// //                         value={searchTerm}
// //                         onChange={e => setSearchTerm(e.target.value)}
// //                     />
// //                 </div>

// //                 <div className="flex gap-3 w-full md:w-auto">
// //                     <select
// //                         value={sortBy}
// //                         onChange={e => setSortBy(e.target.value as any)}
// //                         className="bg-slate-50 border-none rounded-lg px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-slate-900"
// //                     >
// //                         <option value="firstName">Sort by Name</option>
// //                         <option value="username">Sort by Username</option>
// //                         <option value="email">Sort by Email</option>
// //                         <option value="role">Sort by Role</option>
// //                     </select>

// //                     <button
// //                         onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
// //                         className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border"
// //                     >
// //                         {sortOrder === 'asc' ? <SortAsc size={20} /> : <SortDesc size={20} />}
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* Main Content - Flex Grow to fill screen */}
// //             <main className="flex-grow overflow-auto p-8">
// //                 {error && (
// //                     <div className="mb-6 flex items-center justify-between bg-red-50 border border-red-100 p-4 rounded-xl text-red-700">
// //                         <div className="flex items-center gap-3">
// //                             <AlertCircle size={20} />
// //                             <span className="text-sm font-semibold">{error}</span>
// //                         </div>
// //                         <button onClick={() => dispatch(clearError())} className="hover:bg-red-100 p-1 rounded">
// //                             <X size={18} />
// //                         </button>
// //                     </div>
// //                 )}

// //                 <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
// //                     <table className="w-full text-left border-collapse">
// //                         <thead>
// //                             <tr className="bg-slate-50/50 border-b border-slate-200">
// //                                 <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User Profile</th>
// //                                 <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Email</th>
// //                                 <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">System Role</th>
// //                                 <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody className="divide-y divide-slate-100">
// //                             {filteredAndSortedUsers.map(user => (
// //                                 <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
// //                                     <td className="px-6 py-4">
// //                                         <div className="flex items-center gap-4">
// //                                             {/* Profile Picture - Black Background */}
// //                                             <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-md">
// //                                                 {getUserAvatar(user.firstName, user.lastName)}
// //                                             </div>
// //                                             <div>
// //                                                 <p className="font-semibold text-slate-900 text-sm">
// //                                                     {getFullName(user.firstName, user.lastName)}
// //                                                 </p>
// //                                                 <p className="text-xs text-slate-500 font-mono">@{user.username}</p>
// //                                             </div>
// //                                         </div>
// //                                     </td>
// //                                     <td className="px-6 py-4 text-sm text-slate-600 font-medium">
// //                                         {user.email}
// //                                     </td>
// //                                     <td className="px-6 py-4 text-center">
// //                                         <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-tight border ${
// //                                             user.role?.toLowerCase() === 'admin' 
// //                                             ? 'bg-indigo-50 border-indigo-100 text-indigo-700' 
// //                                             : 'bg-slate-100 border-slate-200 text-slate-700'
// //                                         }`}>
// //                                             {user.role}
// //                                         </span>
// //                                     </td>
// //                                     <td className="px-6 py-4 text-right">
// //                                         <div className="flex justify-end gap-2">
// //                                             <button 
// //                                                 onClick={() => dispatch(setSelectedUser(user))}
// //                                                 className="p-2 text-slate-400 hover:text-slate-900 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all"
// //                                             >
// //                                                 <Eye size={18} />
// //                                             </button>
// //                                             <button 
// //                                                 onClick={() => handleDeleteUser(user)}
// //                                                 className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-100 transition-all"
// //                                             >
// //                                                 <Trash2 size={18} />
// //                                             </button>
// //                                         </div>
// //                                     </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
                    
// //                     {filteredAndSortedUsers.length === 0 && !loading && (
// //                         <div className="py-20 text-center">
// //                             <p className="text-slate-400 text-sm">No users found matching your search.</p>
// //                         </div>
// //                     )}
// //                 </div>
// //             </main>

// //             {/* Simple Delete Confirmation Overlay */}
// //             {showDeleteModal && (
// //                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
// //                     <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
// //                         <h3 className="text-lg font-bold text-slate-900">Delete User?</h3>
// //                         <p className="text-sm text-slate-500 mt-2">
// //                             This will permanently remove <span className="font-semibold text-slate-900">{selectedUser?.username}</span> from the system.
// //                         </p>
// //                         <div className="flex gap-3 mt-6">
// //                             <button 
// //                                 onClick={() => setShowDeleteModal(false)}
// //                                 className="flex-1 px-4 py-2 border rounded-xl text-sm font-medium hover:bg-slate-50"
// //                             >
// //                                 Cancel
// //                             </button>
// //                             <button 
// //                                 onClick={handleConfirmDelete}
// //                                 disabled={isSubmitting}
// //                                 className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700 disabled:opacity-50"
// //                             >
// //                                 {isSubmitting ? 'Deleting...' : 'Delete User'}
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default ViewUsersPage;

// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     Search,
//     Eye,
//     SortAsc,
//     SortDesc,
//     X,
//     Trash2,
//     RefreshCw,
//     AlertCircle,
//     Users,
//     Mail,
//     User as UserIcon,
//     ShieldCheck,
//     MoreVertical
// } from 'lucide-react';

// import type { RootState, AppDispatch } from '../../../store/store';
// import {
//     clearError,
//     clearSelectedUser,
//     deleteUser,
//     fetchUsers,
//     setSelectedUser,
//     type UserDTO
// } from "../../../slices/viewUsersSlice.ts";

// const ViewUsersPage = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const { users, loading, error, selectedUser } = useSelector(
//         (state: RootState) => state.manageUsers
//     );

//     const [searchTerm, setSearchTerm] = useState('');
//     const [sortBy, setSortBy] = useState<'firstName' | 'email' | 'id' | 'role' | 'username'>('firstName');
//     const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
//     const [showDeleteModal, setShowDeleteModal] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     useEffect(() => {
//         dispatch(fetchUsers());
//     }, [dispatch]);

//     const filteredAndSortedUsers = users
//         .filter(user =>
//             user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             user.role?.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//         .sort((a, b) => {
//             let comparison = 0;
//             switch (sortBy) {
//                 case 'firstName': comparison = (a.firstName || '').localeCompare(b.firstName || ''); break;
//                 case 'username': comparison = (a.username || '').localeCompare(b.username || ''); break;
//                 case 'email': comparison = (a.email || '').localeCompare(b.email || ''); break;
//                 case 'id': comparison = (a.id || 0) - (b.id || 0); break;
//                 case 'role': comparison = (a.role || '').localeCompare(b.role || ''); break;
//             }
//             return sortOrder === 'asc' ? comparison : -comparison;
//         });

//     const handleDeleteUser = (user: UserDTO) => {
//         dispatch(setSelectedUser(user));
//         setShowDeleteModal(true);
//     };

//     const handleConfirmDelete = async () => {
//         if (!selectedUser?.id) return;
//         setIsSubmitting(true);
//         try {
//             await dispatch(deleteUser(selectedUser.id)).unwrap();
//             setShowDeleteModal(false);
//             dispatch(clearSelectedUser());
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const getUserAvatar = (f?: string, l?: string) =>
//         ((f?.[0] || '') + (l?.[0] || '')).toUpperCase() || '??';

//     const getFullName = (f?: string, l?: string) =>
//         `${f || ''} ${l || ''}`.trim() || 'N/A';

//     return (
//         <div className="flex flex-col min-h-screen w-full bg-[#f8fafc] font-['Inter']">
            
//             {/* --- Header Section --- */}
//             <div className="bg-white border-b border-slate-200 px-8 py-6">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                     <div>
//                         <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
//                             <Users className="text-indigo-600" size={28} />
//                             User Directory
//                         </h1>
//                         <p className="text-slate-500 text-sm mt-1 font-medium">
//                             Manage your team members and their account permissions.
//                         </p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <button
//                             onClick={() => dispatch(fetchUsers())}
//                             className="flex items-center gap-2 px-4 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold hover:bg-indigo-100 transition-all border border-indigo-100"
//                         >
//                             <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
//                             Sync Data
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* --- Toolbar / Filters --- */}
//             <div className="px-8 py-5 flex flex-col lg:flex-row gap-4 items-center">
//                 <div className="relative flex-grow w-full md:max-w-md">
//                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//                     <input
//                         className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 rounded-2xl text-sm outline-none transition-all shadow-sm"
//                         placeholder="Search by name, email, or role..."
//                         value={searchTerm}
//                         onChange={e => setSearchTerm(e.target.value)}
//                     />
//                 </div>

//                 <div className="flex gap-3 w-full md:w-auto ml-auto">
//                     <div className="flex items-center bg-white border border-slate-200 rounded-2xl px-3 shadow-sm">
//                         <span className="text-xs font-bold text-slate-400 px-2 uppercase">Sort By</span>
//                         <select
//                             value={sortBy}
//                             onChange={e => setSortBy(e.target.value as any)}
//                             className="bg-transparent border-none py-3 text-sm font-semibold text-slate-700 outline-none focus:ring-0 cursor-pointer"
//                         >
//                             <option value="firstName">Name</option>
//                             <option value="username">Username</option>
//                             <option value="email">Email</option>
//                             <option value="role">Role</option>
//                         </select>
//                     </div>

//                     <button
//                         onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
//                         className="p-3 bg-white rounded-2xl hover:bg-slate-50 transition-all border border-slate-200 shadow-sm text-slate-600"
//                     >
//                         {sortOrder === 'asc' ? <SortAsc size={20} /> : <SortDesc size={20} />}
//                     </button>
//                 </div>
//             </div>

//             {/* --- Main Content (Grid Layout) --- */}
//             <main className="px-8 pb-12">
//                 {error && (
//                     <div className="mb-8 flex items-center justify-between bg-rose-50 border border-rose-100 p-4 rounded-2xl text-rose-700 shadow-sm animate-in fade-in slide-in-from-top-4">
//                         <div className="flex items-center gap-3">
//                             <AlertCircle size={20} />
//                             <span className="text-sm font-bold">{error}</span>
//                         </div>
//                         <button onClick={() => dispatch(clearError())} className="hover:bg-rose-100 p-1.5 rounded-lg transition-colors">
//                             <X size={18} />
//                         </button>
//                     </div>
//                 )}

//                 {loading ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                         {[...Array(8)].map((_, i) => (
//                             <div key={i} className="h-64 bg-slate-200/50 rounded-3xl animate-pulse border border-slate-100" />
//                         ))}
//                     </div>
//                 ) : filteredAndSortedUsers.length === 0 ? (
//                     <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200">
//                         <div className="p-4 bg-slate-50 rounded-full mb-4">
//                             <Search size={40} className="text-slate-300" />
//                         </div>
//                         <h3 className="text-lg font-bold text-slate-900">No users matched your criteria</h3>
//                         <p className="text-slate-500 text-sm mt-1">Try adjusting your filters or search term.</p>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                         {filteredAndSortedUsers.map(user => (
//                             <div 
//                                 key={user.id} 
//                                 className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
//                             >
//                                 {/* Role Badge */}
//                                 <div className="absolute top-4 right-4">
//                                     <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
//                                         user.role?.toLowerCase() === 'admin' 
//                                         ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-200' 
//                                         : 'bg-slate-100 text-slate-600 ring-1 ring-slate-200'
//                                     }`}>
//                                         {user.role}
//                                     </span>
//                                 </div>

//                                 {/* Profile Info */}
//                                 <div className="flex flex-col items-center text-center mt-2">
//                                     <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-300">
//                                         {getUserAvatar(user.firstName, user.lastName)}
//                                     </div>
//                                     <h3 className="text-lg font-bold text-slate-900 leading-tight">
//                                         {getFullName(user.firstName, user.lastName)}
//                                     </h3>
//                                     <p className="text-indigo-600 text-xs font-bold font-mono mt-1">@{user.username}</p>
//                                 </div>

//                                 <div className="mt-6 space-y-3">
//                                     <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
//                                         <Mail size={16} className="text-slate-400" />
//                                         <span className="text-xs font-medium truncate">{user.email}</span>
//                                     </div>
//                                 </div>

//                                 {/* Actions */}
//                                 <div className="mt-6 flex gap-2">
//                                     <button 
//                                         onClick={() => dispatch(setSelectedUser(user))}
//                                         className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
//                                     >
//                                         <Eye size={14} /> Profile
//                                     </button>
//                                     <button 
//                                         onClick={() => handleDeleteUser(user)}
//                                         className="p-2.5 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all border border-rose-100"
//                                     >
//                                         <Trash2 size={16} />
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </main>

//             {/* --- Modals --- */}
//             {showDeleteModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
//                     <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-sm shadow-2xl border border-slate-100 text-center">
//                         <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
//                             <Trash2 size={36} />
//                         </div>
//                         <h3 className="text-2xl font-black text-slate-900">Are you sure?</h3>
//                         <p className="text-sm text-slate-500 mt-3 px-2 leading-relaxed">
//                             Deleting <span className="font-bold text-slate-900">@{selectedUser?.username}</span> will remove all associated data. This action is irreversible.
//                         </p>
//                         <div className="flex flex-col gap-3 mt-8">
//                             <button 
//                                 onClick={handleConfirmDelete}
//                                 disabled={isSubmitting}
//                                 className="w-full py-4 bg-rose-600 text-white rounded-2xl text-sm font-bold hover:bg-rose-700 shadow-lg shadow-rose-200 disabled:opacity-50 transition-all"
//                             >
//                                 {isSubmitting ? 'Processing...' : 'Yes, Delete Account'}
//                             </button>
//                             <button 
//                                 onClick={() => setShowDeleteModal(false)}
//                                 className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl text-sm font-bold hover:bg-slate-200 transition-all"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ViewUsersPage;
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Search,
    Eye,
    SortAsc,
    SortDesc,
    X,
    Trash2,
    RefreshCw,
    AlertCircle,
    Users,
    Mail,
    User as 
    ShieldCheck,
    Hash
} from 'lucide-react';

import type { RootState, AppDispatch } from '../../../store/store';
import {
    clearError,
    clearSelectedUser,
    deleteUser,
    fetchUsers,
    setSelectedUser,
    type UserDTO
} from "../../../slices/viewUsersSlice.ts";

const ViewUsersPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error, selectedUser } = useSelector(
        (state: RootState) => state.manageUsers
    );

    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'firstName' | 'email' | 'id' | 'role' | 'username'>('firstName');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false); // New State
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const filteredAndSortedUsers = users
        .filter(user =>
            user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            let comparison = 0;
            switch (sortBy) {
                case 'firstName': comparison = (a.firstName || '').localeCompare(b.firstName || ''); break;
                case 'username': comparison = (a.username || '').localeCompare(b.username || ''); break;
                case 'email': comparison = (a.email || '').localeCompare(b.email || ''); break;
                case 'id': comparison = (a.id || 0) - (b.id || 0); break;
                case 'role': comparison = (a.role || '').localeCompare(b.role || ''); break;
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });

    // Helper to open profile
    const handleViewProfile = (user: UserDTO) => {
        dispatch(setSelectedUser(user));
        setShowProfileModal(true);
    };

    const handleDeleteUser = (user: UserDTO) => {
        dispatch(setSelectedUser(user));
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedUser?.id) return;
        setIsSubmitting(true);
        try {
            await dispatch(deleteUser(selectedUser.id)).unwrap();
            setShowDeleteModal(false);
            dispatch(clearSelectedUser());
        } finally {
            setIsSubmitting(false);
        }
    };

    const getUserAvatar = (f?: string, l?: string) =>
        ((f?.[0] || '') + (l?.[0] || '')).toUpperCase() || '??';

    const getFullName = (f?: string, l?: string) =>
        `${f || ''} ${l || ''}`.trim() || 'N/A';

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#f8fafc] font-['Inter']">
            
            {/* --- Header Section --- */}
            <div className="bg-white border-b border-slate-200 px-8 py-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                            <Users className="text-indigo-600" size={28} />
                            User Directory
                        </h1>
                        <p className="text-slate-500 text-sm mt-1 font-medium">
                            Manage your team members and their account permissions.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => dispatch(fetchUsers())}
                            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold hover:bg-indigo-100 transition-all border border-indigo-100"
                        >
                            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                            Sync Data
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Toolbar / Filters --- */}
            <div className="px-8 py-5 flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-grow w-full md:max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 rounded-2xl text-sm outline-none transition-all shadow-sm"
                        placeholder="Search by name, email, or role..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-3 w-full md:w-auto ml-auto">
                    <div className="flex items-center bg-white border border-slate-200 rounded-2xl px-3 shadow-sm">
                        <span className="text-xs font-bold text-slate-400 px-2 uppercase">Sort By</span>
                        <select
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value as any)}
                            className="bg-transparent border-none py-3 text-sm font-semibold text-slate-700 outline-none focus:ring-0 cursor-pointer"
                        >
                            <option value="firstName">Name</option>
                            <option value="username">Username</option>
                            <option value="email">Email</option>
                            <option value="role">Role</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="p-3 bg-white rounded-2xl hover:bg-slate-50 transition-all border border-slate-200 shadow-sm text-slate-600"
                    >
                        {sortOrder === 'asc' ? <SortAsc size={20} /> : <SortDesc size={20} />}
                    </button>
                </div>
            </div>

            {/* --- Main Content --- */}
            <main className="px-8 pb-12">
                {error && (
                    <div className="mb-8 flex items-center justify-between bg-rose-50 border border-rose-100 p-4 rounded-2xl text-rose-700 shadow-sm animate-in fade-in slide-in-from-top-4">
                        <div className="flex items-center gap-3">
                            <AlertCircle size={20} />
                            <span className="text-sm font-bold">{error}</span>
                        </div>
                        <button onClick={() => dispatch(clearError())} className="hover:bg-rose-100 p-1.5 rounded-lg transition-colors">
                            <X size={18} />
                        </button>
                    </div>
                )}

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-64 bg-slate-200/50 rounded-3xl animate-pulse border border-slate-100" />
                        ))}
                    </div>
                ) : filteredAndSortedUsers.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                        <div className="p-4 bg-slate-50 rounded-full mb-4">
                            <Search size={40} className="text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">No users matched your criteria</h3>
                        <p className="text-slate-500 text-sm mt-1">Try adjusting your filters or search term.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredAndSortedUsers.map(user => (
                            <div 
                                key={user.id} 
                                className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                        user.role?.toLowerCase() === 'admin' 
                                        ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-200' 
                                        : 'bg-slate-100 text-slate-600 ring-1 ring-slate-200'
                                    }`}>
                                        {user.role}
                                    </span>
                                </div>

                                <div className="flex flex-col items-center text-center mt-2">
                                    <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-300">
                                        {getUserAvatar(user.firstName, user.lastName)}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        {getFullName(user.firstName, user.lastName)}
                                    </h3>
                                    <p className="text-indigo-600 text-xs font-bold font-mono mt-1">@{user.username}</p>
                                </div>

                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <Mail size={16} className="text-slate-400" />
                                        <span className="text-xs font-medium truncate">{user.email}</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-2">
                                    <button 
                                        onClick={() => handleViewProfile(user)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
                                    >
                                        <Eye size={14} /> Profile
                                    </button>
                                    <button 
                                        onClick={() => handleDeleteUser(user)}
                                        className="p-2.5 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all border border-rose-100"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* --- Profile Detail Modal --- */}
            {showProfileModal && selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-[2.5rem] w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-slate-900 p-8 text-white relative">
                            <button 
                                onClick={() => setShowProfileModal(false)}
                                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <div className="flex items-center gap-5">
                                <div className="w-20 h-20 rounded-3xl bg-indigo-500 text-white flex items-center justify-center text-2xl font-black shadow-xl">
                                    {getUserAvatar(selectedUser.firstName, selectedUser.lastName)}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{getFullName(selectedUser.firstName, selectedUser.lastName)}</h3>
                                    <p className="text-indigo-300 text-sm font-mono font-bold">@{selectedUser.username}</p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm font-bold text-slate-700">
                                        <Mail size={18} className="text-indigo-500" />
                                        {selectedUser.email}
                                    </div>
                                </div>
                                
                                <div className="flex gap-4">
                                    <div className="flex-1 space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Role</label>
                                        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm font-bold text-slate-700">
                                            <ShieldCheck size={18} className="text-indigo-500" />
                                            <span className="capitalize">{selectedUser.role}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">User ID</label>
                                        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm font-bold text-slate-700">
                                            <Hash size={18} className="text-indigo-500" />
                                            #{selectedUser.id}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                            <button 
                                onClick={() => setShowProfileModal(false)}
                                className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl text-sm font-bold hover:bg-slate-100 transition-all shadow-sm"
                            >
                                Close Profile
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* --- Delete Confirmation Modal --- */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-sm shadow-2xl border border-slate-100 text-center">
                        <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Trash2 size={36} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">Are you sure?</h3>
                        <p className="text-sm text-slate-500 mt-3 px-2 leading-relaxed">
                            Deleting <span className="font-bold text-slate-900">@{selectedUser?.username}</span> will remove all associated data. This action is irreversible.
                        </p>
                        <div className="flex flex-col gap-3 mt-8">
                            <button 
                                onClick={handleConfirmDelete}
                                disabled={isSubmitting}
                                className="w-full py-4 bg-rose-600 text-white rounded-2xl text-sm font-bold hover:bg-rose-700 shadow-lg shadow-rose-200 disabled:opacity-50 transition-all"
                            >
                                {isSubmitting ? 'Processing...' : 'Yes, Delete Account'}
                            </button>
                            <button 
                                onClick={() => setShowDeleteModal(false)}
                                className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl text-sm font-bold hover:bg-slate-200 transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewUsersPage;