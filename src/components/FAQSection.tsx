
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, Next.js, Node.js, and various other modern frameworks to ensure optimal performance and maintainability."
    },
    {
      question: "Do you provide hosting and domain registration?",
      answer: "Yes, we offer comprehensive hosting solutions and can assist with domain registration and management."
    },
    {
      question: "How long does it take to build a website or web application?",
      answer: "Project timelines vary based on complexity, but typically range from 4-12 weeks for a complete custom solution."
    },
    {
      question: "Do you offer SEO optimization?",
      answer: "Yes, all our websites are built with SEO best practices and we offer additional optimization services."
    },
    {
      question: "Can I request custom features for my web application?",
      answer: "Absolutely! We specialize in custom development and can implement any features you need."
    },
    {
      question: "Do you provide eCommerce solutions?",
      answer: "Yes, we build custom eCommerce solutions using platforms like Shopify, WooCommerce, or custom solutions."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us through our form or email, and we'll schedule a consultation to discuss your project."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our services</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
