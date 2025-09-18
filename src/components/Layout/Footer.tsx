import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Sprout className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-xl">AgriPredict</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering farmers with AI-driven crop yield predictions and smart agricultural insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/dashboard" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Dashboard
              </Link>
              <Link to="/recommendations" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Recommendations
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Yield Prediction</p>
              <p>Soil Analysis</p>
              <p>Weather Forecasts</p>
              <p>Crop Recommendations</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@agripredict.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Agricultural District, Farm City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 AgriPredict. All rights reserved. Built for farmers, by farmers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;