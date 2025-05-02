
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
           Level <span className="text-[#DA7807]">Up</span> Select Your <span className="text-[rgb(218,120,7)]">Play</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Premium Plan */}
          <Card className="bg-black/40 border border-gray-800 p-6 rounded-lg relative overflow-hidden">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-semibold">ELITE TIER</h3>
              <div className="text-4xl font-bold">$4,499 (Flagship Experience)</div>
              <p className="text-gray-400">For elite brands who demand dominance</p>
              <ul className="space-y-3">
                {[
                  "Everything in Bespoke Web Presence, plus:",
                  "Signature Motion UI/UX Design System",
                  "Optimized lead capture & CRM integration",
                  "Persuasion Architecture® Copywriting ",
                  "Dedicated Launch Concierge"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </CardContent>
          </Card>

          {/* Standard Plan - Most Popular */}
          <Card className="bg-black/40 border border-gray-800 p-6 rounded-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm px-3 py-1 rounded-full">
              Most Popular
            </div>
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-semibold">HE WARRIOR PLAN</h3>
              <div className="text-4xl font-bold">$2,000  (Ongoing Domination)</div>
              <p className="text-gray-400">Never worry about your digital presence again</p>
              <ul className="space-y-3">
                {[
                  "Ultra-fast (0.3ms load time)",
                  "Custom design & Development tailored to your brand",
                  "SEO Optimized higher rankings",
                  "Weekly Performance Boosts",
                  "Dedicated Growth Team",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#DA7807] hover:bg-[#DA7807]/90">Get Started</Button>
            </CardContent>
          </Card>

          {/* Monthly Plan */}
          <Card className="bg-black/40 border border-gray-800 p-6 rounded-lg relative overflow-hidden">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-semibold">Pay As You Go</h3>
              <div className="text-4xl font-bold">$295<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-400">Ongoing support for performance, security, and enhancements.</p>
              <ul className="space-y-3">
                {[
                  "Fast Load Time (0.3ms load time)",
                  "24/7 dedicated support",
                  "Custom design & Development tailored to your brand",
                  "Monthly audits & security monitoring",
                  "Everything managed by us"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
