import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PaintBrushIcon, 
  ChartBarIcon, 
  RocketLaunchIcon, 
  MegaphoneIcon,
  CurrencyDollarIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

// Icon mapping
const iconComponents = {
  PaintBrush: PaintBrushIcon,
  ChartBar: ChartBarIcon,
  RocketLaunch: RocketLaunchIcon,
  Megaphone: MegaphoneIcon,
  CurrencyDollar: CurrencyDollarIcon,
  Truck: TruckIcon,
};

export default function ModuleCard({ module }) {
  const navigate = useNavigate();
  const IconComponent = iconComponents[module.icon];
  
  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => navigate(module.href)}
    >
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-md ${module.color}`}>
            {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
          </div>
          <h3 className="ml-3 text-lg font-medium text-gray-900">{module.name}</h3>
        </div>
        <p className="text-sm text-gray-500">{module.description}</p>
        <div className="mt-4">
          <button 
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
            onClick={(e) => {
              e.stopPropagation();
              navigate(module.href);
            }}
          >
            Get started →
          </button>
        </div>
      </div>
    </div>
  );
}