import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Card from '../../core/components/Card';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TrendAnalysis() {
  // Sample data for trending niches
  const trendingNiches = [
    { name: "Minimalist Designs", trend: "Rising", seasonality: "Year-round", competition: "Medium" },
    { name: "Eco/Sustainability", trend: "Rising", seasonality: "Year-round", competition: "Low" },
    { name: "Retro/Vintage", trend: "Stable", seasonality: "Year-round", competition: "High" },
    { name: "Mental Health", trend: "Rising", seasonality: "Year-round", competition: "Medium" },
    { name: "Work From Home", trend: "Stable", seasonality: "Year-round", competition: "Medium" },
    { name: "Pride/LGBTQ+", trend: "Seasonal", seasonality: "June", competition: "High" },
  ];

  // Sample data for trend chart
  const trendChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Minimalist Designs',
        data: [65, 59, 80, 81, 56, 55, 60, 70, 75, 80, 85, 90],
        borderColor: 'rgb(29, 78, 216)',
        backgroundColor: 'rgba(29, 78, 216, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Eco/Sustainability',
        data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Retro/Vintage',
        data: [75, 70, 72, 68, 65, 70, 75, 78, 76, 74, 75, 78],
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const trendChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'T-Shirt Niche Trend Analysis (Search Volume)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Search Interest'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    }
  };

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Trend Analysis</h2>
        <p className="mt-1 text-gray-500">Monitor market trends and seasonal t-shirt opportunities</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <Card className="lg:col-span-2">
          <Line data={trendChartData} options={trendChartOptions} />
        </Card>
        
        <Card title="Trend Research Tools">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Google Trends</h4>
              <p className="text-sm text-gray-500">Track search interest over time</p>
              <a 
                href="https://trends.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:text-blue-500"
              >
                Visit Tool →
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Pinterest Trends</h4>
              <p className="text-sm text-gray-500">See what's trending visually</p>
              <a 
                href="https://trends.pinterest.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:text-blue-500"
              >
                Visit Tool →
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Exploding Topics</h4>
              <p className="text-sm text-gray-500">Discover emerging trends</p>
              <a 
                href="https://explodingtopics.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:text-blue-500"
              >
                Visit Tool →
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Social Listening</h4>
              <p className="text-sm text-gray-500">Monitor social media for trends</p>
              <a 
                href="https://www.brandwatch.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:text-blue-500"
              >
                Learn More →
              </a>
            </div>
          </div>
        </Card>
      </div>
      
      <Card title="Trending T-Shirt Niches">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Niche
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend Direction
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Seasonality
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competition Level
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trendingNiches.map((niche, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {niche.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      niche.trend === 'Rising' ? 'bg-green-100 text-green-800' :
                      niche.trend === 'Stable' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {niche.trend}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {niche.seasonality}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      niche.competition === 'Low' ? 'bg-green-100 text-green-800' :
                      niche.competition === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {niche.competition}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      Research
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}