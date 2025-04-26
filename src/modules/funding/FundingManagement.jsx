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
              <div className="mt-2 text-3xl font-bold text-gray-900">Rp 0</div>
              <div className="mt-1 text-xs text-gray-500">No changes yet</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Ad Spend This Month</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">Rp 0</div>
              <div className="mt-1 text-xs text-gray-500">Budget: Rp 0</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Revenue This Month</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">Rp 0</div>
              <div className="mt-1 text-xs text-gray-500">ROAS: 0x</div>
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
                      <span>Rp 0 (0%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">TikTok Ads</span>
                      <span>Rp 0 (0%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Google Ads</span>
                      <span>Rp 0 (0%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Design & Content</span>
                      <span>Rp 0 (0%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Adjust Budget Allocation</h4>
                <div className="space-y-4">
                  <div>
                    <label className="form-label">Facebook/Instagram Ads (%)</label>
                    <input type="number" className="form-input box-border" placeholder="0" />
                  </div>
                  
                  <div>
                    <label className="form-label">TikTok Ads (%)</label>
                    <input type="number" className="form-input box-border" placeholder="0" />
                  </div>
                  
                  <div>
                    <label className="form-label">Google Ads (%)</label>
                    <input type="number" className="form-input box-border" placeholder="0" />
                  </div>
                  
                  <div>
                    <label className="form-label">Design & Content (%)</label>
                    <input type="number" className="form-input box-border" placeholder="0" />
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
                  <td colSpan="6" className="px-6 py-10 text-center text-sm text-gray-500">
                    No performance data available yet. Financial metrics will appear here once you start running campaigns.
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