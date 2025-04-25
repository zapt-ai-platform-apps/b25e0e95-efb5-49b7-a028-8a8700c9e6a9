import React from 'react';
import PageHeader from '../../core/components/PageHeader';
import Card from '../../core/components/Card';

export default function Retargeting() {
  return (
    <div>
      <PageHeader 
        title="Retargeting" 
        description="Re-engage potential t-shirt customers"
      />
      
      <div className="space-y-8">
        <Card title="Retargeting Audiences" description="Reach customers who showed interest">
          <div className="space-y-6">
            <p className="text-gray-700">
              Create retargeting campaigns that reach users who have previously interacted with your t-shirt ads or website.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium mb-4">Create Custom Audience</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="form-label">Audience Name</label>
                  <input type="text" className="form-input box-border" placeholder="e.g., Website Visitors - 30 Days" />
                </div>
                
                <div>
                  <label className="form-label">Audience Source</label>
                  <select className="form-input box-border">
                    <option>Website Visitors</option>
                    <option>Ad Engagers</option>
                    <option>Cart Abandoners</option>
                    <option>Past Purchasers</option>
                    <option>Email Subscribers</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Audience Timeframe</label>
                  <select className="form-input box-border">
                    <option>Last 7 days</option>
                    <option>Last 14 days</option>
                    <option>Last 30 days</option>
                    <option>Last 60 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                
                <div className="flex justify-end">
                  <button className="btn btn-primary cursor-pointer">
                    Create Audience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Retargeting Campaigns" description="Your active retargeting campaigns">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campaign Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Audience Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ROAS
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Cart Abandoners - 14 Days
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Cart Abandoners
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $15/day
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    3.8x
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    <a href="#" className="hover:text-blue-800 cursor-pointer">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Website Visitors - 30 Days
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Website Visitors
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $10/day
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2.1x
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    <a href="#" className="hover:text-blue-800 cursor-pointer">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card title="Retargeting Strategy Guide" description="Best practices for effective retargeting">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-medium text-blue-800 mb-2">Retargeting Best Practices</h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
                <li>Segment your audiences based on their level of engagement</li>
                <li>Create specific ad creatives for each audience segment</li>
                <li>Offer progressively stronger incentives to cart abandoners</li>
                <li>Set frequency caps to avoid ad fatigue</li>
                <li>Test different ad formats (image, carousel, video)</li>
                <li>Always include a strong call-to-action</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}