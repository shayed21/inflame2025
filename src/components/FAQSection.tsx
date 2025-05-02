import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in web design, web development, mobile app development, UI/UX design, and digital marketing."
    },
    {
      question: "Can you redesign my existing website or app?",
      answer: "Yes, we can revamp your existing platform to improve performance, user experience, and visual appeal."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Absolutely! We offer maintenance and support packages tailored to your needs."
    },
    {
      question: "Do you offer SEO optimization?",
      answer: "Yes, all our websites are built with SEO best practices and we offer additional optimization services."
    },
    {
      question: "What platforms do you develop on?",
      answer: "We work with platforms like React, Next.js, Laravel, Node.js, Flutter, and WordPress, among others.",
    },
    {
      question: "Can you integrate third-party APIs or tools?",
      answer: "Yes, we can integrate various APIs including payment gateways, analytics, CRMs, and more."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us through our form or email, and we'll schedule a consultation to discuss your project."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-300 bg-gradient-to-br from-[#10192a] to-[#1a233a] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden`}
            >
              <button
                className="w-full flex justify-between items-center px-8 py-6 focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
                <span
                  className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary transition-all duration-200
                    ${openIndex === index ? 'bg-primary text-black rotate-180' : 'bg-black text-primary'}
                  `}
                >
                  {openIndex === index ? (
                    <span className="text-2xl font-bold">−</span>
                  ) : (
                    <span className="text-2xl font-bold">+</span>
                  )}
                </span>
              </button>
              <div
                className={`px-8 pb-6 text-gray-300 text-base transition-all duration-300 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;