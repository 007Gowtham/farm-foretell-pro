import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Agriculture",
      description: "Advanced AI algorithms analyze your farm data to provide precise yield predictions and optimization strategies."
    },
    {
      icon: Users,
      title: "Farmer-Centric Design",
      description: "Built by agricultural experts who understand the real challenges farmers face in modern agriculture."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our predictions have helped farmers increase yields by up to 25% while reducing resource waste."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Machine learning models that get smarter with every season, adapting to changing climate conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            About AgriPredict
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing agriculture through AI-powered insights, helping farmers make data-driven decisions 
            that increase productivity while preserving our planet's resources.
          </p>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-primary p-8 md:p-12 rounded-2xl text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                To empower farmers worldwide with cutting-edge technology that transforms agricultural data into 
                actionable insights, enabling sustainable farming practices and food security for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            Why Choose AgriPredict?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-accent/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
              Impact by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Farmers Served</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25%</div>
                <p className="text-muted-foreground">Average Yield Increase</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30%</div>
                <p className="text-muted-foreground">Resource Savings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AgriPredict was founded by a team of agricultural scientists, data scientists, and farmers 
              passionate about using technology to solve real-world farming challenges. Our diverse expertise 
              ensures that every feature we build serves the practical needs of modern agriculture.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;