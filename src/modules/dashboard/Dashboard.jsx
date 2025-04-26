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
  // Reset performance data to zero with Rupiah currency
  const stats = [
    { id: 1, name: 'Active Campaigns', value: '0', change: '0%', changeType: 'neutral' },
    { id: 2, name: 'Total Sales', value: 'Rp 0', change: '0%', changeType: 'neutral' },
    { id: 3, name: 'Ad Spend', value: 'Rp 0', change: '0%', changeType: 'neutral' },
    { id: 4, name: 'ROAS', value: '0x', change: '0%', changeType: 'neutral' },
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
                  item.changeType === 'increase' ? 'text-green-600' : 
                  item.changeType === 'decrease' ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {item.changeType === 'increase' ? (
                    <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  ) : item.changeType === 'decrease' ? (
                    <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  ) : null}
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
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <p className="text-gray-500 mb-2">No activity recorded yet</p>
            <p className="text-sm text-gray-400">Your recent activities will appear here once you start using the platform</p>
          </div>
        </div>
      </Card>
    </div>
  );
}