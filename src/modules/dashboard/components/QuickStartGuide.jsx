import React from 'react';
import { Link } from 'react-router-dom';

export default function QuickStartGuide() {
  const quickStartSteps = [
    {
      id: 1,
      title: 'Research & Inspiration',
      description: 'Find winning t-shirt niches and design ideas',
      link: '/design',
      linkText: 'Design Research'
    },
    {
      id: 2,
      title: 'Create Your Design',
      description: 'Design your t-shirt or hire a designer',
      link: '/design',
      linkText: 'Design Tools'
    },
    {
      id: 3,
      title: 'Launch Your Product',
      description: 'Set up your store and publish your t-shirt',
      link: '/product-launch',
      linkText: 'Launch Guide'
    },
    {
      id: 4,
      title: 'Set Up Advertising',
      description: 'Create your first ad campaign to reach customers',
      link: '/advertising',
      linkText: 'Ad Setup'
    }
  ];

  return (
    <div className="space-y-4">
      {quickStartSteps.map((step) => (
        <div key={step.id} className="flex">
          <div className="flex-shrink-0 flex h-6 items-center">
            <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
              {step.id}
            </div>
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
            <p className="text-sm text-gray-500">{step.description}</p>
            <Link 
              to={step.link} 
              className="mt-1 text-xs font-medium text-blue-600 hover:text-blue-500"
            >
              {step.linkText} →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}