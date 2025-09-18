import { Link } from "react-router-dom";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sprout, 
  BarChart3, 
  Cloud, 
  Target, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "AI Yield Predictions",
      description: "Advanced machine learning algorithms analyze your farm data to predict crop yields with 95% accuracy."
    },
    {
      icon: Cloud,
      title: "Weather Integration", 
      description: "Real-time weather data and forecasts tailored to your specific location and growing conditions."
    },
    {
      icon: Target,
      title: "Smart Recommendations",
      description: "Personalized irrigation, fertilization, and pest control recommendations based on your unique conditions."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Early warning systems for weather threats, pest outbreaks, and optimal harvest timing."
    }
  ];

  const stats = [
    { number: "25%", label: "Average Yield Increase" },
    { number: "30%", label: "Resource Savings" },
    { number: "10K+", label: "Farmers Served" },
    { number: "95%", label: "Prediction Accuracy" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Smart Farming
              <br />
              <span className="text-wheat">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Harness the power of AI to predict crop yields, optimize resources, and maximize your harvest potential with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/login">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/dashboard">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Revolutionary Agricultural Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your farming operation with cutting-edge technology designed for modern agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-white/90">Join thousands of farmers already maximizing their yields</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-wheat mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Sprout className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold text-foreground mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your journey toward smarter, more profitable farming today.
          </p>
          <Button asChild size="lg">
            <Link to="/login">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;