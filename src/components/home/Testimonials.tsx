import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I delivered both my children here, and now they receive their vaccinations at the same hospital. The continuity of care is priceless.",
      name: "Priya S.",
      detail: "Mother of Two",
    },
    {
      quote: "The doctors and staff treated us like family. From prenatal care to my baby's first checkup, everything was handled with such warmth and professionalism.",
      name: "Anjali M.",
      detail: "New Mother",
    },
    {
      quote: "After years of trying, Dr. [Name] guided us through our fertility journey with patience and expertise. We're now proud parents of a healthy baby girl.",
      name: "Rahul & Meera K.",
      detail: "Grateful Parents",
    },
    {
      quote: "The NICU team saved our premature baby's life. We can never thank them enough for their care and dedication during those difficult days.",
      name: "Deepak T.",
      detail: "Father",
    },
    {
      quote: "From my mother who delivered me here 30 years ago, to me delivering my son here - this hospital is truly part of our family story.",
      name: "Sneha R.",
      detail: "Second Generation Patient",
    },
    {
      quote: "The pediatric team is wonderful with children. My son actually looks forward to his vaccination appointments!",
      name: "Kavita P.",
      detail: "Mother",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Blue Circles */}
      <div className="absolute top-10 right-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            Stories from Our Families
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the families who trust us with their most precious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Top Blue Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60"></div>
              
              <CardContent className="pt-8 pb-6 px-6">
                {/* Quote Icon with Blue Background */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info with Blue Accent */}
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.detail}</div>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative Corner Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
