import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Heart, Stethoscope, Syringe, Users, Sparkles } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Heart,
      title: "Pregnancy Care",
      description: "Comprehensive antenatal care for normal and high-risk pregnancies",
      link: "/services#maternity",
    },
    {
      icon: Baby,
      title: "Labor & Delivery",
      description: "Safe and compassionate delivery services with 24/7 support",
      link: "/services#delivery",
    },
    {
      icon: Stethoscope,
      title: "Neonatal & NICU",
      description: "Advanced neonatal intensive care for newborns requiring special attention",
      link: "/services#neonatal",
    },
    {
      icon: Syringe,
      title: "Pediatric Care",
      description: "Complete pediatric consultations and vaccination services",
      link: "/services#pediatric",
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Comprehensive gynecology and women's wellness services",
      link: "/services#womens-health",
    },
    {
      icon: Sparkles,
      title: "Fertility Support",
      description: "Preconception counselling and fertility guidance",
      link: "/services#fertility",
    },
  ];

  return (
    <section className="py-20 bg-blue-50/50 relative overflow-hidden">
      {/* Decorative Blue Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Comprehensive Care Under One Roof
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From planning a pregnancy to your baby's milestones, we're with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-smooth cursor-pointer border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to={service.link} 
                    className="text-primary font-medium hover:text-primary/80 inline-flex items-center gap-1 group-hover:gap-2 transition-smooth"
                  >
                    Know More →
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
