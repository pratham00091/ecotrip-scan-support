import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Store, 
  Heart, 
  MapPin, 
  Star, 
  Search,
  Calendar,
  Users,
  Leaf,
  ShoppingBag,
  Camera,
  Music,
  Utensils,
  Palette,
  Clock
} from "lucide-react";

const LocalBusiness = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const businesses = [
    {
      id: "1",
      name: "Artisan Coffee Cooperative",
      type: "cafe",
      category: "Food & Drink",
      rating: 4.9,
      ecoScore: 95,
      image: "🌱",
      description: "Fair-trade coffee roastery owned by local farmers cooperative",
      features: ["Fair Trade", "Local Owned", "Zero Waste", "Organic"],
      location: "Downtown District",
      distance: "0.3 km",
      price: "$$",
      hours: "6:00 AM - 8:00 PM"
    },
    {
      id: "2",
      name: "Maya Textiles Workshop",
      type: "craft",
      category: "Arts & Crafts",
      rating: 4.8,
      ecoScore: 92,
      image: "🧵",
      description: "Traditional textile workshop preserving indigenous weaving techniques",
      features: ["Handmade", "Cultural Heritage", "Natural Dyes", "Fair Wages"],
      location: "Cultural Quarter",
      distance: "0.8 km",
      price: "$$$",
      hours: "9:00 AM - 6:00 PM"
    },
    {
      id: "3",
      name: "Eco Village Homestay",
      type: "accommodation",
      category: "Accommodation",
      rating: 4.7,
      ecoScore: 88,
      image: "🏡",
      description: "Community-run homestay with organic gardens and sustainable practices",
      features: ["Solar Power", "Organic Garden", "Community Owned", "Local Food"],
      location: "Hillside Village",
      distance: "2.1 km",
      price: "$",
      hours: "24/7"
    },
    {
      id: "4",
      name: "Green Market Collective",
      type: "market",
      category: "Shopping",
      rating: 4.6,
      ecoScore: 94,
      image: "🛒",
      description: "Weekly farmers market featuring local organic producers",
      features: ["Organic", "Local Farmers", "Plastic-Free", "Seasonal"],
      location: "Town Square",
      distance: "0.5 km",
      price: "$",
      hours: "Saturdays 8:00 AM - 2:00 PM"
    }
  ];

  const events = [
    {
      id: "1",
      title: "Traditional Cooking Workshop",
      date: "Tomorrow",
      time: "2:00 PM - 5:00 PM",
      location: "Community Kitchen",
      price: "$45",
      participants: 12,
      maxParticipants: 15,
      description: "Learn to cook authentic local dishes using traditional methods"
    },
    {
      id: "2",
      title: "Eco-Tourism Photography Walk",
      date: "This Weekend",
      time: "7:00 AM - 11:00 AM",
      location: "Nature Reserve",
      price: "$30",
      participants: 8,
      maxParticipants: 12,
      description: "Capture the beauty of local wildlife while learning conservation"
    },
    {
      id: "3",
      title: "Artisan Market & Live Music",
      date: "Next Week",
      time: "6:00 PM - 10:00 PM",
      location: "Plaza Central",
      price: "Free",
      participants: 45,
      maxParticipants: 100,
      description: "Monthly celebration of local arts, crafts, and music"
    }
  ];

  const toggleFavorite = (businessId: string) => {
    setFavorites(prev => 
      prev.includes(businessId) 
        ? prev.filter(id => id !== businessId)
        : [...prev, businessId]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Food & Drink": return Utensils;
      case "Arts & Crafts": return Palette;
      case "Accommodation": return Store;
      case "Shopping": return ShoppingBag;
      default: return Store;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-eco">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Support <span className="text-primary">Local</span> Communities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover authentic local businesses, artisans, and cultural experiences 
            that make a positive impact on communities
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search local businesses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="businesses" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="businesses">
              <Store className="h-4 w-4 mr-2" />
              Businesses
            </TabsTrigger>
            <TabsTrigger value="events">
              <Calendar className="h-4 w-4 mr-2" />
              Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="businesses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses.map((business) => {
                const CategoryIcon = getCategoryIcon(business.category);
                const isFavorited = favorites.includes(business.id);
                
                return (
                  <Card key={business.id} className="shadow-card hover:shadow-eco transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{business.image}</div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorite(business.id)}
                          className="text-muted-foreground hover:text-accent"
                        >
                          <Heart className={`h-5 w-5 ${isFavorited ? 'fill-accent text-accent' : ''}`} />
                        </Button>
                      </div>
                      <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                        <CategoryIcon className="h-5 w-5" />
                        {business.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span>{business.rating}</span>
                        <span>•</span>
                        <span>{business.category}</span>
                        <span>•</span>
                        <span>{business.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{business.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {business.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                            <Leaf className="h-3 w-3 mr-1" />
                            {feature}
                          </Badge>
                        ))}
                        {business.features.length > 3 && (
                          <Badge variant="outline">
                            +{business.features.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {business.location} • {business.distance}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {business.hours}
                        </div>
                        <div className="flex items-center">
                          <Leaf className="h-4 w-4 mr-2" />
                          Eco Score: <strong className="text-primary ml-1">{business.ecoScore}/100</strong>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="eco" className="flex-1">
                          Visit
                        </Button>
                        <Button variant="outline">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="max-w-4xl mx-auto space-y-6">
              {events.map((event) => (
                <Card key={event.id} className="shadow-card hover:shadow-eco transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Music className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {event.price}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-6">
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Users className="h-4 w-4 mr-1" />
                          {event.participants}/{event.maxParticipants}
                        </div>
                        <Button variant="hero">
                          Join Event
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary/5 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Are you a <span className="text-primary">local business</span> owner?
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our platform to connect with eco-conscious travelers and showcase 
            your sustainable practices to a global audience.
          </p>
          <Button variant="hero" size="lg">
            <Store className="h-5 w-5 mr-2" />
            List Your Business
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocalBusiness;