import { useEffect, useState } from 'react';
import {
  Users,
  FolderOpen,
  Layers,
  TrendingUp,
  TrendingDown,
  Activity,
  ChevronRight,
  Download,
  X
} from 'lucide-react';
import { backendApi } from '../../../api';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface DashboardStats {
  totalUsers: number;
  totalProjects: number;
  totalCategories: number;
}

export const AdminDashboardContent = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalProjects: 0,
    totalCategories: 0
  });

  const [loading, setLoading] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportLoading, setReportLoading] = useState(false);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const [usersRes, projectsRes, categoriesRes] = await Promise.allSettled([
        backendApi.get('/user/all'),
        backendApi.get('/project/all'),
        backendApi.get('/category')
      ]);

      setStats({
        totalUsers:
          usersRes.status === 'fulfilled' ? usersRes.value.data.length : 0,
        totalProjects:
          projectsRes.status === 'fulfilled' ? projectsRes.value.data.length : 0,
        totalCategories:
          categoriesRes.status === 'fulfilled'
            ? categoriesRes.value.data.length
            : 0
      });
    } catch (err) {
      console.error('Dashboard fetch error', err);
    } finally {
      setLoading(false);
    }
  };

  // Generate report in PDF with fallback colors
  const generatePDFReport = async () => {
    setReportLoading(true);
    try {
      // Create a separate container for PDF generation with safe colors
      const reportContainer = document.getElementById('report-content');
      if (!reportContainer) {
        console.error('Report content not found');
        return;
      }

      // Clone the element to avoid modifying the original
      const clonedElement = reportContainer.cloneNode(true) as HTMLElement;
      
      // Replace problematic color classes with safe ones
      const elements = clonedElement.querySelectorAll('*');
      elements.forEach(el => {
        const classList = el.className?.toString() || '';
        if (classList.includes('oklch') || classList.includes('bg-gradient')) {
          // Replace gradient backgrounds with solid colors
          if (classList.includes('from-amber-400') && classList.includes('to-orange-500')) {
            el.className = el.className.replace(/from-amber-400\s*to-orange-500/, '');
            (el as HTMLElement).style.background = '#f59e0b'; // Amber 500
          }
        }
        
        // Replace any bg-{color} classes with inline styles
        if (classList.includes('bg-amber-50')) {
          (el as HTMLElement).style.backgroundColor = '#fffbeb';
        }
        if (classList.includes('bg-orange-50')) {
          (el as HTMLElement).style.backgroundColor = '#fff7ed';
        }
        if (classList.includes('bg-slate-50')) {
          (el as HTMLElement).style.backgroundColor = '#f8fafc';
        }
        if (classList.includes('bg-slate-900')) {
          (el as HTMLElement).style.backgroundColor = '#0f172a';
        }
        if (classList.includes('bg-slate-100')) {
          (el as HTMLElement).style.backgroundColor = '#f1f5f9';
        }
      });

      // Create a hidden container for PDF generation
      const pdfContainer = document.createElement('div');
      pdfContainer.style.position = 'fixed';
      pdfContainer.style.left = '-9999px';
      pdfContainer.style.top = '0';
      pdfContainer.style.width = '210mm'; // A4 width
      pdfContainer.style.backgroundColor = '#ffffff';
      pdfContainer.appendChild(clonedElement);
      document.body.appendChild(pdfContainer);

      const canvas = await html2canvas(pdfContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        ignoreElements: (element) => {
          // Ignore elements that might cause issues
          return false;
        },
        onclone: (clonedDoc) => {
          // Additional cleanup on cloned document
          const clonedElements = clonedDoc.querySelectorAll('*');
          clonedElements.forEach(el => {
            // Remove any inline styles with oklch
            const style = (el as HTMLElement).style.cssText;
            if (style && style.includes('oklch')) {
              (el as HTMLElement).style.cssText = style.replace(/oklch\([^)]+\)/g, '#cccccc');
            }
          });
        }
      });

      // Clean up
      document.body.removeChild(pdfContainer);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileName = `Admin_Report_${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
      
      // Close modal after download
      setTimeout(() => setShowReportModal(false), 1000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Fallback: Generate a simpler PDF without html2canvas
      generateSimplePDFReport();
    } finally {
      setReportLoading(false);
    }
  };

  // Fallback PDF generation for when html2canvas fails
  const generateSimplePDFReport = () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Set font
      pdf.setFont('helvetica', 'bold');
      
      // Title
      pdf.setFontSize(24);
      pdf.text('Admin Dashboard Report', 105, 20, { align: 'center' });
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, 105, 30, { align: 'center' });
      
      // Statistics Section
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Statistics Summary', 20, 50);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Total Users: ${stats.totalUsers}`, 30, 65);
      pdf.text(`Total Projects: ${stats.totalProjects}`, 30, 75);
      pdf.text(`Total Categories: ${stats.totalCategories}`, 30, 85);
      
      // Distribution Section
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('System Distribution', 20, 110);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      
      const distributions = [
        { label: 'Users', value: stats.totalUsers, max: 300 },
        { label: 'Projects', value: stats.totalProjects, max: 500 },
        { label: 'Categories', value: stats.totalCategories, max: 50 }
      ];
      
      let yPos = 125;
      distributions.forEach(dist => {
        const percentage = ((dist.value / dist.max) * 100).toFixed(1);
        pdf.text(`${dist.label}: ${dist.value} / ${dist.max} (${percentage}%)`, 30, yPos);
        
        // Simple progress bar
        const barWidth = (dist.value / dist.max) * 50;
        pdf.rect(30, yPos + 3, barWidth, 3, 'F');
        
        yPos += 15;
      });
      
      // Footer
      pdf.setFontSize(10);
      pdf.text('This report was generated automatically from the Admin Dashboard.', 105, 270, { align: 'center' });
      
      const fileName = `Admin_Report_Simple_${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
      
      setTimeout(() => setShowReportModal(false), 1000);
    } catch (error) {
      console.error('Error generating simple PDF:', error);
      alert('Failed to generate report. Please try the text report instead.');
    }
  };

  // Generate simple text report
  const generateTextReport = () => {
    const reportContent = `
Admin Dashboard Report
Generated on: ${new Date().toLocaleString()}

STATISTICS:
============
Total Users: ${stats.totalUsers}
Total Projects: ${stats.totalProjects}
Total Categories: ${stats.totalCategories}

DISTRIBUTION:
=============
Users: ${stats.totalUsers} / 300 (${((stats.totalUsers / 300) * 100).toFixed(1)}%)
Projects: ${stats.totalProjects} / 500 (${((stats.totalProjects / 500) * 100).toFixed(1)}%)
Categories: ${stats.totalCategories} / 50 (${((stats.totalCategories / 50) * 100).toFixed(1)}%)

SYSTEM STATUS:
==============
Last Updated: ${new Date().toLocaleString()}
Auto Refresh: Active (10 seconds)
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Admin_Report_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 🔴 AUTO LIVE UPDATE (every 10 seconds)
  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 10000);
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({
    title,
    value,
    icon: Icon,
    color
  }: any) => (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">
            {loading ? (
              <div className="h-8 w-14 bg-slate-100 animate-pulse rounded" />
            ) : (
              value
            )}
          </h2>
        </div>
        <div className={`p-4 rounded-xl bg-${color}-50 text-${color}-600`}>
          <Icon className="w-7 h-7" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="space-y-8 p-4">
        {/* HEADER */}
        <header className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
          <h1 className="text-3xl font-bold tracking-tight">
            Admin Control Panel
          </h1>
          <p className="text-slate-400 mt-2 flex items-center gap-2">
            <Activity className="w-4 h-4 text-amber-500" />
            Live system statistics (auto updating)
          </p>
        </header>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Users"
            value={stats.totalUsers}
            icon={Users}
            color="amber"
          />
          <StatCard
            title="Total Projects"
            value={stats.totalProjects}
            icon={FolderOpen}
            color="orange"
          />
          <StatCard
            title="Categories"
            value={stats.totalCategories}
            icon={Layers}
            color="slate"
          />
        </div>

        {/* DISTRIBUTION */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            System Distribution
          </h3>

          {[
            { label: 'Users', value: stats.totalUsers, max: 300 },
            { label: 'Projects', value: stats.totalProjects, max: 500 },
            { label: 'Categories', value: stats.totalCategories, max: 50 }
          ].map((item, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-slate-600">
                  {item.label}
                </span>
                <span className="font-bold text-slate-900">{item.value}</span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                {/* Using solid color instead of gradient for PDF compatibility */}
                <div
                  className="h-full bg-amber-500 transition-all duration-700"
                  style={{ width: `${(item.value / item.max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">
            Admin Shortcuts
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Manage Users',
              'Manage Projects',
              'Manage Categories',
              'View Reports'
            ].map((item, i) => (
              <button
                key={i}
                className="flex items-center justify-between p-4 bg-white rounded-xl border hover:border-amber-500 hover:shadow-md transition"
                onClick={() => {
                  if (item === 'View Reports') {
                    setShowReportModal(true);
                  }
                  // Add other button actions here
                }}
              >
                <span className="font-semibold text-slate-700">{item}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* REPORT MODAL */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Generate Report
                </h2>
                <p className="text-slate-500 mt-1">
                  Preview and download your dashboard report
                </p>
              </div>
              <button
                onClick={() => setShowReportModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Report Content (for PDF generation) */}
            <div className="flex-1 overflow-auto p-6">
              <div 
                id="report-content" 
                className="bg-white p-6 pdf-report"
                style={{ color: '#000000' }}
              >
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ color: '#0f172a' }}>
                    Admin Dashboard Report
                  </h1>
                  <p className="text-slate-600" style={{ color: '#475569' }}>
                    Generated on {new Date().toLocaleDateString()} at{' '}
                    {new Date().toLocaleTimeString()}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl text-center" style={{ backgroundColor: '#fffbeb' }}>
                    <Users className="w-8 h-8 mx-auto mb-2" style={{ color: '#d97706' }} />
                    <h3 className="font-bold text-xl" style={{ color: '#0f172a' }}>
                      {stats.totalUsers}
                    </h3>
                    <p className="text-sm" style={{ color: '#475569' }}>Total Users</p>
                  </div>
                  <div className="p-4 rounded-xl text-center" style={{ backgroundColor: '#fff7ed' }}>
                    <FolderOpen className="w-8 h-8 mx-auto mb-2" style={{ color: '#ea580c' }} />
                    <h3 className="font-bold text-xl" style={{ color: '#0f172a' }}>
                      {stats.totalProjects}
                    </h3>
                    <p className="text-sm" style={{ color: '#475569' }}>Total Projects</p>
                  </div>
                  <div className="p-4 rounded-xl text-center" style={{ backgroundColor: '#f8fafc' }}>
                    <Layers className="w-8 h-8 mx-auto mb-2" style={{ color: '#475569' }} />
                    <h3 className="font-bold text-xl" style={{ color: '#0f172a' }}>
                      {stats.totalCategories}
                    </h3>
                    <p className="text-sm" style={{ color: '#475569' }}>Categories</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#0f172a' }}>
                    Distribution Analysis
                  </h3>
                  {[
                    { label: 'Users', value: stats.totalUsers, max: 300 },
                    { label: 'Projects', value: stats.totalProjects, max: 500 },
                    { label: 'Categories', value: stats.totalCategories, max: 50 }
                  ].map((item, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold" style={{ color: '#0f172a' }}>{item.label}</span>
                        <span style={{ color: '#0f172a' }}>
                          {item.value} / {item.max} (
                          {((item.value / item.max) * 100).toFixed(1)}%)
                        </span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#f1f5f9' }}>
                        <div
                          className="h-full"
                          style={{ 
                            width: `${(item.value / item.max) * 100}%`,
                            backgroundColor: '#f59e0b' // Solid amber color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6" style={{ borderColor: '#e2e8f0' }}>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0f172a' }}>
                    System Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#f8fafc' }}>
                      <span style={{ color: '#475569' }}>Report Type:</span>
                      <span className="font-semibold ml-2" style={{ color: '#0f172a' }}>Dashboard Summary</span>
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#f8fafc' }}>
                      <span style={{ color: '#475569' }}>Auto Refresh:</span>
                      <span className="font-semibold ml-2" style={{ color: '#0f172a' }}>Active (10s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="border-t p-6" style={{ borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={generatePDFReport}
                  disabled={reportLoading}
                  className="flex-1 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
                  style={{ backgroundColor: '#d97706' }}
                >
                  {reportLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download as PDF
                    </>
                  )}
                </button>
                <button
                  onClick={generateTextReport}
                  className="flex-1 border font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition"
                  style={{ borderColor: '#cbd5e1', color: '#475569' }}
                >
                  <Download className="w-5 h-5" />
                  Download as Text
                </button>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="px-6 py-3 font-semibold transition"
                  style={{ color: '#64748b' }}
                >
                  Cancel
                </button>
              </div>
              <p className="text-xs mt-4 text-center" style={{ color: '#94a3b8' }}>
                Note: For best PDF results, avoid using CSS gradients or oklch() color functions in your Tailwind config.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};