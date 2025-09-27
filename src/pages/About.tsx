import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Users, 
  Globe, 
  Heart, 
  Target,
  Award,
  TrendingUp,
  Mail,
  MapPin,
  Calendar
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Maya Rodriguez",
      role: "Co-Founder & CEO",
      image: "👩‍💼",
      bio: "Former sustainability consultant with 10+ years helping companies reduce their environmental impact."
    },
    {
      name: "Alex Chen",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      bio: "AI researcher passionate about using technology to solve environmental challenges."
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Sustainability",
      image: "👩‍🔬",
      bio: "Environmental scientist specializing in carbon footprint analysis and sustainable tourism."
    },
    {
      name: "Marcus Johnson",
      role: "Community Manager",
      image: "👨‍🤝‍👨",
      bio: "Travel enthusiast dedicated to connecting travelers with local communities worldwide."
    }
  ];

  const sdgGoals = [
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Supporting local businesses and creating sustainable employment opportunities"
    },
    {
      number: 11,
      title: "Sustainable Cities and Communities",
      description: "Promoting sustainable tourism practices that benefit local communities"
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description: "Encouraging conscious travel choices and reducing waste"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Helping travelers understand and reduce their carbon footprint"
    }
  ];

  const achievements = [
    {
      icon: Leaf,
      number: "50,000+",
      label: "kg CO₂ Avoided",
      description: "Through our sustainable travel recommendations"
    },
    {
      icon: Users,
      number: "25,000+",
      label: "Eco Travelers",
      description: "Active users making conscious travel choices"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Destinations",
      description: "Cities and regions with eco-friendly options mapped"
    },
    {
      icon: Heart,
      number: "5,000+",
      label: "Local Businesses",
      description: "Sustainable businesses supported on our platform"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-eco">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">EcoTrip Companion</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make sustainable travel accessible, enjoyable, and impactful. 
            Our AI-powered platform connects conscious travelers with eco-friendly experiences 
            while supporting local communities worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-8 w-8 mr-3 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To democratize sustainable travel by providing travelers with the tools and knowledge 
                they need to explore the world responsibly, while creating meaningful economic opportunities 
                for local communities and protecting our planet's natural and cultural heritage.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Globe className="h-8 w-8 mr-3 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A world where every journey creates positive impact - where travelers experience 
                authentic cultures, local communities thrive, and our planet's ecosystems are preserved 
                for future generations. Travel should be a force for good.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Numbers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our <span className="text-primary">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-card text-center hover:shadow-eco transition-all duration-300">
                <CardContent className="p-6">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SDG Alignment */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            UN <span className="text-primary">Sustainable Development Goals</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our work directly contributes to achieving the United Nations Sustainable Development Goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sdgGoals.map((goal, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {goal.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                      <p className="text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-card text-center hover:shadow-eco transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-primary">Partnerships</span> & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">B Corp Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Certified as a business that meets high standards of verified social and environmental performance
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">UN Global Compact</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to aligning our operations with universal principles on human rights and environment
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Carbon Neutral</h3>
                <p className="text-sm text-muted-foreground">
                  Our platform operations are carbon neutral through verified offset programs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-primary/5 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Let's Build a <span className="text-primary">Sustainable Future</span> Together
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a traveler, business owner, or fellow sustainability advocate, 
            we'd love to hear from you and explore how we can collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </Button>
            <Button variant="eco" size="lg">
              <Users className="h-5 w-5 mr-2" />
              Join Our Community
            </Button>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              hello@ecotrip.com
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              San Francisco, CA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;