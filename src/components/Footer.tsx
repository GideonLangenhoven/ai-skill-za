import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-foreground">MasteryHub</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering South Africans with practical AI skills for the digital economy.
            </p>
            <Badge variant="secondary" className="mb-4">
              🇿🇦 Proudly South African
            </Badge>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Courses</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Learning Paths */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Learning Paths</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Digital Foundations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">AI Tools Mastery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Freelance Creator</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">SMME Automation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Digital Entrepreneur</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">hello@masteryhub.co.za</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+27 11 123 4567</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Cape Town, South Africa</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with AI Trends
            </h3>
            <p className="text-muted-foreground mb-6">
              Get weekly insights, new course updates, and exclusive tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 AI Mastery Hub. All rights reserved. POPIA Compliant.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">POPIA Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;