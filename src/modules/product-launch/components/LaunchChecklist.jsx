import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Card from '../../core/components/Card';

export default function LaunchChecklist() {
  const checklist = [
    { id: 1, task: 'Design finalized and high-resolution files created', completed: true },
    { id: 2, task: 'Product mockups generated for all colors and variants', completed: true },
    { id: 3, task: 'Product description written with SEO keywords', completed: false },
    { id: 4, task: 'Pricing strategy defined with profit margins calculated', completed: false },
    { id: 5, task: 'Print-on-demand provider selected and connected', completed: false },
    { id: 6, task: 'Store policies (returns, shipping, etc.) documented', completed: false },
    { id: 7, task: 'Product categories and tags organized', completed: false },
    { id: 8, task: 'Product uploaded to store with all variants', completed: false },
    { id: 9, task: 'Test order placed to verify quality and fulfillment', completed: false },
    { id: 10, task: 'Marketing assets prepared for launch promotion', completed: false },
  ];
  
  const completedTasks = checklist.filter(item => item.completed).length;
  const progress = Math.round((completedTasks / checklist.length) * 100);

  return (
    <Card title="Launch Checklist" description="Track your progress towards launching your t-shirt product">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Launch Readiness: {progress}%
          </span>
          <span className="text-sm font-medium text-gray-700">
            {completedTasks}/{checklist.length} completed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <ul className="divide-y divide-gray-200">
        {checklist.map((item) => (
          <li key={item.id} className="py-3 flex items-start">
            <div className="flex-shrink-0 h-5 w-5 text-green-500">
              {item.completed ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              ) : (
                <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
              )}
            </div>
            <div className="ml-3 text-sm">
              <p className={`font-medium ${item.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                {item.task}
              </p>
            </div>
            <div className="ml-auto flex-shrink-0">
              <button className="text-sm text-blue-600 hover:text-blue-500">
                {item.completed ? 'Unmark' : 'Mark Complete'}
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="btn btn-primary cursor-pointer w-full">
          Generate Launch Plan
        </button>
      </div>
    </Card>
  );
}