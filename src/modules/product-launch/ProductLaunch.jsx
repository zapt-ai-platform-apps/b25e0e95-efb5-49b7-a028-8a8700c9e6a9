import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import PageHeader from '../core/components/PageHeader';
import Card from '../core/components/Card';
import LaunchChecklist from './components/LaunchChecklist';
import ProductSetup from './components/ProductSetup';
import StoreSetup from './components/StoreSetup';

export default function ProductLaunch() {
  return (
    <div>
      <PageHeader 
        title="Product Launch" 
        description="Set up your store and launch your t-shirt products"
        actions={
          <button
            type="button"
            className="btn btn-primary cursor-pointer"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Product
          </button>
        }
      />
      
      <div className="space-y-8">
        <LaunchChecklist />
        <ProductSetup />
        <StoreSetup />
      </div>
    </div>
  );
}