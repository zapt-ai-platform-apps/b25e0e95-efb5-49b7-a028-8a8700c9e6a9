import React from 'react';
import PageHeader from '../core/components/PageHeader';
import Card from '../core/components/Card';

export default function Fulfillment() {
  return (
    <div>
      <PageHeader 
        title="Fulfillment" 
        description="Manage t-shirt production and delivery"
      />
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Orders Today</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">0</div>
              <div className="mt-1 text-xs text-gray-500">No change</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Orders This Week</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">0</div>
              <div className="mt-1 text-xs text-gray-500">No change</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Pending Production</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">0</div>
              <div className="mt-1 text-xs text-gray-500">No pending orders</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500">Shipped Orders</h4>
              <div className="mt-2 text-3xl font-bold text-gray-900">0</div>
              <div className="mt-1 text-xs text-gray-500">Last 7 days</div>
            </div>
          </Card>
        </div>
        
        <Card title="Order Management" description="Track and manage t-shirt orders">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td colSpan="6" className="px-6 py-10 text-center text-sm text-gray-500">
                    No orders found. New orders will appear here once customers place them.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <button className="btn btn-outline cursor-pointer">
              View All Orders
            </button>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Production Partners" description="Your t-shirt production providers">
            <div className="space-y-4">
              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">PrintfulPro Services</h4>
                    <p className="text-sm text-gray-500 mt-1">Print-on-demand t-shirts and apparel</p>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                        Setup Required
                      </span>
                      <span className="text-xs text-gray-500">48-72hr production time</span>
                    </div>
                  </div>
                  <button className="btn btn-primary cursor-pointer text-sm">
                    Connect
                  </button>
                </div>
              </div>
              
              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">ShirtWizard</h4>
                    <p className="text-sm text-gray-500 mt-1">Premium quality custom t-shirts</p>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                        Setup Required
                      </span>
                      <span className="text-xs text-gray-500">24-48hr production time</span>
                    </div>
                  </div>
                  <button className="btn btn-primary cursor-pointer text-sm">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </Card>
          
          <Card title="Shipping Methods" description="Delivery options for your customers">
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="standard-shipping"
                      name="shipping-method"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="standard-shipping" className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">Standard Shipping</span>
                      <span className="block text-sm text-gray-500">7-10 business days</span>
                    </label>
                  </div>
                  <span className="text-sm font-medium text-gray-900">Rp 90.000</span>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="express-shipping"
                      name="shipping-method"
                      type="radio"
                      className="h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="express-shipping" className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">Express Shipping</span>
                      <span className="block text-sm text-gray-500">3-5 business days</span>
                    </label>
                  </div>
                  <span className="text-sm font-medium text-gray-900">Rp 200.000</span>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="free-shipping"
                      name="shipping-method"
                      type="radio"
                      className="h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="free-shipping" className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">Free Shipping</span>
                      <span className="block text-sm text-gray-500">10-14 business days</span>
                    </label>
                  </div>
                  <span className="text-sm font-medium text-gray-900">Rp 0</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="btn btn-primary cursor-pointer">
                  Save Shipping Options
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}