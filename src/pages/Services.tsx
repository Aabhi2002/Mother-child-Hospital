import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Heart, Stethoscope, Syringe, Users, Sparkles, Activity, Shield } from "lucide-react";
import PediatricScrollSection from "@/components/PediatricScrollSection";

const Services = () => {
  const maternityServices = [
    {
      icon: Heart,
      title: "Antenatal Care",
      description: "Comprehensive pregnancy monitoring, nutritional counseling, and regular checkups to ensure a healthy pregnancy journey.",
    },
    {
      icon: Activity,
      title: "Normal & High-Risk Deliveries",
      description: "Expert care for both routine and complicated pregnancies, with 24/7 availability and advanced monitoring.",
    },
    {
      icon: Shield,
      title: "C-Sections & Postnatal Care",
      description: "Surgical expertise when needed, followed by comprehensive recovery support and postnatal guidance.",
    },
    {
      icon: Users,
      title: "Gynecology & Women's Health",
      description: "Complete gynecological services including preventive care, treatment of conditions, and wellness programs.",
    },
    {
      icon: Sparkles,
      title: "Fertility & Preconception Counselling",
      description: "Expert guidance for couples planning pregnancy, including fertility assessments and preconception health optimization.",
    },
    {
      icon: Heart,
      title: "Lactation Support",
      description: "Professional breastfeeding support and guidance to help new mothers establish successful nursing.",
    },
  ];



  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                Comprehensive Care for Mothers & Children
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From planning a pregnancy to your child's teenage years, we provide complete 
                healthcare services under one trusted roof.
              </p>
            </div>
          </div>
        </section>

        {/* Maternity Services */}
        <section id="maternity" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                  Maternity & Women's Health Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive care for women at every stage, from preconception to postnatal recovery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {maternityServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card 
                      key={index} 
                      className="group hover:shadow-medium transition-smooth border-2 hover:border-primary/20"
                    >
                      <CardHeader>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Pediatric Services with Scroll Effect */}
        <section id="pediatric" className="bg-muted/30">
          <PediatricScrollSection />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Ready to Experience Our Care?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Book an appointment today and join the thousands of families who trust us with their health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl text-base font-semibold h-14 px-8 bg-coral text-coral-foreground hover:bg-coral/90 transition-smooth shadow-medium"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center rounded-xl text-base font-semibold h-14 px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
