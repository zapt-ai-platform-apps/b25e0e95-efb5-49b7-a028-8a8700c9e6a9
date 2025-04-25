import React from 'react';
import PageHeader from '../../core/components/PageHeader';
import Card from '../../core/components/Card';

export default function AdScaling() {
  return (
    <div>
      <PageHeader 
        title="Ad Scaling" 
        description="Grow successful t-shirt campaigns strategically"
      />
      
      <div className="space-y-8">
        <Card title="Scaling Strategies" description="Expand your winning campaigns">
          <div className="space-y-6">
            <p className="text-gray-700">
              Learn how to scale your successful t-shirt campaigns to reach more customers and increase sales without sacrificing performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 bg-blue-50">
                <h4 className="font-medium text-lg text-blue-800 mb-2">Vertical Scaling</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Increase the budget of your best-performing campaigns to reach more people in the same audience.
                </p>
                <div className="bg-white p-3 rounded-md">
                  <h5 className="font-medium text-sm mb-2">Recommended Steps:</h5>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-gray-700">
                    <li>Identify campaigns with ROAS > 2.0</li>
                    <li>Increase daily budget by 20-30%</li>
                    <li>Monitor performance for 3-4 days</li>
                    <li>If stable, increase again by 20-30%</li>
                  </ol>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 bg-green-50">
                <h4 className="font-medium text-lg text-green-800 mb-2">Horizontal Scaling</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Duplicate your winning campaigns to target different audiences or placements.
                </p>
                <div className="bg-white p-3 rounded-md">
                  <h5 className="font-medium text-sm mb-2">Recommended Steps:</h5>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-gray-700">
                    <li>Clone your winning campaign</li>
                    <li>Modify audience or placement</li>
                    <li>Start with 50% of original budget</li>
                    <li>Test at least 5 variations</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Scaling Calculator" description="Estimate results when scaling campaigns">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="form-label">Current Daily Budget</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input type="text" className="form-input pl-7 box-border" placeholder="50" />
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Current ROAS</label>
                  <div className="relative">
                    <input type="text" className="form-input box-border" placeholder="2.5" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">x</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Scaling Method</label>
                  <select className="form-input box-border">
                    <option>Conservative (20% increase)</option>
                    <option>Moderate (50% increase)</option>
                    <option>Aggressive (100% increase)</option>
                  </select>
                </div>
                
                <button className="btn btn-primary cursor-pointer w-full">
                  Calculate Projected Results
                </button>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-4">Projected Results</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">New Daily Budget:</span>
                    <span className="font-medium">$60.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Projected Daily Sales:</span>
                    <span className="font-medium">$144.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Expected ROAS:</span>
                    <span className="font-medium">2.4x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Monthly Ad Spend:</span>
                    <span className="font-medium">$1,800.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Monthly Revenue:</span>
                    <span className="font-medium">$4,320.00</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="text-sm font-medium text-gray-600">Monthly Profit (15% margin):</span>
                    <span className="font-medium text-green-600">$648.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}