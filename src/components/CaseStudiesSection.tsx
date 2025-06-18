import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Clock, Users } from "lucide-react";
const CaseStudiesSection = () => {
  const caseStudies = [{
    title: "E-commerce Platform for Retail Chain",
    client: "Major UAE Retailer",
    description: "Complete digital transformation with multi-channel e-commerce platform serving 100K+ customers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    industry: "Retail",
    results: [{
      icon: <TrendingUp className="h-4 w-4" />,
      metric: "300% increase in online sales"
    }, {
      icon: <Users className="h-4 w-4" />,
      metric: "50K+ new customers acquired"
    }, {
      icon: <Clock className="h-4 w-4" />,
      metric: "6 months delivery time"
    }],
    technologies: ["React", "Node.js", "AWS", "MongoDB"]
  }, {
    title: "Banking Mobile Application",
    client: "Regional Bank - Saudi Arabia",
    description: "Secure mobile banking app with advanced features serving over 200K active users daily.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    industry: "FinTech",
    results: [{
      icon: <Users className="h-4 w-4" />,
      metric: "200K+ daily active users"
    }, {
      icon: <TrendingUp className="h-4 w-4" />,
      metric: "40% increase in digital transactions"
    }, {
      icon: <Clock className="h-4 w-4" />,
      metric: "8 months development"
    }],
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"]
  }, {
    title: "Healthcare Management System",
    client: "Medical Center Group - Qatar",
    description: "Comprehensive patient management system streamlining operations across 5 medical facilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    industry: "Healthcare",
    results: [{
      icon: <TrendingUp className="h-4 w-4" />,
      metric: "60% faster patient processing"
    }, {
      icon: <Users className="h-4 w-4" />,
      metric: "10K+ patients managed monthly"
    }, {
      icon: <Clock className="h-4 w-4" />,
      metric: "4 months implementation"
    }],
    technologies: [".NET", "React", "Azure", "SQL Server"]
  }];
  return <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-teal text-white">Case Studies</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across the Middle East achieve 
            their digital transformation goals with measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-brand-teal text-white">
                  {study.industry}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-brand-navy">{study.title}</CardTitle>
                <CardDescription className="text-brand-gray font-medium">
                  {study.client}
                </CardDescription>
                <p className="text-gray-600 text-sm">
                  {study.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {study.results.map((result, idx) => <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="text-brand-teal">{result.icon}</div>
                      <span className="text-gray-700">{result.metric}</span>
                    </div>)}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.technologies.map(tech => <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>)}
                </div>

                <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default CaseStudiesSection;