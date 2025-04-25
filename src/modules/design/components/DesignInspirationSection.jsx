import React from 'react';
import Card from '../../core/components/Card';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function DesignInspirationSection() {
  const inspirationSources = [
    {
      id: 1,
      name: 'Amazon Bestsellers',
      description: 'Research top-selling t-shirts on Amazon to identify winning designs and niches.',
      url: 'https://www.amazon.com/Best-Sellers-Clothing-Novelty-T-Shirts/zgbs/fashion/9056921011',
      tips: [
        'Check the "Best Sellers" section for t-shirts',
        'Look at customer reviews for design feedback',
        'Analyze the pricing strategies',
      ]
    },
    {
      id: 2,
      name: 'Etsy Trending',
      description: 'Discover handmade and unique t-shirt designs that are trending on Etsy.',
      url: 'https://www.etsy.com/c/clothing/mens-clothing/shirts-and-tees?ref=catnav-10923',
      tips: [
        'Filter by "Bestselling" to see popular designs',
        'Look for shops with high sales numbers',
        'Pay attention to design style and quality',
      ]
    },
    {
      id: 3,
      name: 'Pinterest',
      description: 'Get visual inspiration and trending designs from Pinterest boards.',
      url: 'https://www.pinterest.com/search/pins/?q=t-shirt%20design',
      tips: [
        'Search for specific niches like "fishing t-shirt designs"',
        'Create boards to organize your inspiration',
        'Look at related pins for more ideas',
      ]
    },
    {
      id: 4,
      name: 'Facebook Ads Library',
      description: 'See what successful t-shirt businesses are advertising on Facebook.',
      url: 'https://www.facebook.com/ads/library',
      tips: [
        'Search for keywords like "t-shirt", "tee", etc.',
        'Analyze the ad copy and imagery used',
        'Note which ads have been running the longest (likely successful)',
      ]
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Market Research & Inspiration</h2>
        <p className="mt-1 text-gray-500">Find winning designs and analyze successful t-shirt businesses</p>
      </div>
      
      <Card className="mb-6">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-md bg-blue-500">
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-900">Research Tools</h3>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="keyword" className="form-label">Keyword</label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                className="form-input box-border"
                placeholder="Enter niche, theme or design type"
              />
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="platform" className="form-label">Platform</label>
                <select id="platform" name="platform" className="form-input">
                  <option value="amazon">Amazon</option>
                  <option value="etsy">Etsy</option>
                  <option value="teespring">Teespring/Spring</option>
                  <option value="redbubble">Redbubble</option>
                  <option value="merch">Amazon Merch</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="category" className="form-label">Category</label>
                <select id="category" name="category" className="form-input">
                  <option value="all">All Categories</option>
                  <option value="men">Men's T-Shirts</option>
                  <option value="women">Women's T-Shirts</option>
                  <option value="kids">Kids T-Shirts</option>
                  <option value="hoodies">Hoodies & Sweatshirts</option>
                </select>
              </div>
            </div>
            
            <div className="pt-2">
              <button type="button" className="btn btn-primary cursor-pointer w-full">
                Research Market
              </button>
            </div>
          </form>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {inspirationSources.map((source) => (
          <Card
            key={source.id}
            title={source.name}
          >
            <div>
              <p className="text-gray-600 mb-3">{source.description}</p>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Research Tips:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {source.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Visit Source →
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}