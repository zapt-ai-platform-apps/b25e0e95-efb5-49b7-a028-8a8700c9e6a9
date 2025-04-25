import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import PageHeader from '../core/components/PageHeader';
import Card from '../core/components/Card';
import AdCampaignsList from './components/AdCampaignsList';
import AdPerformanceOverview from './components/AdPerformanceOverview';
import AdModuleCards from './components/AdModuleCards';

export default function AdCampaigns() {
  return (
    <div>
      <PageHeader 
        title="Advertising" 
        description="Create, manage, and optimize your t-shirt ad campaigns"
        actions={
          <button
            type="button"
            className="btn btn-primary cursor-pointer"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Campaign
          </button>
        }
      />
      
      <div className="space-y-8">
        <AdPerformanceOverview />
        
        <AdModuleCards />
        
        <Card title="Active Campaigns" description="Your current ad campaigns">
          <AdCampaignsList />
        </Card>
      </div>
    </div>
  );
}