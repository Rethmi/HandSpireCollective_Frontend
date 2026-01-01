// import { Camera, Heart, PaintBucket, Palette, Scissors, Search, Sparkles, Star, Upload, Users } from "lucide-react"
// import { useDispatch, useSelector } from "react-redux"
// import type { RootState } from "../../../slices/rootReducer.ts"
// import { closeDropdown, getAllCategories, selectCategory, toggleDropdown } from "../../../slices/homeSlice.ts"
// import type { AppDispatch } from "../../../store/store.ts"
// import { useNavigate } from "react-router-dom"

// export function Home() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch<AppDispatch>()

//     // Get state from Redux store
//     const { categories, loading, error, isDropdownOpen, selectedCategory } = useSelector(
//         (state: RootState) => state.categories,
//     )

//     // Handle dropdown toggle
//     const handleToggleDropdown = () => {
//         dispatch(toggleDropdown())
//         if (!isDropdownOpen && categories.length === 0) {
//             dispatch(getAllCategories())
//         }
//     }

//     // Handle category selection
//     const handleSelectCategory = (category: { category?: string }) => {
//         dispatch(selectCategory(category))
//         dispatch(closeDropdown())
//         navigate(`/category/${category.category}`)
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
//             {/* Hero Section */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left Content */}
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 Create, Share &amp;
//               </span>
//                             <br />
//                             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Get Inspired
//               </span>
//                         </h1>
//                         <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
//                             Discover thousands of creative DIY craft ideas and art projects. Share your masterpieces and inspire a
//                             community of makers!
//                         </p>

//                         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
//                             <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center space-x-2">
//                                 <Upload className="w-5 h-5" />
//                                 <span>Start Creating</span>
//                             </button>

//                             {/* Dropdown Button */}
//                             <div className="relative">
//                                 <button
//                                     onClick={handleToggleDropdown}
//                                     className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center space-x-2"
//                                 >
//                                     <span>Explore Projects</span>
//                                     <svg
//                                         className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </button>

//                                 {/* Dropdown Menu */}
//                                 {isDropdownOpen && (
//                                     <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
//                                         {loading && (
//                                             <div className="px-4 py-3 text-gray-500 text-sm flex items-center">
//                                                 <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
//                                                     <circle
//                                                         className="opacity-25"
//                                                         cx="12"
//                                                         cy="12"
//                                                         r="10"
//                                                         stroke="currentColor"
//                                                         strokeWidth="4"
//                                                     ></circle>
//                                                     <path
//                                                         className="opacity-75"
//                                                         fill="currentColor"
//                                                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                                     ></path>
//                                                 </svg>
//                                                 Loading categories...
//                                             </div>
//                                         )}

//                                         {error && <div className="px-4 py-3 text-red-500 text-sm">Error: {error}</div>}

//                                         {!loading && !error && categories.length === 0 && (
//                                             <div className="px-4 py-3 text-gray-500 text-sm">No categories found</div>
//                                         )}

//                                         {!loading &&
//                                             categories.length > 0 &&
//                                             categories.map((category, index) => (
//                                                 <button
//                                                     key={index}
//                                                     onClick={() => handleSelectCategory(category)}
//                                                     className="w-full text-left px-4 py-3 hover:bg-purple-50 hover:text-purple-600 transition duration-200 text-sm border-b border-gray-100 last:border-b-0"
//                                                 >
//                                                     {category.category || "Unknown Category"}
//                                                 </button>
//                                             ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Show selected category */}
//                         {selectedCategory && (
//                             <div className="mt-4 p-3 bg-purple-100 rounded-lg">
//                                 <p className="text-purple-700 text-sm">
//                                     Selected: <strong>{selectedCategory.category}</strong>
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Right Image */}
//                     <div className="relative">
//                         <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
//                             <div className="bg-white rounded-2xl p-6 shadow-lg">
//                                 <div className="grid grid-cols-2 gap-4 mb-4">
//                                     <div className="bg-pink-100 rounded-xl p-4 flex flex-col items-center">
//                                         <Scissors className="w-8 h-8 text-pink-600 mb-2" />
//                                         <span className="text-xs font-medium text-pink-700">Paper Crafts</span>
//                                     </div>
//                                     <div className="bg-purple-100 rounded-xl p-4 flex flex-col items-center">
//                                         <PaintBucket className="w-8 h-8 text-purple-600 mb-2" />
//                                         <span className="text-xs font-medium text-purple-700">Painting</span>
//                                     </div>
//                                     <div className="bg-blue-100 rounded-xl p-4 flex flex-col items-center">
//                                         <Heart className="w-8 h-8 text-blue-600 mb-2" />
//                                         <span className="text-xs font-medium text-blue-700">DIY Gifts</span>
//                                     </div>
//                                     <div className="bg-green-100 rounded-xl p-4 flex flex-col items-center">
//                                         <Sparkles className="w-8 h-8 text-green-600 mb-2" />
//                                         <span className="text-xs font-medium text-green-700">Decorations</span>
//                                     </div>
//                                 </div>
//                                 <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <span className="text-sm font-semibold text-gray-700">Latest Project</span>
//                                         <div className="flex text-yellow-400">
//                                             {[...Array(5)].map((_, i) => (
//                                                 <Star key={i} className="w-3 h-3 fill-current" />
//                                             ))}
//                                         </div>
//                                     </div>
//                                     <p className="text-xs text-gray-600">Rainbow Paper Butterfly</p>
//                                     <p className="text-xs text-gray-500">by Sarah M.</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Floating Elements */}
//                         <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
//                             <Camera className="w-5 h-5 text-white" />
//                         </div>
//                         <div
//                             className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg animate-bounce"
//                             style={{ animationDelay: "1s" }}
//                         >
//                             <Palette className="w-5 h-5 text-white" />
//                         </div>
//                     </div>
//                 </div>
//                 {/* Floating Craft Icons */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                     <div className="absolute top-20 left-10 text-pink-300 animate-bounce" style={{ animationDelay: "0s" }}>
//                         <Scissors className="w-8 h-8" />
//                     </div>
//                     <div className="absolute top-32 right-20 text-purple-300 animate-bounce" style={{ animationDelay: "1s" }}>
//                         <PaintBucket className="w-10 h-10" />
//                     </div>
//                     <div className="absolute top-60 left-1/4 text-blue-300 animate-bounce" style={{ animationDelay: "2s" }}>
//                         <Heart className="w-6 h-6" />
//                     </div>
//                     <div className="absolute top-40 right-1/3 text-pink-300 animate-bounce" style={{ animationDelay: "3s" }}>
//                         <Sparkles className="w-7 h-7" />
//                     </div>
//                 </div>
//             </section>

//             {/* Featured Projects Section */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                         Featured Projects
//                     </h2>
//                     <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                         Discover exceptional creations from our talented community of artists and crafters
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* Project 1 - Share Creations */}
//                     <div className="group cursor-pointer">
//                         <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
//                             <div className="w-full h-56 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-purple-200/50"></div>
//                                 <div className="relative text-center z-10">
//                                     <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-fit">
//                                         <Upload className="w-8 h-8 text-purple-600" />
//                                     </div>
//                                     <p className="text-xs font-semibold text-purple-700">Share Your Art</p>
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
//                                 Upload & Showcase
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                 Share your handcrafted masterpieces with our vibrant community. From intricate paper art to stunning
//                                 paintings, showcase your creativity.
//                             </p>
//                             <div className="flex items-center text-purple-600 font-medium text-sm">
//                                 <span>Get Started</span>
//                                 <svg
//                                     className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Project 2 - Explore Ideas */}
//                     <div className="group cursor-pointer">
//                         <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
//                             <div className="w-full h-56 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-green-200/50"></div>
//                                 <div className="relative text-center z-10">
//                                     <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-fit">
//                                         <Search className="w-8 h-8 text-blue-600" />
//                                     </div>
//                                     <p className="text-xs font-semibold text-blue-700">Discover Projects</p>
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
//                                 Explore & Learn
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                 Browse thousands of inspiring projects with detailed tutorials and step-by-step guides for creators of
//                                 all skill levels.
//                             </p>
//                             <div className="flex items-center text-blue-600 font-medium text-sm">
//                                 <span>Start Exploring</span>
//                                 <svg
//                                     className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Project 3 - Community */}
//                     <div className="group cursor-pointer">
//                         <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
//                             <div className="w-full h-56 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-pink-200/50"></div>
//                                 <div className="relative text-center z-10">
//                                     <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-fit">
//                                         <Users className="w-8 h-8 text-orange-600" />
//                                     </div>
//                                     <p className="text-xs font-semibold text-orange-700">Join Community</p>
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
//                                 Connect & Collaborate
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                 Join a supportive community of artists and crafters. Share techniques, get feedback, and celebrate
//                                 creativity together.
//                             </p>
//                             <div className="flex items-center text-orange-600 font-medium text-sm">
//                                 <span>Join Now</span>
//                                 <svg
//                                     className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Project 4 - Reviews */}
//                     <div className="group cursor-pointer">
//                         <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
//                             <div className="w-full h-56 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-indigo-200/50"></div>
//                                 <div className="relative text-center z-10">
//                                     <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-fit">
//                                         <Star className="w-8 h-8 text-purple-600" />
//                                     </div>
//                                     <p className="text-xs font-semibold text-purple-700">Rate & Review</p>
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
//                                 Rate & Appreciate
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                 Show appreciation for outstanding artwork with ratings and thoughtful reviews. Help others discover
//                                 exceptional projects.
//                             </p>
//                             <div className="flex items-center text-purple-600 font-medium text-sm">
//                                 <span>Start Rating</span>
//                                 <svg
//                                     className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Project 5 - Favorites */}
//                     <div className="group cursor-pointer">
//                         <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
//                             <div className="w-full h-56 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-teal-200/50"></div>
//                                 <div className="relative text-center z-10">
//                                     <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-fit">
//                                         <Heart className="w-8 h-8 text-green-600" />
//                                     </div>
//                                     <p className="text-xs font-semibold text-green-700">Save Favorites</p>
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors">
//                                 Curate & Save
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                 Build your personal collection of inspiring projects. Bookmark tutorials and ideas for your future
//                                 creative endeavors.
//                             </p>
//                             <div className="flex items-center text-green-600 font-medium text-sm">
//                                 <span>Save Projects</span>
//                                 <svg
//                                     className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Project 6 - For Everyone */}
//                     <div className="group cursor-pointer">
//                         <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
//                             <div className="w-full h-56 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-pink-200/50"></div>
//                                 <div className="relative text-center z-10">
//                                     <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-fit">
//                                         <Sparkles className="w-8 h-8 text-rose-600" />
//                                     </div>
//                                     <p className="text-xs font-semibold text-rose-700">All Skill Levels</p>
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-rose-600 transition-colors">
//                                 For Every Creator
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                 Whether you're a beginner or expert, find projects tailored to your skill level with comprehensive
//                                 guides and tips.
//                             </p>
//                             <div className="flex items-center text-rose-600 font-medium text-sm">
//                                 <span>Find Your Level</span>
//                                 <svg
//                                     className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Call to Action Section */}
//             <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Creative Journey?</h2>
//                     <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
//                         Join our community of makers and discover unlimited inspiration for your next craft project!
//                     </p>
//                     <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center space-x-3 mx-auto">
//                         <Palette className="w-6 h-6" />
//                         <span>Join CraftGallery Today</span>
//                     </button>
//                 </div>
//             </section>
//         </div>
//     )
// }
// import { Camera, Heart, PaintBucket, Palette, Scissors, Search, Sparkles, Star, Upload, Users, TrendingUp, BookOpen, Award, MessageCircle, ChevronRight, Clock, CheckCircle, Shield } from "lucide-react"
// import { useDispatch, useSelector } from "react-redux"
// import type { RootState } from "../../../slices/rootReducer.ts"
// import { closeDropdown, getAllCategories, selectCategory, toggleDropdown } from "../../../slices/homeSlice.ts"
// import type { AppDispatch } from "../../../store/store.ts"
// import { useNavigate } from "react-router-dom"

// export function Home() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch<AppDispatch>()

//     const { categories, loading, error, isDropdownOpen, selectedCategory } = useSelector(
//         (state: RootState) => state.categories,
//     )

//     const handleToggleDropdown = () => {
//         dispatch(toggleDropdown())
//         if (!isDropdownOpen && categories.length === 0) {
//             dispatch(getAllCategories())
//         }
//     }

//     const handleSelectCategory = (category: { category?: string }) => {
//         dispatch(selectCategory(category))
//         dispatch(closeDropdown())
//         if (category.category) {
//             navigate(`/category/${category.category}`)
//         }
//     }

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Hero Section - Clean and Professional */}
//             <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//                     <div className="grid lg:grid-cols-2 gap-8 items-center">
//                         {/* Left Content */}
//                         <div className="space-y-6">
//                             <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-amber-100">
//                                 <Sparkles className="w-3 h-3 text-amber-600" />
//                                 <span className="text-xs font-medium text-amber-900">Trusted by 50,000+ Crafters</span>
//                             </div>
                            
//                             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Discover Beautiful
//                                 <span className="block text-amber-700">Handcraft Projects</span>
//                             </h1>
                            
//                             <p className="text-base text-gray-600 leading-relaxed max-w-xl">
//                                 Explore a curated collection of handmade crafts, DIY tutorials, and creative projects. 
//                                 Share your work and connect with a passionate community of makers.
//                             </p>

//                             <div className="flex flex-col sm:flex-row gap-3">
//                                 <button className="bg-amber-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
//                                     <Upload className="w-4 h-4" />
//                                     <span>Upload Your Craft</span>
//                                 </button>

//                                 <div className="relative">
//                                     <button
//                                         onClick={handleToggleDropdown}
//                                         className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm font-semibold hover:border-amber-300 hover:bg-amber-50 transition-colors shadow-sm flex items-center justify-center space-x-2"
//                                     >
//                                         <span>Browse Categories</span>
//                                         <svg
//                                             className={`w-3.5 h-3.5 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
//                                             fill="none"
//                                             stroke="currentColor"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </button>

//                                     {isDropdownOpen && (
//                                         <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto">
//                                             {loading && (
//                                                 <div className="px-4 py-3 text-gray-500 text-xs flex items-center">
//                                                     <svg className="animate-spin h-3.5 w-3.5 mr-2" fill="none" viewBox="0 0 24 24">
//                                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                                     </svg>
//                                                     Loading categories...
//                                                 </div>
//                                             )}

//                                             {error && <div className="px-4 py-3 text-red-600 text-xs">Error: {error}</div>}

//                                             {!loading && !error && categories.length === 0 && (
//                                                 <div className="px-4 py-3 text-gray-500 text-xs">No categories found</div>
//                                             )}

//                                             {!loading && categories.length > 0 && categories.map((category, index) => (
//                                                 <button
//                                                     key={index}
//                                                     onClick={() => handleSelectCategory(category)}
//                                                     className="w-full text-left px-4 py-2.5 hover:bg-amber-50 transition-colors text-xs border-b border-gray-100 last:border-b-0"
//                                                 >
//                                                     {category.category || "Unknown Category"}
//                                                 </button>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {selectedCategory && selectedCategory.category && (
//                                 <div className="inline-flex items-center space-x-2 bg-amber-100 px-3 py-1.5 rounded-lg">
//                                     <span className="text-xs text-amber-900">
//                                         Selected: <strong>{selectedCategory.category}</strong>
//                                     </span>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Right Visual with Images */}
//                         <div className="relative">
//                             <div className="grid grid-cols-2 gap-3">
//                                 <div className="space-y-3">
//                                     <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
//                                         <img 
//                                             src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop" 
//                                             alt="Paper Crafts"
//                                             className="w-full h-32 object-cover"
//                                         />
//                                         <div className="p-4">
//                                             <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
//                                                 <Scissors className="w-5 h-5 text-amber-700" />
//                                             </div>
//                                             <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Paper Crafts</h3>
//                                             <p className="text-xs text-gray-500">2,345 projects</p>
//                                         </div>
//                                     </div>
//                                     <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
//                                         <img 
//                                             src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop" 
//                                             alt="DIY Gifts"
//                                             className="w-full h-32 object-cover"
//                                         />
//                                         <div className="p-4">
//                                             <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-2">
//                                                 <Heart className="w-5 h-5 text-rose-700" />
//                                             </div>
//                                             <h3 className="text-sm font-semibold text-gray-900 mb-0.5">DIY Gifts</h3>
//                                             <p className="text-xs text-gray-500">1,892 projects</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="space-y-3 pt-6">
//                                     <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
//                                         <img 
//                                             src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop" 
//                                             alt="Painting"
//                                             className="w-full h-32 object-cover"
//                                         />
//                                         <div className="p-4">
//                                             <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
//                                                 <PaintBucket className="w-5 h-5 text-orange-700" />
//                                             </div>
//                                             <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Painting</h3>
//                                             <p className="text-xs text-gray-500">3,120 projects</p>
//                                         </div>
//                                     </div>
//                                     <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
//                                         <img 
//                                             src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop" 
//                                             alt="Decorations"
//                                             className="w-full h-32 object-cover"
//                                         />
//                                         <div className="p-4">
//                                             <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
//                                                 <Sparkles className="w-5 h-5 text-amber-700" />
//                                             </div>
//                                             <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Decorations</h3>
//                                             <p className="text-xs text-gray-500">1,567 projects</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             {/* <section className="bg-white border-y border-gray-100">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                         <div className="text-center">
//                             <div className="text-2xl font-bold text-amber-700 mb-1">50K+</div>
//                             <div className="text-xs text-gray-600">Active Members</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-2xl font-bold text-amber-700 mb-1">15K+</div>
//                             <div className="text-xs text-gray-600">Projects Shared</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-2xl font-bold text-amber-700 mb-1">200+</div>
//                             <div className="text-xs text-gray-600">Categories</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-2xl font-bold text-amber-700 mb-1">98%</div>
//                             <div className="text-xs text-gray-600">Satisfaction Rate</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="bg-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                             How CraftGallery Works
//                         </h2>
//                         <p className="text-sm text-gray-600 max-w-2xl mx-auto">
//                             Get started in three simple steps and join our thriving creative community
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="text-center">
//                             <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <span className="text-2xl font-bold text-amber-700">1</span>
//                             </div>
//                             <h3 className="text-lg font-semibold text-gray-900 mb-2">Create an Account</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Sign up for free in seconds and set up your creative profile to get started.
//                             </p>
//                         </div>

//                         <div className="text-center">
//                             <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <span className="text-2xl font-bold text-orange-700">2</span>
//                             </div>
//                             <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your Projects</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Share your handmade creations with photos, descriptions, and step-by-step guides.
//                             </p>
//                         </div>

//                         <div className="text-center">
//                             <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <span className="text-2xl font-bold text-rose-700">3</span>
//                             </div>
//                             <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect & Inspire</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Engage with the community, get feedback, and inspire others with your creativity.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}

            
// {/* Latest Blog Posts Section */}
//             <section className="bg-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between mb-8">
//                         <div>
//                             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//                                 From Our Blog
//                             </h2>
//                             <p className="text-sm text-gray-600">
//                                 Tips, tutorials, and inspiration for your next project
//                             </p>
//                         </div>
//                         <button className="hidden md:flex items-center space-x-2 text-amber-700 font-semibold text-sm hover:text-amber-800">
//                             <span>Read More</span>
//                             <ChevronRight className="w-4 h-4" />
//                         </button>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-6">
//                         <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
//                             <img 
//                                 src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop" 
//                                 alt="Blog post"
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-6">
//                                 <div className="flex items-center text-xs text-gray-500 mb-3">
//                                     <Clock className="w-3 h-3 mr-1" />
//                                     <span>5 min read</span>
//                                     <span className="mx-2">•</span>
//                                     <span>Dec 20, 2024</span>
//                                 </div>
//                                 <h3 className="text-base font-semibold text-gray-900 mb-2">
//                                     10 Essential Tools Every Crafter Needs
//                                 </h3>
//                                 <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                     Discover the must-have tools that will transform your crafting experience and help you create professional-quality projects.
//                                 </p>
//                                 <button className="text-amber-700 font-semibold text-sm flex items-center hover:text-amber-800">
//                                     <span>Read Article</span>
//                                     <ChevronRight className="w-4 h-4 ml-1" />
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
//                             <img 
//                                 src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop" 
//                                 alt="Blog post"
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-6">
//                                 <div className="flex items-center text-xs text-gray-500 mb-3">
//                                     <Clock className="w-3 h-3 mr-1" />
//                                     <span>7 min read</span>
//                                     <span className="mx-2">•</span>
//                                     <span>Dec 18, 2024</span>
//                                 </div>
//                                 <h3 className="text-base font-semibold text-gray-900 mb-2">
//                                     Watercolor Techniques for Beginners
//                                 </h3>
//                                 <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                     Learn fundamental watercolor techniques that will help you create beautiful paintings, even if you're just starting out.
//                                 </p>
//                                 <button className="text-amber-700 font-semibold text-sm flex items-center hover:text-amber-800">
//                                     <span>Read Article</span>
//                                     <ChevronRight className="w-4 h-4 ml-1" />
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
//                             <img 
//                                 src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop" 
//                                 alt="Blog post"
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-6">
//                                 <div className="flex items-center text-xs text-gray-500 mb-3">
//                                     <Clock className="w-3 h-3 mr-1" />
//                                     <span>6 min read</span>
//                                     <span className="mx-2">•</span>
//                                     <span>Dec 15, 2024</span>
//                                 </div>
//                                 <h3 className="text-base font-semibold text-gray-900 mb-2">
//                                     Sustainable Crafting: Eco-Friendly Materials
//                                 </h3>
//                                 <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                                     Explore environmentally conscious crafting materials and practices that help reduce waste while creating beautiful projects.
//                                 </p>
//                                 <button className="text-amber-700 font-semibold text-sm flex items-center hover:text-amber-800">
//                                     <span>Read Article</span>
//                                     <ChevronRight className="w-4 h-4 ml-1" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
          
            
           

//             {/* Features Section */}
//             <section className="bg-gray-50 py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                             Everything You Need to Create
//                         </h2>
//                         <p className="text-sm text-gray-600 max-w-2xl mx-auto">
//                             Join our community and access all the tools and inspiration you need for your crafting journey
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                             <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
//                                 <Upload className="w-6 h-6 text-amber-700" />
//                             </div>
//                             <h3 className="text-base font-semibold text-gray-900 mb-2">Share Your Work</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Upload photos of your handcrafted projects and showcase your creativity to an appreciative audience.
//                             </p>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                             <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
//                                 <Search className="w-6 h-6 text-orange-700" />
//                             </div>
//                             <h3 className="text-base font-semibold text-gray-900 mb-2">Discover Ideas</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Browse thousands of projects across multiple categories and find inspiration for your next creation.
//                             </p>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                             <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
//                                 <BookOpen className="w-6 h-6 text-rose-700" />
//                             </div>
//                             <h3 className="text-base font-semibold text-gray-900 mb-2">Learn Techniques</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Access step-by-step tutorials and guides from experienced crafters to improve your skills.
//                             </p>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                             <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
//                                 <Users className="w-6 h-6 text-amber-700" />
//                             </div>
//                             <h3 className="text-base font-semibold text-gray-900 mb-2">Join Community</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Connect with like-minded creators, share tips, and participate in collaborative projects.
//                             </p>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                             <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
//                                 <Star className="w-6 h-6 text-orange-700" />
//                             </div>
//                             <h3 className="text-base font-semibold text-gray-900 mb-2">Rate & Review</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Show appreciation for exceptional work and help others discover the best projects.
//                             </p>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                             <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
//                                 <Heart className="w-6 h-6 text-rose-700" />
//                             </div>
//                             <h3 className="text-base font-semibold text-gray-900 mb-2">Save Favorites</h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                                 Bookmark inspiring projects and create your personal collection for future reference.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

 
// {/* Community Highlights Section */}
//             <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                             Community Achievements
//                         </h2>
//                         <p className="text-sm text-gray-600 max-w-2xl mx-auto">
//                             Celebrating the incredible milestones of our creative community
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
//                             <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Award className="w-7 h-7 text-amber-700" />
//                             </div>
//                             <div className="text-3xl font-bold text-amber-700 mb-2">2.5M+</div>
//                             <p className="text-sm text-gray-600">Total Likes Received</p>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
//                             <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <MessageCircle className="w-7 h-7 text-orange-700" />
//                             </div>
//                             <div className="text-3xl font-bold text-orange-700 mb-2">180K+</div>
//                             <p className="text-sm text-gray-600">Community Comments</p>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
//                             <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Camera className="w-7 h-7 text-rose-700" />
//                             </div>
//                             <div className="text-3xl font-bold text-rose-700 mb-2">45K+</div>
//                             <p className="text-sm text-gray-600">Photos Uploaded Today</p>
//                         </div>

//                         <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
//                             <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Users className="w-7 h-7 text-amber-700" />
//                             </div>
//                             <div className="text-3xl font-bold text-amber-700 mb-2">120+</div>
//                             <p className="text-sm text-gray-600">Countries Represented</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//              {/* Trust Indicators Section */}
//             <section className="bg-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                             Trusted by Crafters Worldwide
//                         </h2>
//                         <p className="text-sm text-gray-600 max-w-2xl mx-auto">
//                             Join thousands of satisfied creators who trust CraftGallery for their crafting journey
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="flex items-start space-x-4">
//                             <div className="flex-shrink-0">
//                                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                                     <CheckCircle className="w-6 h-6 text-green-600" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-semibold text-gray-900 mb-2">100% Free to Join</h3>
//                                 <p className="text-sm text-gray-600 leading-relaxed">
//                                     No hidden fees or premium tiers. Access all features completely free and start sharing your work immediately.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex items-start space-x-4">
//                             <div className="flex-shrink-0">
//                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                                     <Shield className="w-6 h-6 text-blue-600" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-semibold text-gray-900 mb-2">Your Work is Protected</h3>
//                                 <p className="text-sm text-gray-600 leading-relaxed">
//                                     Advanced security measures ensure your creative work and personal information remain safe and secure.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex items-start space-x-4">
//                             <div className="flex-shrink-0">
//                                 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                                     <Heart className="w-6 h-6 text-purple-600" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-semibold text-gray-900 mb-2">Supportive Community</h3>
//                                 <p className="text-sm text-gray-600 leading-relaxed">
//                                     Connect with encouraging crafters who celebrate your work and provide constructive feedback.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//              {/* Newsletter Section */}
//             <section className="bg-gray-50 py-16">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
//                         <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                             <MessageCircle className="w-8 h-8 text-amber-700" />
//                         </div>
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                             Stay Inspired Weekly
//                         </h2>
//                         <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
//                             Subscribe to our newsletter and get the latest craft trends, tutorials, and featured projects delivered to your inbox every week.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//                             <input 
//                                 type="email" 
//                                 placeholder="Enter your email address"
//                                 className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
//                             />
//                             <button className="bg-amber-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors shadow-md">
//                                 Subscribe
//                             </button>
//                         </div>
//                         <p className="text-xs text-gray-500 mt-4">
//                             Join 25,000+ crafters already subscribed. Unsubscribe anytime.
//                         </p>
//                     </div>
//                 </div>
//             </section>
            

//             {/* CTA Section
//             <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-rose-600 text-white py-16">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <h2 className="text-2xl md:text-3xl font-bold mb-4">
//                         Start Your Creative Journey Today
//                     </h2>
//                     <p className="text-base mb-8 opacity-95 max-w-2xl mx-auto">
//                         Join thousands of crafters sharing their passion and inspiring others. Your next masterpiece awaits.
//                     </p>
//                     <button className="bg-white text-amber-700 px-8 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg inline-flex items-center space-x-2">
//                         <Palette className="w-4 h-4" />
//                         <span>Get Started Free</span>
//                     </button>
//                 </div>
//             </section> */}
//         </div>
//     )
// }

import { useState } from "react"
import { Camera, Heart, PaintBucket, Palette, Scissors, Search, Sparkles, Star, Upload, Users, TrendingUp, BookOpen, Award, MessageCircle, ChevronRight, Clock, CheckCircle, Shield, X } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../slices/rootReducer.ts"
import { getAllCategories, selectCategory } from "../../../slices/homeSlice.ts"
import type { AppDispatch } from "../../../store/store.ts"
import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    
    // Modal eka open/close karanna state ekak
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { categories, loading, error, selectedCategory } = useSelector(
        (state: RootState) => state.categories,
    )

    const handleOpenModal = () => {
        setIsModalOpen(true)
        if (categories.length === 0) {
            dispatch(getAllCategories())
        }
    }

    const handleSelectCategory = (category: { category?: string }) => {
        dispatch(selectCategory(category))
        setIsModalOpen(false) // Select karapu gaman modal eka wahanna
        if (category.category) {
            navigate(`/category/${category.category}`)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-amber-100">
                                <Sparkles className="w-3 h-3 text-amber-600" />
                                <span className="text-xs font-medium text-amber-900">Trusted by 50,000+ Crafters</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Discover Beautiful
                                <span className="block text-amber-700">Handcraft Projects</span>
                            </h1>
                            
                            <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                                Explore a curated collection of handmade crafts, DIY tutorials, and creative projects. 
                                Share your work and connect with a passionate community of makers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* "Upload Your Craft" ain kara, Browse Categories vitharak thibba */}
                                <button
                                    onClick={handleOpenModal}
                                    className="w-full sm:w-auto bg-amber-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <Search className="w-4 h-4" />
                                    <span>Discover More</span>
                                </button>
                            </div>

                            {selectedCategory && selectedCategory.category && (
                                <div className="inline-flex items-center space-x-2 bg-amber-100 px-3 py-1.5 rounded-lg">
                                    <span className="text-xs text-amber-900">
                                        Selected: <strong>{selectedCategory.category}</strong>
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Right Visual with Images */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-3">
                                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                        <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop" alt="Paper Crafts" className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                                                <Scissors className="w-5 h-5 text-amber-700" />
                                            </div>
                                            <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Paper Crafts</h3>
                                            <p className="text-xs text-gray-500">2,345 projects</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                        <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop" alt="DIY Gifts" className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-2">
                                                <Heart className="w-5 h-5 text-rose-700" />
                                            </div>
                                            <h3 className="text-sm font-semibold text-gray-900 mb-0.5">DIY Gifts</h3>
                                            <p className="text-xs text-gray-500">1,892 projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3 pt-6">
                                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                        <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop" alt="Painting" className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                                                <PaintBucket className="w-5 h-5 text-orange-700" />
                                            </div>
                                            <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Painting</h3>
                                            <p className="text-xs text-gray-500">3,120 projects</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop" alt="Decorations" className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                                                <Sparkles className="w-5 h-5 text-amber-700" />
                                            </div>
                                            <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Decorations</h3>
                                            <p className="text-xs text-gray-500">1,567 projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY POP-UP MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 text-center flex-1">All Categories</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                        
                        <div className="p-6 max-h-[60vh] overflow-y-auto">
                            {loading && (
                                <div className="flex justify-center py-8">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                                </div>
                            )}

                            {error && <div className="p-4 text-red-600 text-sm text-center">Error: {error}</div>}

                            {!loading && !error && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {categories.map((category, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSelectCategory(category)}
                                            className="text-left px-4 py-3 bg-gray-50 hover:bg-amber-50 hover:text-amber-700 border border-gray-100 rounded-xl transition-all text-sm font-medium"
                                        >
                                            {category.category || "Unknown"}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* From Our Blog Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">From Our Blog</h2>
                            <p className="text-sm text-gray-600">Tips, tutorials, and inspiration for your next project</p>
                        </div>
                        <button className="hidden md:flex items-center space-x-2 text-amber-700 font-semibold text-sm hover:text-amber-800">
                            <span>Read More</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Blog Card 1 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop" alt="Blog" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-xs text-gray-500 mb-3">
                                    <Clock className="w-3 h-3 mr-1" />
                                    <span>5 min read • Dec 20, 2024</span>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">10 Essential Tools Every Crafter Needs</h3>
                                <p className="text-sm text-gray-600 mb-4">Discover the must-have tools that will transform your crafting experience.</p>
                                <button className="text-amber-700 font-semibold text-sm flex items-center">Read Article <ChevronRight className="w-4 h-4 ml-1" /></button>
                            </div>
                        </div>
                        {/* Blog Card 2 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop" alt="Blog" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-xs text-gray-500 mb-3">
                                    <Clock className="w-3 h-3 mr-1" />
                                    <span>7 min read • Dec 18, 2024</span>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">Watercolor Techniques for Beginners</h3>
                                <p className="text-sm text-gray-600 mb-4">Learn fundamental watercolor techniques to create beautiful paintings.</p>
                                <button className="text-amber-700 font-semibold text-sm flex items-center">Read Article <ChevronRight className="w-4 h-4 ml-1" /></button>
                            </div>
                        </div>
                        {/* Blog Card 3 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop" alt="Blog" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-xs text-gray-500 mb-3">
                                    <Clock className="w-3 h-3 mr-1" />
                                    <span>6 min read • Dec 15, 2024</span>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">Sustainable Crafting: Eco-Friendly Materials</h3>
                                <p className="text-sm text-gray-600 mb-4">Explore environmentally conscious crafting materials and practices.</p>
                                <button className="text-amber-700 font-semibold text-sm flex items-center">Read Article <ChevronRight className="w-4 h-4 ml-1" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Everything You Need to Create</h2>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">Join our community and access all the tools and inspiration you need.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureBox Icon={Upload} title="Share Your Work" desc="Upload photos of your projects and showcase your creativity." />
                        <FeatureBox Icon={Search} title="Discover Ideas" desc="Browse thousands of projects across multiple categories." />
                        <FeatureBox Icon={BookOpen} title="Learn Techniques" desc="Access step-by-step tutorials from experienced crafters." />
                        <FeatureBox Icon={Users} title="Join Community" desc="Connect with like-minded creators and share tips." />
                        <FeatureBox Icon={Star} title="Rate & Review" desc="Show appreciation for exceptional work and help others." />
                        <FeatureBox Icon={Heart} title="Save Favorites" desc="Bookmark inspiring projects for future reference." />
                    </div>
                </div>
            </section>

           {/* Community Highlights Section */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Community Achievements
                        </h2>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                            Celebrating the incredible milestones of our creative community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-7 h-7 text-amber-700" />
                            </div>
                            <div className="text-3xl font-bold text-amber-700 mb-2">2.5M+</div>
                            <p className="text-sm text-gray-600">Total Likes Received</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-7 h-7 text-orange-700" />
                            </div>
                            <div className="text-3xl font-bold text-orange-700 mb-2">180K+</div>
                            <p className="text-sm text-gray-600">Community Comments</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Camera className="w-7 h-7 text-rose-700" />
                            </div>
                            <div className="text-3xl font-bold text-rose-700 mb-2">45K+</div>
                            <p className="text-sm text-gray-600">Photos Uploaded Today</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-7 h-7 text-amber-700" />
                            </div>
                            <div className="text-3xl font-bold text-amber-700 mb-2">120+</div>
                            <p className="text-sm text-gray-600">Countries Represented</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Trust Indicators Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Trusted by Crafters Worldwide
                        </h2>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                            Join thousands of satisfied creators who trust CraftGallery for their crafting journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">100% Free to Join</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    No hidden fees or premium tiers. Access all features completely free and start sharing your work immediately.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">Your Work is Protected</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Advanced security measures ensure your creative work and personal information remain safe and secure.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">Supportive Community</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Connect with encouraging crafters who celebrate your work and provide constructive feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* Newsletter Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MessageCircle className="w-8 h-8 text-amber-700" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Stay Inspired Weekly
                        </h2>
                        <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
                            Subscribe to our newsletter and get the latest craft trends, tutorials, and featured projects delivered to your inbox every week.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                            />
                            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors shadow-md">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            Join 25,000+ crafters already subscribed. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </section>
            
       </div>
    )
}

// Sub-components to keep code clean
const FeatureBox = ({ Icon, title, desc }: any) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-amber-700" />
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
    </div>
)

const StatBox = ({ Icon, value, label }: any) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="w-7 h-7 text-amber-700" />
        </div>
        <div className="text-3xl font-bold text-amber-700 mb-2">{value}</div>
        <p className="text-sm text-gray-600">{label}</p>
    </div>
)

const TrustBox = ({ Icon, title, desc, color, bg }: any) => (
    <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 ${bg} rounded-full flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    </div>
)