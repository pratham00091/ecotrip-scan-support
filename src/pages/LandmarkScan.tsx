import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Loader2, 
  MapPin, 
  Clock, 
  Info, 
  Leaf,
  Star,
  Calendar
} from "lucide-react";

const LandmarkScan = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setResult({
        name: "Eiffel Tower",
        location: "Paris, France",
        description: "The iconic iron lattice tower constructed in 1889, standing as a symbol of French ingenuity and architectural excellence.",
        culturalFacts: [
          "Built for the 1889 World's Fair to commemorate the French Revolution",
          "Named after engineer Gustave Eiffel whose company designed and built it",
          "Originally intended as a temporary structure for 20 years",
          "Stands 330 meters tall and was the world's tallest structure until 1930"
        ],
        visitingInfo: {
          hours: "9:30 AM - 11:45 PM",
          bestTime: "Early morning or sunset",
          ticketPrice: "€29.40 for elevator to top",
          bookingRequired: true
        },
        nearbyEcoOptions: [
          {
            name: "Vélib' Bike Station",
            type: "transport",
            distance: "200m",
            ecoScore: 98
          },
          {
            name: "Les Deux Abeilles",
            type: "restaurant",
            distance: "500m",
            ecoScore: 87
          },
          {
            name: "Hotel des Invalides Garden",
            type: "attraction",
            distance: "800m",
            ecoScore: 92
          }
        ]
      });
      setIsProcessing(false);
      setIsUploading(false);
    }, 3000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-eco">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            AI <span className="text-primary">Landmark</span> Scanner
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Snap a photo of any landmark and instantly discover its history, cultural significance, 
            and nearby eco-friendly options
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!result ? (
            /* Upload Section */
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center text-2xl">
                  <Camera className="h-8 w-8 mr-3 text-primary" />
                  Upload or Capture Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-border rounded-3xl p-12 text-center transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {isProcessing ? (
                    <div className="space-y-4">
                      <Loader2 className="h-16 w-16 text-primary mx-auto animate-spin" />
                      <h3 className="text-xl font-semibold">Analyzing Image...</h3>
                      <p className="text-muted-foreground">
                        Our AI is identifying the landmark and gathering information
                      </p>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-primary animate-pulse"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="mx-auto w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Upload className="h-12 w-12 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Drop your image here</h3>
                        <p className="text-muted-foreground mb-4">
                          or click to browse from your device
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <label htmlFor="file-upload">
                          <Button variant="hero" size="lg" className="cursor-pointer">
                            <Upload className="h-5 w-5 mr-2" />
                            Choose File
                          </Button>
                          <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileSelect}
                            className="hidden"
                          />
                        </label>
                        <Button variant="eco" size="lg">
                          <Camera className="h-5 w-5 mr-2" />
                          Take Photo
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Supports JPG, PNG, WEBP files up to 10MB
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Results Section */
            <div className="space-y-6">
              {/* Main Result Card */}
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl mb-2">{result.name}</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {result.location}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setResult(null)}
                    >
                      Scan New Image
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>

                  {/* Cultural Facts */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-primary" />
                      Cultural & Historical Facts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.culturalFacts.map((fact, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{fact}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visiting Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Visiting Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="font-semibold text-sm text-muted-foreground mb-1">Hours</div>
                        <div>{result.visitingInfo.hours}</div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="font-semibold text-sm text-muted-foreground mb-1">Best Time</div>
                        <div>{result.visitingInfo.bestTime}</div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="font-semibold text-sm text-muted-foreground mb-1">Price</div>
                        <div>{result.visitingInfo.ticketPrice}</div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="font-semibold text-sm text-muted-foreground mb-1">Booking</div>
                        <div className="flex items-center">
                          {result.visitingInfo.bookingRequired ? (
                            <>
                              <Calendar className="h-4 w-4 mr-1 text-accent" />
                              Required
                            </>
                          ) : (
                            "Not required"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Eco Options */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Leaf className="h-6 w-6 mr-3 text-primary" />
                    Nearby Eco-Friendly Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {result.nearbyEcoOptions.map((option, index) => (
                      <div key={index} className="border border-border rounded-lg p-4 hover:shadow-card transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{option.name}</h4>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            <Star className="h-3 w-3 mr-1" />
                            {option.ecoScore}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 capitalize">{option.type}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {option.distance} away
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="eco" size="lg">
                      <MapPin className="h-5 w-5 mr-2" />
                      View All on Map
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandmarkScan;