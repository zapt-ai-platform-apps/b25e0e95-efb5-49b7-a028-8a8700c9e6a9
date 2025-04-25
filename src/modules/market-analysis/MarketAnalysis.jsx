import React from 'react';
import PageHeader from '../core/components/PageHeader';
import CompetitorAnalysis from './components/CompetitorAnalysis';
import TrendAnalysis from './components/TrendAnalysis';
import NicheResearch from './components/NicheResearch';

export default function MarketAnalysis() {
  return (
    <div>
      <PageHeader 
        title="Market & Competition Analysis" 
        description="Research your market, analyze competitors, and identify profitable niches"
      />
      
      <div className="space-y-10">
        <CompetitorAnalysis />
        <TrendAnalysis />
        <NicheResearch />
      </div>
    </div>
  );
}