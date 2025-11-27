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
        <section className="py-24 bg-gradient-to-br from-primary/5 to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                OUR TEAM
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
                Meet Our Specialists
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our team of experienced doctors is dedicated to providing compassionate, 
                personalized care for mothers and children.
              </p>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative Blue Circles */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto space-y-10">
              {doctors.map((doctor, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                  <div className="grid md:grid-cols-[320px,1fr] gap-0">
                    {/* Doctor Image */}
                    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-white flex items-center justify-center p-10 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                      <div className="w-52 h-52 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-5xl font-bold text-primary font-heading">
                          {doctor.name.split(' ')[1]?.[0] || 'D'}
                        </span>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-10">
                      <CardHeader className="p-0 mb-8">
                        <CardTitle className="text-3xl font-heading mb-3 text-gray-900">
                          {doctor.name}
                        </CardTitle>
                        <p className="text-primary font-semibold text-lg">{doctor.designation}</p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-gray-500 mb-2">Qualifications</p>
                            <p className="text-gray-800 leading-relaxed">{doctor.qualifications}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-gray-500 mb-2">Experience</p>
                            <p className="text-gray-800 font-medium">{doctor.experience}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-gray-500 mb-3">Specializations</p>
                            <div className="flex flex-wrap gap-2">
                              {doctor.specializations.map((spec, i) => (
                                <span 
                                  key={i}
                                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                            <Clock className="h-5 w-5 text-coral" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-gray-500 mb-2">OPD Timings</p>
                            <p className="text-gray-800">{doctor.opd}</p>
                          </div>
                        </div>

                        <div className="pt-6 flex gap-3">
                          <Button variant="coral" size="lg" asChild className="flex-1 md:flex-none">
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
