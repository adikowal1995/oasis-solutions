
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Monitor, 
  Users, 
  Shield, 
  Palette,
  Settings,
  CloudLightning
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Bespoke web, mobile, and desktop applications tailored to your business needs.",
      technologies: ["React", "Node.js", "Flutter", ".NET"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "IT Project Management",
      description: "Expert project delivery using Agile, Scrum, and hybrid methodologies.",
      technologies: ["Agile", "Scrum", "Jira", "Azure DevOps"],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <CloudLightning className="h-8 w-8" />,
      title: "IT Consultancy & Support",
      description: "Infrastructure optimization, cloud adoption, and comprehensive IT support.",
      technologies: ["AWS", "Azure", "DevOps", "QA Testing"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UX/UI Design",
      description: "User-centered design creating exceptional digital experiences.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      color: "bg-pink-50 border-pink-200"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and 24/7 technical support for your systems.",
      technologies: ["Monitoring", "Updates", "Security", "Performance"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Strategic guidance for modernizing your business processes and technology.",
      technologies: ["Strategy", "Integration", "Automation", "Analytics"],
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-teal text-white">Our Services</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we deliver end-to-end technology solutions 
            that drive business growth across the Middle East region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className={`${service.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader>
                <div className="text-brand-navy mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-brand-navy">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-white">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
