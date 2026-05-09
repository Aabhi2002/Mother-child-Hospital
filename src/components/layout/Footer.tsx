import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import hospitalLogo from "@/assets/hospital-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our Specialists", path: "/specialists" },
    { name: "Blogs", path: "/blogs" },
    { name: "Location", path: "/location" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="bg-white rounded-lg p-2 inline-block mb-4">
              <img
                src={hospitalLogo}
                alt="Mother & Child Hospital"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Serving mothers and children with compassionate care for generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Appointments:</p>
                  <a href="tel:+917032812241" className="hover:underline block">7032812241</a>
                  <a href="tel:+919390056602" className="hover:underline block">9390056602</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Emergency:</p>
                  <a href="tel:+919500135343" className="hover:underline text-coral">9500135343</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:curewellhospitalwgl@gmail.com" className="text-sm hover:underline">
                  curewellhospitalwgl@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">MGM Rd, Kothawada, Warangal</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Timings</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">OPD Hours</p>
                  <p className="text-primary-foreground/80">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-primary-foreground/80">Sunday: 9:00 AM - 2:00 PM</p>
                </div>
              </li>
              <li className="text-sm mt-2">
                <p className="font-medium text-coral">24/7 Emergency Services</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Cure Well Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
