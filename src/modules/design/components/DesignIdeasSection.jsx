import React from 'react';
import Card from '../../core/components/Card';

export default function DesignIdeasSection() {
  const designIdeas = [
    {
      id: 1,
      category: 'Niche',
      title: 'Profession-Based Designs',
      description: 'T-shirts targeted at specific professions like nurses, teachers, engineers.',
      examples: [
        'Nurse: "Saving Lives Is My Cardio"',
        'Teacher: "I Teach Tiny Humans"',
        'Engineer: "Trust Me, I\'m an Engineer"'
      ]
    },
    {
      id: 2,
      category: 'Niche',
      title: 'Hobby & Passion',
      description: 'Designs for people passionate about specific hobbies.',
      examples: [
        'Gaming: "Level Up"',
        'Fishing: "Master Baiter"',
        'Gardening: "Plant Whisperer"'
      ]
    },
    {
      id: 3,
      category: 'Seasonal',
      title: 'Holiday Themed',
      description: 'Designs for specific holidays or seasons.',
      examples: [
        'Christmas: "Merry & Bright"',
        'Halloween: "Witch Better Have My Candy"',
        'Valentine\'s: "Love You More"'
      ]
    },
    {
      id: 4,
      category: 'Trending',
      title: 'Current Events & Memes',
      description: 'Designs based on current trends, events, or popular memes.',
      examples: [
        'Work From Home: "Professional Above, Pajamas Below"',
        'Social Distancing: "If You Can Read This, You\'re Too Close"',
        'Viral Quotes: "OK Boomer"'
      ]
    }
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Design Ideas Generator</h2>
        <p className="mt-1 text-gray-500">Browse winning t-shirt niches and design concepts</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {designIdeas.map((idea) => (
          <Card 
            key={idea.id}
            title={idea.title}
            description={`Category: ${idea.category}`}
          >
            <div>
              <p className="text-gray-600 mb-3">{idea.description}</p>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Example Ideas:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {idea.examples.map((example, idx) => (
                  <li key={idx}>{example}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-6">
        <Card>
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Custom Design Idea Generator</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="niche" className="form-label">Select Niche</label>
                <select id="niche" name="niche" className="form-input">
                  <option value="">Choose a niche</option>
                  <option value="profession">Profession</option>
                  <option value="hobby">Hobby</option>
                  <option value="family">Family</option>
                  <option value="pets">Pets</option>
                  <option value="fitness">Fitness</option>
                  <option value="humor">Humor</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="style" className="form-label">Design Style</label>
                <select id="style" name="style" className="form-input">
                  <option value="">Choose a style</option>
                  <option value="typography">Typography</option>
                  <option value="illustration">Illustration</option>
                  <option value="minimalist">Minimalist</option>
                  <option value="vintage">Vintage</option>
                  <option value="funny">Funny</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="keywords" className="form-label">Keywords (optional)</label>
                <input
                  type="text"
                  id="keywords"
                  name="keywords"
                  className="form-input box-border"
                  placeholder="Enter relevant keywords"
                />
              </div>
              
              <div className="pt-2">
                <button type="button" className="btn btn-primary cursor-pointer w-full">
                  Generate Ideas
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}