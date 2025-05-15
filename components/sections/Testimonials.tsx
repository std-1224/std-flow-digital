import React from 'react';
import Card from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, rating, imageSrc }) => {
  return (
    <Card isGlass hasHover className="h-full flex flex-col">
      <div className="flex-grow">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">&quot;{quote}&quot;</p>
      </div>
      <div className="flex items-center">
        <img 
          src={imageSrc} 
          alt={author}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "FlowForge transformed my workflow completely. I've saved countless hours on design tasks that used to take days.",
      author: "Sarah Johnson",
      role: "UI Designer",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "The templates are not only beautiful but also incredibly functional. My clients are always impressed with the results.",
      author: "Mark Wilson",
      role: "Freelance Developer",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Worth every penny. The support team is responsive and the regular updates keep everything fresh.",
      author: "Jessica Chen",
      role: "Marketing Director",
      rating: 4,
      imageSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Professionals</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t take our word for it. Here&apos;s what our customers have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;