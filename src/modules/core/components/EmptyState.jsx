import React from 'react';

export default function EmptyState({ 
  title = "No data available", 
  description = "Get started by creating your first item.",
  icon: Icon,
  action
}) {
  return (
    <div className="text-center py-12">
      {Icon && (
        <div className="mx-auto h-12 w-12 text-gray-400">
          <Icon className="h-full w-full" />
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