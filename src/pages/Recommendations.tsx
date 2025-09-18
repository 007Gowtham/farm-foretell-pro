import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Droplets, 
  Sprout, 
  Bug, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Lightbulb,
  Target
} from "lucide-react";

const Recommendations = () => {
  const recommendations = {
    irrigation: [
      {
        id: 1,
        priority: "High",
        title: "Irrigation Required - South Field",
        description: "Soil moisture has dropped to 18%. Immediate irrigation recommended to prevent stress.",
        action: "Apply 0.8 inches of water within 24 hours",
        timeframe: "Within 24 hours",
        confidence: 95,
        field: "South Field",
        status: "pending"
      },
      {
        id: 2,
        priority: "Medium",
        title: "Schedule Next Irrigation - North Field",
        description: "Based on weather forecast and growth stage, schedule irrigation for optimal timing.",
        action: "Schedule irrigation for next Tuesday (0.6 inches)",
        timeframe: "5 days",
        confidence: 88,
        field: "North Field",
        status: "scheduled"
      }
    ],
    fertilization: [
      {
        id: 3,
        priority: "Medium",
        title: "Nitrogen Side-dress Application",
        description: "Corn at V6 stage. Side-dress nitrogen application will maximize yield potential.",
        action: "Apply 80 lbs/acre nitrogen as side-dress",
        timeframe: "3-7 days",
        confidence: 92,
        field: "North Field",
        status: "pending"
      },
      {
        id: 4,
        priority: "Low",
        title: "Potassium Deficiency Prevention",
        description: "Soil test indicates moderate potassium levels. Fall application recommended.",
        action: "Plan 120 lbs/acre K2O for fall application",
        timeframe: "Fall season",
        confidence: 76,
        field: "East Field",
        status: "planned"
      }
    ],
    pestControl: [
      {
        id: 5,
        priority: "High",
        title: "Corn Borer Monitoring",
        description: "Weather conditions favorable for corn borer emergence. Begin monitoring traps.",
        action: "Check pheromone traps daily, prepare treatment if threshold exceeded",
        timeframe: "Start immediately",
        confidence: 84,
        field: "All corn fields",
        status: "active"
      },
      {
        id: 6,
        priority: "Medium",
        title: "Weed Control Window",
        description: "Post-emergence herbicide application window closing. Act soon for best results.",
        action: "Apply post-emergence herbicide within 48 hours",
        timeframe: "2 days",
        confidence: 89,
        field: "South Field",
        status: "pending"
      }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "default";
      case "Low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "active":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "scheduled":
        return <Calendar className="h-4 w-4 text-blue-500" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const RecommendationCard = ({ recommendation }: { recommendation: any }) => (
    <Card className="hover:shadow-soft transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant={getPriorityColor(recommendation.priority)}>
                {recommendation.priority} Priority
              </Badge>
              <div className="flex items-center space-x-1">
                {getStatusIcon(recommendation.status)}
                <span className="text-sm text-muted-foreground capitalize">{recommendation.status}</span>
              </div>
            </div>
            <CardTitle className="text-lg">{recommendation.title}</CardTitle>
            <CardDescription className="mt-2">{recommendation.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-accent/30 p-3 rounded-lg">
          <div className="font-semibold text-sm text-foreground mb-1">Recommended Action:</div>
          <div className="text-sm">{recommendation.action}</div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Field:</span>
              <span className="font-medium">{recommendation.field}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{recommendation.timeframe}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Confidence:</span>
            <span className="font-medium">{recommendation.confidence}%</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button size="sm" className="flex-1">
            Accept & Schedule
          </Button>
          <Button size="sm" variant="outline">
            More Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              Smart Recommendations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered suggestions tailored to your crops, soil conditions, and local weather patterns
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">High Priority</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Pending Actions</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">89%</div>
                <div className="text-sm text-muted-foreground">Avg Confidence</div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations Tabs */}
          <Tabs defaultValue="irrigation" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="irrigation" className="flex items-center space-x-2">
                <Droplets className="h-4 w-4" />
                <span>Irrigation</span>
              </TabsTrigger>
              <TabsTrigger value="fertilization" className="flex items-center space-x-2">
                <Sprout className="h-4 w-4" />
                <span>Fertilization</span>
              </TabsTrigger>
              <TabsTrigger value="pest-control" className="flex items-center space-x-2">
                <Bug className="h-4 w-4" />
                <span>Pest Control</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="irrigation" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold">Irrigation Recommendations</h2>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {recommendations.irrigation.map((rec) => (
                  <RecommendationCard key={rec.id} recommendation={rec} />
                ))}
              </div>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Droplets className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-2">Irrigation Best Practices</h3>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Water early morning (6-10 AM) to reduce evaporation</li>
                        <li>• Apply water slowly to prevent runoff and promote deep penetration</li>
                        <li>• Monitor soil moisture at 6-inch depth for accurate timing</li>
                        <li>• Adjust irrigation based on growth stage and weather forecasts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fertilization" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold">Fertilization Recommendations</h2>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Create Plan
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {recommendations.fertilization.map((rec) => (
                  <RecommendationCard key={rec.id} recommendation={rec} />
                ))}
              </div>
              
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Sprout className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-green-800 mb-2">Nutrient Management Tips</h3>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Split nitrogen applications to match crop uptake patterns</li>
                        <li>• Soil test annually to track nutrient levels and pH</li>
                        <li>• Consider variable rate application based on field zones</li>
                        <li>• Time applications with weather to maximize efficiency</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pest-control" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold">Pest Control Recommendations</h2>
                <Button variant="outline">
                  <Bug className="h-4 w-4 mr-2" />
                  View Thresholds
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {recommendations.pestControl.map((rec) => (
                  <RecommendationCard key={rec.id} recommendation={rec} />
                ))}
              </div>
              
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Bug className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-orange-800 mb-2">Integrated Pest Management</h3>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Scout fields regularly to identify pest pressure early</li>
                        <li>• Use economic thresholds to guide treatment decisions</li>
                        <li>• Rotate pesticide modes of action to prevent resistance</li>
                        <li>• Consider beneficial insects and biological controls</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recommendations;