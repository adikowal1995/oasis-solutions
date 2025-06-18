import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, Users, Calendar } from "lucide-react";
const AboutSection = () => {
  const teamMembers = [{
    name: "Ahmed Al-Rashid",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    experience: "15+ years in enterprise software"
  }, {
    name: "Sarah Mohammad",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    experience: "12+ years in technology leadership"
  }, {
    name: "Omar Hassan",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    experience: "10+ years in full-stack development"
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-teal text-white">About Us</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Leading the Digital Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Founded in 2025, Oasis Solutions has been at the forefront of digital transformation in the Middle East, delivering innovative solutions that drive business success.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower Middle Eastern businesses with cutting-edge technology solutions 
                that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted technology partner for businesses across the GCC and 
                Levant regions, known for our innovation, quality, and commitment to client success.
              </p>
            </div>

            
          </div>

          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our team collaborating" className="rounded-2xl shadow-xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-brand-teal rounded-xl p-6 text-white">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-brand-navy text-center mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h4 className="text-xl font-bold text-brand-navy mb-2">{member.name}</h4>
                  <p className="text-brand-teal font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        
      </div>
    </section>;
};
export default AboutSection;