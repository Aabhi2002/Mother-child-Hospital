import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";
import hero4 from "@/assets/hero/hero-4.jpg";

const heroImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative flex items-center overflow-visible" style={{ height: '60vh', minHeight: '450px' }}>
        {/* Background Images with Fade Animation */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ 
                filter: 'brightness(0.88) contrast(1.06)',
                objectPosition: 'center top -60px'
              }}
            />
          </div>
        ))}

        {/* Premium Two-Tone Hospital Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(58, 111, 168, 0.5), rgba(58, 111, 168, 0.35))'
          }}
        />

        {/* Vertical Vignette Effect - Top darker, bottom lighter */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, transparent 100%)'
          }}
        />

        {/* Content - Only Headings */}
        <div className="container mx-auto px-4 relative z-10" style={{ paddingTop: '140px' }}>
          <div className="max-w-[900px] mx-auto text-center">
            {/* Heading 1 - Enhanced styling */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading mb-3 animate-hero-fade-in"
              style={{ 
                animationDelay: '0.1s',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.01em',
                lineHeight: '1.3'
              }}
            >
              A Legacy of Care for Mothers.
            </h1>
            
            {/* Heading 2 - Blue color */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading mb-8 animate-hero-fade-in"
              style={{ 
                color: '#3A6FA8',
                animationDelay: '0.25s',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(58, 111, 168, 0.4)',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}
            >
              Now Nurturing Every Child.
            </h2>
            
            {/* Subtext - Enhanced readability */}
            <p 
              className="text-lg md:text-xl text-white max-w-[700px] mx-auto leading-relaxed animate-hero-fade-in"
              style={{ 
                animationDelay: '0.4s',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
                fontWeight: '400'
              }}
            >
              For generations, families have trusted us for safe deliveries and women's health. 
              Today, we extend the same care to your little ones with dedicated pediatric services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Cards Section - Outside Hero */}
      <div className="relative pt-8 pb-8 bg-background z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { number: "30+", label: "Years of Legacy" },
              { number: "15,000+", label: "Successful Deliveries" },
              { number: "24/7", label: "Emergency Care" },
              { number: "100%", label: "Family Trust" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-5 rounded-xl bg-white animate-hero-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  animationDelay: `${0.5 + index * 0.1}s`
                }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary font-heading">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="relative pt-8 pb-12 bg-background z-20">
        <div className="container mx-auto px-4">
          <div 
            className="flex flex-col sm:flex-row justify-center items-center gap-5 animate-hero-fade-in"
            style={{ animationDelay: '0.55s' }}
          >
            <Button 
              variant="coral" 
              size="lg" 
              asChild 
              className="group rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ 
                boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
              }}
            >
              <Link to="/contact">
                Book an Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ 
                boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
              }}
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
