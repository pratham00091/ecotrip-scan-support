import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calculator, 
  Plane, 
  Car, 
  Train, 
  Bus,
  Leaf,
  TrendingUp,
  TrendingDown,
  MapPin,
  Users
} from "lucide-react";

const CarbonCalculator = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    transport: "",
    passengers: "1",
    roundTrip: false
  });
  const [result, setResult] = useState(null);

  const transportOptions = [
    { id: "plane", label: "Airplane", icon: Plane, co2PerKm: 0.255 },
    { id: "car", label: "Car", icon: Car, co2PerKm: 0.171 },
    { id: "train", label: "Train", icon: Train, co2PerKm: 0.041 },
    { id: "bus", label: "Bus", icon: Bus, co2PerKm: 0.089 },
  ];

  const calculateCarbon = () => {
    // Mock calculation - in real app would use actual API
    const distance = 500; // Mock distance in km
    const transport = transportOptions.find(t => t.id === formData.transport);
    if (!transport) return;

    const totalCO2 = distance * transport.co2PerKm * parseInt(formData.passengers);
    const multiplier = formData.roundTrip ? 2 : 1;
    const finalCO2 = totalCO2 * multiplier;

    // Generate alternatives
    const alternatives = transportOptions
      .filter(t => t.id !== formData.transport)
      .map(alt => ({
        ...alt,
        co2: distance * alt.co2PerKm * parseInt(formData.passengers) * multiplier,
        savings: finalCO2 - (distance * alt.co2PerKm * parseInt(formData.passengers) * multiplier)
      }))
      .sort((a, b) => a.co2 - b.co2);

    setResult({
      distance,
      co2: finalCO2,
      transport: transport,
      alternatives,
      costEquivalent: Math.round(finalCO2 * 0.5), // Mock cost calculation
      treesNeeded: Math.round(finalCO2 / 22) // Average tree absorbs 22kg CO2/year
    });
  };

  const resetCalculator = () => {
    setFormData({
      from: "",
      to: "",
      transport: "",
      passengers: "1",
      roundTrip: false
    });
    setResult(null);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-eco">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Carbon Footprint</span> Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate your trip's environmental impact and discover greener alternatives 
            to reduce your carbon footprint
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!result ? (
            /* Calculator Form */
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="h-8 w-8 mr-3 text-primary" />
                  Trip Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Origin and Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">From</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="from"
                        placeholder="Enter departure city"
                        value={formData.from}
                        onChange={(e) => setFormData({...formData, from: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">To</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="to"
                        placeholder="Enter destination city"
                        value={formData.to}
                        onChange={(e) => setFormData({...formData, to: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Transport Mode */}
                <div className="space-y-2">
                  <Label>Transport Mode</Label>
                  <Select 
                    value={formData.transport} 
                    onValueChange={(value) => setFormData({...formData, transport: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select transport mode" />
                    </SelectTrigger>
                    <SelectContent>
                      {transportOptions.map((transport) => (
                        <SelectItem key={transport.id} value={transport.id}>
                          <div className="flex items-center">
                            <transport.icon className="h-4 w-4 mr-2" />
                            {transport.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Number of Passengers</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="passengers"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.passengers}
                        onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Trip Type</Label>
                    <div className="flex gap-2">
                      <Button
                        variant={!formData.roundTrip ? "eco" : "outline"}
                        onClick={() => setFormData({...formData, roundTrip: false})}
                        className="flex-1"
                      >
                        One Way
                      </Button>
                      <Button
                        variant={formData.roundTrip ? "eco" : "outline"}
                        onClick={() => setFormData({...formData, roundTrip: true})}
                        className="flex-1"
                      >
                        Round Trip
                      </Button>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={calculateCarbon}
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.from || !formData.to || !formData.transport}
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Carbon Footprint
                </Button>
              </CardContent>
            </Card>
          ) : (
            /* Results Section */
            <div className="space-y-6">
              {/* Main Result */}
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center text-2xl">
                      <result.transport.icon className="h-8 w-8 mr-3 text-primary" />
                      Your Carbon Footprint
                    </CardTitle>
                    <Button variant="outline" onClick={resetCalculator}>
                      New Calculation
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-primary mb-2">
                      {result.co2.toFixed(1)}
                    </div>
                    <div className="text-xl text-muted-foreground">kg CO₂</div>
                    <div className="mt-4">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        {formData.from} → {formData.to} ({result.distance} km)
                      </Badge>
                    </div>
                  </div>

                  {/* Impact Context */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-muted/50 p-6 rounded-lg text-center">
                      <Leaf className="h-12 w-12 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold">{result.treesNeeded}</div>
                      <div className="text-muted-foreground">Trees needed to offset</div>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-lg text-center">
                      <Calculator className="h-12 w-12 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold">${result.costEquivalent}</div>
                      <div className="text-muted-foreground">Carbon offset cost</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternatives */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <TrendingDown className="h-6 w-6 mr-3 text-primary" />
                    Greener Alternatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {result.alternatives.map((alt, index) => (
                      <div key={alt.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-card transition-shadow">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-eco rounded-lg">
                            <alt.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{alt.label}</h4>
                            <p className="text-muted-foreground">{alt.co2.toFixed(1)} kg CO₂</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {alt.savings > 0 ? (
                            <div className="flex items-center text-primary">
                              <TrendingDown className="h-4 w-4 mr-1" />
                              <span className="font-semibold">-{alt.savings.toFixed(1)} kg</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-destructive">
                              <TrendingUp className="h-4 w-4 mr-1" />
                              <span className="font-semibold">+{Math.abs(alt.savings).toFixed(1)} kg</span>
                            </div>
                          )}
                          <div className="text-sm text-muted-foreground">
                            {((alt.savings / result.co2) * 100).toFixed(0)}% {alt.savings > 0 ? 'reduction' : 'increase'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button variant="eco" size="lg" className="mr-4">
                      <Leaf className="h-5 w-5 mr-2" />
                      Offset My Carbon
                    </Button>
                    <Button variant="accent" size="lg">
                      Book Greener Option
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

export default CarbonCalculator;