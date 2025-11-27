import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/FloatingContact";
import ContactSection from "@/components/home/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're here to answer your questions and schedule your appointment. 
                Reach out to us anytime.
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Contact;
