import React from 'react';
import PageHeader from '../../core/components/PageHeader';
import Card from '../../core/components/Card';

export default function AudienceTargeting() {
  return (
    <div>
      <PageHeader 
        title="Audience Targeting" 
        description="Define and reach your ideal customers for t-shirt campaigns"
      />
      
      <div className="space-y-8">
        <Card title="Audience Insights" description="Understand your potential customers">
          <div className="space-y-4">
            <p className="text-gray-700">
              Analyze your target audience demographics and interests to create more effective ad campaigns.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Interest-Based Targeting</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  T-shirt lovers
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Fashion enthusiasts
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Custom apparel
                </span>
                <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 cursor-pointer">
                  + Add interest
                </button>
              </div>
              <h4 className="font-medium mb-2">Demographic Targeting</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Age Range</label>
                  <select className="form-input box-border">
                    <option>18-24</option>
                    <option>25-34</option>
                    <option>35-44</option>
                    <option>45-54</option>
                    <option>55+</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Gender</label>
                  <select className="form-input box-border">
                    <option>All</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Lookalike Audiences" description="Reach people similar to your best customers">
          <div className="space-y-4">
            <p className="text-gray-700">
              Create audiences that share characteristics with your existing customers to find new potential buyers.
            </p>
            <button className="btn btn-primary cursor-pointer">
              Create Lookalike Audience
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}