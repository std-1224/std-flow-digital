import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -z-10"></div>

      {/* Background shapes */}
      <div className="absolute top-0 left-0 right-0 h-96 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-70"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-100 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-pink-100 blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Elevate Your Workflow</span>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">With FlowForge</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Stunning templates and powerful tools to supercharge your productivity.
              Designed for professionals who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download Free Trial
              </Button>

              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img
                    key={i}
                    src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&w=60&h=60&dpr=2`}
                    alt="User avatar"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">5,000+</span> professionals trust FlowForge
              </p>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Product Screenshot"
                className="rounded-lg w-full"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">Easy to use</span>
              </div>
            </div>

            <div className="absolute top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-semibold">Lightning fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;