import React from 'react';

export default function EmptyState({ 
  title = 'No data available', 
  description = 'There is no data to display at this time.', 
  icon,
  action
}) {
  return (
    <div className="text-center py-10">
      {icon && (
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
          {icon}
        </div>
      )}
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}