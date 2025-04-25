import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  UsersIcon, 
  PresentationChartLineIcon, 
  CogIcon, 
  BeakerIcon, 
  ArrowPathIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import Card from '../../core/components/Card';

export default function AdModuleCards() {
  const adModules = [
    {
      title: 'Pixel Setup',
      description: 'Configure tracking for your campaigns',
      icon: CogIcon,
      color: 'bg-blue-500',
      link: '/advertising/pixel-setup'
    },
    {
      title: 'Ad Creation',
      description: 'Build compelling ad images and copy',
      icon: PresentationChartLineIcon,
      color: 'bg-purple-500',
      link: '/advertising/ad-creation'
    },
    {
      title: 'Audience Targeting',
      description: 'Define and reach your ideal customers',
      icon: UsersIcon,
      color: 'bg-green-500',
      link: '/advertising/audience-targeting'
    },
    {
      title: 'Ad Testing',
      description: 'Test and optimize ad performance',
      icon: BeakerIcon,
      color: 'bg-yellow-500',
      link: '/advertising/ad-testing'
    },
    {
      title: 'Ad Reporting',
      description: 'Analyze campaign results and metrics',
      icon: ChartBarIcon,
      color: 'bg-indigo-500',
      link: '/advertising/ad-reporting'
    },
    {
      title: 'Scaling',
      description: 'Grow successful campaigns strategically',
      icon: ArrowTrendingUpIcon,
      color: 'bg-red-500',
      link: '/advertising/ad-scaling'
    },
    {
      title: 'Retargeting',
      description: 'Re-engage potential customers',
      icon: ArrowPathIcon,
      color: 'bg-pink-500',
      link: '/advertising/retargeting'
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {adModules.map((module, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <Link to={module.link} className="block">
            <div className="flex items-center mb-3">
              <div className={`p-2 rounded-md ${module.color}`}>
                <module.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-900">{module.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{module.description}</p>
            <div className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500">
              View Module →
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}