import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import DoctorSpotlight from "@/components/home/DoctorSpotlight";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesPreview />
        <DoctorSpotlight />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
