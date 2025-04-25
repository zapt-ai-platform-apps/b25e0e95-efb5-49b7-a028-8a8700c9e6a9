import React from 'react';
import PageHeader from '../core/components/PageHeader';
import Card from '../core/components/Card';

export default function FundingManagement() {
  return (
    <div>
      <PageHeader 
        title="Funding Management" 
        description="Manage finances for your t-shirt business"
      />
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Available Budget</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">$5,432</div>
              <div className="mt-1 text-xs text-green-600">+$1,500 from last month</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Ad Spend This Month</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">$1,892</div>
              <div className="mt-1 text-xs text-gray-500">Budget: $2,500</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Revenue This Month</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">$4,678</div>
              <div className="mt-1 text-xs text-green-600">ROAS: 2.47x</div>
            </div>
          </Card>
        </div>
        
        <Card title="Budget Planning" description="Plan your t-shirt business finances">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-4">Monthly Budget Allocation</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Facebook/Instagram Ads</span>
                      <span>$1,500 (60%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">TikTok Ads</span>
                      <span>$500 (20%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Google Ads</span>
                      <span>$375 (15%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Design & Content</span>
                      <span>$125 (5%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '5%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Adjust Budget Allocation</h4>
                <div className="space-y-4">
                  <div>
                    <label className="form-label">Facebook/Instagram Ads (%)</label>
                    <input type="number" className="form-input box-border" placeholder="60" />
                  </div>
                  
                  <div>
                    <label className="form-label">TikTok Ads (%)</label>
                    <input type="number" className="form-input box-border" placeholder="20" />
                  </div>
                  
                  <div>
                    <label className="form-label">Google Ads (%)</label>
                    <input type="number" className="form-input box-border" placeholder="15" />
                  </div>
                  
                  <div>
                    <label className="form-label">Design & Content (%)</label>
                    <input type="number" className="form-input box-border" placeholder="5" />
                  </div>
                  
                  <button className="btn btn-primary cursor-pointer w-full">
                    Update Budget Allocation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Performance Tracking" description="Monitor financial metrics for your t-shirt business">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ad Spend
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ROAS
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profit
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Margin
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    June 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $2,500
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $6,125
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2.45x
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $1,225
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    May 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $2,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $5,400
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2.70x
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $1,080
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20%
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