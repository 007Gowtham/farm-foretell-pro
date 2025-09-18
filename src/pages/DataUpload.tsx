import { useState } from "react";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Database, 
  MapPin, 
  Calendar,
  Sprout,
  Droplets,
  Thermometer,
  BarChart3
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DataUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Data uploaded successfully!",
        description: "Your field data has been processed and added to your profile.",
      });
    }, 2000);
  };

  const cropTypes = [
    "Corn", "Soybeans", "Wheat", "Cotton", "Rice", "Barley", "Oats", "Sorghum"
  ];

  const soilTypes = [
    "Clay", "Sandy", "Loamy", "Silty", "Peaty", "Chalky", "Saline"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-6">
              <Upload className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              Upload Farm Data
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Provide your farm's historical data to get accurate yield predictions and personalized recommendations
            </p>
          </div>

          <Tabs defaultValue="manual" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="manual" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Manual Entry</span>
              </TabsTrigger>
              <TabsTrigger value="file" className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>File Upload</span>
              </TabsTrigger>
              <TabsTrigger value="api" className="flex items-center space-x-2">
                <Database className="h-4 w-4" />
                <span>API Integration</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="manual">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Field Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Field Information</span>
                    </CardTitle>
                    <CardDescription>
                      Basic information about your agricultural field
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fieldName">Field Name</Label>
                      <Input id="fieldName" placeholder="e.g., North Field" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fieldSize">Field Size (acres)</Label>
                      <Input id="fieldSize" type="number" placeholder="25" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City, State" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="coordinates">GPS Coordinates (optional)</Label>
                      <Input id="coordinates" placeholder="41.8781, -87.6298" />
                    </div>
                  </CardContent>
                </Card>

                {/* Crop Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Sprout className="h-5 w-5 text-crop" />
                      <span>Crop Information</span>
                    </CardTitle>
                    <CardDescription>
                      Details about your current and historical crops
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cropType">Current Crop Type</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select crop type" />
                        </SelectTrigger>
                        <SelectContent>
                          {cropTypes.map((crop) => (
                            <SelectItem key={crop} value={crop.toLowerCase()}>
                              {crop}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="plantingDate">Planting Date</Label>
                      <Input id="plantingDate" type="date" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="variety">Crop Variety</Label>
                      <Input id="variety" placeholder="e.g., Pioneer P1234" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expectedHarvest">Expected Harvest Date</Label>
                      <Input id="expectedHarvest" type="date" />
                    </div>
                  </CardContent>
                </Card>

                {/* Soil Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-earth" />
                      <span>Soil Information</span>
                    </CardTitle>
                    <CardDescription>
                      Soil health metrics and characteristics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="soilType">Soil Type</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select soil type" />
                          </SelectTrigger>
                          <SelectContent>
                            {soilTypes.map((soil) => (
                              <SelectItem key={soil} value={soil.toLowerCase()}>
                                {soil}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phLevel">pH Level</Label>
                        <Input id="phLevel" type="number" step="0.1" min="0" max="14" placeholder="6.8" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="organicMatter">Organic Matter (%)</Label>
                        <Input id="organicMatter" type="number" step="0.1" placeholder="3.2" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nitrogen">Nitrogen (ppm)</Label>
                        <Input id="nitrogen" type="number" placeholder="45" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phosphorus">Phosphorus (ppm)</Label>
                        <Input id="phosphorus" type="number" placeholder="28" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="potassium">Potassium (ppm)</Label>
                        <Input id="potassium" type="number" placeholder="165" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Historical Yields */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-wheat" />
                      <span>Historical Yields</span>
                    </CardTitle>
                    <CardDescription>
                      Previous years' yield data for better predictions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[2023, 2022, 2021].map((year) => (
                      <div key={year} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="space-y-2">
                          <Label htmlFor={`crop-${year}`}>Crop ({year})</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select crop" />
                            </SelectTrigger>
                            <SelectContent>
                              {cropTypes.map((crop) => (
                                <SelectItem key={crop} value={crop.toLowerCase()}>
                                  {crop}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`yield-${year}`}>Yield (bu/acre)</Label>
                          <Input id={`yield-${year}`} type="number" placeholder="175" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`rainfall-${year}`}>Total Rainfall (inches)</Label>
                          <Input id={`rainfall-${year}`} type="number" step="0.1" placeholder="32.5" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`notes-${year}`}>Notes</Label>
                          <Input id={`notes-${year}`} placeholder="Drought conditions" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Additional Notes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Information</CardTitle>
                    <CardDescription>
                      Any other relevant information about your farming practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea 
                        id="notes"
                        placeholder="Describe any special farming practices, irrigation systems, pest issues, or other relevant information..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end space-x-4">
                  <Button variant="outline">Save Draft</Button>
                  <Button type="submit" disabled={isUploading}>
                    {isUploading ? "Processing..." : "Submit Data"}
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="file">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Data Files</CardTitle>
                  <CardDescription>
                    Upload CSV, Excel, or other data files containing your farm information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Drop files here or click to upload</h3>
                    <p className="text-muted-foreground mb-4">
                      Supported formats: CSV, XLS, XLSX (max 10MB)
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".csv,.xls,.xlsx"
                      className="hidden"
                      id="fileUpload"
                    />
                    <Button asChild>
                      <label htmlFor="fileUpload" className="cursor-pointer">
                        Choose Files
                      </label>
                    </Button>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-2">Required columns for CSV files:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Field Name, Crop Type, Planting Date, Yield</li>
                      <li>Soil pH, Nitrogen, Phosphorus, Potassium levels</li>
                      <li>Weather data (rainfall, temperature)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api">
              <Card>
                <CardHeader>
                  <CardTitle>API Integration</CardTitle>
                  <CardDescription>
                    Connect your existing farm management software or weather stations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Farm Management Software</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Connect popular platforms like FarmLogs, Granular, or Climate FieldView
                      </p>
                      <Button variant="outline" className="w-full">
                        <Database className="h-4 w-4 mr-2" />
                        Connect Platform
                      </Button>
                    </div>
                    
                    <div className="p-6 border rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Weather Stations</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Import data from on-farm weather monitoring equipment
                      </p>
                      <Button variant="outline" className="w-full">
                        <Thermometer className="h-4 w-4 mr-2" />
                        Connect Station
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> API integrations require Supabase backend setup. 
                      Contact support for assistance with custom integrations.
                    </p>
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

export default DataUpload;