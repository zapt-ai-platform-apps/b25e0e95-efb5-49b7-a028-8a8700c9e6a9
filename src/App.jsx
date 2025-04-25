import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './modules/core/layout/AppLayout';
import Dashboard from './modules/dashboard/Dashboard';
import DesignOverview from './modules/design/DesignOverview';
import MarketAnalysis from './modules/market-analysis/MarketAnalysis';
import ProductLaunch from './modules/product-launch/ProductLaunch';
import AdCampaigns from './modules/advertising/AdCampaigns';
import PixelSetup from './modules/advertising/pixel-setup/PixelSetup';
import AudienceTargeting from './modules/advertising/audience-targeting/AudienceTargeting';
import AdCreation from './modules/advertising/ad-creation/AdCreation';
import AdTesting from './modules/advertising/ad-testing/AdTesting';
import AdReporting from './modules/advertising/ad-reporting/AdReporting';
import AdScaling from './modules/advertising/ad-scaling/AdScaling';
import Retargeting from './modules/advertising/retargeting/Retargeting';
import FundingManagement from './modules/funding/FundingManagement';
import Fulfillment from './modules/fulfillment/Fulfillment';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="design" element={<DesignOverview />} />
          <Route path="market-analysis" element={<MarketAnalysis />} />
          <Route path="product-launch" element={<ProductLaunch />} />
          <Route path="advertising" element={<AdCampaigns />} />
          <Route path="advertising/pixel-setup" element={<PixelSetup />} />
          <Route path="advertising/audience-targeting" element={<AudienceTargeting />} />
          <Route path="advertising/ad-creation" element={<AdCreation />} />
          <Route path="advertising/ad-testing" element={<AdTesting />} />
          <Route path="advertising/ad-reporting" element={<AdReporting />} />
          <Route path="advertising/ad-scaling" element={<AdScaling />} />
          <Route path="advertising/retargeting" element={<Retargeting />} />
          <Route path="funding" element={<FundingManagement />} />
          <Route path="fulfillment" element={<Fulfillment />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;