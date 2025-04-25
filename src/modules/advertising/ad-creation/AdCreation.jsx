import React from 'react';
import PageHeader from '../../core/components/PageHeader';
import Card from '../../core/components/Card';

export default function AdCreation() {
  return (
    <div>
      <PageHeader 
        title="Ad Creation" 
        description="Build compelling t-shirt ad images and copy"
      />
      
      <div className="space-y-8">
        <Card title="Ad Creative Generator" description="Create engaging ad visuals for your t-shirts">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-4">T-Shirt Mockup</h4>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="mx-auto h-12 w-12 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="mt-2 block text-sm font-medium text-gray-500">
                      Upload t-shirt design
                    </span>
                    <button className="mt-2 btn btn-secondary cursor-pointer">
                      Select Image
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="form-label">Headline</label>
                  <input type="text" className="form-input box-border" placeholder="Enter compelling headline" />
                </div>
                <div>
                  <label className="form-label">Primary Text</label>
                  <textarea className="form-input box-border" rows="3" placeholder="Enter primary ad copy"></textarea>
                </div>
                <div>
                  <label className="form-label">Call to Action</label>
                  <select className="form-input box-border">
                    <option>Shop Now</option>
                    <option>Learn More</option>
                    <option>Get Offer</option>
                    <option>Sign Up</option>
                    <option>Buy Now</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-primary cursor-pointer">
                Generate Ad
              </button>
            </div>
          </div>
        </Card>
        
        <Card title="Ad Copy Templates" description="Use proven copy formulas for t-shirt ads">
          <div className="space-y-4">
            <p className="text-gray-700">
              Select from pre-built templates to create high-converting ad copy for your t-shirt designs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-700">Problem-Solution Formula</h4>
                <p className="text-sm text-gray-600 mt-1">
                  "Tired of [problem]? Our [t-shirt name] is designed to [solution]."
                </p>
                <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  Use Template
                </button>
              </div>
              
              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-700">Identity Appeal</h4>
                <p className="text-sm text-gray-600 mt-1">
                  "Calling all [identity]! Show your pride with our exclusive [t-shirt description]."
                </p>
                <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  Use Template
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}