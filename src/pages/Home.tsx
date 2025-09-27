import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Calculator, Leaf, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-eco-travel.jpg";
import mapFeature from "@/assets/map-feature.jpg";
import landmarkScanner from "@/assets/landmark-scanner.jpg";
import carbonCalculator from "@/assets/carbon-calculator.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Leaf className="h-4 w-4 mr-2" />
            Sustainable Travel Made Simple
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Scan • Discover • Travel
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Green
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your AI-powered companion for eco-friendly adventures. Discover landmarks, 
            calculate your carbon footprint, and support local communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/explore">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <MapPin className="h-5 w-5 mr-2" />
                Start Exploring
              </Button>
            </Link>
            <Link to="/scan">
              <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                <Camera className="h-5 w-5 mr-2" />
                Scan Landmark
              </Button>
            </Link>
          </div>
          
          {/* Impact Counter */}
          <div className="mt-12 bg-background/10 backdrop-blur-sm rounded-3xl p-6 border border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">24.5k</div>
                <div className="text-primary-foreground/80">kg CO₂ Avoided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">1,247</div>
                <div className="text-primary-foreground/80">Local Businesses Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">8,932</div>
                <div className="text-primary-foreground/80">Eco Travelers Connected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-eco">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need for
              <span className="block text-primary">Sustainable Travel</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to make your journey both memorable and environmentally responsible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Interactive Map */}
            <Card className="group hover:shadow-eco transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="pb-4">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={mapFeature} 
                    alt="Interactive eco-friendly map" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  Interactive Eco Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover eco-certified hotels, zero-waste restaurants, and sustainable transport options 
                  with our intelligent filtering system.
                </p>
                <Link to="/explore">
                  <Button variant="eco" className="w-full">
                    Explore Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Landmark Recognition */}
            <Card className="group hover:shadow-eco transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="pb-4">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={landmarkScanner} 
                    alt="AI landmark scanner" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center text-xl">
                  <Camera className="h-6 w-6 text-primary mr-3" />
                  AI Landmark Scanner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Snap a photo of any landmark and instantly learn its history, cultural significance, 
                  and nearby eco-friendly attractions.
                </p>
                <Link to="/scan">
                  <Button variant="eco" className="w-full">
                    Try Scanner
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Carbon Calculator */}
            <Card className="group hover:shadow-eco transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="pb-4">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={carbonCalculator} 
                    alt="Carbon footprint calculator" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center text-xl">
                  <Calculator className="h-6 w-6 text-primary mr-3" />
                  Carbon Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Calculate your trip's environmental impact and discover greener alternatives 
                  to reduce your carbon footprint.
                </p>
                <Link to="/carbon">
                  <Button variant="eco" className="w-full">
                    Calculate Impact
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Travel Responsibly?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of eco-conscious travelers making a positive impact on the planet, 
            one trip at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/itinerary">
              <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                Plan Your Eco Trip
              </Button>
            </Link>
            <Link to="/local">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Users className="h-5 w-5 mr-2" />
                Support Local
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;