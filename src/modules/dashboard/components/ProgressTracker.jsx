import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';

export default function ProgressTracker() {
  const steps = [
    { id: 1, name: 'Create Business Plan', href: '/design', status: 'complete' },
    { id: 2, name: 'Research Design Ideas', href: '/design', status: 'complete' },
    { id: 3, name: 'Analyze Competition', href: '/market-analysis', status: 'current' },
    { id: 4, name: 'Create First Design', href: '/design', status: 'upcoming' },
    { id: 5, name: 'Setup Online Store', href: '/product-launch', status: 'upcoming' },
    { id: 6, name: 'Install Facebook Pixel', href: '/advertising/pixel-setup', status: 'upcoming' },
    { id: 7, name: 'Create First Ad Campaign', href: '/advertising/ad-creation', status: 'upcoming' },
  ];

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {steps.map((step, stepIdx) => (
          <li key={step.id}>
            <div className="relative pb-8">
              {stepIdx !== steps.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={`${
                      step.status === 'complete' ? 'bg-green-500' : 
                      step.status === 'current' ? 'bg-blue-500' : 'bg-gray-200'
                    } h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white`}
                  >
                    {step.status === 'complete' ? (
                      <CheckCircleIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    ) : step.status === 'current' ? (
                      <ClockIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    ) : (
                      <span className="h-2.5 w-2.5 rounded-full bg-gray-400" aria-hidden="true" />
                    )}
                  </span>
                </div>
                <div className="min-w-0 flex-1 py-0.5">
                  <div className="text-sm font-medium text-gray-900">
                    <Link to={step.href} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {step.name}
                    </Link>
                  </div>
                  <div className="text-xs text-gray-500">
                    {step.status === 'complete' && 'Completed'}
                    {step.status === 'current' && 'In progress'}
                    {step.status === 'upcoming' && 'Not started'}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}