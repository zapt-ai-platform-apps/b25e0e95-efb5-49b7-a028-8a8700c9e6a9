import React from 'react';
import Card from '../../core/components/Card';

export default function DesignResourcesSection() {
  const designTools = [
    {
      id: 1,
      name: 'Canva',
      description: 'User-friendly graphic design platform with t-shirt templates',
      url: 'https://www.canva.com/',
      features: [
        'Drag-and-drop interface',
        'T-shirt mockup templates',
        'Millions of stock images and elements',
        'Free and paid plans available'
      ]
    },
    {
      id: 2,
      name: 'Placeit',
      description: 'Online mockup and design tool specifically for print-on-demand',
      url: 'https://placeit.net/',
      features: [
        'T-shirt design templates',
        'Realistic mockups with models',
        'No design skills required',
        'Subscription-based service'
      ]
    },
    {
      id: 3,
      name: 'Adobe Illustrator',
      description: 'Professional vector graphic design software',
      url: 'https://www.adobe.com/products/illustrator.html',
      features: [
        'Industry standard for professional designers',
        'Vector graphics for high-quality prints',
        'Complete creative control',
        'Steeper learning curve'
      ]
    },
    {
      id: 4,
      name: 'GIMP',
      description: 'Free and open-source image editor',
      url: 'https://www.gimp.org/',
      features: [
        'Free alternative to Photoshop',
        'Powerful image editing capabilities',
        'Large community for support',
        'Compatible with most operating systems'
      ]
    }
  ];

  const designServices = [
    {
      id: 1,
      name: 'Fiverr',
      description: 'Marketplace for freelance services including t-shirt design',
      url: 'https://www.fiverr.com/categories/graphics-design/t-shirts-merchandise',
      priceRange: '$5 - $100+',
      details: 'Wide range of designers at various price points and skill levels'
    },
    {
      id: 2,
      name: 'Upwork',
      description: 'Freelance platform with professional designers',
      url: 'https://www.upwork.com/',
      priceRange: '$15 - $150+ per hour',
      details: 'Professional designers with portfolios and verified reviews'
    },
    {
      id: 3,
      name: '99designs',
      description: 'Design contest platform with guaranteed results',
      url: 'https://99designs.com/',
      priceRange: '$199 - $1,299',
      details: 'Run a contest where multiple designers submit concepts for your t-shirt'
    }
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Design Creation Resources</h2>
        <p className="mt-1 text-gray-500">Tools and services to bring your t-shirt designs to life</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Tools</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {designTools.map((tool) => (
            <Card key={tool.id} title={tool.name}>
              <div>
                <p className="text-gray-600 mb-3">{tool.description}</p>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {tool.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Services</h3>
        <p className="text-gray-600 mb-4">Don't want to design yourself? Hire a professional designer:</p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {designServices.map((service) => (
            <Card key={service.id} title={service.name}>
              <div>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <p className="text-sm text-gray-900 font-medium">Price Range: <span className="font-normal text-gray-600">{service.priceRange}</span></p>
                <p className="text-sm text-gray-600 mt-2">{service.details}</p>
                <div className="mt-4">
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Find Designers →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}