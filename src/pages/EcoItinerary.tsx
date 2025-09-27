import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  Leaf, 
  Users, 
  Camera,
  Utensils,
  Trees,
  Car,
  Clock,
  Star,
  RefreshCw,
  Download
} from "lucide-react";

const EcoItinerary = () => {
  const [formData, setFormData] = useState({
    destination: "",
    duration: [3],
    budget: [1000],
    interests: [],
    travelStyle: ""
  });
  const [itinerary, setItinerary] = useState(null);

  const interests = [
    { id: "culture", label: "Culture & History", icon: Camera },
    { id: "food", label: "Local Cuisine", icon: Utensils },
    { id: "nature", label: "Nature & Parks", icon: Trees },
    { id: "transport", label: "Eco Transport", icon: Car },
  ];

  const generateItinerary = () => {
    // Mock itinerary generation
    const mockItinerary = {
      destination: formData.destination || "Costa Rica",
      totalCO2: 45.2,
      ecoScore: 89,
      totalCost: formData.budget[0],
      days: [
        {
          day: 1,
          title: "Arrival & City Exploration",
          co2: 12.1,
          activities: [
            {
              time: "9:00 AM",
              title: "Eco-Friendly Airport Transfer",
              description: "Electric shuttle from Juan Santamaría Airport",
              type: "transport",
              ecoFeatures: ["Zero emissions", "Shared transport"],
              cost: 25
            },
            {
              time: "12:00 PM",
              title: "Check-in at Green Hotel",
              description: "Solar-powered eco-lodge with rainforest views",
              type: "accommodation",
              ecoFeatures: ["100% renewable energy", "Water conservation"],
              cost: 120
            },
            {
              time: "3:00 PM",
              title: "Local Market Tour",
              description: "Guided tour of organic farmers market",
              type: "activity",
              ecoFeatures: ["Support local farmers", "Zero waste"],
              cost: 35
            }
          ]
        },
        {
          day: 2,
          title: "Nature & Wildlife Adventure",
          co2: 18.3,
          activities: [
            {
              time: "7:00 AM",
              title: "Rainforest Canopy Walk",
              description: "Sustainable zip-line experience with wildlife viewing",
              type: "activity",
              ecoFeatures: ["Conservation funding", "Low impact"],
              cost: 85
            },
            {
              time: "12:00 PM",
              title: "Farm-to-Table Lunch",
              description: "Organic restaurant with ingredients from own garden",
              type: "dining",
              ecoFeatures: ["Local ingredients", "Composting program"],
              cost: 28
            },
            {
              time: "4:00 PM",
              title: "Wildlife Sanctuary Visit",
              description: "Support local wildlife rescue and rehabilitation",
              type: "activity",
              ecoFeatures: ["Conservation support", "Educational"],
              cost: 45
            }
          ]
        },
        {
          day: 3,
          title: "Cultural Immersion",
          co2: 14.8,
          activities: [
            {
              time: "9:00 AM",
              title: "Indigenous Community Visit",
              description: "Learn traditional crafts and sustainable practices",
              type: "cultural",
              ecoFeatures: ["Community support", "Cultural preservation"],
              cost: 65
            },
            {
              time: "2:00 PM",
              title: "Coffee Plantation Tour",
              description: "Organic, fair-trade coffee farm experience",
              type: "activity",
              ecoFeatures: ["Fair trade", "Organic farming"],
              cost: 40
            },
            {
              time: "6:00 PM",
              title: "Sustainable Cooking Class",
              description: "Learn to cook with local, seasonal ingredients",
              type: "activity",
              ecoFeatures: ["Zero waste cooking", "Local ingredients"],
              cost: 55
            }
          ]
        }
      ]
    };
    setItinerary(mockItinerary);
  };

  const toggleInterest = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const swapForGreener = (dayIndex: number, activityIndex: number) => {
    // Mock greener alternative swap
    console.log(`Swapping activity ${activityIndex} on day ${dayIndex} for greener option`);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-eco">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            AI <span className="text-primary">Eco Itinerary</span> Planner
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create personalized sustainable travel plans with AI-powered recommendations 
            for eco-friendly experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {!itinerary ? (
            /* Planning Form */
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="h-8 w-8 mr-3 text-primary" />
                  Plan Your Eco Adventure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Destination */}
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    placeholder="Where would you like to go?"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  />
                </div>

                {/* Duration and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label>Trip Duration</Label>
                    <div className="px-2">
                      <Slider
                        value={formData.duration}
                        onValueChange={(value) => setFormData({...formData, duration: value})}
                        max={14}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>1 day</span>
                        <span className="font-semibold">{formData.duration[0]} days</span>
                        <span>14 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Budget Range</Label>
                    <div className="px-2">
                      <Slider
                        value={formData.budget}
                        onValueChange={(value) => setFormData({...formData, budget: value})}
                        max={5000}
                        min={200}
                        step={100}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>$200</span>
                        <span className="font-semibold">${formData.budget[0]}</span>
                        <span>$5000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Travel Style */}
                <div className="space-y-2">
                  <Label>Travel Style</Label>
                  <Select 
                    value={formData.travelStyle} 
                    onValueChange={(value) => setFormData({...formData, travelStyle: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your travel style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget Explorer</SelectItem>
                      <SelectItem value="comfort">Comfortable & Conscious</SelectItem>
                      <SelectItem value="luxury">Luxury Eco Experience</SelectItem>
                      <SelectItem value="adventure">Adventure Seeker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interests */}
                <div className="space-y-4">
                  <Label>What interests you? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {interests.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest.id}
                          checked={formData.interests.includes(interest.id)}
                          onCheckedChange={() => toggleInterest(interest.id)}
                        />
                        <Label 
                          htmlFor={interest.id} 
                          className="flex items-center cursor-pointer"
                        >
                          <interest.icon className="h-4 w-4 mr-2 text-primary" />
                          {interest.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={generateItinerary}
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.destination}
                >
                  <Leaf className="h-5 w-5 mr-2" />
                  Generate Eco Itinerary
                </Button>
              </CardContent>
            </Card>
          ) : (
            /* Generated Itinerary */
            <div className="space-y-6">
              {/* Itinerary Header */}
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl">
                      {itinerary.destination} Eco Adventure
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setItinerary(null)}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        New Plan
                      </Button>
                      <Button variant="eco">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-muted/50 p-4 rounded-lg text-center">
                      <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">{formData.duration[0]}</div>
                      <div className="text-muted-foreground">Days</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg text-center">
                      <Leaf className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">{itinerary.co2}</div>
                      <div className="text-muted-foreground">kg CO₂</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg text-center">
                      <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">{itinerary.ecoScore}</div>
                      <div className="text-muted-foreground">Eco Score</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg text-center">
                      <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">${itinerary.totalCost}</div>
                      <div className="text-muted-foreground">Total Cost</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Itinerary */}
              {itinerary.days.map((day, dayIndex) => (
                <Card key={day.day} className="shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center text-xl">
                        <Calendar className="h-6 w-6 mr-3 text-primary" />
                        Day {day.day}: {day.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {day.co2} kg CO₂
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {day.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="border border-border rounded-lg p-4 hover:shadow-card transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Clock className="h-5 w-5 text-primary" />
                                <span className="font-semibold">{activity.time}</span>
                                <Badge variant="outline" className="capitalize">
                                  {activity.type}
                                </Badge>
                              </div>
                              <h4 className="text-lg font-semibold mb-1">{activity.title}</h4>
                              <p className="text-muted-foreground mb-3">{activity.description}</p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {activity.ecoFeatures.map((feature, featureIndex) => (
                                  <Badge key={featureIndex} variant="secondary" className="bg-primary/10 text-primary">
                                    <Leaf className="h-3 w-3 mr-1" />
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-lg font-semibold">${activity.cost}</div>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="mt-2"
                                onClick={() => swapForGreener(dayIndex, activityIndex)}
                              >
                                <RefreshCw className="h-3 w-3 mr-1" />
                                Greener Option
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Action Buttons */}
              <div className="text-center">
                <Button variant="hero" size="lg" className="mr-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book This Itinerary
                </Button>
                <Button variant="eco" size="lg">
                  <Leaf className="h-5 w-5 mr-2" />
                  Offset Carbon Footprint
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcoItinerary;