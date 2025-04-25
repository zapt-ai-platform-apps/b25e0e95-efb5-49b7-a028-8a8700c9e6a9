import React from 'react';
import PageHeader from '../../core/components/PageHeader';
import Card from '../../core/components/Card';

export default function PixelSetup() {
  return (
    <div>
      <PageHeader 
        title="Pixel Setup" 
        description="Configure tracking pixels for your t-shirt ad campaigns"
      />
      
      <div className="space-y-8">
        <Card title="Facebook Pixel Setup" description="Track customer actions on your website">
          <div className="space-y-4">
            <p className="text-gray-700">
              A Facebook pixel is a code that you place on your website that allows you to measure, optimize and build audiences for your ad campaigns.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Your Facebook Pixel ID</h4>
              <div className="flex">
                <input 
                  type="text"
                  className="form-input rounded-r-none box-border"
                  placeholder="Enter your Facebook Pixel ID"
                />
                <button className="btn btn-primary rounded-l-none cursor-pointer">
                  Save
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                You can find your Pixel ID in Facebook Business Manager under Events Manager.
              </p>
            </div>
          </div>
        </Card>
        
        <Card title="Google Analytics Setup" description="Track website traffic and user behavior">
          <div className="space-y-4">
            <p className="text-gray-700">
              Google Analytics helps you track website traffic and understand user behavior to optimize your advertising campaigns.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Your Google Analytics Tracking ID</h4>
              <div className="flex">
                <input 
                  type="text"
                  className="form-input rounded-r-none box-border"
                  placeholder="Enter your Google Analytics ID (UA-XXXXXXXX-X)"
                />
                <button className="btn btn-primary rounded-l-none cursor-pointer">
                  Save
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                You can find your Tracking ID in your Google Analytics account under Admin &gt; Property Settings.
              </p>
            </div>
          </div>
        </Card>
        
        <Card title="TikTok Pixel Setup" description="Track customer interactions for TikTok campaigns">
          <div className="space-y-4">
            <p className="text-gray-700">
              TikTok Pixel helps you understand how users interact with your website after seeing your TikTok ads.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Your TikTok Pixel ID</h4>
              <div className="flex">
                <input 
                  type="text"
                  className="form-input rounded-r-none box-border"
                  placeholder="Enter your TikTok Pixel ID"
                />
                <button className="btn btn-primary rounded-l-none cursor-pointer">
                  Save
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                You can find your Pixel ID in TikTok Ads Manager under Website Pixel.
              </p>
            </div>
          </div>
        </Card>
        
        <Card title="Integration Status" description="Check your pixel installation status">
          <div className="space-y-4">
            <div className="border rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Platform
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Facebook Pixel
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Never
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Google Analytics
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Never
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      TikTok Pixel
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Never
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-secondary cursor-pointer">
                Verify Integration
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}