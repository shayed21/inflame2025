import { useRef } from "react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, PenTool, Lightbulb } from 'lucide-react';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeatureSection from '@/components/FeatureSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

const Index = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleViewPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/5 z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Ignite Your Digital <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-accent">Presence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver cutting-edge software solutions with Web Develeopment and Digital Marketing to elevate your digital ecosystem and transform your business vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/shayedashraf/get-start-with-inflame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={handleViewPricing}>
                View Pricing
              </Button>
            </div>
            <div className="pt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">98%</h3>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">150+</h3>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">5+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
            Ignite Your <span className="text-primary">Business</span> With Inflame Tech
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
{ icon: Code, title: "AI-Powered Development Accelerator", desc: " Inflame Tech leverages cutting-edge AI tools to supercharge your software development process. From rapid prototyping to intelligent code optimization, we help you bring products to market faster, reduce errors, and enhance performance — saving you valuable time and resources." },
              { icon: PenTool, title: "Smart Documentation", desc: "ASay goodbye to outdated and confusing documentation. At Inflame Tech, we create dynamic, AI-assisted documentation that stays updated automatically, improves team collaboration, and simplifies onboarding. Your projects stay transparent, organized, and easy to scale." },
              { icon: Lightbulb, title: "Intelligent Insights", desc: "Data is powerful — if you know how to use it. Inflame Tech provides intelligent, real-time insights across your projects and systems, helping you make smarter decisions. With predictive analytics and performance tracking, we turn your data into a roadmap for continuous improvement." }
            ].map((feature, index) => (
              <Card key={index} className="bg-secondary/50 border-muted">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add new sections */}
      <WhyChooseUsSection />
      <FeatureSection />
      <div ref={pricingRef}>
        <PricingSection />
      </div>
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Index;