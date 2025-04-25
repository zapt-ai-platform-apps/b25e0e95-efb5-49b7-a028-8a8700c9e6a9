import React from 'react';
import Card from '../../core/components/Card';

export default function ProductSetup() {
  const productTypes = [
    { id: 'tshirt', name: 'T-Shirt', description: 'Classic short sleeve t-shirt' },
    { id: 'longsleeve', name: 'Long Sleeve', description: 'Long sleeve t-shirt' },
    { id: 'hoodie', name: 'Hoodie', description: 'Hooded sweatshirt' },
    { id: 'tank', name: 'Tank Top', description: 'Sleeveless tank top' },
  ];

  return (
    <Card title="Product Setup" description="Configure your t-shirt product details">
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6">
          {/* Product Basics */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
            
            <div>
              <label htmlFor="product-name" className="form-label">Product Name</label>
              <input
                type="text"
                id="product-name"
                name="product-name"
                className="form-input box-border"
                placeholder="e.g. 'Dog Dad Vintage Tee'"
              />
            </div>
            
            <div>
              <label htmlFor="product-description" className="form-label">Product Description</label>
              <textarea
                id="product-description"
                name="product-description"
                rows="4"
                className="form-input box-border"
                placeholder="Describe your product, including materials, fit, and unique selling points..."
              ></textarea>
              <p className="form-hint">Use keywords related to your niche to improve SEO</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="product-type" className="form-label">Product Type</label>
                <select id="product-type" name="product-type" className="form-input">
                  <option value="">Select product type</option>
                  {productTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="product-category" className="form-label">Category</label>
                <select id="product-category" name="product-category" className="form-input">
                  <option value="">Select category</option>
                  <option value="funny">Funny & Humor</option>
                  <option value="hobby">Hobby & Interest</option>
                  <option value="profession">Professional</option>
                  <option value="family">Family & Relationships</option>
                  <option value="pets">Pets & Animals</option>
                  <option value="holiday">Holiday & Seasonal</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="base-cost" className="form-label">Base Cost</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="base-cost"
                    id="base-cost"
                    className="form-input pl-7 box-border"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="retail-price" className="form-label">Retail Price</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="retail-price"
                    id="retail-price"
                    className="form-input pl-7 box-border"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="profit-margin" className="form-label">Profit Margin</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="profit-margin"
                    id="profit-margin"
                    className="form-input pr-12 box-border"
                    placeholder="0"
                    disabled
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Options */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Product Options</h3>
            
            <div>
              <label className="form-label">Available Colors</label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {['Black', 'White', 'Navy', 'Gray', 'Red', 'Green', 'Blue', 'Purple'].map((color) => (
                  <div key={color} className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id={`color-${color.toLowerCase()}`}
                        name={`color-${color.toLowerCase()}`}
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={`color-${color.toLowerCase()}`} className="font-medium text-gray-700">
                        {color}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="form-label">Available Sizes</label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-6">
                {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'].map((size) => (
                  <div key={size} className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id={`size-${size.toLowerCase()}`}
                        name={`size-${size.toLowerCase()}`}
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={`size-${size.toLowerCase()}`} className="font-medium text-gray-700">
                        {size}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Images */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Product Images</h3>
            
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>Upload design files</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            
            <p className="form-hint">Upload your design file at 300 DPI. We recommend transparent PNG files.</p>
          </div>
          
          <div className="pt-5">
            <div className="flex justify-end space-x-3">
              <button type="button" className="btn btn-outline cursor-pointer">
                Save Draft
              </button>
              <button type="submit" className="btn btn-primary cursor-pointer">
                Create Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}