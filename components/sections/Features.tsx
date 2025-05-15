import React from 'react';
import { Zap, Shield, Palette, Smartphone, Layers, LineChart } from 'lucide-react';
import Card from '@/components/ui/card';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Card hasHover className="h-full">
      <div className="flex flex-col h-full">
        <div className="mb-5 rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center text-indigo-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </Card>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance, our templates load in milliseconds so you can focus on what matters.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Built with security in mind, all our products undergo rigorous testing to ensure your data stays safe.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Beautifully Designed',
      description: 'Crafted by world-class designers, our templates are visually stunning and professionally polished.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Fully Responsive',
      description: 'Perfect on any device, from phones to desktops. Your work will look amazing everywhere.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Modular Components',
      description: 'Mix and match from our library of components to create the perfect solution for your needs.',
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Analytics Built-in',
      description: 'Understand your audience with comprehensive analytics and reporting tools included.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Modern Creators</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to create exceptional digital experiences, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;