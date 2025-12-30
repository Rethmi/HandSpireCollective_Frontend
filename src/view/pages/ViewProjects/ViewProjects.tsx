// // // // import { useEffect, useState } from 'react';
// // // // import { useParams, Link } from 'react-router-dom';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import { fetchProjectsByCategory } from '../../../slices/projectBycategorySlice';
// // // // import type { RootState, AppDispatch } from '../../../store/store';

// // // // const ViewProjects = () => {
// // // //     const { category } = useParams<{ category: string }>();
// // // //     const dispatch: AppDispatch = useDispatch();
// // // //     const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

// // // //     const { projects, loading, error } = useSelector(
// // // //         (state: RootState) => state.projects
// // // //     );

// // // //     useEffect(() => {
// // // //         if (category) {
// // // //             dispatch(fetchProjectsByCategory(category));
// // // //         }
// // // //     }, [category, dispatch]);

// // // //     if (loading) {
// // // //         return (
// // // //             <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
// // // //                 <div className="text-center">
// // // //                     <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mb-4"></div>
// // // //                     <div className="text-xl font-semibold text-gray-700">Loading projects...</div>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     if (error) {
// // // //         return (
// // // //             <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
// // // //                 <div className="max-w-md mx-auto">
// // // //                     <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-lg">
// // // //                         <div className="flex items-start">
// // // //                             <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
// // // //                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // // //                             </svg>
// // // //                             <div>
// // // //                                 <h3 className="text-red-800 font-semibold text-lg mb-2">Error Loading Projects</h3>
// // // //                                 <p className="text-red-600">{error}</p>
// // // //                                 <button
// // // //                                     onClick={() => category && dispatch(fetchProjectsByCategory(category))}
// // // //                                     className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
// // // //                                 >
// // // //                                     Retry
// // // //                                 </button>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         );
// // // //     }

// // // //     return (
// // // //         <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
// // // //             <div className="container mx-auto px-4 py-8 max-w-7xl">
// // // //                 {/* Enhanced Header */}
// // // //                 <div className="mb-10">
// // // //                     <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
// // // //                         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
// // // //                             <div>
// // // //                                 <div className="flex items-center gap-3 mb-3">
// // // //                                     <h1 className="text-4xl font-black bg-gradient-to-r from-pink-200 via-purple-400 to-blue-200 bg-clip-text text-transparent">
// // // //                                         Explore Crafts
// // // //                                     </h1>
// // // //                                 </div>
// // // //                                 <p className="text-gray-600 text-base leading-relaxed mb-2">
// // // //                                     Discover unique handcrafted artworks and creative projects from talented artists around the world.
// // // //                                 </p>
// // // //                                 <p className="text-gray-600 text-lg flex items-center gap-3">
// // // //                                     <span className="inline-flex items-center justify-center min-w-[32px] h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white text-sm font-bold px-3 shadow-md">
// // // //                                         {projects && Array.isArray(projects) ? projects.length : 0}
// // // //                                     </span>
// // // //                                     <span className="font-medium">amazing projects discovered</span>
// // // //                                 </p>
// // // //                             </div>

// // // //                             {/* View Toggle */}
// // // //                             <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1.5">
// // // //                                 <button
// // // //                                     onClick={() => setViewMode('grid')}
// // // //                                     className={`px-2 py-2 rounded-lg font-medium transition-all ${
// // // //                                         viewMode === 'grid'
// // // //                                             ? 'bg-white text-purple-600 shadow-md'
// // // //                                             : 'text-gray-600 hover:text-gray-900'
// // // //                                     }`}
// // // //                                 >
// // // //                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
// // // //                                         <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
// // // //                                     </svg>
// // // //                                 </button>
// // // //                                 <button
// // // //                                     onClick={() => setViewMode('list')}
// // // //                                     className={`px-4 py-2 rounded-lg font-medium transition-all ${
// // // //                                         viewMode === 'list'
// // // //                                             ? 'bg-white text-purple-600 shadow-md'
// // // //                                             : 'text-gray-600 hover:text-gray-900'
// // // //                                     }`}
// // // //                                 >
// // // //                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
// // // //                                         <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
// // // //                                     </svg>
// // // //                                 </button>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Projects Display */}
// // // //                 {projects && Array.isArray(projects) && projects.length > 0 ? (
// // // //                     <div className={viewMode === 'grid'
// // // //                         ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
// // // //                         : 'space-y-6'
// // // //                     }>
// // // //                         {projects.map((project, index) => (
// // // //                             viewMode === 'grid' ? (
// // // //                                 // Grid Card View
// // // //                                 <div
// // // //                                     key={project.id}
// // // //                                     className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:scale-[1.02]"
// // // //                                     style={{ animationDelay: `${index * 0.1}s` }}
// // // //                                 >
// // // //                                     {project.image && (
// // // //                                         <div className="relative overflow-hidden">
// // // //                                             <img
// // // //                                                 src={project.image}
// // // //                                                 alt={project.title}
// // // //                                                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
// // // //                                                 onError={(e) => {
// // // //                                                     const target = e.target as HTMLImageElement;
// // // //                                                     target.style.display = 'none';
// // // //                                                 }}
// // // //                                             />
// // // //                                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // // //                                             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
// // // //                                                 <span className="text-sm font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
// // // //                                                     {project.category}
// // // //                                                 </span>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     )}

// // // //                                     <div className="p-6">
// // // //                                         <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // // //                                             {project.title}
// // // //                                         </h3>
// // // //                                          {/*add image*/}


// // // //                                         <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">
// // // //                                             {project.description}
// // // //                                         </p>

// // // //                                         {/*<div className="flex items-center justify-between mb-5 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">*/}
// // // //                                         {/*    <div className="flex items-center gap-2">*/}
// // // //                                         {/*        <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-md text-sm">*/}
// // // //                                         {/*            {project.author?.charAt(0) || 'A'}*/}
// // // //                                         {/*        </div>*/}
// // // //                                         {/*        <div>*/}
// // // //                                         {/*            <p className="text-xs text-gray-500">Authored by</p>*/}
// // // //                                         {/*            <p className="text-sm font-semibold text-gray-800">{project.author}</p>*/}
// // // //                                         {/*        </div>*/}
// // // //                                         {/*    </div>*/}
// // // //                                         {/*</div>*/}

// // // //                                         <Link
// // // //                                             to={`/project/${project.id}`}
// // // //                                             className="block text-center bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400 text-white py-2 px-4 rounded-xl hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105 text-sm"
// // // //                                         >
// // // //                                             <span className="flex items-center justify-center gap-1.5">
// // // //                                                 View Details
// // // //                                                 <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 20 20">
// // // //                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
// // // //                                                 </svg>
// // // //                                             </span>
// // // //                                         </Link>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             ) : (
// // // //                                 // List Card View
// // // //                                 <div
// // // //                                     key={project.id}
// // // //                                     className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:scale-[1.01]"
// // // //                                     style={{ animationDelay: `${index * 0.1}s` }}
// // // //                                 >
// // // //                                     <div className="flex flex-col md:flex-row">
// // // //                                         {project.image && (
// // // //                                             <div className="relative md:w-80 flex-shrink-0 overflow-hidden">
// // // //                                                 <img
// // // //                                                     src={project.image}
// // // //                                                     alt={project.title}
// // // //                                                     className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // //                                                     onError={(e) => {
// // // //                                                         const target = e.target as HTMLImageElement;
// // // //                                                         target.style.display = 'none';
// // // //                                                     }}
// // // //                                                 />
// // // //                                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // // //                                             </div>
// // // //                                         )}

// // // //                                         <div className="flex-1 p-8">
// // // //                                             <div className="flex items-start justify-between mb-4">
// // // //                                                 <div>
// // // //                                                     <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold mb-3 border border-purple-200">
// // // //                                                         {project.category}
// // // //                                                     </span>
// // // //                                                     <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // // //                                                         {project.title}
// // // //                                                     </h3>
// // // //                                                 </div>
// // // //                                             </div>

// // // //                                             <p className="text-gray-600 text-base mb-6 leading-relaxed">
// // // //                                                 {project.description}
// // // //                                             </p>

// // // //                                             <div className="flex items-center justify-between">
// // // //                                                 <div className="flex items-center gap-3">
// // // //                                                     <div className="w-11 h-11 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
// // // //                                                         {project.author?.charAt(0) || 'A'}
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <p className="text-xs text-gray-500">Authored by</p>
// // // //                                                         <p className="font-semibold text-gray-800">{project.author}</p>
// // // //                                                     </div>
// // // //                                                 </div>

// // // //                                                 <Link
// // // //                                                     to={`/project/${project.id}`}
// // // //                                                     className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-2.5 px-6 rounded-2xl hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-2 text-sm"
// // // //                                                 >
// // // //                                                     View Details
// // // //                                                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
// // // //                                                     </svg>
// // // //                                                 </Link>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             )
// // // //                         ))}
// // // //                     </div>
// // // //                 ) : (
// // // //                     // Enhanced Empty State
// // // //                     <div className="text-center py-20">
// // // //                         <div className="bg-white/90 backdrop-blur-md rounded-3xl p-16 shadow-2xl border border-white/50 max-w-2xl mx-auto">
// // // //                             <div className="mb-8">
// // // //                                 <div className="w-32 h-32 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
// // // //                                     <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
// // // //                                     </svg>
// // // //                                 </div>
// // // //                             </div>
// // // //                             <h3 className="text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // //                                 No Projects Found
// // // //                             </h3>
// // // //                             <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md mx-auto">
// // // //                                 {category ? (
// // // //                                     <>
// // // //                                         There are no projects in the <span className="font-bold text-purple-600">"{category}"</span> category yet.
// // // //                                         <br />Be the first to create something amazing!
// // // //                                     </>
// // // //                                 ) : (
// // // //                                     "Start your creative journey by uploading your first project!"
// // // //                                 )}
// // // //                             </p>
// // // //                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // //                                 <button
// // // //                                     onClick={() => window.history.back()}
// // // //                                     className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-2xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
// // // //                                 >
// // // //                                     <span className="flex items-center justify-center gap-2">
// // // //                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// // // //                                         </svg>
// // // //                                         Go Back
// // // //                                     </span>
// // // //                                 </button>
// // // //                                 <Link
// // // //                                     to="/upload"
// // // //                                     className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-3 rounded-2xl hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
// // // //                                 >
// // // //                                     <span className="flex items-center justify-center gap-2">
// // // //                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// // // //                                         </svg>
// // // //                                         Upload Project
// // // //                                     </span>
// // // //                                 </Link>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ViewProjects;
// // // import { useEffect, useState } from 'react';
// // // import { useParams, Link } from 'react-router-dom';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { fetchProjectsByCategory } from '../../../slices/projectBycategorySlice';
// // // import type { RootState, AppDispatch } from '../../../store/store';

// // // const ViewProjects = () => {
// // //     const { category } = useParams<{ category: string }>();
// // //     const dispatch: AppDispatch = useDispatch();
// // //     const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

// // //     const { projects, loading, error } = useSelector(
// // //         (state: RootState) => state.projects
// // //     );

// // //     useEffect(() => {
// // //         if (category) {
// // //             dispatch(fetchProjectsByCategory(category));
// // //         }
// // //     }, [category, dispatch]);

// // //     /* -------------------- LOADING -------------------- */
// // //     if (loading) {
// // //         return (
// // //             <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // //                 <div className="text-center">
// // //                     <div className="h-10 w-10 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin mx-auto mb-3"></div>
// // //                     <p className="text-sm text-gray-600">Loading projects...</p>
// // //                 </div>
// // //             </div>
// // //         );
// // //     }

// // //     /* -------------------- ERROR -------------------- */
// // //     if (error) {
// // //         return (
// // //             <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// // //                 <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 max-w-md w-full">
// // //                     <h3 className="text-base font-semibold text-gray-800 mb-2">
// // //                         Unable to load projects
// // //                     </h3>
// // //                     <p className="text-sm text-gray-600 mb-4">{error}</p>
// // //                     <button
// // //                         onClick={() => category && dispatch(fetchProjectsByCategory(category))}
// // //                         className="text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
// // //                     >
// // //                         Retry
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         );
// // //     }

// // //     return (
// // //         <div className="min-h-screen bg-gray-50">
// // //             <div className="max-w-7xl mx-auto px-4 py-8">

// // //                 {/* -------------------- HEADER -------------------- */}
                 

// // //                 {/* -------------------- PROJECTS -------------------- */}
// // //                 {projects && projects.length > 0 ? (
// // //                     <div
// // //                         className={
// // //                             viewMode === 'grid'
// // //                                 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
// // //                                 : 'space-y-4'
// // //                         }
// // //                     >
// // //                         {projects.map((project) =>
// // //                             viewMode === 'grid' ? (
// // //                                 /* -------- GRID CARD -------- */
// // //                                 <div
// // //                                     key={project.id}
// // //                                     className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
// // //                                 >
// // //                                     {project.image && (
// // //                                         <img
// // //                                             src={project.image}
// // //                                             alt={project.title}
// // //                                             className="w-full h-48 object-cover"
// // //                                             onError={(e) => {
// // //                                                 (e.target as HTMLImageElement).style.display = 'none';
// // //                                             }}
// // //                                         />
// // //                                     )}

// // //                                     <div className="p-4">
// // //                                         <span className="text-xs text-gray-500 uppercase tracking-wide">
// // //                                             {project.category}
// // //                                         </span>

// // //                                         <h3 className="text-sm font-semibold text-gray-900 mt-1 mb-2 line-clamp-2">
// // //                                             {project.title}
// // //                                         </h3>

// // //                                         <p className="text-xs text-gray-600 mb-4 line-clamp-3">
// // //                                             {project.description}
// // //                                         </p>

// // //                                         <Link
// // //                                             to={`/project/${project.id}`}
// // //                                             className="text-xs font-medium text-gray-700 hover:text-gray-900"
// // //                                         >
// // //                                             View details →
// // //                                         </Link>
// // //                                     </div>
// // //                                 </div>
// // //                             ) : (
// // //                                 /* -------- LIST CARD -------- */
// // //                                 <div
// // //                                     key={project.id}
// // //                                     className="bg-white border border-gray-200 rounded-xl p-4 flex gap-5 hover:shadow-md transition"
// // //                                 >
// // //                                     {project.image && (
// // //                                         <img
// // //                                             src={project.image}
// // //                                             alt={project.title}
// // //                                             className="w-40 h-28 object-cover rounded-lg"
// // //                                             onError={(e) => {
// // //                                                 (e.target as HTMLImageElement).style.display = 'none';
// // //                                             }}
// // //                                         />
// // //                                     )}

// // //                                     <div className="flex-1">
// // //                                         <span className="text-xs text-gray-500 uppercase tracking-wide">
// // //                                             {project.category}
// // //                                         </span>

// // //                                         <h3 className="text-base font-semibold text-gray-900 mt-1 mb-2">
// // //                                             {project.title}
// // //                                         </h3>

// // //                                         <p className="text-sm text-gray-600 mb-3 line-clamp-2">
// // //                                             {project.description}
// // //                                         </p>

// // //                                         <Link
// // //                                             to={`/project/${project.id}`}
// // //                                             className="text-sm font-medium text-gray-700 hover:text-gray-900"
// // //                                         >
// // //                                             View details →
// // //                                         </Link>
// // //                                     </div>
// // //                                 </div>
// // //                             )
// // //                         )}
// // //                     </div>
// // //                 ) : (
// // //                     /* -------------------- EMPTY STATE -------------------- */
// // //                     <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-12 text-center">
// // //                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // //                             No projects found
// // //                         </h3>
// // //                         <p className="text-sm text-gray-600 mb-6">
// // //                             There are no projects in this category yet.
// // //                         </p>
// // //                         <Link
// // //                             to="/upload"
// // //                             className="inline-block text-sm font-medium bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
// // //                         >
// // //                             Upload project
// // //                         </Link>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default ViewProjects;
// // import { useEffect, useState } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchProjectsByCategory } from '../../../slices/projectBycategorySlice';
// // import type { RootState, AppDispatch } from '../../../store/store';

// // // Oyaage backend eka duvana URL eka methanata danna (e.g., http://localhost:5000)
// // const BASE_URL = "http://localhost:5000";
// // const ViewProjects = () => {
// //     const { category } = useParams<{ category: string }>();
// //     const dispatch: AppDispatch = useDispatch();
// //     const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

// //     const { projects, loading, error } = useSelector(
// //         (state: RootState) => state.projects
// //     );

// //     useEffect(() => {
// //         if (category) {
// //             dispatch(fetchProjectsByCategory(category));
// //         }
// //     }, [category, dispatch]);

// //     /* -------------------- LOADING STATE -------------------- */
// //     if (loading) {
// //         return (
// //             <div className="flex justify-center items-center min-h-screen bg-gray-50">
// //                 <div className="text-center">
// //                     <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mb-4"></div>
// //                     <p className="text-gray-600 font-medium">Fetching creative works...</p>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     /* -------------------- ERROR STATE -------------------- */
// //     if (error) {
// //         return (
// //             <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
// //                 <div className="bg-white border border-red-100 rounded-2xl shadow-xl p-8 max-w-md text-center">
// //                     <div className="text-red-500 mb-4">
// //                         <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                         </svg>
// //                     </div>
// //                     <h3 className="text-xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h3>
// //                     <p className="text-gray-600 mb-6">{error}</p>
// //                     <button
// //                         onClick={() => category && dispatch(fetchProjectsByCategory(category))}
// //                         className="bg-purple-600 text-white px-8 py-2 rounded-xl hover:bg-purple-700 transition-colors"
// //                     >
// //                         Try Again
// //                     </button>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
// //             <div className="max-w-7xl mx-auto px-4 py-12">
                
// //                 {/* -------------------- DYNAMIC HEADER -------------------- */}
// //                 <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
// //                     <div>
// //                         <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3 capitalize">
// //                             {category ? `${category} Projects` : 'Explore All Crafts'}
// //                         </h1>
// //                         <p className="text-gray-500 text-lg max-w-2xl">
// //                             Discovering {projects?.length || 0} unique handcrafted pieces in this collection.
// //                         </p>
// //                     </div>

// //                     {/* View Switcher */}
// //                     <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
// //                         <button 
// //                             onClick={() => setViewMode('grid')}
// //                             className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
// //                         >
// //                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
// //                         </button>
// //                         <button 
// //                             onClick={() => setViewMode('list')}
// //                             className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
// //                         >
// //                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
// //                         </button>
// //                     </div>
// //                 </div>

// //                 {/* -------------------- PROJECTS FEED -------------------- */}
// //                 {projects && projects.length > 0 ? (
// //                     <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col gap-6'}>
// //                         {projects.map((project) => (
// //                             <div 
// //                                 key={project.id}
// //                                 className={`group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
// //                                     viewMode === 'grid' ? 'rounded-3xl flex flex-col' : 'rounded-3xl flex flex-col md:flex-row'
// //                                 }`}
// //                             >
// //                                 {/* IMAGE SECTION */}
// //           <div className={`relative overflow-hidden bg-gray-200 ${viewMode === 'grid' ? 'h-64 w-full' : 'h-64 md:h-auto md:w-80 flex-shrink-0'}`}>
// //     {project.image ? (
// //         <img 
// //             // Methana "http://localhost:5000/" kiyana kotasa oyaage backend port ekata wenas karanna
// //             src={project.image.startsWith('http') ? project.image : `http://localhost:5000/${project.image}`} 
// //             alt={project.title}
// //             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //         />
// //     ) : (
// //         <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
// //              <span className="text-xs">No Image Available</span>
// //         </div>
// //     )}
// // </div>
                                

// //                                 {/* CONTENT SECTION */}
// //                                 <div className="p-6 flex flex-col flex-1">
// //                                     <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
// //                                         {project.title}
// //                                     </h3>
// //                                     <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
// //                                         {project.description}
// //                                     </p>
                                    
// //                                     <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
// //                                         <div className="flex items-center gap-2">
// //                                             <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs font-bold">
// //                                                 {project.author?.charAt(0) || 'A'}
// //                                             </div>
// //                                             <span className="text-xs font-medium text-gray-500">{project.author}</span>
// //                                         </div>
// //                                         <Link 
// //                                             to={`/project/${project.id}`}
// //                                             className="inline-flex items-center gap-1 text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors"
// //                                         >
// //                                             View Details
// //                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
// //                                         </Link>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 ) : (
// //                     /* -------------------- EMPTY STATE -------------------- */
// //                     <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
// //                         <div className="mb-6 text-gray-300">
// //                             <svg className="w-20 h-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                             </svg>
// //                         </div>
// //                         <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects here yet</h3>
// //                         <p className="text-gray-500 mb-8 max-w-sm mx-auto">Be the first to showcase your creative work in the {category} category.</p>
// //                         <Link to="/upload" className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all">
// //                             Upload Now
// //                         </Link>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ViewProjects;
// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProjectsByCategory } from '../../../slices/projectBycategorySlice';
// import type { RootState, AppDispatch } from '../../../store/store';
// import { LayoutGrid, List, User, ArrowRight, ImageOff } from "lucide-react";

// // Update this to your actual Backend URL
// const BASE_URL = "http://localhost:5000";

// const ViewProjects = () => {
//     const { category } = useParams<{ category: string }>();
//     const dispatch: AppDispatch = useDispatch();
//     const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

//     const { projects, loading, error } = useSelector(
//         (state: RootState) => state.projects
//     );

//     useEffect(() => {
//         if (category) {
//             dispatch(fetchProjectsByCategory(category));
//         }
//     }, [category, dispatch]);

//     // Helper to format image URL correctly
//    const getImageUrl = (imagePath: string | undefined | null): string => {
//     if (!imagePath) return ""; // Return empty string if no path exists
//     if (imagePath.startsWith('http')) return imagePath;
    
//     const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
//     return `${BASE_URL}/${cleanPath}`;
// };

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="text-center mt-10 p-4 bg-red-50 text-red-600 rounded-lg max-w-md mx-auto">
//                 <p>Error: {error}</p>
//                 <button 
//                     onClick={() => category && dispatch(fetchProjectsByCategory(category))}
//                     className="mt-2 underline font-bold"
//                 >
//                     Try Again
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50/50 py-12">
//             <div className="max-w-7xl mx-auto px-4">
                
//                 {/* Header Section */}
//                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
//                     <div>
//                         <h1 className="text-4xl font-black text-gray-900 capitalize mb-2">
//                             {category ? `${category} Crafts` : 'Explore Projects'}
//                         </h1>
//                         <p className="text-gray-500">Showing {projects?.length || 0} creative results</p>
//                     </div>

//                     <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
//                         {/* <button 
//                             onClick={() => setViewMode('grid')}
//                             className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
//                         >
//                             <LayoutGrid size={20} />
//                         </button> */}
//                         <button 
//                             onClick={() => setViewMode('list')}
//                             className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
//                         >
//                             <List size={20} />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Projects Feed */}
//                 {projects && projects.length > 0 ? (
//                     <div className={viewMode === 'grid' 
//                         ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" 
//                         : "flex flex-col gap-6"
//                     }>
//                         {projects.map((project) => (
//                             <div 
//                                 key={project.id} 
//                                 className={`group bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 ${
//                                     viewMode === 'grid' ? 'rounded-3xl flex flex-col' : 'rounded-3xl flex flex-col md:flex-row h-auto md:h-64'
//                                 }`}
//                             >
//                                 {/* Image Container */}
//                              {/* IMAGE SECTION */}
// <div className={`relative overflow-hidden bg-gray-200 ${viewMode === 'grid' ? 'h-64 w-full' : 'h-64 md:h-auto md:w-80 flex-shrink-0'}`}>
//     { (project.imageUrl || project.image) ? (
//         <img 
//             // We use a non-null assertion (!) or a fallback because we checked the condition above
//             src={getImageUrl(project.imageUrl || project.image)} 
//             alt={project.title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//     ) : (
//         <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
//              <ImageOff className="w-8 h-8 mb-2" />
//              <span className="text-[10px]">No Image Available</span>
//         </div>
//     )}
// </div>

//                                 {/* Details Container */}
//                                 <div className="p-6 flex flex-col justify-between flex-1">
//                                     <div>
//                                         <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors">
//                                             {project.title}
//                                         </h3>
//                                         <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
//                                             {project.description}
//                                         </p>
//                                     </div>

//                                     <div className="flex items-center justify-between pt-4 border-t border-gray-50">
//                                         <div className="flex items-center gap-2">
//                                             <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold">
//                                                 {project.author?.charAt(0).toUpperCase() || 'U'}
//                                             </div>
//                                             <span className="text-xs font-medium text-gray-500">{project.author}</span>
//                                         </div>
//                                         <Link 
//                                             to={`/project/${project.id}`}
//                                             className="flex items-center gap-1 text-sm font-bold text-purple-600 hover:gap-2 transition-all"
//                                         >
//                                             View <ArrowRight size={16} />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
//                         <h3 className="text-xl font-bold text-gray-800">No projects found</h3>
//                         <p className="text-gray-500 mt-2">Try selecting a different category or upload a new craft.</p>
//                         <Link to="/upload" className="inline-block mt-6 bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold hover:shadow-lg transition-all">
//                             Create First Project
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ViewProjects;
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsByCategory } from '../../../slices/projectBycategorySlice';
import type { RootState, AppDispatch } from '../../../store/store';
import { User, ArrowRight, ImageOff, Calendar } from "lucide-react";

const BASE_URL = "http://localhost:5000";

const ViewProjects = () => {
    const { category } = useParams<{ category: string }>();
    const dispatch: AppDispatch = useDispatch();

    const { projects, loading, error } = useSelector(
        (state: RootState) => state.projects
    );

    useEffect(() => {
        if (category) {
            dispatch(fetchProjectsByCategory(category));
        }
    }, [category, dispatch]);

    const getImageUrl = (imagePath: string | undefined | null): string => {
        if (!imagePath) return "";
        if (imagePath.startsWith('http')) return imagePath;
        const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
        return `${BASE_URL}/${cleanPath}`;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-10 p-4 bg-red-50 text-red-600 rounded-lg max-w-md mx-auto">
                <p>Error: {error}</p>
                <button 
                    onClick={() => category && dispatch(fetchProjectsByCategory(category))}
                    className="mt-2 underline font-bold"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50 py-12">
            <div className="max-w-5xl mx-auto px-4">
                
                {/* Header Section */}
                <div className="mb-10 border-b border-gray-200 pb-6">
                    <h1 className="text-4xl font-black text-gray-900 capitalize mb-2">
                        {category ? `${category} Collection` : 'All Projects'}
                    </h1>
                    {/* <p className="text-gray-500 font-medium">
                        Explore {projects?.length || 0} unique handcrafted designs
                    </p> */}
                </div>

                {/* Projects List Feed */}
                {projects && projects.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className="group bg-white border border-gray-100 rounded-3xl flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                {/* IMAGE SECTION */}
                                <div className="relative h-64 md:h-auto md:w-80 flex-shrink-0 overflow-hidden bg-gray-100">
                                    {(project.imageUrl || project.image) ? (
                                        <img 
                                            src={getImageUrl(project.imageUrl || project.image)} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                                            <ImageOff size={32} />
                                            <span className="text-[10px] mt-2">No Preview</span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="p-8 flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-base line-clamp-3 leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                        <div className="flex items-center gap-6">
                                            {/* Author Info */}
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-purple-600">
                                                    <User size={16} />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700">{project.author}</span>
                                            </div>
                                            
                                            {/* Date Info (Optional) */}
                                            {project.createdAt && (
                                                <div className="hidden sm:flex items-center gap-2 text-gray-400">
                                                    <Calendar size={14} />
                                                    <span className="text-xs">{new Date(project.createdAt).toLocaleDateString()}</span>
                                                </div>
                                            )}
                                        </div>

                                        <Link 
                                            to={`/project/${project.id}`}
                                            className="flex items-center gap-2 bg-purple-50 text-purple-600 px-5 py-2 rounded-xl font-bold text-sm hover:bg-purple-600 hover:text-white transition-all shadow-sm"
                                        >
                                            View Project <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* EMPTY STATE */
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                        <h3 className="text-xl font-bold text-gray-800">No projects found</h3>
                        <p className="text-gray-500 mt-2">Be the first to upload a craft to this category.</p>
                        <Link to="/upload" className="inline-block mt-6 bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold">
                            Upload Now
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewProjects;