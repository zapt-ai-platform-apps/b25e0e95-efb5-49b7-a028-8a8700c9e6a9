import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Card from '../../core/components/Card';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function AdPerformanceOverview() {
  // Sample performance metrics
  const performanceMetrics = [
    { name: 'Total Ad Spend', value: '$1,012.71', change: '+23%', changeType: 'increase' },
    { name: 'Total Sales', value: '$2,845.32', change: '+18%', changeType: 'increase' },
    { name: 'ROAS', value: '2.8x', change: '-5%', changeType: 'decrease' },
    { name: 'Conversion Rate', value: '2.3%', change: '+12%', changeType: 'increase' },
  ];

  // Campaign type distribution chart data
  const campaignDistribution = {
    labels: ['PPE (Engagement)', 'CTW (Traffic)', 'WC (Conversion)', 'Retargeting'],
    datasets: [
      {
        data: [25, 35, 30, 10],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value}%`;
          }
        }
      }
    },
    cutout: '60%'
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Ad Performance Overview</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="text-sm font-medium text-gray-500">{metric.name}</div>
              <div className="mt-1 text-xl font-semibold text-gray-900">{metric.value}</div>
              <div className={`mt-1 flex items-center text-xs font-medium ${
                metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.changeType === 'increase' ? (
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <Card>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Campaign Distribution</h3>
        <div className="h-64 flex items-center justify-center">
          <Doughnut data={campaignDistribution} options={chartOptions} />
        </div>
      </Card>
    </div>
  );
}