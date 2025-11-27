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
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Stories from Our Families
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the families who trust us with their most precious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-medium transition-smooth border-2">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.detail}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
