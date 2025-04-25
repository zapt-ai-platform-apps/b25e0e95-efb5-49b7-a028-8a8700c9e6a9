import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavigationMenu from './NavigationMenu';
import Logo from '../components/Logo';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  return (
    <div className="flex h-full">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Mobile sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200">
          <Logo />
          <button 
            type="button" 
            className="text-gray-500 hover:text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <NavigationMenu onItemClick={() => setSidebarOpen(false)} />
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64 flex flex-col border-r border-gray-200 bg-white">
          <div className="flex-shrink-0 h-16 px-4 flex items-center border-b border-gray-200">
            <Logo />
          </div>
          <NavigationMenu />
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation for mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={() => setSidebarOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <div className="flex-1 flex justify-center">
              <Logo />
            </div>
            <div className="w-6"></div> {/* Spacer for centering */}
          </div>
        </div>
        
        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <div className="py-6 px-4 sm:px-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}