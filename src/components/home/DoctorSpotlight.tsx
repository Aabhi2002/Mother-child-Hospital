import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award } from "lucide-react";
import doctorImage from "@/assets/doctor-spotlight.jpg";

const DoctorSpotlight = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={doctorImage} 
                alt="Dr. - Our Founder" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-medium border-2 border-background">
              <div className="text-3xl font-bold text-primary font-heading">30+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Meet Our Founder
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
              Dr. [Name] - A Legacy of Compassionate Care
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dr. [Full Name] has been caring for mothers in our community for over three decades. 
              From the first generation of women who walked through our doors to the young mothers 
              we see today, her vision has remained constant: safe births, compassionate care, and 
              lifelong support for every family.
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Seeing the children she delivered grow into parents themselves inspired the expansion 
              of our pediatric services — so that the same trusted hands can now care for your child as well.
            </p>

            {/* Qualifications */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Qualifications</div>
                  <div className="text-sm text-muted-foreground">MBBS, MD (OB/GYN), Fellowship in Maternal Fetal Medicine</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Specializations</div>
                  <div className="text-sm text-muted-foreground">High-Risk Pregnancy, Lactation Support, Women's Wellness</div>
                </div>
              </div>
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/specialists">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSpotlight;
