import { useEffect, useState } from 'react';
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
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialHeight = 300; // Define a fixed height

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Real Ones Speak:
            <span className="block text-[#DA7807] mt-2">What the Hype's All About!</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden" style={{ height: testimonialHeight + 'px' }}> {/* Set the height of the container */}
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateY(-${activeIndex * testimonialHeight}px)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-8"
                  style={{ height: testimonialHeight + 'px' }} // Set the height of each testimonial
                >
                  <div className="bg-black/40 border border-gray-800 rounded-lg p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                      <Badge className="ml-auto" variant="outline">
                        {testimonial.category}
                      </Badge>
                    </div>
                    <p className="text-lg text-gray-300">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-primary' : 'bg-zinc-900'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
