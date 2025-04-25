import React from 'react';
import { CurrencyDollarIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function AdCampaignsList() {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Collection - PPE',
      status: 'Active',
      budget: '$20/day',
      spend: '$144.32',
      results: '237 post engagements',
      costPerResult: '$0.61',
      trend: 'up',
      trendValue: '+18%'
    },
    {
      id: 2,
      name: 'Plant Lovers - CTW',
      status: 'Active',
      budget: '$30/day',
      spend: '$312.45',
      results: '43 link clicks',
      costPerResult: '$7.27',
      trend: 'down',
      trendValue: '-4%'
    },
    {
      id: 3,
      name: 'Dog Dad - WC',
      status: 'Active',
      budget: '$50/day',
      spend: '$423.18',
      results: '13 purchases',
      costPerResult: '$32.55',
      trend: 'up',
      trendValue: '+12%'
    },
    {
      id: 4,
      name: 'Nurse Life - Retargeting',
      status: 'Paused',
      budget: '$15/day',
      spend: '$132.76',
      results: '8 purchases',
      costPerResult: '$16.60',
      trend: 'up',
      trendValue: '+23%'
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Campaign
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Budget
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Spend
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Results
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cost per Result
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Trend
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {campaign.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {campaign.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {campaign.budget}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {campaign.spend}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {campaign.results}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {campaign.costPerResult}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  {campaign.trend === 'up' ? (
                    <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={campaign.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {campaign.trendValue}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 mr-3">
                  Edit
                </button>
                {campaign.status === 'Active' ? (
                  <button className="text-yellow-600 hover:text-yellow-900">
                    Pause
                  </button>
                ) : (
                  <button className="text-green-600 hover:text-green-900">
                    Resume
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}