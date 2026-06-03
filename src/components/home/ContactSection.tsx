import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    purpose: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.mobile) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);

    toast.success("Thank you! We'll contact you soon.");

    // Reset form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      purpose: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Visit Us or Book Your Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here for you at every stage — from planning a pregnancy to your baby's milestones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map & Contact Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-medium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8!2d79.5911005!3d17.9927959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33450fdfe6c961%3A0xc89af3c13f8d8be5!2sCurewell+Hospital!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location - Contact"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-soft">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground text-sm">15-1-48, MGM Rd, near M.G.M hospital, Auto Nagar, Kothawada, Warangal, Telangana 506006</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-soft">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-semibold text-foreground mb-2">Contact Numbers</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground font-medium">Appointments:</p>
                      <a href="tel:+917032812241" className="text-primary hover:underline">7032812241</a>
                      <span className="text-muted-foreground"> / </span>
                      <a href="tel:+919390056602" className="text-primary hover:underline">9390056602</a>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Emergency:</p>
                      <a href="tel:+919500135343" className="text-coral hover:underline font-semibold">9500135343</a>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">IP / Insurance / Billing:</p>
                      <a href="tel:+918712355035" className="text-primary hover:underline">8712355035</a>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Laboratory:</p>
                      <a href="tel:+917680839480" className="text-primary hover:underline">7680839480</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-soft">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:curewellhospitalwgl@gmail.com" className="text-muted-foreground hover:text-primary text-sm">
                    curewellhospitalwgl@gmail.com
                  </a>
                </div>
              </div>

              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href="https://www.google.com/maps/place/Curewell+Hospital/@17.9927908,79.5936754,17z/data=!4m6!3m5!1s0x3a33450fdfe6c961:0xc89af3c13f8d8be5!8m2!3d17.9927908!4d79.5936754!16s%2Fg%2F1pp2xb68s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-medium border">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Book an Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="purpose">Purpose of Visit</Label>
                <Select
                  value={formData.purpose}
                  onValueChange={(value) => setFormData({ ...formData, purpose: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a purpose" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="maternity">Maternity Care</SelectItem>
                    <SelectItem value="pediatric">Pediatric Consultation</SelectItem>
                    <SelectItem value="gynecology">Women's Health</SelectItem>
                    <SelectItem value="vaccination">Vaccination</SelectItem>
                    <SelectItem value="general">General Enquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message / Preferred Date & Time</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your preferred appointment time or any specific concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 min-h-[100px]"
                />
              </div>

              <Button type="submit" variant="coral" size="lg" className="w-full">
                Submit Appointment Request
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will not be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
