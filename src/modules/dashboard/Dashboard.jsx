import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  ChartPieIcon, 
  ShoppingBagIcon, 
  CursorArrowRaysIcon, 
  UsersIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../core/components/PageHeader';
import Card from '../core/components/Card';
import ModuleCard from './components/ModuleCard';
import ProgressTracker from './components/ProgressTracker';
import QuickStartGuide from './components/QuickStartGuide';

export default function Dashboard() {
  // Sample performance data
  const stats = [
    { id: 1, name: 'Active Campaigns', value: '3', change: '+16%', changeType: 'increase' },
    { id: 2, name: 'Total Sales', value: '$1,245', change: '+23%', changeType: 'increase' },
    { id: 3, name: 'Ad Spend', value: '$432', change: '+5%', changeType: 'increase' },
    { id: 4, name: 'ROAS', value: '2.9x', change: '+12%', changeType: 'increase' },
  ];

  // Main modules
  const modules = [
    {
      id: 1,
      name: 'T-Shirt Design',
      description: 'Create & research winning designs',
      href: '/design',
      icon: 'PaintBrush',
      color: 'bg-indigo-500'
    },
    {
      id: 2,
      name: 'Market Analysis',
      description: 'Analyze competition & trends',
      href: '/market-analysis',
      icon: 'ChartBar',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Product Launch',
      description: 'Set up your store & products',
      href: '/product-launch',
      icon: 'RocketLaunch',
      color: 'bg-emerald-500'
    },
    {
      id: 4,
      name: 'Advertising',
      description: 'Create, test and scale campaigns',
      href: '/advertising',
      icon: 'Megaphone',
      color: 'bg-red-500'
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Dashboard" 
        description="Welcome to your T-Shirt business command center"
      />
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {stats.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div>
              <p className="text-sm font-medium text-gray-500 truncate">{item.name}</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">{item.value}</p>
              <div className="mt-2">
                <div className={`inline-flex items-center text-sm font-medium ${
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.changeType === 'increase' ? (
                    <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  ) : (
                    <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )}
                  <span>{item.change}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2 mb-6">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
        <Card title="Progress Tracker" description="Track your T-shirt business journey">
          <ProgressTracker />
        </Card>
        <Card title="Quick Start Guide" description="Essential steps to launch your first design">
          <QuickStartGuide />
        </Card>
      </div>
      
      <Card 
        title="Recent Activity" 
        description="Your latest business actions"
        footer={
          <Link to="/activity" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
            View all activity
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        }
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <ShoppingBagIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">New design uploaded</p>
              <p className="text-sm text-gray-500">Summer Collection - Beach Vibes</p>
              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CursorArrowRaysIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Ad campaign launched</p>
              <p className="text-sm text-gray-500">Beach Vibes Collection - US Targeting</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <UsersIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">New audience created</p>
              <p className="text-sm text-gray-500">Beach Lovers - Lookalike Audience</p>
              <p className="text-xs text-gray-400 mt-1">2 days ago</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Pixel tracking verified</p>
              <p className="text-sm text-gray-500">Facebook Pixel successfully installed</p>
              <p className="text-xs text-gray-400 mt-1">3 days ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}