import React from 'react';
import PageHeader from '../../core/components/PageHeader';
import Card from '../../core/components/Card';

export default function AdTesting() {
  return (
    <div>
      <PageHeader 
        title="Ad Testing" 
        description="Test and optimize t-shirt ad performance"
      />
      
      <div className="space-y-8">
        <Card title="A/B Testing" description="Compare different ad variations">
          <div className="space-y-6">
            <p className="text-gray-700">
              Set up A/B tests to compare different ad creatives, audiences, and placements to identify what works best for your t-shirt campaigns.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium mb-4">Create New A/B Test</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="form-label">Test Name</label>
                  <input type="text" className="form-input box-border" placeholder="e.g., Summer Collection Headlines Test" />
                </div>
                
                <div>
                  <label className="form-label">What do you want to test?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    <div className="border rounded-md p-3 hover:border-blue-500 cursor-pointer">
                      <div className="font-medium mb-1">Ad Creative</div>
                      <div className="text-xs text-gray-500">Test different images or videos</div>
                    </div>
                    <div className="border rounded-md p-3 hover:border-blue-500 cursor-pointer">
                      <div className="font-medium mb-1">Ad Copy</div>
                      <div className="text-xs text-gray-500">Test different headlines or text</div>
                    </div>
                    <div className="border rounded-md p-3 hover:border-blue-500 cursor-pointer">
                      <div className="font-medium mb-1">Audience</div>
                      <div className="text-xs text-gray-500">Test different target audiences</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="btn btn-primary cursor-pointer">
                    Continue Setup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Active Tests" description="Your ongoing A/B tests">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Test Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Summer Collection Headlines Test
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Ad Copy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Running
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jun 15, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    <button className="cursor-pointer hover:text-blue-800">View Results</button>
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