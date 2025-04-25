import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, LightBulbIcon, MagnifyingGlassIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import PageHeader from '../core/components/PageHeader';
import Card from '../core/components/Card';
import DesignIdeasSection from './components/DesignIdeasSection';
import DesignInspirationSection from './components/DesignInspirationSection';
import DesignResourcesSection from './components/DesignResourcesSection';

export default function DesignOverview() {
  return (
    <div>
      <PageHeader 
        title="Design & Research" 
        description="Create winning t-shirt designs and research profitable niches"
        actions={
          <button
            type="button"
            className="btn btn-primary cursor-pointer"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Design
          </button>
        }
      />
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6">
        <Card>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <LightBulbIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Find Ideas</h3>
            <p className="mt-1 text-sm text-gray-500">
              Discover winning t-shirt niches and design concepts
            </p>
            <div className="mt-4">
              <Link
                to="#ideas-section"
                className="btn btn-outline cursor-pointer"
              >
                Explore Ideas
              </Link>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <MagnifyingGlassIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Research</h3>
            <p className="mt-1 text-sm text-gray-500">
              Analyze successful designs and profitable niches
            </p>
            <div className="mt-4">
              <Link
                to="#research-section"
                className="btn btn-outline cursor-pointer"
              >
                Start Research
              </Link>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <PaintBrushIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Create</h3>
            <p className="mt-1 text-sm text-gray-500">
              Design your t-shirt or hire a designer
            </p>
            <div className="mt-4">
              <Link
                to="#create-section"
                className="btn btn-outline cursor-pointer"
              >
                Design Tools
              </Link>
            </div>
          </div>
        </Card>
      </div>
      
      <div id="ideas-section" className="mb-10">
        <DesignIdeasSection />
      </div>
      
      <div id="research-section" className="mb-10">
        <DesignInspirationSection />
      </div>
      
      <div id="create-section">
        <DesignResourcesSection />
      </div>
    </div>
  );
}