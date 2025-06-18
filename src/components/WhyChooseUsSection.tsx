
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Users, 
  Zap, 
  Trophy,
  MapPin,
  Languages
} from "lucide-react";

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Regional Expertise",
      description: "Deep understanding of Middle Eastern markets, regulations, and business culture across GCC and Levant regions.",
      stats: "8+ Countries Served"
    },
    {
      icon: <Languages className="h-12 w-12" />,
      title: "Multilingual Team",
      description: "Native Arabic and English speakers ensuring seamless communication and cultural alignment.",
      stats: "Arabic & English Native"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Rapid Delivery",
      description: "Agile methodologies and experienced teams enable faster time-to-market without compromising quality.",
      stats: "30% Faster Delivery"
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "ISO-Certified Processes",
      description: "Quality-assured development following international standards and best practices.",
      stats: "ISO 9001:2015 Certified"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-teal text-white">Why Choose Us</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Your Trusted Technology Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine global expertise with local insights to deliver exceptional 
            results for businesses throughout the Middle East.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="text-brand-teal mb-6 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {advantage.description}
                </p>
                <Badge variant="outline" className="border-brand-teal text-brand-teal">
                  {advantage.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div>
              <div className="text-4xl font-bold text-brand-teal-light mb-2">50+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal-light mb-2">15+</div>
              <div className="text-gray-300">Expert Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal-light mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal-light mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
