import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import PageHeader from '../../core/components/PageHeader';
import Card from '../../core/components/Card';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function AdReporting() {
  // Sample data for the chart
  const performanceData = {
    labels: ['Jun 1', 'Jun 5', 'Jun 10', 'Jun 15', 'Jun 20', 'Jun 25', 'Jun 30'],
    datasets: [
      {
        label: 'Impressions',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Clicks',
        data: [1200, 1900, 1500, 2500, 2200, 3000, 2800],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <PageHeader 
        title="Ad Reporting" 
        description="Analyze t-shirt campaign results and metrics"
      />
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Impressions</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">152K</div>
              <div className="mt-1 text-xs text-green-600">+12% from last month</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Clicks</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">15.1K</div>
              <div className="mt-1 text-xs text-green-600">+8% from last month</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">CTR</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">9.9%</div>
              <div className="mt-1 text-xs text-red-600">-2% from last month</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Conversions</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">423</div>
              <div className="mt-1 text-xs text-green-600">+15% from last month</div>
            </div>
          </Card>
        </div>
        
        <Card title="Performance Trends" description="Track key metrics over time">
          <div className="h-80">
            <Line data={performanceData} options={chartOptions} />
          </div>
        </Card>
        
        <Card title="Campaign Breakdown" description="Performance by campaign">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campaign
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Impressions
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clicks
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CTR
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversions
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost per Result
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Summer Collection - PPE
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    48,320
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    4,237
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    8.8%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    104
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $5.62
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Plant Lovers - CTW
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    36,128
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    3,941
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10.9%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    89
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $7.23
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}