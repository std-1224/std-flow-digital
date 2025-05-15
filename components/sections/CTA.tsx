import React from 'react';
import Button from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
  const benefits = [
    'No credit card required',
    '14-day free trial',
    'Cancel anytime',
    'Full access to basic templates'
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900/90 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Creating Today
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join thousands of professionals using our templates to accelerate their workflow and deliver exceptional results.
                </p>
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 mr-3 text-indigo-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    size="md"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="text-gray-700 hover:bg-gray-50"
                  >
                    Schedule Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
                  <div className="space-y-6">
                    <div className="h-2 w-24 bg-gray-200 rounded"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-200 rounded"></div>
                      <div className="h-2 w-4/5 bg-gray-200 rounded"></div>
                      <div className="h-2 w-3/5 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                      <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                      <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 -right-2 transform rotate-6">
                  <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
                    <div className="space-y-6">
                      <div className="h-2 w-20 bg-gray-200 rounded"></div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-200 rounded"></div>
                        <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;