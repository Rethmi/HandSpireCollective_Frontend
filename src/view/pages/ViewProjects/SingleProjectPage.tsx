// // // import { useEffect, useState } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import type { RootState, AppDispatch } from '../../../store/store';
// // // import { fetchProjectById, deleteProjectById, clearDeleteState } from '../../../slices/singleProjectSlice';
// // // import {Calendar, Tag, Trash2, User} from "lucide-react";

// // // const SingleProjectPage = () => {
// // //     const [userRole, setUserRole] = useState<string | null>(null);
// // //     const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

// // //     const navigate = useNavigate();

// // //     useEffect(() => {
// // //         const storedRole = localStorage.getItem("role");
// // //         setUserRole(storedRole);
// // //     }, []);

// // //     const { id } = useParams<{ id: string }>();
// // //     const dispatch: AppDispatch = useDispatch();

// // //     const {
// // //         project,
// // //         loading,
// // //         error,
// // //         deleteLoading,
// // //         deleteError,
// // //         isDeleted
// // //     } = useSelector((state: RootState) => state.singleProject);

// // //     useEffect(() => {
// // //         if (id) {
// // //             dispatch(fetchProjectById(id));
// // //         }
// // //     }, [id, dispatch]);
// // //     useEffect(() => {
// // //     console.log("Current Project Data:", project);
// // // }, [project]);

// // //     useEffect(() => {
// // //         if (isDeleted) {
// // //             dispatch(clearDeleteState());
// // //             navigate('/projects');
// // //         }
// // //     }, [isDeleted, dispatch, navigate]);

// // //     const handleDeleteClick = () => {
// // //         setShowDeleteConfirm(true);
// // //     };

// // //     const handleConfirmDelete = () => {
// // //         if (id) {
// // //             dispatch(deleteProjectById(id));
// // //         }
// // //         setShowDeleteConfirm(false);
// // //     };

// // //     const handleCancelDelete = () => {
// // //         setShowDeleteConfirm(false);
// // //     };

// // //     if (loading) {
// // //         return <div className="text-center mt-10">Loading project...</div>;
// // //     }

// // //     if (error) {
// // //         return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
// // //     }

// // //     if (!project) {
// // //         return <div className="text-center mt-10">Project not found.</div>;
// // //     }

// // //     return (
// // //         <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
// // //             <h1 className="text-2xl font-bold mb-6 text-gray-900">{project.title}</h1>
// // //             <div className="mb-8">
// // //                 <div className="flex items-center gap-4 text-sm text-gray-600">
// // //                     <div className="flex items-center gap-1">
// // //                         <Tag className="w-4 h-4" />
// // //                         <span>{project.category}</span>
// // //                     </div>
// // //                     <div className="flex items-center gap-1">
// // //                         <User className="w-4 h-4" />
// // //                         <span>{project.author}</span>
// // //                     </div>
// // //                     <div className="flex items-center gap-1">
// // //                         <Calendar className="w-4 h-4" />
// // //                         <span>{new Date(project.createdAt).toLocaleDateString()}</span>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {project.imageUrl && (
// // //                 <div className="pb-8 flex justify-center w-full max-w-2xl">
// // //                     <img
// // //                         src={project.imageUrl}
// // //                         alt={project.title}
// // //                         className="w-80 h-80 object-cover rounded-3xl shadow-xl"                    />
// // //                 </div>
// // //             )}

// // //             {/* Content Grid */}
// // //             <div className="grid md:grid-cols-2 gap-8 mb-8">
// // //                 {/* Description */}
// // //                 <div className="space-y-4">
// // //                     <div>
// // //                         <h3 className="text-xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Description</h3>
// // //                         <p className="text-base text-gray-700 leading-relaxed">{project.description}</p>
// // //                     </div>
// // //                 </div>


// // //                 {/* Materials */}
// // //                 <div className="space-y-4">
// // //                     <div>
// // //                         <h3 className="text-xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Materials Needed</h3>
// // //                         <ul className="bg-gray-50 p-4 rounded-lg list-disc list-inside space-y-1 text-base text-gray-700">
// // //                             {Array.isArray(project.materials) ? (
// // //                                 project.materials.map((item: string, index: number) => (
// // //                                     <li key={index}>{item}</li>
// // //                                 ))
// // //                             ) : typeof project.materials === 'string' ? (
// // //                                 project.materials
// // //                                     .split('\n')
// // //                                     .filter((item) => item.trim() !== '')
// // //                                     .map((item, index) => <li key={index}>{item.trim()}</li>)
// // //                             ) : null}
// // //                         </ul>

// // //                     </div>
// // //                 </div>

// // //             </div>

// // //             {/* Instructions Section */}

// // //             <div className="mb-8">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Step-by-Step Instructions</h3>
// // //                 <ul className="list-decimal list-inside text-base text-gray-700 space-y-1">
// // //                     {Array.isArray(project.steps) ? (
// // //                         project.steps.map((step: string, index: number) => (
// // //                             <li key={index}>{step}</li>
// // //                         ))
// // //                     ) : typeof project.steps === 'string' ? (
// // //                         project.steps
// // //                             .split('\n')
// // //                             .filter((step) => step.trim() !== '')
// // //                             .map((step, index) => <li key={index}>{step.trim()}</li>)
// // //                     ) : null}
// // //                 </ul>

// // //             </div>


// // //             <div className="flex justify-between items-end pt-6 border-t border-gray-200">
// // //                 <div className="text-xs text-gray-500 space-y-1">
// // //                     <p>Uploaded by: <span className="font-medium">{project.uploadedUserEmail}</span></p>
// // //                 </div>
// // //                 {/* Delete Button - Aligned to right */}
// // //                 {userRole === "ADMIN" && (
// // //                     <button
// // //                         onClick={handleDeleteClick}
// // //                         disabled={deleteLoading}
// // //                         className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
// // //                             deleteLoading
// // //                                 ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
// // //                                 : 'bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-200 hover:border-red-300'
// // //                         }`}
// // //                     >
// // //                         {deleteLoading ? 'Deleting...' : 'Delete Project'}
// // //                     </button>
// // //                 )}
// // //             </div>

// // //             {deleteError && (
// // //                 <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
// // //                     <strong>Error:</strong> {deleteError}
// // //                 </div>
// // //             )}

// // //             {/* Confirmation Modal */}
// // //             {showDeleteConfirm && (
// // //                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //                     <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
// // //                         <div className="flex items-center gap-3 mb-6">
// // //                             <div className="flex-shrink-0">
// // //                                 <Trash2 className="w-8 h-8 text-red-600" />
// // //                             </div>
// // //                             <div>
// // //                                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Delete Project</h3>
// // //                                 <p className="text-sm text-gray-600 leading-relaxed">
// // //                                     Are you sure you want to delete "<span className="font-medium">{project.title}</span>"?
// // //                                     This action cannot be undone.
// // //                                 </p>
// // //                             </div>
// // //                         </div>

// // //                         <div className="flex gap-3">
// // //                             <button
// // //                                 onClick={handleCancelDelete}
// // //                                 className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
// // //                             >
// // //                                 Cancel
// // //                             </button>
// // //                             <button
// // //                                 onClick={handleConfirmDelete}
// // //                                 disabled={deleteLoading}
// // //                                 className={`flex-1 px-4 py-3 text-sm font-medium text-white rounded-lg transition-colors ${
// // //                                     deleteLoading
// // //                                         ? 'bg-gray-400 cursor-not-allowed'
// // //                                         : 'bg-red-600 hover:bg-red-700'
// // //                                 }`}
// // //                             >
// // //                                 {deleteLoading ? 'Deleting...' : 'Delete'}
// // //                             </button>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default SingleProjectPage;
// // import { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import type { RootState, AppDispatch } from '../../../store/store';
// // import { fetchProjectById, deleteProjectById, clearDeleteState } from '../../../slices/singleProjectSlice';
// // import { Calendar, Tag, Trash2, User, ArrowLeft, CheckCircle2, Box } from "lucide-react";

// // const SingleProjectPage = () => {
// //     const [userRole, setUserRole] = useState<string | null>(null);
// //     const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

// //     const navigate = useNavigate();
// //     const { id } = useParams<{ id: string }>();
// //     const dispatch: AppDispatch = useDispatch();

// //     const {
// //         project,
// //         loading,
// //         error,
// //         deleteLoading,
// //         deleteError,
// //         isDeleted
// //     } = useSelector((state: RootState) => state.singleProject);

// //     useEffect(() => {
// //         const storedRole = localStorage.getItem("role");
// //         setUserRole(storedRole);
// //     }, []);

// //     useEffect(() => {
// //         if (id) {
// //             dispatch(fetchProjectById(id));
// //         }
// //     }, [id, dispatch]);

// //     useEffect(() => {
// //         if (isDeleted) {
// //             dispatch(clearDeleteState());
// //             navigate('/projects');
// //         }
// //     }, [isDeleted, dispatch, navigate]);

// //     const handleConfirmDelete = () => {
// //         if (id) dispatch(deleteProjectById(id));
// //         setShowDeleteConfirm(false);
// //     };

// //     if (loading) {
// //         return (
// //             <div className="flex flex-col items-center justify-center min-h-[60vh]">
// //                 <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
// //                 <p className="mt-4 text-orange-600 font-medium">Loading project details...</p>
// //             </div>
// //         );
// //     }

// //     if (error) {
// //         return (
// //             <div className="max-w-2xl mx-auto mt-10 p-6 bg-red-50 border border-red-200 rounded-2xl text-center">
// //                 <p className="text-red-600 font-semibold">Error: {error}</p>
// //                 <button onClick={() => navigate(-1)} className="mt-4 text-sm underline text-red-500">Go Back</button>
// //             </div>
// //         );
// //     }

// //     if (!project) return null;

// //     return (
// //         <div className="max-w-5xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
// //             {/* Navigation & Actions Header */}
// //             <div className="flex justify-between items-center mb-6">
// //                 <button 
// //                     onClick={() => navigate(-1)}
// //                     className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-orange-600 transition-colors bg-white shadow-sm rounded-xl border border-gray-100 font-medium"
// //                 >
// //                     <ArrowLeft className="w-4 h-4" />
// //                     Back to Projects
// //                 </button>

// //                 {userRole === "ADMIN" && (
// //                     <button
// //                         onClick={() => setShowDeleteConfirm(true)}
// //                         disabled={deleteLoading}
// //                         className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-xl transition-all font-medium border border-red-100"
// //                     >
// //                         <Trash2 className="w-4 h-4" />
// //                         {deleteLoading ? 'Deleting...' : 'Delete'}
// //                     </button>
// //                 )}
// //             </div>

// //             {/* Main Content Card */}
// //             <div className="bg-white shadow-2xl shadow-orange-100/50 rounded-[2.5rem] overflow-hidden border border-orange-50">
                
// //                 {/* Hero Section with Image */}
// //                 <div className="grid lg:grid-cols-2 gap-0">
// //                     <div className="p-8 md:p-12 flex flex-col justify-center">
// //                         <div className="flex items-center gap-2 mb-4">
// //                             <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">
// //                                 {project.category}
// //                             </span>
// //                         </div>
// //                         <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
// //                             {project.title}
// //                         </h1>
                        
// //                         <div className="grid grid-cols-2 gap-4">
// //                             <div className="flex items-center gap-3 text-gray-500">
// //                                 <div className="p-2 bg-gray-50 rounded-lg"><User className="w-5 h-5 text-orange-400" /></div>
// //                                 <div>
// //                                     <p className="text-[10px] uppercase font-bold text-gray-400">Author</p>
// //                                     <p className="text-sm font-semibold text-gray-700">{project.author}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="flex items-center gap-3 text-gray-500">
// //                                 <div className="p-2 bg-gray-50 rounded-lg"><Calendar className="w-5 h-5 text-orange-400" /></div>
// //                                 <div>
// //                                     <p className="text-[10px] uppercase font-bold text-gray-400">Created</p>
// //                                     <p className="text-sm font-semibold text-gray-700">{new Date(project.createdAt).toLocaleDateString()}</p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="relative h-72 lg:h-full overflow-hidden bg-orange-50">
// //                         {project.imageUrl ? (
// //                             <img
// //                                 src={project.imageUrl}
// //                                 alt={project.title}
// //                                 className="w-full h-full object-cover"
// //                             />
// //                         ) : (
// //                             <div className="flex items-center justify-center h-full text-orange-200"><Box className="w-20 h-20" /></div>
// //                         )}
// //                         <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
// //                     </div>
// //                 </div>

// //                 {/* Content Grid */}
// //                 <div className="p-8 md:p-12 border-t border-gray-50">
// //                     <div className="grid md:grid-cols-3 gap-12">
                        
// //                         {/* Left Column: Description & Steps */}
// //                         <div className="md:col-span-2 space-y-10">
// //                             <section>
// //                                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                                     <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
// //                                     Project Overview
// //                                 </h3>
// //                                 <p className="text-gray-600 leading-relaxed text-lg">
// //                                     {project.description}
// //                                 </p>
// //                             </section>

// //                             <section>
// //                                 <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
// //                                     <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
// //                                     Instructions
// //                                 </h3>
// //                                 <div className="space-y-4">
// //                                     {(Array.isArray(project.steps) ? project.steps : project.steps?.split('\n'))
// //                                         .filter(s => s.trim())
// //                                         .map((step, index) => (
// //                                             <div key={index} className="flex gap-4 p-4 rounded-2xl bg-orange-50/30 border border-orange-100/50 hover:bg-white hover:shadow-md transition-all group">
// //                                                 <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
// //                                                     {index + 1}
// //                                                 </span>
// //                                                 <p className="text-gray-700 pt-1 font-medium">{step.trim()}</p>
// //                                             </div>
// //                                         ))
// //                                     }
// //                                 </div>
// //                             </section>
// //                         </div>

// //                         {/* Right Column: Materials Sidebar */}
// //                         <div className="space-y-6">
// //                             <div className="bg-white border-2 border-orange-100 rounded-[2rem] p-6 shadow-xl shadow-orange-50">
// //                                 <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                                     <CheckCircle2 className="w-5 h-5 text-orange-500" />
// //                                     Materials Needed
// //                                 </h3>
// //                                 <ul className="space-y-3">
// //                                     {(Array.isArray(project.materials) ? project.materials : project.materials?.split('\n'))
// //                                         .filter(m => m.trim())
// //                                         .map((item, index) => (
// //                                             <li key={index} className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl text-sm font-semibold border border-gray-100">
// //                                                 <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
// //                                                 {item.trim()}
// //                                             </li>
// //                                         ))
// //                                     }
// //                                 </ul>
// //                             </div>

// //                             <div className="p-4 bg-orange-600 rounded-[1.5rem] text-white">
// //                                 <p className="text-[10px] uppercase font-bold opacity-70 mb-1">Contact Uploader</p>
// //                                 <p className="text-xs truncate font-medium">{project.uploadedUserEmail}</p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Error Message if Delete Fails */}
// //             {deleteError && (
// //                 <div className="mt-4 p-4 bg-red-100 text-red-600 rounded-xl text-center font-bold animate-bounce">
// //                     {deleteError}
// //                 </div>
// //             )}

// //             {/* Confirmation Modal */}
// //             {showDeleteConfirm && (
// //                 <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// //                     <div className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-sm w-full text-center border border-orange-100">
// //                         <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
// //                             <Trash2 className="w-8 h-8" />
// //                         </div>
// //                         <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Project?</h3>
// //                         <p className="text-sm text-gray-500 mb-6">This action is permanent. Are you sure you want to remove this project?</p>
// //                         <div className="flex gap-3">
// //                             <button onClick={() => setShowDeleteConfirm(false)} className="flex-1 px-4 py-3 text-sm font-bold text-gray-500 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">Cancel</button>
// //                             <button onClick={handleConfirmDelete} className="flex-1 px-4 py-3 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors">Delete</button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default SingleProjectPage;
// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import type { RootState, AppDispatch } from '../../../store/store';
// import {
//     fetchProjectById,
//     deleteProjectById,
//     clearDeleteState
// } from '../../../slices/singleProjectSlice';
// import {
//     Calendar,
//     Trash2,
//     User,
//     ArrowLeft,
//     CheckCircle2,
//     Box
// } from "lucide-react";

// const SingleProjectPage = () => {
//     const [userRole, setUserRole] = useState<string | null>(null);
//     const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

//     const navigate = useNavigate();
//     const { id } = useParams<{ id: string }>();
//     const dispatch: AppDispatch = useDispatch();

//     const {
//         project,
//         loading,
//         error,
//         deleteLoading,
//         deleteError,
//         isDeleted
//     } = useSelector((state: RootState) => state.singleProject);

//     useEffect(() => {
//         setUserRole(localStorage.getItem("role"));
//     }, []);

//     useEffect(() => {
//         if (id) dispatch(fetchProjectById(id));
//     }, [id, dispatch]);

//     useEffect(() => {
//         if (isDeleted) {
//             dispatch(clearDeleteState());
//             navigate('/projects');
//         }
//     }, [isDeleted, dispatch, navigate]);

//     const handleConfirmDelete = () => {
//         if (id) dispatch(deleteProjectById(id));
//         setShowDeleteConfirm(false);
//     };

//     if (loading) {
//         return (
//             <div className="flex flex-col items-center justify-center min-h-[60vh]">
//                 <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
//                 <p className="mt-4 text-orange-600 font-medium">
//                     Loading project details...
//                 </p>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="max-w-2xl mx-auto mt-10 p-6 bg-red-50 border border-red-200 rounded-2xl text-center">
//                 <p className="text-red-600 font-semibold">Error: {error}</p>
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="mt-4 text-sm underline text-red-500"
//                 >
//                     Go Back
//                 </button>
//             </div>
//         );
//     }

//     if (!project) return null;

//     return (
//         <div className="max-w-5xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">

//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//                 {/* 🔥 UPDATED BACK BUTTON */}
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="
//                         flex items-center gap-2 px-5 py-2.5
//                         bg-gradient-to-r from-orange-500 to-orange-600
//                         text-white rounded-xl font-semibold
//                         shadow-md hover:shadow-xl
//                         hover:scale-105 transition-all
//                     "
//                 >
//                     <ArrowLeft className="w-4 h-4" />
//                     Back
//                 </button>

//                 {userRole === "ADMIN" && (
//                     <button
//                         onClick={() => setShowDeleteConfirm(true)}
//                         disabled={deleteLoading}
//                         className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-xl transition-all font-medium border border-red-100"
//                     >
//                         <Trash2 className="w-4 h-4" />
//                         {deleteLoading ? 'Deleting...' : 'Delete'}
//                     </button>
//                 )}
//             </div>

//             {/* Main Card */}
//             <div className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border">

//                 {/* Hero */}
//                 <div className="grid lg:grid-cols-2">
//                     <div className="p-8 md:p-12">
//                         <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase">
//                             {project.category}
//                         </span>

//                         <h1 className="text-3xl md:text-4xl font-black text-gray-900 my-6">
//                             {project.title}
//                         </h1>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="flex items-center gap-3">
//                                 <User className="text-orange-400" />
//                                 <p className="text-sm font-semibold">
//                                     {project.author}
//                                 </p>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <Calendar className="text-orange-400" />
//                                 <p className="text-sm font-semibold">
//                                     {new Date(project.createdAt).toLocaleDateString()}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="h-72 lg:h-full bg-orange-50">
//                         {project.imageUrl ? (
//                             <img
//                                 src={project.imageUrl}
//                                 alt={project.title}
//                                 className="w-full h-full object-cover"
//                             />
//                         ) : (
//                             <div className="flex items-center justify-center h-full">
//                                 <Box className="w-20 h-20 text-orange-200" />
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">

//                     {/* LEFT */}
//                     <div className="md:col-span-2 space-y-10">
//                         <section>
//                             <h3 className="text-xl font-bold mb-3">
//                                 Project Overview
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed text-base">
//                                 {project.description}
//                             </p>
//                         </section>

//                         {/* 🔥 INSTRUCTIONS – FONT SIZE REDUCED */}
//                         <section>
//                             <h3 className="text-xl font-bold mb-4">
//                                 Instructions
//                             </h3>

//                             <div className="space-y-3">
//                                 {(Array.isArray(project.steps)
//                                     ? project.steps
//                                     : project.steps?.split('\n'))
//                                     .filter(s => s.trim())
//                                     .map((step, index) => (
//                                         <div
//                                             key={index}
//                                             className="flex gap-3 p-3 rounded-xl bg-orange-50 border"
//                                         >
//                                             <span className="w-7 h-7 text-xs rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
//                                                 {index + 1}
//                                             </span>
//                                             <p className="text-sm text-gray-700 leading-relaxed">
//                                                 {step.trim()}
//                                             </p>
//                                         </div>
//                                     ))}
//                             </div>
//                         </section>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="space-y-6">
//                         <div className="border rounded-2xl p-6">
//                             <h3 className="font-bold mb-3 flex items-center gap-2">
//                                 <CheckCircle2 className="text-orange-500" />
//                                 Materials Needed
//                             </h3>

//                             <ul className="space-y-2">
//                                 {(Array.isArray(project.materials)
//                                     ? project.materials
//                                     : project.materials?.split('\n'))
//                                     .filter(m => m.trim())
//                                     .map((item, index) => (
//                                         <li
//                                             key={index}
//                                             className="text-sm bg-gray-50 p-2 rounded-lg"
//                                         >
//                                             {item.trim()}
//                                         </li>
//                                     ))}
//                             </ul>
//                         </div>

//                         <div className="p-4 bg-orange-600 text-white rounded-xl text-xs">
//                             {project.uploadedUserEmail}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Delete Error */}
//             {deleteError && (
//                 <div className="mt-4 p-3 bg-red-100 text-red-600 rounded-xl text-center font-semibold">
//                     {deleteError}
//                 </div>
//             )}

//             {/* Delete Modal */}
//             {showDeleteConfirm && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                     <div className="bg-white p-6 rounded-2xl max-w-sm w-full text-center">
//                         <h3 className="font-bold mb-4">Delete Project?</h3>
//                         <div className="flex gap-3">
//                             <button
//                                 onClick={() => setShowDeleteConfirm(false)}
//                                 className="flex-1 bg-gray-100 py-2 rounded-xl"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={handleConfirmDelete}
//                                 className="flex-1 bg-red-600 text-white py-2 rounded-xl"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SingleProjectPage;
// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import type { RootState, AppDispatch } from '../../../store/store';
// import {
//     fetchProjectById,
//     deleteProjectById,
//     clearDeleteState
// } from '../../../slices/singleProjectSlice';
// import {
//     Calendar,
//     Trash2,
//     User,
//     ArrowLeft,
//     CheckCircle2,
//     Box
// } from "lucide-react";

// const SingleProjectPage = () => {
//     const [userRole, setUserRole] = useState<string | null>(null);
//     const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

//     const navigate = useNavigate();
//     const { id } = useParams<{ id: string }>();
//     const dispatch: AppDispatch = useDispatch();

//     const {
//         project,
//         loading,
//         error,
//         deleteLoading,
//         deleteError,
//         isDeleted
//     } = useSelector((state: RootState) => state.singleProject);

//     useEffect(() => {
//         setUserRole(localStorage.getItem("role"));
//     }, []);

//     useEffect(() => {
//         if (id) dispatch(fetchProjectById(id));
//     }, [id, dispatch]);

//     useEffect(() => {
//         if (isDeleted) {
//             dispatch(clearDeleteState());
//             navigate('/projects');
//         }
//     }, [isDeleted, dispatch, navigate]);

//     const handleConfirmDelete = () => {
//         if (id) dispatch(deleteProjectById(id));
//         setShowDeleteConfirm(false);
//     };

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center min-h-screen">
//                 <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="text-center mt-10 text-red-600 font-semibold">
//                 {error}
//             </div>
//         );
//     }

//     if (!project) return null;

//     return (
//         <div className="max-w-5xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen pb-28">

//             {/* MAIN CARD */}
//             <div className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border">

//                 {/* HERO */}
//                 <div className="grid lg:grid-cols-2">
//                     <div className="p-8 md:p-12">
//                         <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase">
//                             {project.category}
//                         </span>

//                         <h1 className="text-3xl font-black my-6">
//                             {project.title}
//                         </h1>

//                         <div className="grid grid-cols-2 gap-4 text-sm">
//                             <div className="flex items-center gap-2">
//                                 <User className="text-orange-400 w-4 h-4" />
//                                 {project.author}
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Calendar className="text-orange-400 w-4 h-4" />
//                                 {new Date(project.createdAt).toLocaleDateString()}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="h-72 lg:h-full bg-orange-50">
//                         {project.imageUrl ? (
//                             <img
//                                 src={project.imageUrl}
//                                 alt={project.title}
//                                 className="w-full h-full object-cover"
//                             />
//                         ) : (
//                             <div className="flex items-center justify-center h-full">
//                                 <Box className="w-16 h-16 text-orange-200" />
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-8 md:p-12 grid md:grid-cols-3 gap-10">

//                     {/* LEFT */}
//                     <div className="md:col-span-2 space-y-8">
//                         <section>
//                             <h3 className="font-bold mb-2">Project Overview</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 {project.description}
//                             </p>
//                         </section>

//                         <section>
//                             <h3 className="font-bold mb-3">Instructions</h3>
//                             <div className="space-y-2">
//                                 {(Array.isArray(project.steps)
//                                     ? project.steps
//                                     : project.steps?.split('\n'))
//                                     .filter(s => s.trim())
//                                     .map((step, index) => (
//                                         <div
//                                             key={index}
//                                             className="flex gap-3 p-3 bg-orange-50 rounded-xl text-sm"
//                                         >
//                                             <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
//                                                 {index + 1}
//                                             </span>
//                                             {step.trim()}
//                                         </div>
//                                     ))}
//                             </div>
//                         </section>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="space-y-5">
//                         <div className="border rounded-2xl p-5">
//                             <h3 className="font-bold text-sm mb-3 flex gap-2">
//                                 <CheckCircle2 className="text-orange-500 w-4 h-4" />
//                                 Materials
//                             </h3>

//                             <ul className="space-y-2 text-sm">
//                                 {(Array.isArray(project.materials)
//                                     ? project.materials
//                                     : project.materials?.split('\n'))
//                                     .filter(m => m.trim())
//                                     .map((item, index) => (
//                                         <li
//                                             key={index}
//                                             className="bg-gray-50 p-2 rounded-lg"
//                                         >
//                                             {item.trim()}
//                                         </li>
//                                     ))}
//                             </ul>
//                         </div>

//                         <div className="p-3 bg-orange-600 text-white rounded-xl text-xs">
//                             {project.uploadedUserEmail}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* 🔥 BOTTOM ACTION BAR */}
//             <div className="
//                 fixed bottom-0 left-0 right-0
//                 bg-white border-t shadow-lg
//                 px-6 py-3
//                 flex justify-between items-center
//                 z-40
//             ">
//                 {/* BACK */}
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-orange-600"
//                 >
//                     <ArrowLeft className="w-4 h-4" />
//                     Back
//                 </button>

//                 {/* DELETE */}
//                 {userRole === "ADMIN" && (
//                     <button
//                         onClick={() => setShowDeleteConfirm(true)}
//                         disabled={deleteLoading}
//                         className="flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700"
//                     >
//                         <Trash2 className="w-4 h-4" />
//                         {deleteLoading ? "Deleting..." : "Delete"}
//                     </button>
//                 )}
//             </div>

//             {/* DELETE ERROR */}
//             {deleteError && (
//                 <div className="mt-4 text-center text-red-600 text-sm">
//                     {deleteError}
//                 </div>
//             )}

//             {/* CONFIRM MODAL */}
//             {showDeleteConfirm && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                     <div className="bg-white p-6 rounded-2xl text-center w-80">
//                         <h3 className="font-bold mb-4">Delete Project?</h3>
//                         <div className="flex gap-3">
//                             <button
//                                 onClick={() => setShowDeleteConfirm(false)}
//                                 className="flex-1 bg-gray-100 py-2 rounded-xl text-sm"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={handleConfirmDelete}
//                                 className="flex-1 bg-red-600 text-white py-2 rounded-xl text-sm"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SingleProjectPage;
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../store/store';
import {
    fetchProjectById,
    deleteProjectById,
    clearDeleteState
} from '../../../slices/singleProjectSlice';
import {
    Calendar,
    Trash2,
    User,
    ArrowLeft,
    CheckCircle2,
    Box
} from "lucide-react";

const SingleProjectPage = () => {
    const [userRole, setUserRole] = useState<string | null>(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const dispatch: AppDispatch = useDispatch();

    const {
        project,
        loading,
        error,
        deleteLoading,
        deleteError,
        isDeleted
    } = useSelector((state: RootState) => state.singleProject);

    useEffect(() => {
        setUserRole(localStorage.getItem("role"));
    }, []);

    useEffect(() => {
        if (id) dispatch(fetchProjectById(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (isDeleted) {
            dispatch(clearDeleteState());
            navigate('/projects');
        }
    }, [isDeleted, dispatch, navigate]);

    const handleConfirmDelete = () => {
        if (id) dispatch(deleteProjectById(id));
        setShowDeleteConfirm(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-10 text-red-600 font-semibold">
                {error}
            </div>
        );
    }

    if (!project) return null;

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-10 bg-gray-50 min-h-screen pb-32">

            {/* MAIN CARD */}
            <div className="bg-white shadow-xl rounded-[2rem] overflow-hidden border border-gray-200">

                {/* HERO */}
                <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
                        <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase w-max">
                            {project.category}
                        </span>

                        <h1 className="text-4xl font-extrabold text-gray-800 mt-3">{project.title}</h1>

                        <div className="flex gap-6 text-sm text-gray-500 mt-2">
                            <div className="flex items-center gap-2">
                                <User className="text-orange-400 w-5 h-5" />
                                {project.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="text-orange-400 w-5 h-5" />
                                {new Date(project.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    </div>

                    <div className="h-80 lg:h-full bg-orange-50 flex items-center justify-center">
                        {project.imageUrl ? (
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-tr-[2rem] rounded-br-[2rem]"
                            />
                        ) : (
                            <Box className="w-20 h-20 text-orange-200" />
                        )}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-12 grid md:grid-cols-3 gap-10">

                    {/* LEFT */}
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h3 className="font-semibold text-lg mb-2 text-gray-700">Project Overview</h3>
                            <p className="text-gray-600 leading-relaxed">{project.description}</p>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg mb-3 text-gray-700">Instructions</h3>
                            <div className="space-y-2">
                                {(Array.isArray(project.steps) ? project.steps : project.steps?.split('\n'))
                                    .filter(s => s.trim())
                                    .map((step, index) => (
                                        <div key={index} className="flex gap-3 p-3 bg-orange-50 rounded-xl text-sm">
                                            <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                                                {index + 1}
                                            </span>
                                            {step.trim()}
                                        </div>
                                    ))}
                            </div>
                        </section>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">
                        <div className="border rounded-2xl p-5 shadow-sm">
                            <h3 className="font-semibold text-sm mb-3 flex gap-2 items-center text-gray-700">
                                <CheckCircle2 className="text-orange-500 w-5 h-5" /> Materials
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {(Array.isArray(project.materials) ? project.materials : project.materials?.split('\n'))
                                    .filter(m => m.trim())
                                    .map((item, index) => (
                                        <li key={index} className="bg-gray-50 p-2 rounded-lg shadow-sm">{item.trim()}</li>
                                    ))}
                            </ul>
                        </div>

                        <div className="px-4 py-2 bg-orange-600 text-white rounded-xl text-center text-xs font-medium shadow">
                            {project.uploadedUserEmail}
                        </div>
                    </div>
                </div>
            </div>

            {/* ACTION BAR */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md px-6 py-3 flex justify-between items-center z-40">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </button>

                {userRole === "ADMIN" && (
                    <button
                        onClick={() => setShowDeleteConfirm(true)}
                        disabled={deleteLoading}
                        className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                        {deleteLoading ? "Deleting..." : "Delete"}
                    </button>
                )}
            </div>

            {/* DELETE CONFIRM MODAL */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
                        <h3 className="font-bold text-lg mb-4 text-gray-800">Delete Project?</h3>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className="flex-1 bg-gray-100 py-2 rounded-xl text-sm hover:bg-gray-200 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmDelete}
                                className="flex-1 bg-red-600 text-white py-2 rounded-xl text-sm hover:bg-red-700 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {deleteError && (
                <div className="mt-4 text-center text-red-600 text-sm">{deleteError}</div>
            )}
        </div>
    );
};

export default SingleProjectPage;
