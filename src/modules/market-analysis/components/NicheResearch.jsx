import React from 'react';
import Card from '../../core/components/Card';

export default function NicheResearch() {
  const nicheAnalysisSteps = [
    {
      title: "Identify Potential Niches",
      description: "Brainstorm niches based on your interests, trending topics, or underserved markets",
      icon: "🔍"
    },
    {
      title: "Assess Market Size & Demand",
      description: "Use keyword research tools to determine search volume and interest",
      icon: "📊"
    },
    {
      title: "Analyze Competition",
      description: "Research existing sellers, their pricing, designs, and marketing strategies",
      icon: "👥"
    },
    {
      title: "Check Profitability",
      description: "Evaluate pricing potential, production costs, and sustainable margins",
      icon: "💰"
    },
    {
      title: "Evaluate Longevity",
      description: "Determine if the niche is a passing trend or has long-term potential",
      icon: "📈"
    }
  ];
  
  const profitableNicheCategories = [
    {
      category: "Passion-Based",
      examples: ["Dog Lovers", "Plant Parents", "Guitar Players", "Rock Climbers", "Coffee Enthusiasts"],
      tip: "Passionate communities often spend more on products that express their identity."
    },
    {
      category: "Professional",
      examples: ["Nurses", "Teachers", "IT Professionals", "Social Workers", "Truck Drivers"],
      tip: "Target work-related humor or pride in one's profession."
    },
    {
      category: "Identity & Beliefs",
      examples: ["Moms/Dads", "Vegans", "Faith-Based", "Environmentalists", "Cultural Heritage"],
      tip: "These niches have strong identity connections that drive purchasing decisions."
    },
    {
      category: "Humor & Quotes",
      examples: ["Sarcastic", "Dad Jokes", "Inspirational", "Movie Quotes", "Internet Memes"],
      tip: "Humor sells well but trends can change quickly. Test before scaling."
    }
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Niche Research</h2>
        <p className="mt-1 text-gray-500">Find profitable t-shirt niches with high demand and low competition</p>
      </div>
      
      <Card className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">5-Step Niche Analysis Process</h3>
        <div className="space-y-4">
          {nicheAnalysisSteps.map((step, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center text-xl">
                {step.icon}
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
        {profitableNicheCategories.map((item, index) => (
          <Card key={index} title={item.category}>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Example Niches:</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {item.examples.map((example, idx) => (
                  <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {example}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-medium">Tip:</span> {item.tip}
              </p>
            </div>
          </Card>
        ))}
      </div>
      
      <Card title="Niche Research Workspace">
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="niche-name" className="form-label">Potential Niche</label>
              <input
                type="text"
                id="niche-name"
                name="niche-name"
                className="form-input box-border"
                placeholder="e.g. Cat Lovers, Mountain Hikers, etc."
              />
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="market-size" className="form-label">Estimated Market Size</label>
                <select id="market-size" name="market-size" className="form-input">
                  <option value="">Select size</option>
                  <option value="small">Small (Niche)</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large (Mainstream)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="competition" className="form-label">Competition Level</label>
                <select id="competition" name="competition" className="form-input">
                  <option value="">Select level</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="keywords" className="form-label">Related Keywords</label>
              <input
                type="text"
                id="keywords"
                name="keywords"
                className="form-input box-border"
                placeholder="Comma-separated keywords for this niche"
              />
              <p className="form-hint">Add keywords that potential customers might search for</p>
            </div>
            
            <div>
              <label htmlFor="notes" className="form-label">Research Notes</label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                className="form-input box-border"
                placeholder="Notes about this niche including profitability, trends, customer pain points..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button type="button" className="btn btn-primary cursor-pointer w-full">
                Save Niche Research
              </button>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
}