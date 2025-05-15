import React from 'react';
import { Check } from 'lucide-react';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
}) => {
  return (
    <Card 
      isGlass={true}
      hasHover={true} 
      className={`relative ${isPopular ? 'border-indigo-200 ring-2 ring-indigo-600/20' : ''}`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-gray-500">/month</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-indigo-600" />
            </div>
            <span className="ml-3 text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button 
        variant={isPopular ? 'primary' : 'outline'} 
        fullWidth
      >
        {ctaText}
      </Button>
    </Card>
  );
};

export default PricingCard;