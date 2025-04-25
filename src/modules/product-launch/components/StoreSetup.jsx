import React from 'react';
import Card from '../../core/components/Card';

export default function StoreSetup() {
  const platforms = [
    { 
      id: 'shopify', 
      name: 'Shopify', 
      description: 'Full-featured ecommerce platform',
      setupComplexity: 'Medium',
      monthlyCost: '$29+',
      bestFor: 'Serious t-shirt businesses looking for growth'
    },
    { 
      id: 'etsy', 
      name: 'Etsy', 
      description: 'Marketplace for handmade items',
      setupComplexity: 'Easy',
      monthlyCost: 'No monthly fee, 5% transaction fee',
      bestFor: 'Artisan designs and handmade items'
    },
    { 
      id: 'printful', 
      name: 'Printful + Shopify', 
      description: 'Print-on-demand integrated with Shopify',
      setupComplexity: 'Medium',
      monthlyCost: '$29+ (Shopify) + No fee (Printful)',
      bestFor: 'Complete print-on-demand solution'
    },
    { 
      id: 'amazon', 
      name: 'Amazon Merch', 
      description: 'On-demand t-shirt printing on Amazon',
      setupComplexity: 'Easy',
      monthlyCost: 'No monthly fee, royalty-based',
      bestFor: 'Leveraging Amazon\'s huge customer base'
    },
  ];

  return (
    <Card title="Store Setup" description="Configure your online store for selling t-shirts">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Recommended Platforms</h3>
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {platforms.map((platform) => (
                <li key={platform.id}>
                  <div className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium text-blue-600">{platform.name}</p>
                        <div className="ml-2 flex flex-shrink-0">
                          <button 
                            type="button" 
                            className="inline-flex items-center rounded-full border border-transparent bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 hover:bg-blue-200"
                          >
                            Connect
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            {platform.description}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>
                            Monthly Cost: {platform.monthlyCost}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <p className="mt-1 flex items-center text-sm text-gray-500 sm:mt-0">
                          Setup: {platform.setupComplexity}
                        </p>
                        <p className="mt-1 flex items-center text-sm text-gray-500 sm:mt-0">
                          Best For: {platform.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Store Setup Wizard</h3>
          <div className="max-w-xl mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="store-name" className="form-label">Store Name</label>
                <input
                  type="text"
                  id="store-name"
                  name="store-name"
                  className="form-input box-border"
                  placeholder="Your T-Shirt Store Name"
                />
              </div>
              
              <div>
                <label htmlFor="store-platform" className="form-label">Select Platform</label>
                <select id="store-platform" name="store-platform" className="form-input">
                  <option value="">Choose a platform</option>
                  {platforms.map(platform => (
                    <option key={platform.id} value={platform.id}>{platform.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="store-description" className="form-label">Store Description</label>
                <textarea
                  id="store-description"
                  name="store-description"
                  rows="3"
                  className="form-input box-border"
                  placeholder="Brief description of your t-shirt store and brand..."
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fulfillment-method" className="form-label">Fulfillment Method</label>
                  <select id="fulfillment-method" name="fulfillment-method" className="form-input">
                    <option value="">Select method</option>
                    <option value="pod">Print-on-Demand</option>
                    <option value="inventory">Inventory (Self-Fulfilled)</option>
                    <option value="hybrid">Hybrid Approach</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="shipping-regions" className="form-label">Shipping Regions</label>
                  <select id="shipping-regions" name="shipping-regions" className="form-input">
                    <option value="">Select regions</option>
                    <option value="us">United States Only</option>
                    <option value="na">North America</option>
                    <option value="global">Worldwide</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4">
                <button type="button" className="btn btn-primary cursor-pointer w-full">
                  Configure Store
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Store Policies Setup</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="p-4 border border-gray-200 rounded-md shadow-sm">
              <h4 className="text-base font-medium text-gray-900 mb-2">Return Policy</h4>
              <p className="text-sm text-gray-500 mb-3">Define your t-shirt return and exchange policies.</p>
              <button type="button" className="btn btn-outline cursor-pointer w-full">
                Configure Returns
              </button>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-md shadow-sm">
              <h4 className="text-base font-medium text-gray-900 mb-2">Shipping Policy</h4>
              <p className="text-sm text-gray-500 mb-3">Set up shipping rates, times, and carriers.</p>
              <button type="button" className="btn btn-outline cursor-pointer w-full">
                Configure Shipping
              </button>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-md shadow-sm">
              <h4 className="text-base font-medium text-gray-900 mb-2">Privacy Policy</h4>
              <p className="text-sm text-gray-500 mb-3">Ensure GDPR and privacy law compliance.</p>
              <button type="button" className="btn btn-outline cursor-pointer w-full">
                Configure Privacy
              </button>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-md shadow-sm">
              <h4 className="text-base font-medium text-gray-900 mb-2">Terms of Service</h4>
              <p className="text-sm text-gray-500 mb-3">Define the legal terms for using your store.</p>
              <button type="button" className="btn btn-outline cursor-pointer w-full">
                Configure Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}