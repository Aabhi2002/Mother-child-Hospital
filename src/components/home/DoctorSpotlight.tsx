import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award } from "lucide-react";
import drRakeshImage from "@/assets/Dr. V Rakesh.jpg";
import drHemaImage from "@/assets/Dr. V Hema.jpg";

const DoctorSpotlight = () => {
  return (
    <section className="py-20 bg-blue-light relative overflow-hidden">
      {/* Decorative Blue Circles */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-64 h-64 bg-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Meet Our Co-Founders
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            A Legacy Built on Trust & Compassion
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Together, our co-founders have dedicated their lives to serving families with excellence,
            integrity, and unwavering commitment to healthcare.
          </p>
        </div>

        {/* Co-Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">

          {/* Dr. V Rakesh */}
          <div className="bg-card rounded-2xl shadow-medium p-8 animate-fade-in hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-6">
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-medium border-4 border-background bg-gray-100">
                  <img
                    src={drRakeshImage}
                    alt="Dr. V Rakesh - Co-Founder & Managing Director"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 15%' }}
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-medium">
                  <div className="text-sm font-bold">25+ Years</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Dr. V Rakesh
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                Co-Founder & Managing Director
              </p>
            </div>

            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Dr. V Rakesh has been at the helm of the hospital with a clear vision: to build a trusted
              healthcare institution that serves families with integrity, compassion, and excellence.
            </p>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              As the Co-Founder & Managing Director, he has played a pivotal role in shaping the hospital's
              growth, bringing together dedicated medical teams, patient-focused systems, and a culture of
              dependable care. While his background as an Orthopedic Surgeon forms the foundation of his
              medical journey, his larger mission has always been to lead the hospital toward meaningful,
              accessible, and compassionate healthcare for all.
            </p>

            {/* Qualifications */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Qualifications</div>
                  <div className="text-xs text-muted-foreground">MBBS, MS Orthopaedics</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Specialization</div>
                  <div className="text-xs text-muted-foreground">Leadership, Orthopedic Surgeon</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. V Hema */}
          <div className="bg-card rounded-2xl shadow-medium p-8 animate-fade-in hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-6">
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-medium border-4 border-background bg-gray-100">
                  <img
                    src={drHemaImage}
                    alt="Dr. V Hema - Co-Founder"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 0%' }}
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute bottom-0 right-0 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-medium">
                  <div className="text-sm font-bold">25+ Years</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Dr. V Hema
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                Co-Founder
              </p>
            </div>

            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Dr. V Hema has been caring for mothers in our community for over three decades. From the
              first generation of women who walked through our doors to the young mothers we see today,
              her vision has remained constant: safe births, compassionate care, and lifelong support for
              every family.
            </p>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Seeing the children she delivered grow into parents themselves inspired the expansion of our
              pediatric services — so that the same trusted hands can now care for your child as well.
            </p>

            {/* Qualifications */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Qualifications</div>
                  <div className="text-xs text-muted-foreground">MBBS, MD (OBG)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Specializations</div>
                  <div className="text-xs text-muted-foreground">Obstetrics, Gynaecology, Laparoscopic Surgery</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <Button variant="default" size="lg" asChild>
            <Link to="/specialists">Meet Our Complete Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSpotlight;
