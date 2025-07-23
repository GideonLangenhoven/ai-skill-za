import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Brain, 
  DollarSign, 
  Gamepad2, 
  Shield, 
  Smartphone,
  Globe,
  Users,
  Award
} from "lucide-react";

const Features = () => {
  const phases = [
    {
      title: "Digital Foundations",
      description: "Master the basics before diving into AI",
      icon: GraduationCap,
      color: "bg-primary/10 text-primary",
      features: ["Internet & Email Mastery", "Cybersecurity Basics", "Cloud & Productivity Tools", "Digital Citizenship"]
    },
    {
      title: "AI Tool Introduction", 
      description: "Learn to work with powerful AI assistants",
      icon: Brain,
      color: "bg-secondary/10 text-secondary",
      features: ["Understanding AI", "Prompt Engineering", "Google Gemini & Perplexity", "Real-world Applications"]
    },
    {
      title: "Monetization Pathways",
      description: "Turn your new skills into income streams",
      icon: DollarSign,
      color: "bg-accent/10 text-accent",
      features: ["Freelance Content Creation", "SMME Automation", "Digital Entrepreneurship", "Income Strategies"]
    }
  ];

  const benefits = [
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Earn XP, unlock badges, and compete on leaderboards while mastering new skills."
    },
    {
      icon: Shield,
      title: "POPIA Compliant",
      description: "Your data is protected according to South African privacy laws."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Learn anywhere, anytime on your smartphone or tablet."
    },
    {
      icon: Globe,
      title: "South African Context",
      description: "All examples and case studies tailored for the local market."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with fellow learners and get help when you need it."
    },
    {
      icon: Award,
      title: "Real Achievements",
      description: "Earn certificates and badges that showcase your new capabilities."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Your Learning Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Three Phases to AI Mastery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We take you from complete beginner to AI-powered professional through our structured, gamified approach.
          </p>
        </div>

        {/* Learning Phases */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {phases.map((phase, index) => (
            <Card key={index} className="relative border-2 hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${phase.color} flex items-center justify-center mb-4`}>
                  <phase.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Phase {index + 1}: {phase.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {phase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              {index === 0 && (
                <div className="absolute -top-3 -right-3">
                  <Badge variant="secondary" className="animate-pulse-glow">
                    100% Free
                  </Badge>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Why Choose AI Mastery Hub?
          </h3>
          <p className="text-lg text-muted-foreground">
            Built specifically for the South African market with local needs in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;