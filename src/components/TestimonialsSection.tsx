import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    name: "Ahsanul Karim",
    role: "Chairman, Law Valley",
    image: "https://lawvalley.com.bd/wp-content/uploads/2025/02/1d79dac6-b69d-4303-85cc-531ce6b477c0-941x1024.jpeg",
    category: "Law Firm",
    content: "After optimization, our SEO rankings shot up, and so did our sales. We're getting more traffic, better engagement, and higher conversions."
  },
  {
    name: "James Wilson",
    role: "Director of Sales, HomePro Realty",
    image: "./img/Saren Tan.jpg",
    category: "Real Estate",
    content: "Our user experience has improved dramatically. Everything runs smoothly, customers can browse effortlessly, and our conversion rates have skyrocketed."
  },
  {
    name: "Emily Davis",
    role: "Founder, GlowUp Cosmetics",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    category: "Beauty & Skincare",
    content: "The website optimization has given us a major boost in traffic and conversions. People actually stick around now instead of leaving!"
  },

];

const VISIBLE_COUNT = 3;

const getVisibleTestimonials = (start: number) => {
  const arr = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    arr.push(testimonials[(start + i) % testimonials.length]);
  }
  return arr;
};

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = getVisibleTestimonials(startIndex);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Real Ones Speak:
            <span className="block text-[#DA7807] mt-2">Straight from the Squad</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch transition-all duration-500">
          {visibleTestimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="flex-1 min-w-[300px] max-w-sm flex items-center justify-center"
            >
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#232323] border border-gray-800 rounded-2xl shadow-xl p-8 w-full flex flex-col items-center gap-6">
                {/* Accent Bar */}
                <div className="absolute left-0 top-0 h-full w-2 rounded-l-2xl bg-[#DA7807]" />
                {/* Avatar */}
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-[#DA7807] object-cover z-10"
                />
                {/* Content */}
                <div className="flex-1 flex flex-col gap-2 z-10 items-center text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <h4 className="font-bold text-xl text-white">{testimonial.name}</h4>
                    <Badge className="ml-2" variant="outline">
                      {testimonial.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{testimonial.role}</p>
                  <div className="flex items-start gap-2 justify-center">
                    <span className="text-[#DA7807] text-3xl leading-none">“</span>
                    <p className="text-lg text-gray-200 italic">{testimonial.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
