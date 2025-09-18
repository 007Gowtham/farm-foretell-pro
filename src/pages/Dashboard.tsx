import { useState } from "react";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Droplets, 
  Sun, 
  Thermometer, 
  Cloud, 
  Sprout,
  BarChart3,
  Calendar,
  MapPin
} from "lucide-react";

const Dashboard = () => {
  const [selectedField, setSelectedField] = useState("field-1");

  const fields = [
    {
      id: "field-1",
      name: "North Field",
      crop: "Corn",
      area: "25 acres",
      status: "Healthy",
      predictedYield: "185 bu/acre",
      currentGrowth: "V8 Stage"
    },
    {
      id: "field-2",
      name: "South Field", 
      crop: "Soybeans",
      area: "18 acres",
      status: "Monitor",
      predictedYield: "52 bu/acre",
      currentGrowth: "R2 Stage"
    },
    {
      id: "field-3",
      name: "East Field",
      crop: "Wheat",
      area: "32 acres", 
      status: "Excellent",
      predictedYield: "68 bu/acre",
      currentGrowth: "Flowering"
    }
  ];

  const weatherData = {
    current: {
      temp: 72,
      humidity: 65,
      rainfall: 0.2,
      condition: "Partly Cloudy"
    },
    forecast: [
      { day: "Today", temp: "72/58°F", icon: Cloud, rain: "20%" },
      { day: "Tomorrow", temp: "75/60°F", icon: Sun, rain: "5%" },
      { day: "Thu", temp: "78/62°F", icon: Sun, rain: "0%" },
      { day: "Fri", temp: "73/59°F", icon: Cloud, rain: "30%" }
    ]
  };

  const alerts = [
    {
      type: "warning",
      title: "Irrigation Recommended",
      message: "South Field moisture levels dropping. Consider irrigation within 2 days.",
      time: "2 hours ago"
    },
    {
      type: "info", 
      title: "Weather Update",
      message: "Rain expected Thursday. Delay fertilizer application.",
      time: "5 hours ago"
    },
    {
      type: "success",
      title: "Growth Milestone",
      message: "North Field corn has reached V8 stage - on schedule!",
      time: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                Farm Dashboard
              </h1>
              <p className="text-muted-foreground flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Johnson Farm, Iowa • Last updated 2 hours ago</span>
              </p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </Button>
              <Button>
                <BarChart3 className="h-4 w-4 mr-2" />
                View Reports
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Field Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fields.map((field) => (
                  <Card 
                    key={field.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedField === field.id 
                        ? "ring-2 ring-primary shadow-strong" 
                        : "hover:shadow-soft"
                    }`}
                    onClick={() => setSelectedField(field.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{field.name}</CardTitle>
                        <Badge 
                          variant={field.status === "Excellent" ? "default" : 
                                   field.status === "Healthy" ? "secondary" : "destructive"}
                        >
                          {field.status}
                        </Badge>
                      </div>
                      <CardDescription>{field.crop} • {field.area}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Predicted Yield</span>
                          <span className="font-medium">{field.predictedYield}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Growth Stage</span>
                          <span className="font-medium">{field.currentGrowth}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Detailed Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle>Field Analytics</CardTitle>
                  <CardDescription>
                    Detailed insights for {fields.find(f => f.id === selectedField)?.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="yield" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="yield">Yield Prediction</TabsTrigger>
                      <TabsTrigger value="soil">Soil Health</TabsTrigger>
                      <TabsTrigger value="irrigation">Irrigation</TabsTrigger>
                      <TabsTrigger value="nutrients">Nutrients</TabsTrigger>
                    </TabsList>

                    <TabsContent value="yield" className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-accent/50 rounded-lg">
                          <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">185</div>
                          <div className="text-sm text-muted-foreground">Bu/Acre</div>
                        </div>
                        <div className="text-center p-4 bg-accent/50 rounded-lg">
                          <BarChart3 className="h-8 w-8 text-crop mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">+12%</div>
                          <div className="text-sm text-muted-foreground">vs Last Year</div>
                        </div>
                        <div className="text-center p-4 bg-accent/50 rounded-lg">
                          <Calendar className="h-8 w-8 text-wheat mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">Sept 15</div>
                          <div className="text-sm text-muted-foreground">Est. Harvest</div>
                        </div>
                        <div className="text-center p-4 bg-accent/50 rounded-lg">
                          <Sprout className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">95%</div>
                          <div className="text-sm text-muted-foreground">Confidence</div>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Current predictions show strong yield potential based on weather patterns, 
                          soil conditions, and crop development stage. Continue current management practices.
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="soil" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-accent/50 rounded-lg">
                          <div className="text-lg font-semibold mb-2">pH Level</div>
                          <div className="text-2xl font-bold text-primary">6.8</div>
                          <div className="text-sm text-muted-foreground">Optimal range</div>
                        </div>
                        <div className="p-4 bg-accent/50 rounded-lg">
                          <div className="text-lg font-semibold mb-2">Organic Matter</div>
                          <div className="text-2xl font-bold text-primary">3.2%</div>
                          <div className="text-sm text-muted-foreground">Good level</div>
                        </div>
                        <div className="p-4 bg-accent/50 rounded-lg">
                          <div className="text-lg font-semibold mb-2">Moisture</div>
                          <div className="text-2xl font-bold text-primary">22%</div>
                          <div className="text-sm text-muted-foreground">Adequate</div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="irrigation" className="space-y-4">
                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 text-yellow-800">
                          <Droplets className="h-5 w-5" />
                          <span className="font-semibold">Irrigation Recommended</span>
                        </div>
                        <p className="text-sm text-yellow-700 mt-2">
                          Soil moisture has dropped to 18%. Consider irrigation within 48 hours.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-accent/50 rounded-lg">
                          <div className="text-lg font-semibold mb-2">Last Irrigation</div>
                          <div className="text-xl font-bold">5 days ago</div>
                          <div className="text-sm text-muted-foreground">1.2 inches applied</div>
                        </div>
                        <div className="p-4 bg-accent/50 rounded-lg">
                          <div className="text-lg font-semibold mb-2">Next Suggested</div>
                          <div className="text-xl font-bold">Tomorrow</div>
                          <div className="text-sm text-muted-foreground">0.8 inches recommended</div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="nutrients" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-accent/50 rounded-lg">
                          <div className="text-lg font-semibold mb-2">Nitrogen (N)</div>
                          <div className="text-2xl font-bold text-crop">Good</div>
                          <div className="text-sm text-muted-foreground">45 ppm</div>
                        </div>
                        <div className="p-4 bg-accent/50 rounded-lg">
                          <div className="text-lg font-semibold mb-2">Phosphorus (P)</div>
                          <div className="text-2xl font-bold text-wheat">Adequate</div>
                          <div className="text-sm text-muted-foreground">28 ppm</div>
                        </div>
                        <div className="p-4 bg-accent/50 rounded-lg">
                          <div className="text-lg font-semibold mb-2">Potassium (K)</div>
                          <div className="text-2xl font-bold text-primary">Excellent</div>
                          <div className="text-sm text-muted-foreground">165 ppm</div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Weather Widget */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sun className="h-5 w-5 text-sky" />
                    <span>Weather</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{weatherData.current.temp}°F</div>
                    <div className="text-muted-foreground">{weatherData.current.condition}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-sky" />
                      <span>{weatherData.current.humidity}% Humidity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cloud className="h-4 w-4 text-sky" />
                      <span>{weatherData.current.rainfall}" Rain</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="font-medium">{day.day}</span>
                        <div className="flex items-center space-x-2">
                          <day.icon className="h-4 w-4 text-sky" />
                          <span>{day.temp}</span>
                          <span className="text-muted-foreground">{day.rain}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Alerts & Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div key={index} className="space-y-2 pb-4 border-b border-border last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          alert.type === "warning" ? "bg-yellow-500" :
                          alert.type === "success" ? "bg-green-500" : "bg-blue-500"
                        }`} />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{alert.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">{alert.message}</div>
                          <div className="text-xs text-muted-foreground mt-2">{alert.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default Dashboard;