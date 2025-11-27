import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
            <h3 className="text-xl font-bold mb-4 font-heading">Mother & Child Hospital</h3>
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
                <div>
                  <a href="tel:+1234567890" className="text-sm hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@motherchildhospital.com" className="text-sm hover:underline">
                  info@motherchildhospital.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Healthcare Avenue, Medical District</span>
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
            © {new Date().getFullYear()} Mother & Child Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
