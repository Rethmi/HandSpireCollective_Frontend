// import { useEffect, useState } from 'react';
// import { Users, FolderOpen, Layers, TrendingUp, TrendingDown, Clock, Calendar } from 'lucide-react';

// interface DashboardStats {
//     totalUsers: number;
//     totalProjects: number;
//     totalCategories: number;
//     usersChange: number;
//     projectsChange: number;
//     categoriesChange: number;
// }

// interface RecentActivity {
//     type: 'user' | 'project' | 'category';
//     message: string;
//     timestamp: Date;
// }

// export const AdminDashboardContent = () => {
//     const [stats, setStats] = useState<DashboardStats>({
//         totalUsers: 0,
//         totalProjects: 0,
//         totalCategories: 0,
//         usersChange: 0,
//         projectsChange: 0,
//         categoriesChange: 0
//     });

//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [loading, setLoading] = useState(true);
//     const [activities, setActivities] = useState<RecentActivity[]>([]);

//     // Fetch real data from API
//     const fetchDashboardData = async () => {
//         try {
//             setLoading(true);

//             const usersResponse = await fetch('/api/user/all');
//             const users = await usersResponse.json();
//             const usersCount = Array.isArray(users) ? users.length : 0;

//             // Fetch projects count
//             const projectsResponse = await fetch('/api/project/all');
//             const projects = await projectsResponse.json();
//             const projectsCount = Array.isArray(projects) ? projects.length : 0;

//             // Fetch categories count
//             const categoriesResponse = await fetch('/api/category/all');
//             const categories = await categoriesResponse.json();
//             const categoriesCount = Array.isArray(categories) ? categories.length : 0;

//             // Calculate changes (you can implement more sophisticated logic here)
//             setStats({
//                 totalUsers: usersCount,
//                 totalProjects: projectsCount,
//                 totalCategories: categoriesCount,
//                 usersChange: Math.floor(Math.random() * 20) - 5,
//                 projectsChange: Math.floor(Math.random() * 15) - 3,
//                 categoriesChange: Math.floor(Math.random() * 10) - 2
//             });

//             // Create recent activities from latest data
//             const recentActivities: RecentActivity[] = [];

//             if (projects.length > 0) {
//                 const latestProject = projects[projects.length - 1];
//                 recentActivities.push({
//                     type: 'project',
//                     message: `New project "${latestProject.title}" created`,
//                     timestamp: new Date(latestProject.createdAt || Date.now())
//                 });
//             }

//             if (users.length > 0) {
//                 const latestUser = users[users.length - 1];
//                 recentActivities.push({
//                     type: 'user',
//                     message: `New user ${latestUser.firstName} ${latestUser.lastName} registered`,
//                     timestamp: new Date()
//                 });
//             }

//             if (categories.length > 0) {
//                 const latestCategory = categories[categories.length - 1];
//                 recentActivities.push({
//                     type: 'category',
//                     message: `Category "${latestCategory.category}" added`,
//                     timestamp: new Date()
//                 });
//             }

//             setActivities(recentActivities);

//         } catch (error) {
//             console.error('Error fetching dashboard data:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Update time every second
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     // Fetch data on mount and every 30 seconds
//     useEffect(() => {
//         fetchDashboardData();
//         const interval = setInterval(fetchDashboardData, 30000);
//         return () => clearInterval(interval);
//     }, []);

//     // Format date and time
//     const formatDate = (date: Date) => {
//         return date.toLocaleDateString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
//     };

//     const formatTime = (date: Date) => {
//         return date.toLocaleTimeString('en-US', {
//             hour: '2-digit',
//             minute: '2-digit',
//             second: '2-digit'
//         });
//     };

//     const getTimeAgo = (date: Date) => {
//         const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

//         if (seconds < 60) return `${seconds} seconds ago`;
//         if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
//         if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
//         return `${Math.floor(seconds / 86400)} days ago`;
//     };

//     return (
//         <div className="space-y-6 font-['Inter',_sans-serif]">
//             {/* Header with Real-Time Clock */}
//             <header className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(to right, #1e3a8a, #0f766e, #164e63)' }}>
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                     <div>
//                         <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//                         <p className="text-purple-100 mt-1">Welcome back! Here's your overview</p>
//                     </div>
//                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
//                         <div className="flex items-center gap-3">
//                             <Calendar className="w-5 h-5" />
//                             <div>
//                                 <p className="text-sm font-medium">{formatDate(currentTime)}</p>
//                                 <p className="text-2xl font-bold font-mono">{formatTime(currentTime)}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Users Card */}
//                 <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
//                     <div className="flex items-center justify-between mb-4">
//                         <div>
//                             <p className="text-sm font-medium text-gray-600">Total Users</p>
//                             <p className="text-3xl font-bold text-gray-900 mt-1">
//                                 {loading ? (
//                                     <span className="animate-pulse">...</span>
//                                 ) : (
//                                     stats.totalUsers
//                                 )}
//                             </p>
//                         </div>
//                         <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl">
//                             <Users className="w-8 h-8 text-blue-600" />
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         {stats.usersChange >= 0 ? (
//                             <>
//                                 <TrendingUp className="w-4 h-4 text-green-600" />
//                                 <span className="text-green-600 text-sm font-semibold">
//                                     +{stats.usersChange}%
//                                 </span>
//                             </>
//                         ) : (
//                             <>
//                                 <TrendingDown className="w-4 h-4 text-red-600" />
//                                 <span className="text-red-600 text-sm font-semibold">
//                                     {stats.usersChange}%
//                                 </span>
//                             </>
//                         )}
//                         <span className="text-gray-500 text-sm">from last month</span>
//                     </div>
//                 </div>

//                 {/* Projects Card */}
//                 <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
//                     <div className="flex items-center justify-between mb-4">
//                         <div>
//                             <p className="text-sm font-medium text-gray-600">Total Projects</p>
//                             <p className="text-3xl font-bold text-gray-900 mt-1">
//                                 {loading ? (
//                                     <span className="animate-pulse">...</span>
//                                 ) : (
//                                     stats.totalProjects
//                                 )}
//                             </p>
//                         </div>
//                         <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl">
//                             <FolderOpen className="w-8 h-8 text-green-600" />
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         {stats.projectsChange >= 0 ? (
//                             <>
//                                 <TrendingUp className="w-4 h-4 text-green-600" />
//                                 <span className="text-green-600 text-sm font-semibold">
//                                     +{stats.projectsChange}%
//                                 </span>
//                             </>
//                         ) : (
//                             <>
//                                 <TrendingDown className="w-4 h-4 text-red-600" />
//                                 <span className="text-red-600 text-sm font-semibold">
//                                     {stats.projectsChange}%
//                                 </span>
//                             </>
//                         )}
//                         <span className="text-gray-500 text-sm">from last month</span>
//                     </div>
//                 </div>

//                 {/* Categories Card */}
//                 <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
//                     <div className="flex items-center justify-between mb-4">
//                         <div>
//                             <p className="text-sm font-medium text-gray-600">Categories</p>
//                             <p className="text-3xl font-bold text-gray-900 mt-1">
//                                 {loading ? (
//                                     <span className="animate-pulse">...</span>
//                                 ) : (
//                                     stats.totalCategories
//                                 )}
//                             </p>
//                         </div>
//                         <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl">
//                             <Layers className="w-8 h-8 text-purple-600" />
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         {stats.categoriesChange >= 0 ? (
//                             <>
//                                 <TrendingUp className="w-4 h-4 text-green-600" />
//                                 <span className="text-green-600 text-sm font-semibold">
//                                     +{stats.categoriesChange}%
//                                 </span>
//                             </>
//                         ) : (
//                             <>
//                                 <TrendingDown className="w-4 h-4 text-red-600" />
//                                 <span className="text-red-600 text-sm font-semibold">
//                                     {stats.categoriesChange}%
//                                 </span>
//                             </>
//                         )}
//                         <span className="text-gray-500 text-sm">from last month</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Charts Row */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Simple Bar Chart Visualization */}
//                 <div className="bg-white rounded-xl shadow-lg border p-6">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-6">Overview Statistics</h3>
//                     <div className="space-y-4">
//                         {/* Users Bar */}
//                         <div>
//                             <div className="flex items-center justify-between mb-2">
//                                 <span className="text-sm font-medium text-gray-600">Users</span>
//                                 <span className="text-sm font-bold text-gray-900">{stats.totalUsers}</span>
//                             </div>
//                             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                                 <div
//                                     className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000"
//                                     style={{ width: `${Math.min((stats.totalUsers / 100) * 100, 100)}%` }}
//                                 ></div>
//                             </div>
//                         </div>

//                         {/* Projects Bar */}
//                         <div>
//                             <div className="flex items-center justify-between mb-2">
//                                 <span className="text-sm font-medium text-gray-600">Projects</span>
//                                 <span className="text-sm font-bold text-gray-900">{stats.totalProjects}</span>
//                             </div>
//                             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                                 <div
//                                     className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000"
//                                     style={{ width: `${Math.min((stats.totalProjects / 100) * 100, 100)}%` }}
//                                 ></div>
//                             </div>
//                         </div>

//                         {/* Categories Bar */}
//                         <div>
//                             <div className="flex items-center justify-between mb-2">
//                                 <span className="text-sm font-medium text-gray-600">Categories</span>
//                                 <span className="text-sm font-bold text-gray-900">{stats.totalCategories}</span>
//                             </div>
//                             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                                 <div
//                                     className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
//                                     style={{ width: `${Math.min((stats.totalCategories / 20) * 100, 100)}%` }}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Recent Activity */}
//                 <div className="bg-white rounded-xl shadow-lg border p-6">
//                     <div className="flex items-center justify-between mb-6">
//                         <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
//                         <button
//                             onClick={fetchDashboardData}
//                             className="text-sm text-purple-600 hover:text-purple-700 font-medium"
//                         >
//                             Refresh
//                         </button>
//                     </div>
//                     <div className="space-y-4">
//                         {loading ? (
//                             <div className="text-center py-8 text-gray-500">
//                                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
//                                 Loading activities...
//                             </div>
//                         ) : activities.length === 0 ? (
//                             <div className="text-center py-8 text-gray-500">
//                                 No recent activity
//                             </div>
//                         ) : (
//                             activities.map((activity, index) => (
//                                 <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                                     <div className={`p-2 rounded-full ${
//                                         activity.type === 'user' ? 'bg-blue-100' :
//                                             activity.type === 'project' ? 'bg-green-100' :
//                                                 'bg-purple-100'
//                                     }`}>
//                                         {activity.type === 'user' && <Users className="w-4 h-4 text-blue-600" />}
//                                         {activity.type === 'project' && <FolderOpen className="w-4 h-4 text-green-600" />}
//                                         {activity.type === 'category' && <Layers className="w-4 h-4 text-purple-600" />}
//                                     </div>
//                                     <div className="flex-1">
//                                         <p className="text-sm font-medium text-gray-900">{activity.message}</p>
//                                         <div className="flex items-center gap-1 mt-1">
//                                             {/*<Clock className="w-3 h-3 text-gray-400" />*/}
//                                             {/*<p className="text-xs text-gray-500">{getTimeAgo(activity.timestamp)}</p>*/}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left border border-gray-200">
//                         <Users className="w-6 h-6 text-blue-600 mb-2" />
//                         <p className="text-sm font-medium text-gray-900">Manage Users</p>
//                     </button>
//                     <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left border border-gray-200">
//                         <FolderOpen className="w-6 h-6 text-green-600 mb-2" />
//                         <p className="text-sm font-medium text-gray-900">View Projects</p>
//                     </button>
//                     <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left border border-gray-200">
//                         <Layers className="w-6 h-6 text-purple-600 mb-2" />
//                         <p className="text-sm font-medium text-gray-900">Categories</p>
//                     </button>
//                     <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left border border-gray-200">
//                         <TrendingUp className="w-6 h-6 text-pink-600 mb-2" />
//                         <p className="text-sm font-medium text-gray-900">Analytics</p>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// import { useEffect, useState } from 'react';
// import { Users, FolderOpen, Layers, TrendingUp, TrendingDown, Clock, Calendar } from 'lucide-react';
// import { backendApi } from '../../../api';
// // import { backendApi } from '../api/api'; // 1. backendApi import කරගන්න (path එක නිවැරදි දැයි බලන්න)

// interface DashboardStats {
//     totalUsers: number;
//     totalProjects: number;
//     totalCategories: number;
//     usersChange: number;
//     projectsChange: number;
//     categoriesChange: number;
// }

// interface RecentActivity {
//     type: 'user' | 'project' | 'category';
//     message: string;
//     timestamp: Date;
// }

// export const AdminDashboardContent = () => {
//     const [stats, setStats] = useState<DashboardStats>({
//         totalUsers: 0,
//         totalProjects: 0,
//         totalCategories: 0,
//         usersChange: 0,
//         projectsChange: 0,
//         categoriesChange: 0
//     });

//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [loading, setLoading] = useState(true);
//     const [activities, setActivities] = useState<RecentActivity[]>([]);

//     // Fetch real data from API
//     const fetchDashboardData = async () => {
//         try {
//             setLoading(true);

//             // 2. backendApi භාවිතා කිරීම (Token එක ස්වයංක්‍රීයව යයි)
//             // '/api' කොටස ඉවත් කරන්න (baseURL එකේ එය අඩංගු නිසා)

//             // Users ලබා ගැනීම
//             const usersResponse = await backendApi.get('/user/all');
//             const users = usersResponse.data;
//             const usersCount = Array.isArray(users) ? users.length : 0;

//             // Projects ලබා ගැනීම
//             const projectsResponse = await backendApi.get('/project/all');
//             const projects = projectsResponse.data;
//             const projectsCount = Array.isArray(projects) ? projects.length : 0;

//             // Categories ලබා ගැනීම
//             const categoriesResponse = await backendApi.get('/category'); // හෝ '/category/all' (Backend route එක අනුව)
//             // සටහන: ඔබේ category route එක '/' නම් මෙතන '/category' යොදන්න.
//             const categories = categoriesResponse.data;
//             const categoriesCount = Array.isArray(categories) ? categories.length : 0;

//             // Calculate changes
//             setStats({
//                 totalUsers: usersCount,
//                 totalProjects: projectsCount,
//                 totalCategories: categoriesCount,
//                 usersChange: Math.floor(Math.random() * 20) - 5,
//                 projectsChange: Math.floor(Math.random() * 15) - 3,
//                 categoriesChange: Math.floor(Math.random() * 10) - 2
//             });

//             // Create recent activities
//             const recentActivities: RecentActivity[] = [];

//             if (projects.length > 0) {
//                 const latestProject = projects[projects.length - 1];
//                 recentActivities.push({
//                     type: 'project',
//                     message: `New project "${latestProject.title}" created`,
//                     timestamp: new Date(latestProject.createdAt || Date.now())
//                 });
//             }

//             if (users.length > 0) {
//                 const latestUser = users[users.length - 1];
//                 recentActivities.push({
//                     type: 'user',
//                     message: `New user ${latestUser.firstName} ${latestUser.lastName} registered`,
//                     timestamp: new Date()
//                 });
//             }

//             if (categories.length > 0) {
//                 const latestCategory = categories[categories.length - 1];
//                 recentActivities.push({
//                     type: 'category',
//                     message: `Category "${latestCategory.category}" added`,
//                     timestamp: new Date()
//                 });
//             }

//             setActivities(recentActivities);

//         } catch (error) {
//             console.error('Error fetching dashboard data:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Update time every second
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     // Fetch data on mount and every 30 seconds
//     useEffect(() => {
//         fetchDashboardData();
//         const interval = setInterval(fetchDashboardData, 30000);
//         return () => clearInterval(interval);
//     }, []);

//     // Format date and time helpers...
//     const formatDate = (date: Date) => {
//         return date.toLocaleDateString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
//     };

//     const formatTime = (date: Date) => {
//         return date.toLocaleTimeString('en-US', {
//             hour: '2-digit',
//             minute: '2-digit',
//             second: '2-digit'
//         });
//     };

//     return (
//         <div className="space-y-6 font-['Inter',_sans-serif]">
//             {/* Header with Real-Time Clock */}
//             <header className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(to right, #1e3a8a, #0f766e, #164e63)' }}>
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                     <div>
//                         <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//                         <p className="text-purple-100 mt-1">Welcome back! Here's your overview</p>
//                     </div>
//                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
//                         <div className="flex items-center gap-3">
//                             <Calendar className="w-5 h-5" />
//                             <div>
//                                 <p className="text-sm font-medium">{formatDate(currentTime)}</p>
//                                 <p className="text-2xl font-bold font-mono">{formatTime(currentTime)}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Users Card */}
//                 <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
//                     <div className="flex items-center justify-between mb-4">
//                         <div>
//                             <p className="text-sm font-medium text-gray-600">Total Users</p>
//                             <p className="text-3xl font-bold text-gray-900 mt-1">
//                                 {loading ? (
//                                     <span className="animate-pulse">...</span>
//                                 ) : (
//                                     stats.totalUsers
//                                 )}
//                             </p>
//                         </div>
//                         <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl">
//                             <Users className="w-8 h-8 text-blue-600" />
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         {stats.usersChange >= 0 ? (
//                             <>
//                                 <TrendingUp className="w-4 h-4 text-green-600" />
//                                 <span className="text-green-600 text-sm font-semibold">
//                                     +{stats.usersChange}%
//                                 </span>
//                             </>
//                         ) : (
//                             <>
//                                 <TrendingDown className="w-4 h-4 text-red-600" />
//                                 <span className="text-red-600 text-sm font-semibold">
//                                     {stats.usersChange}%
//                                 </span>
//                             </>
//                         )}
//                         <span className="text-gray-500 text-sm">from last month</span>
//                     </div>
//                 </div>

//                 {/* Projects Card */}
//                 <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
//                     <div className="flex items-center justify-between mb-4">
//                         <div>
//                             <p className="text-sm font-medium text-gray-600">Total Projects</p>
//                             <p className="text-3xl font-bold text-gray-900 mt-1">
//                                 {loading ? (
//                                     <span className="animate-pulse">...</span>
//                                 ) : (
//                                     stats.totalProjects
//                                 )}
//                             </p>
//                         </div>
//                         <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl">
//                             <FolderOpen className="w-8 h-8 text-green-600" />
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         {stats.projectsChange >= 0 ? (
//                             <>
//                                 <TrendingUp className="w-4 h-4 text-green-600" />
//                                 <span className="text-green-600 text-sm font-semibold">
//                                     +{stats.projectsChange}%
//                                 </span>
//                             </>
//                         ) : (
//                             <>
//                                 <TrendingDown className="w-4 h-4 text-red-600" />
//                                 <span className="text-red-600 text-sm font-semibold">
//                                     {stats.projectsChange}%
//                                 </span>
//                             </>
//                         )}
//                         <span className="text-gray-500 text-sm">from last month</span>
//                     </div>
//                 </div>

//                 {/* Categories Card */}
//                 <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
//                     <div className="flex items-center justify-between mb-4">
//                         <div>
//                             <p className="text-sm font-medium text-gray-600">Categories</p>
//                             <p className="text-3xl font-bold text-gray-900 mt-1">
//                                 {loading ? (
//                                     <span className="animate-pulse">...</span>
//                                 ) : (
//                                     stats.totalCategories
//                                 )}
//                             </p>
//                         </div>
//                         <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl">
//                             <Layers className="w-8 h-8 text-purple-600" />
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         {stats.categoriesChange >= 0 ? (
//                             <>
//                                 <TrendingUp className="w-4 h-4 text-green-600" />
//                                 <span className="text-green-600 text-sm font-semibold">
//                                     +{stats.categoriesChange}%
//                                 </span>
//                             </>
//                         ) : (
//                             <>
//                                 <TrendingDown className="w-4 h-4 text-red-600" />
//                                 <span className="text-red-600 text-sm font-semibold">
//                                     {stats.categoriesChange}%
//                                 </span>
//                             </>
//                         )}
//                         <span className="text-gray-500 text-sm">from last month</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Charts Row */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Simple Bar Chart Visualization */}
//                 <div className="bg-white rounded-xl shadow-lg border p-6">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-6">Overview Statistics</h3>
//                     <div className="space-y-4">
//                         {/* Users Bar */}
//                         <div>
//                             <div className="flex items-center justify-between mb-2">
//                                 <span className="text-sm font-medium text-gray-600">Users</span>
//                                 <span className="text-sm font-bold text-gray-900">{stats.totalUsers}</span>
//                             </div>
//                             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                                 <div
//                                     className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000"
//                                     style={{ width: `${Math.min((stats.totalUsers / 100) * 100, 100)}%` }}
//                                 ></div>
//                             </div>
//                         </div>

//                         {/* Projects Bar */}
//                         <div>
//                             <div className="flex items-center justify-between mb-2">
//                                 <span className="text-sm font-medium text-gray-600">Projects</span>
//                                 <span className="text-sm font-bold text-gray-900">{stats.totalProjects}</span>
//                             </div>
//                             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                                 <div
//                                     className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000"
//                                     style={{ width: `${Math.min((stats.totalProjects / 100) * 100, 100)}%` }}
//                                 ></div>
//                             </div>
//                         </div>

//                         {/* Categories Bar */}
//                         <div>
//                             <div className="flex items-center justify-between mb-2">
//                                 <span className="text-sm font-medium text-gray-600">Categories</span>
//                                 <span className="text-sm font-bold text-gray-900">{stats.totalCategories}</span>
//                             </div>
//                             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                                 <div
//                                     className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
//                                     style={{ width: `${Math.min((stats.totalCategories / 20) * 100, 100)}%` }}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Recent Activity */}
//                 <div className="bg-white rounded-xl shadow-lg border p-6">
//                     <div className="flex items-center justify-between mb-6">
//                         <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
//                         <button
//                             onClick={fetchDashboardData}
//                             className="text-sm text-purple-600 hover:text-purple-700 font-medium"
//                         >
//                             Refresh
//                         </button>
//                     </div>
//                     <div className="space-y-4">
//                         {loading ? (
//                             <div className="text-center py-8 text-gray-500">
//                                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
//                                 Loading activities...
//                             </div>
//                         ) : activities.length === 0 ? (
//                             <div className="text-center py-8 text-gray-500">
//                                 No recent activity
//                             </div>
//                         ) : (
//                             activities.map((activity, index) => (
//                                 <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                                     <div className={`p-2 rounded-full ${
//                                         activity.type === 'user' ? 'bg-blue-100' :
//                                             activity.type === 'project' ? 'bg-green-100' :
//                                                 'bg-purple-100'
//                                     }`}>
//                                         {activity.type === 'user' && <Users className="w-4 h-4 text-blue-600" />}
//                                         {activity.type === 'project' && <FolderOpen className="w-4 h-4 text-green-600" />}
//                                         {activity.type === 'category' && <Layers className="w-4 h-4 text-purple-600" />}
//                                     </div>
//                                     <div className="flex-1">
//                                         <p className="text-sm font-medium text-gray-900">{activity.message}</p>
//                                         <div className="flex items-center gap-1 mt-1">
//                                             {/* Time ago implementation */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left border border-gray-200">
//                         <Users className="w-6 h-6 text-blue-600 mb-2" />
//                         <p className="text-sm font-medium text-gray-900">Manage Users</p>
//                     </button>
//                     <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left border border-gray-200">
//                         <FolderOpen className="w-6 h-6 text-green-600 mb-2" />
//                         <p className="text-sm font-medium text-gray-900">View Projects</p>
//                     </button>
//                     <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left border border-gray-200">
//                         <Layers className="w-6 h-6 text-purple-600 mb-2" />
//                         <p className="text-sm font-medium text-gray-900">Categories</p>
//                     </button>
//                     <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left border border-gray-200">
//                         <TrendingUp className="w-6 h-6 text-pink-600 mb-2" />
//                         <p className="text-sm font-medium text-gray-900">Analytics</p>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

import { useEffect, useState } from 'react';
import { Users, FolderOpen, Layers, TrendingUp, TrendingDown, Clock, Calendar, ChevronRight, Activity } from 'lucide-react';
import { backendApi } from '../../../api';

interface DashboardStats {
    totalUsers: number;
    totalProjects: number;
    totalCategories: number;
    usersChange: number;
    projectsChange: number;
    categoriesChange: number;
}

interface RecentActivity {
    type: 'user' | 'project' | 'category';
    message: string;
    timestamp: Date;
}

export const AdminDashboardContent = () => {
    const [stats, setStats] = useState<DashboardStats>({
        totalUsers: 0,
        totalProjects: 0,
        totalCategories: 0,
        usersChange: 0,
        projectsChange: 0,
        categoriesChange: 0
    });

    const [currentTime, setCurrentTime] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const [activities, setActivities] = useState<RecentActivity[]>([]);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            const [usersRes, projectsRes, categoriesRes] = await Promise.all([
                backendApi.get('/user/all'),
                backendApi.get('/project/all'),
                backendApi.get('/category')
            ]);

            const users = usersRes.data || [];
            const projects = projectsRes.data || [];
            const categories = categoriesRes.data || [];

            setStats({
                totalUsers: users.length,
                totalProjects: projects.length,
                totalCategories: categories.length,
                usersChange: 12, // Mocked trend
                projectsChange: 8,
                categoriesChange: -2
            });

            const recentActivities: RecentActivity[] = [];
            if (projects.length > 0) {
                recentActivities.push({
                    type: 'project',
                    message: `New craft "${projects[projects.length - 1].title}" was published`,
                    timestamp: new Date()
                });
            }
            if (users.length > 0) {
                recentActivities.push({
                    type: 'user',
                    message: `New artisan ${users[users.length - 1].firstName} joined the community`,
                    timestamp: new Date()
                });
            }
            setActivities(recentActivities);

        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: Date) => date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    const formatTime = (date: Date) => date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div className="space-y-8 p-2 animate-in fade-in duration-500">
            {/* Elegant Header */}
            <header className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-2xl">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">System Overview</h1>
                        <p className="text-slate-400 mt-2 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-amber-500" />
                            Live performance metrics for HandyCraft
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                        <div className="h-10 w-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{formatDate(currentTime)}</p>
                            <p className="text-xl font-mono font-bold text-white tracking-widest">{formatTime(currentTime)}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Artisans', value: stats.totalUsers, change: stats.usersChange, icon: Users, color: 'amber' },
                    { label: 'Live Projects', value: stats.totalProjects, change: stats.projectsChange, icon: FolderOpen, color: 'orange' },
                    { label: 'Categories', value: stats.totalCategories, change: stats.categoriesChange, icon: Layers, color: 'slate' }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-200 transition-all group">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                                <h3 className="text-3xl font-bold text-slate-900 mt-1">
                                    {loading ? <div className="h-8 w-12 bg-slate-100 animate-pulse rounded" /> : item.value}
                                </h3>
                            </div>
                            <div className={`p-3 rounded-xl bg-${item.color}-50 text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${item.change >= 0 ? 'bg-green-50 text-green-600' : 'bg-rose-50 text-rose-600'}`}>
                                {item.change >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {Math.abs(item.change)}%
                            </span>
                            <span className="text-xs text-slate-400 font-medium">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detailed Analytics Row */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Visual Distribution */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                        Database Distribution
                    </h3>
                    <div className="space-y-6">
                        {[
                            { label: 'User Retention', val: stats.totalUsers, max: 200, color: 'from-amber-400 to-amber-600' },
                            { label: 'Project Growth', val: stats.totalProjects, max: 500, color: 'from-orange-400 to-orange-600' },
                            { label: 'Category Reach', val: stats.totalCategories, max: 50, color: 'from-slate-700 to-slate-900' }
                        ].map((bar, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-semibold text-slate-600">{bar.label}</span>
                                    <span className="font-bold text-slate-900">{bar.val}</span>
                                </div>
                                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full bg-gradient-to-r ${bar.color} rounded-full transition-all duration-1000`} 
                                        style={{ width: `${(bar.val / bar.max) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Events</h3>
                    <div className="space-y-4">
                        {activities.map((act, i) => (
                            <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${act.type === 'user' ? 'bg-amber-50 text-amber-600' : 'bg-slate-900 text-white'}`}>
                                    {act.type === 'user' ? <Users className="w-4 h-4" /> : <FolderOpen className="w-4 h-4" />}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900 leading-snug">{act.message}</p>
                                    <p className="text-xs text-slate-400 mt-1 font-semibold">Just now</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Administrative Quick Actions */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Admin Shortcuts</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Manage Users', 'Audit Projects', 'Edit Categories', 'System Logs'].map((action, i) => (
                        <button key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all group">
                            <span className="text-sm font-bold text-slate-700 group-hover:text-amber-600">{action}</span>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};