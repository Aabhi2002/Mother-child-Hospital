import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Car, Train } from "lucide-react";

const Location = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                Find Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conveniently located in the heart of the medical district with easy access.
              </p>
            </div>
          </div>
        </section>

        {/* Map and Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Map */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-medium mb-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8!2d79.5911005!3d17.9927959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33450fdfe6c961%3A0xc89af3c13f8d8be5!2sCurewell+Hospital!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hospital Location Map"
                ></iframe>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Address */}
                <div className="bg-card p-8 rounded-2xl shadow-soft border-2">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Address</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    15-1-48, MGM Rd, near M.G.M hospital,<br />
                    Auto Nagar, Kothawada,<br />
                    Warangal, Telangana 506006
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-primary">
                      Plus Code: XHVV+4F Warangal, Telangana
                    </p>
                  </div>
                  <Button variant="coral" className="w-full" asChild>
                    <a
                      href="https://www.google.com/maps/place/Curewell+Hospital/@17.9927908,79.5936754,17z/data=!4m6!3m5!1s0x3a33450fdfe6c961:0xc89af3c13f8d8be5!8m2!3d17.9927908!4d79.5936754!16s%2Fg%2F1pp2xb68s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>

                {/* How to Reach */}
                <div className="bg-card p-8 rounded-2xl shadow-soft border-2">
                  <Navigation className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">How to Reach</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Car className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">By Car</p>
                        <p className="text-sm text-muted-foreground">
                          Ample parking available. Located off Main Road, easily accessible from all parts of the city.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Train className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">By Public Transport</p>
                        <p className="text-sm text-muted-foreground">
                          Nearest bus stop: MGM Hospital (5 min walk). Multiple bus routes pass nearby.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmarks */}
              <div className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-heading">Nearby Landmarks</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-primary/10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <p className="font-bold text-lg text-foreground mb-2">MGM Hospital</p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        5 min walk
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-accent/10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="font-bold text-lg text-foreground mb-2">Medical College</p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2 min walk
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-coral/10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-4">
                        <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <p className="font-bold text-lg text-foreground mb-2">Regional Eye Hospital</p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-coral/10 text-coral rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Adjacent
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Location;
