import React from 'react';
import Card from '../../core/components/Card';
import { ExternalLinkIcon } from '@heroicons/react/24/outline';

export default function CompetitorAnalysis() {
  const competitors = [
    {
      id: 1,
      name: 'TeePublic',
      url: 'https://www.teepublic.com/',
      strengths: [
        'Artist community with unique designs',
        'Regular sales and promotions',
        'Good search functionality'
      ],
      weaknesses: [
        'Limited product customization',
        'Higher prices without sales',
        'Crowded marketplace'
      ]
    },
    {
      id: 2,
      name: 'Redbubble',
      url: 'https://www.redbubble.com/',
      strengths: [
        'Wide range of products beyond t-shirts',
        'Strong search algorithm',
        'Artist-friendly platform'
      ],
      weaknesses: [
        'Lower profit margins',
        'Extremely competitive',
        'Limited control over marketing'
      ]
    },
    {
      id: 3,
      name: 'Teespring/Spring',
      url: 'https://www.spri.ng/',
      strengths: [
        'Integration with social platforms',
        'No upfront costs',
        'Good product quality'
      ],
      weaknesses: [
        'Relies heavily on creator marketing',
        'Limited organic discovery',
        'Platform changes affect sellers'
      ]
    },
    {
      id: 4,
      name: 'Amazon Merch',
      url: 'https://merch.amazon.com/',
      strengths: [
        'Massive built-in audience',
        'Amazon\'s trusted platform',
        'No upfront costs'
      ],
      weaknesses: [
        'Strict approval process',
        'Limited design slots for beginners',
        'Competitive marketplace'
      ]
    }
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Competitor Analysis</h2>
        <p className="mt-1 text-gray-500">Analyze top t-shirt marketplaces and competitors</p>
      </div>
      
      <Card className="mb-6">
        <div className="max-w-3xl">
          <h3 className="text-lg font-medium text-gray-900 mb-3">How to Analyze Competitors</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600 mb-4">
            <li><strong>Identify direct competitors</strong> - Research businesses selling similar t-shirts to your target market</li>
            <li><strong>Analyze their best-selling designs</strong> - What themes, styles, and niches are performing well?</li>
            <li><strong>Study their pricing strategy</strong> - Are they premium-priced or competing on cost?</li>
            <li><strong>Review their marketing approach</strong> - Which platforms do they use? What's their messaging?</li>
            <li><strong>Identify gaps in the market</strong> - What needs aren't being met? Where can you differentiate?</li>
          </ol>
          <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
            <p className="text-sm text-yellow-800">
              <strong>Pro tip:</strong> Don't just copy competitors - learn from them to create something better. 
              Look for underserved niches or ways to offer superior designs, quality, or customer experience.
            </p>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {competitors.map((competitor) => (
          <Card 
            key={competitor.id} 
            title={
              <div className="flex items-center justify-between">
                <span>{competitor.name}</span>
                <a
                  href={competitor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Visit
                  <ExternalLinkIcon className="inline-block ml-1 h-4 w-4" />
                </a>
              </div>
            }
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-green-600 mb-1">Strengths</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {competitor.strengths.map((strength, idx) => (
                    <li key={idx}>{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-red-600 mb-1">Weaknesses</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {competitor.weaknesses.map((weakness, idx) => (
                    <li key={idx}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Custom Competitor Analysis</h3>
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="competitor-url" className="form-label">Competitor Website URL</label>
              <input
                type="text"
                id="competitor-url"
                name="competitor-url"
                className="form-input box-border"
                placeholder="https://example.com"
              />
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="niche" className="form-label">Niche/Category</label>
                <select id="niche" name="niche" className="form-input">
                  <option value="">Select a niche</option>
                  <option value="funny">Funny/Humor</option>
                  <option value="profession">Professional</option>
                  <option value="hobby">Hobbies</option>
                  <option value="family">Family</option>
                  <option value="events">Events/Holidays</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="price-range" className="form-label">Price Range</label>
                <select id="price-range" name="price-range" className="form-input">
                  <option value="">Select price range</option>
                  <option value="budget">Budget ($5-$15)</option>
                  <option value="mid">Mid-range ($15-$25)</option>
                  <option value="premium">Premium ($25+)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="notes" className="form-label">Analysis Notes</label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                className="form-input box-border"
                placeholder="Note their strengths, weaknesses, and any opportunities you see..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button type="button" className="btn btn-primary cursor-pointer w-full">
                Save Competitor Analysis
              </button>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
}