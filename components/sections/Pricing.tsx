import React from 'react';
import PricingCard from '../ui/PricingCard';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out our templates',
      features: [
        'Access to 5 basic templates',
        'Limited components',
        'Basic customer support',
        'Personal use only',
      ],
      isPopular: false,
      ctaText: 'Get Started',
    },
    {
      title: 'Professional',
      price: '$49',
      description: 'Everything you need for professional work',
      features: [
        'Access to all 50+ templates',
        'All premium components',
        'Priority customer support',
        'Commercial license',
        'Free updates for 6 months',
      ],
      isPopular: true,
      ctaText: 'Start Free Trial',
    },
    {
      title: 'Enterprise',
      price: '$99',
      description: 'For teams and large projects',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Custom branding options',
        'Dedicated account manager',
        'Free updates forever',
        'Premium integrations',
      ],
      isPopular: false,
      ctaText: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 rounded-full bg-purple-100 blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your needs. No hidden fees or surprise charges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">Need a custom solution?</p>
          <a 
            href="#contact" 
            className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            Contact our sales team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;