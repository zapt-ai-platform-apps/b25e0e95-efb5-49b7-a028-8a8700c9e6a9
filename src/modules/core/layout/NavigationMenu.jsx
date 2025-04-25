import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  PaintBrushIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  MegaphoneIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  DocumentTextIcon,
  BeakerIcon,
  ClipboardDocumentListIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import classNames from 'classnames';

// Navigation structure
const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Design & Ideas', href: '/design', icon: PaintBrushIcon },
  { name: 'Market Analysis', href: '/market-analysis', icon: ChartBarIcon },
  { name: 'Product Launch', href: '/product-launch', icon: RocketLaunchIcon },
  { 
    name: 'Advertising', 
    href: '/advertising', 
    icon: MegaphoneIcon,
    submenu: [
      { name: 'Pixel Setup', href: '/advertising/pixel-setup', icon: null },
      { name: 'Ad Creation', href: '/advertising/ad-creation', icon: null },
      { name: 'Audience Targeting', href: '/advertising/audience-targeting', icon: UsersIcon },
      { name: 'Ad Testing', href: '/advertising/ad-testing', icon: BeakerIcon },
      { name: 'Ad Reporting', href: '/advertising/ad-reporting', icon: ClipboardDocumentListIcon },
      { name: 'Scaling', href: '/advertising/ad-scaling', icon: ArrowTrendingUpIcon },
      { name: 'Retargeting', href: '/advertising/retargeting', icon: ArrowPathIcon },
    ] 
  },
  { name: 'Funding', href: '/funding', icon: CurrencyDollarIcon },
  { name: 'Fulfillment', href: '/fulfillment', icon: TruckIcon },
];

export default function NavigationMenu({ onItemClick }) {
  const location = useLocation();
  
  // Check if current location matches item or any of its subitems
  const isActive = (item) => {
    if (item.href === '/' && location.pathname !== '/') return false;
    return location.pathname === item.href || 
           location.pathname.startsWith(item.href + '/') ||
           (item.submenu?.some(subitem => location.pathname === subitem.href));
  };
  
  // Check if submenu should be expanded
  const isSubmenuExpanded = (item) => {
    if (!item.submenu) return false;
    return item.submenu.some(subitem => 
      location.pathname === subitem.href || 
      location.pathname.startsWith(subitem.href + '/')
    );
  };

  return (
    <nav className="flex-1 overflow-y-auto" aria-label="Main">
      <div className="py-4 space-y-1 px-2">
        {navigation.map((item) => (
          <div key={item.name}>
            <Link
              to={item.href}
              className={classNames(
                isActive(item) ? 'bg-gray-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
              )}
              onClick={onItemClick}
            >
              {item.icon && (
                <item.icon
                  className={classNames(
                    isActive(item) ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
              )}
              {item.name}
              {item.submenu && (
                <svg
                  className={classNames(
                    isSubmenuExpanded(item) ? 'text-gray-400 rotate-90' : 'text-gray-300',
                    'ml-auto h-4 w-4 transition-transform'
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Link>
            
            {/* Submenu items */}
            {item.submenu && isSubmenuExpanded(item) && (
              <div className="ml-7 mt-1 space-y-1">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    to={subitem.href}
                    className={classNames(
                      location.pathname === subitem.href
                        ? 'bg-gray-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center pl-4 pr-3 py-2 text-sm font-medium rounded-md'
                    )}
                    onClick={onItemClick}
                  >
                    {subitem.icon && (
                      <subitem.icon
                        className={classNames(
                          location.pathname === subitem.href ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-4 w-4'
                        )}
                        aria-hidden="true"
                      />
                    )}
                    {subitem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer with link to docs */}
      <div className="border-t border-gray-200 pt-4 pb-3 px-4 mt-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <DocumentTextIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-700">Resources</div>
            <div className="text-xs text-gray-500">Access guides & tutorials</div>
          </div>
        </div>
      </div>
    </nav>
  );
}