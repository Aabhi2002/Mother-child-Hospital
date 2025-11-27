import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Clock, Calendar } from "lucide-react";

const Specialists = () => {
  const doctors = [
    {
      name: "Dr. [Full Name]",
      designation: "Senior Consultant - Obstetrics & Gynecology",
      qualifications: "MBBS, MD (OB/GYN), Fellowship in Maternal Fetal Medicine",
      experience: "30+ years",
      specializations: ["High-Risk Pregnancy", "Maternal Fetal Medicine", "Lactation Support"],
      opd: "Mon-Sat: 10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
    },
    {
      name: "Dr. [Name]",
      designation: "Consultant Pediatrician",
      qualifications: "MBBS, MD (Pediatrics), IAP Fellowship",
      experience: "15+ years",
      specializations: ["General Pediatrics", "Neonatology", "Developmental Assessment"],
      opd: "Mon-Sat: 9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
    },
    {
      name: "Dr. [Name]",
      designation: "Consultant Gynecologist",
      qualifications: "MBBS, MS (OB/GYN)",
      experience: "12+ years",
      specializations: ["Women's Health", "Fertility Counselling", "Gynecological Surgery"],
      opd: "Tue, Thu, Sat: 10:00 AM - 1:00 PM",
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
                Meet Our Specialists
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our team of experienced doctors is dedicated to providing compassionate, 
                personalized care for mothers and children.
              </p>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              {doctors.map((doctor, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden shadow-medium border-2 hover:border-primary/20 transition-smooth"
                >
                  <div className="grid md:grid-cols-[300px,1fr] gap-0">
                    {/* Doctor Image */}
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                      <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary font-heading">
                          {doctor.name.split(' ')[1]?.[0] || 'D'}
                        </span>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl font-heading mb-2">
                          {doctor.name}
                        </CardTitle>
                        <p className="text-primary font-medium">{doctor.designation}</p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm text-muted-foreground mb-1">Qualifications</p>
                            <p className="text-foreground">{doctor.qualifications}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm text-muted-foreground mb-1">Experience</p>
                            <p className="text-foreground">{doctor.experience}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm text-muted-foreground mb-1">Specializations</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {doctor.specializations.map((spec, i) => (
                                <span 
                                  key={i}
                                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm text-muted-foreground mb-1">OPD Timings</p>
                            <p className="text-foreground">{doctor.opd}</p>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button variant="coral" asChild>
                            <a href="/contact">
                              <Calendar className="h-4 w-4 mr-2" />
                              Book Appointment
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Specialists;
