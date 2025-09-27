import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Filter, 
  Leaf, 
  Car, 
  Utensils, 
  Hotel, 
  Star,
  Search,
  Bike,
  Train
} from "lucide-react";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const ecoFilters = [
    { id: "eco-certified", label: "Eco-Certified", icon: Leaf },
    { id: "zero-waste", label: "Zero Waste", icon: Leaf },
    { id: "local-owned", label: "Locally Owned", icon: MapPin },
    { id: "renewable-energy", label: "Renewable Energy", icon: Leaf },
  ];

  const mockPOIs = [
    {
      id: 1,
      name: "Green Oasis Hotel",
      type: "accommodation",
      rating: 4.8,
      ecoScore: 95,
      badges: ["Eco-Certified", "Solar Powered"],
      description: "Sustainable luxury hotel with solar panels and rainwater harvesting.",
      distance: "0.5 km",
      price: "$120/night"
    },
    {
      id: 2,
      name: "Farm-to-Table Bistro",
      type: "restaurant",
      rating: 4.7,
      ecoScore: 92,
      badges: ["Zero Waste", "Local Ingredients"],
      description: "Organic restaurant sourcing ingredients from local farms.",
      distance: "0.8 km",
      price: "$35/meal"
    },
    {
      id: 3,
      name: "City Bike Share Hub",
      type: "transport",
      rating: 4.6,
      ecoScore: 98,
      badges: ["Carbon-Free", "Eco Transport"],
      description: "Electric bike sharing station for eco-friendly city exploration.",
      distance: "0.2 km",
      price: "$8/hour"
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-eco">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Explore <span className="text-primary">Eco-Friendly</span> Options
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover sustainable accommodations, restaurants, and transport options tailored to your values
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-primary" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search Location</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter city or landmark..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Eco Filters */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Eco Certifications</label>
                  <div className="space-y-2">
                    {ecoFilters.map((filter) => (
                      <Button
                        key={filter.id}
                        variant={selectedFilters.includes(filter.id) ? "eco" : "outline"}
                        className="w-full justify-start"
                        onClick={() => {
                          setSelectedFilters(prev =>
                            prev.includes(filter.id)
                              ? prev.filter(id => id !== filter.id)
                              : [...prev, filter.id]
                          );
                        }}
                      >
                        <filter.icon className="h-4 w-4 mr-2" />
                        {filter.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Category Filters */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Categories</label>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
                      <TabsTrigger value="nearby" className="text-xs">Nearby</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map Placeholder */}
            <Card className="shadow-card">
              <CardContent className="p-0">
                <div className="h-80 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-secondary opacity-20"></div>
                  <div className="text-center z-10">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Map integration will show eco-friendly locations with real-time filters
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">
                  <MapPin className="h-4 w-4 mr-1" />
                  All
                </TabsTrigger>
                <TabsTrigger value="accommodation">
                  <Hotel className="h-4 w-4 mr-1" />
                  Stay
                </TabsTrigger>
                <TabsTrigger value="restaurant">
                  <Utensils className="h-4 w-4 mr-1" />
                  Eat
                </TabsTrigger>
                <TabsTrigger value="transport">
                  <Car className="h-4 w-4 mr-1" />
                  Move
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {mockPOIs.map((poi) => (
                    <Card key={poi.id} className="shadow-card hover:shadow-eco transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {poi.type === 'accommodation' && <Hotel className="h-5 w-5 text-primary" />}
                              {poi.type === 'restaurant' && <Utensils className="h-5 w-5 text-primary" />}
                              {poi.type === 'transport' && <Bike className="h-5 w-5 text-primary" />}
                              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                {poi.name}
                              </h3>
                            </div>
                            <p className="text-muted-foreground mb-3">{poi.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {poi.badges.map((badge) => (
                                <Badge key={badge} variant="secondary" className="bg-primary/10 text-primary">
                                  <Leaf className="h-3 w-3 mr-1" />
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                              <span className="font-semibold">{poi.rating}</span>
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                              Eco Score: <strong className="text-primary">{poi.ecoScore}/100</strong>
                            </div>
                            <div className="text-sm text-muted-foreground mb-3">{poi.distance}</div>
                            <div className="font-semibold text-lg">{poi.price}</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="eco" className="flex-1">
                            View Details
                          </Button>
                          <Button variant="outline">
                            Add to Trip
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Other tab contents would be similar with filtered data */}
              <TabsContent value="accommodation">
                <div className="text-center py-12">
                  <Hotel className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Eco-friendly accommodations will be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="restaurant">
                <div className="text-center py-12">
                  <Utensils className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Sustainable restaurants will be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="transport">
                <div className="text-center py-12">
                  <Train className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Eco-friendly transport options will be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
