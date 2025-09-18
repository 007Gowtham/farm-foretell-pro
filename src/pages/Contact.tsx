import { useState } from "react";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Headphones,
  BookOpen,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      value: "support@agripredict.com",
      action: "Send Email",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "Call Now",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with us online",
      value: "Available 24/7",
      action: "Start Chat",
      color: "text-purple-600"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Browse our guides",
      value: "Help Center",
      action: "View Docs",
      color: "text-orange-600"
    }
  ];

  const officeLocations = [
    {
      city: "Des Moines, IA",
      address: "123 Agricultural Blvd, Suite 400\nDes Moines, IA 50309",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 8AM-6PM CST"
    },
    {
      city: "Lincoln, NE",
      address: "456 Farm Tech Center\nLincoln, NE 68508",
      phone: "+1 (555) 234-5678", 
      hours: "Mon-Fri: 9AM-5PM CST"
    },
    {
      city: "Ames, IA",
      address: "789 Innovation Hub\nAmes, IA 50011",
      phone: "+1 (555) 345-6789",
      hours: "Mon-Fri: 8AM-5PM CST"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about AgriPredict? Our agricultural experts are here to help you maximize your farming potential.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-200">
                <CardContent className="p-6">
                  <method.icon className={`h-8 w-8 ${method.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-sm font-medium text-foreground mb-4">{method.value}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Farmer" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@farm.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmSize">Farm Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select farm size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Under 100 acres</SelectItem>
                        <SelectItem value="medium">100-500 acres</SelectItem>
                        <SelectItem value="large">500-1000 acres</SelectItem>
                        <SelectItem value="enterprise">Over 1000 acres</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="sales">Sales & Pricing</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="bug">Report a Bug</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us more about how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Locations & Additional Info */}
            <div className="space-y-8">
              {/* Office Locations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Our Offices</span>
                  </CardTitle>
                  <CardDescription>
                    Visit us at one of our agricultural technology centers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeLocations.map((location, index) => (
                    <div key={index} className="space-y-2 pb-6 border-b border-border last:border-b-0 last:pb-0">
                      <h3 className="font-semibold text-foreground">{location.city}</h3>
                      <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-0.5" />
                        <div className="whitespace-pre-line">{location.address}</div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Headphones className="h-5 w-5 text-primary" />
                    <span>Quick Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Need immediate help?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Check our knowledge base for instant answers to common questions.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Browse Help Articles
                    </Button>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Join our Community</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Connect with other farmers and share experiences in our community forum.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Join Community
                    </Button>
                  </div>

                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Emergency Support</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Critical issues during growing season?
                    </p>
                    <p className="text-sm font-medium text-primary">
                      Call: +1 (555) 911-FARM
                    </p>
                    <p className="text-xs text-muted-foreground">Available 24/7 during peak season</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;