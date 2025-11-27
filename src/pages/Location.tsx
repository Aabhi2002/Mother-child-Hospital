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
              <div className="aspect-video rounded-2xl overflow-hidden shadow-medium mb-12 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <p className="text-xl text-muted-foreground font-semibold">Interactive Map</p>
                    <p className="text-sm text-muted-foreground mt-2">Google Maps integration</p>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Address */}
                <div className="bg-card p-8 rounded-2xl shadow-soft border-2">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Address</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Mother & Child Hospital<br />
                    123 Healthcare Avenue<br />
                    Medical District<br />
                    City - 400001
                  </p>
                  <Button variant="coral" className="w-full" asChild>
                    <a 
                      href="https://maps.google.com" 
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
                          Nearest metro station: Medical District (5 min walk). Multiple bus routes pass nearby.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmarks */}
              <div className="mt-8 bg-muted/30 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4 font-heading">Nearby Landmarks</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <p className="font-semibold text-foreground">Medical College</p>
                    <p className="text-sm text-muted-foreground">2 min walk</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="font-semibold text-foreground">Central Park</p>
                    <p className="text-sm text-muted-foreground">5 min walk</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="font-semibold text-foreground">City Hospital</p>
                    <p className="text-sm text-muted-foreground">Adjacent</p>
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
