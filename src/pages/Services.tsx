import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TechStackIcons from "@/components/TechStackIcons";


const Services = () => {
  const serviceDetails = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to match your specific business needs and objectives.",
      features: [
        "Requirements analysis and planning",
        "User-centered design approach",
        "Agile development methodology",
        "Quality assurance and testing",
        "Post-launch support and maintenance"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS and Android app development",
        "Cross-platform solutions with Flutter",
        "User experience optimization",
        "Integration with device features",
        "App store submission assistance"
      ]
    },
    {
      title: "Website Development",
      description: "Fast, secure, and responsive websites built with modern technologies.",
      features: [
        "Responsive design for all devices",
        "SEO-friendly architecture",
        "Performance optimization",
        "Content management system integration",
        "E-commerce functionality"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Creating visually stunning and intuitive interfaces that users love.",
      features: [
        "User research and analysis",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design system creation"
      ]
    },
    {
      title: "SEO Service",
      description: "Boost your online visibility and drive more organic traffic with our expert SEO services.",
      features: [
        "Comprehensive site audit",
        "On-page & off-page optimization",
        "Keyword research & strategy",
        "Technical SEO improvements",
        "Monthly performance reporting"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and integrations for modern businesses.",
      features: [
        "Cloud migration strategy",
        "AWS, Azure, and Google Cloud services",
        "Serverless architecture design",
        "Cloud security implementation",
        "Continuous integration/deployment pipelines"
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="mb-2">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Comprehensive <span className="text-gradient">Tech Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We offer a wide range of services to help your business thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {serviceDetails.map((service, index) => (
              <div key={index} className="bg-secondary p-8 rounded-lg border border-border card-hover">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative overflow-hidden py-20 bg-[#0a1120]">
        {/* Animated Light Ball */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle at 50% 50%, #00eaffcc 0%, #0a112000 80%)",
            borderRadius: "50%",
            animation: "moveBall 8s ease-in-out infinite",
            boxShadow: "0 0 120px 80px #00eaff55, 0 0 240px 150px #00eaff22",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies to build modern, scalable, and efficient solutions.
            </p>
          </div>
          <TechStackIcons />
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering high-quality solutions on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "We start by understanding your business, goals, and requirements."
              },
              {
                step: "2",
                title: "Planning",
                desc: "We create a detailed roadmap and select the right technologies for your project."
              },
              {
                step: "3",
                title: "Development",
                desc: "Our team builds your solution using agile methodology with regular updates."
              },
              {
                step: "4",
                title: "Deployment",
                desc: "We thoroughly test and deploy your solution, providing ongoing support."
              }
            ].map((process, idx) => (
              <div key={idx} className="bg-secondary p-8 rounded-lg border border-border relative overflow-hidden">
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                  {process.step}
                </span>
                <h3 className="text-xl font-bold mb-3 mt-6">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
