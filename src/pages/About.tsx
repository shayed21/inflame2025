import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="mb-2">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              We Are <span className="text-gradient">Inflame Tech</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A dynamic software company based in Bangladesh, dedicated to delivering advanced, scalable, and secure digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2022, Inflame Tech Ltd emerged from a passion to create impactful software solutions that help businesses thrive in the digital era. Our journey began with a small team of dedicated professionals who shared a common vision: to transform complex business challenges into elegant, user-friendly digital solutions.
              </p>
              <p className="text-muted-foreground">
                Today, we've grown into a comprehensive software development company, serving clients across various industries. We take pride in our ability to understand unique business needs and deliver customized solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">2022</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses through innovative technology solutions, helping them achieve digital transformation and sustainable growth. We strive to create software that simplifies complex processes and enhances user experiences.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a globally recognized software development company known for creating transformative digital solutions that positively impact businesses and communities. We aim to be at the forefront of technological innovation while maintaining our commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A talented group of professionals dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Juaber Ahmed", role: "Founder & CEO", img: "https://github.com/shayed21/inflame2025/blob/main/public/Jubayer.jpg?raw=true" },
              { name: "Sarah Khan", role: "Lead Developer", img: "../../public/Saren Tan.jpg" },
              { name: "Firoz Ahmed", role: "SEO Manager", img: "../../public/team/Firoz.jpg" },
              { name: "Shayed Asharf", role: "Project Manager", img: "https://github.com/shayed21/inflame2025/blob/main/public/shayed.jpg?raw=true" },
              { name: "Shupto", role: "UI/UX Designer", img: "/placeholder.svg" },
              { name: "Nishat Rima", role: "HR & Admin", img: "/placeholder.svg" },
              { name: "Mehedi Hasan", role: "Full Stack Developer", img: "/placeholder.svg" },
              { name: "Shawon", role: "AI Engineer", img: "/placeholder.svg" },
            ].map((member, idx) => (
              <div key={idx} className="bg-background p-6 rounded-lg text-center card-hover">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
