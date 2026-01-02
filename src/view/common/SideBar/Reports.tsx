import  { useState } from "react";
import { BarChart2, FileText, TrendingUp, ChevronRight, Users, Calendar, DollarSign } from "lucide-react";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState("activity");

  // Sample data for charts
  const activityData = [
    { month: "Jan", sessions: 245, users: 189 },
    { month: "Feb", sessions: 312, users: 234 },
    { month: "Mar", sessions: 389, users: 298 },
    { month: "Apr", sessions: 445, users: 356 },
    { month: "May", sessions: 523, users: 412 },
    { month: "Jun", sessions: 601, users: 478 }
  ];

  const projectData = [
    { status: "Completed", count: 45 },
    { status: "In Progress", count: 24 },
    { status: "Pending", count: 12 },
    { status: "Overdue", count: 8 }
  ];

  const salesData = [
    { week: "Week 1", revenue: 2800, target: 3000 },
    { week: "Week 2", revenue: 3200, target: 3000 },
    { week: "Week 3", revenue: 2900, target: 3000 },
    { week: "Week 4", revenue: 3650, target: 3000 }
  ];

  const reportCards = [
    {
      id: "activity",
      title: "User Activity",
      description: "Track user sign-ins, session duration, and daily engagement metrics.",
      icon: <Users className="w-6 h-6" />,
      stats: "+12.5%",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: "projects",
      title: "Project Reports",
      description: "Overview of ongoing projects, task completion rates, and deadlines.",
      icon: <FileText className="w-6 h-6" />,
      stats: "24 Active",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "sales",
      title: "Sales Analytics",
      description: "Comprehensive view of income trends and monthly sales growth.",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "$12,450",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
  ];

  const renderChart = () => {
    switch (selectedReport) {
      case "activity":
        return (
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">User Activity Trends</h3>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Area type="monotone" dataKey="sessions" stroke="#10b981" fillOpacity={1} fill="url(#colorSessions)" name="Sessions" />
                <Area type="monotone" dataKey="users" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUsers)" name="Active Users" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        );
      
      case "projects":
        return (
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">Project Status Overview</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="status" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Projects" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      
      case "sales":
        return (
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">Sales Performance</h3>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="week" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} name="Revenue ($)" dot={{ r: 5 }} />
                <Line type="monotone" dataKey="target" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" name="Target ($)" dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Reports Dashboard
          </h1>
          <p className="text-slate-400 text-lg">
            Analyze your data, track performance metrics, and gain actionable insights.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reportCards.map((card) => (
            <button
              key={card.id}
              onClick={() => setSelectedReport(card.id)}
              className={`relative overflow-hidden bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                selectedReport === card.id 
                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                  : 'border-slate-700/50 hover:border-slate-600'
              }`}
            >
              {/* Icon & Stats */}
              <div className="flex items-start justify-between mb-4">
                <div className={`${card.bgColor} p-3 rounded-xl ${card.color}`}>
                  {card.icon}
                </div>
                <span className={`text-2xl font-bold ${card.color}`}>
                  {card.stats}
                </span>
              </div>

              {/* Card Content */}
              <div className="mb-4 text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <div className="flex items-center justify-between text-sm">
                <span className={`${card.color} font-medium`}>
                  {selectedReport === card.id ? 'Currently Viewing' : 'View Details'}
                </span>
                <ChevronRight className={`w-5 h-5 ${card.color}`} />
              </div>
            </button>
          ))}
        </div>

        {/* Chart Section */}
        {renderChart()}

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-slate-400 text-sm">This Month</span>
            </div>
            <p className="text-3xl font-bold text-white">89 Reports</p>
            <p className="text-emerald-400 text-sm mt-1">+18% from last month</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-2">
              <BarChart2 className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-400 text-sm">Avg. Growth</span>
            </div>
            <p className="text-3xl font-bold text-white">+24.8%</p>
            <p className="text-cyan-400 text-sm mt-1">Across all metrics</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-amber-400" />
              <span className="text-slate-400 text-sm">Total Revenue</span>
            </div>
            <p className="text-3xl font-bold text-white">$48,920</p>
            <p className="text-amber-400 text-sm mt-1">Q2 2024 Performance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;