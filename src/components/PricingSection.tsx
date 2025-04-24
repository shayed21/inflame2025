
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Built <span className="text-[#DA7807]">Diff.</span> Pick Your <span className="text-[rgb(218,120,7)]">Power Move.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Premium Plan */}
          <Card className="bg-black/40 border border-gray-800 p-6 rounded-lg relative overflow-hidden">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-semibold">Inflame Premium</h3>
              <div className="text-4xl font-bold">$4,999</div>
              <p className="text-gray-400">For premium brands demanding prestige, speed, and engagement.</p>
              <ul className="space-y-3">
                {[
                  "Everything in Bespoke Web Presence, plus:",
                  "Custom UI/UX animations",
                  "Optimized lead capture & CRM integration",
                  "Luxury-grade copywriting",
                  "VIP 30-day concierge support"
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
              <h3 className="text-2xl font-semibold">Inflame Standard</h3>
              <div className="text-4xl font-bold">$2,499</div>
              <p className="text-gray-400">For startups & personal brands seeking a high-performance, luxury website.</p>
              <ul className="space-y-3">
                {[
                  "Ultra-fast (0.3ms load time)",
                  "Custom design tailored to your brand",
                  "Optimized SEO for higher rankings",
                  "AI-powered caching & global CDN",
                  "Personalized onboarding & training"
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
                  "Priority speed tuning (0.3ms load time)",
                  "24/7 dedicated support",
                  "High-speed enterprise hosting",
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
