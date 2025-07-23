import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Explorer",
      price: "Free",
      period: "Forever",
      description: "Perfect for getting started with digital literacy",
      icon: Zap,
      color: "border-muted",
      buttonVariant: "outline" as const,
      features: [
        "Complete Digital Foundations Course",
        "Basic AI Introduction (Modules 5-7)",
        "Basic Points & Badges",
        "Community Access",
        "Email Support",
        "Mobile App Access",
        "Offline Content Download"
      ],
      highlight: false
    },
    {
      name: "Creator",
      price: "R149",
      period: "per month",
      description: "Unlock AI tools and start earning income",
      icon: Star,
      color: "border-primary",
      buttonVariant: "default" as const,
      features: [
        "Everything in Explorer",
        "All 3 Monetization Pathways",
        "Advanced AI Tool Tutorials",
        "Premium Quests & Challenges",
        "Priority Community Support",
        "Progress Analytics",
        "Certificate of Completion"
      ],
      highlight: true,
      savings: "Most Popular"
    },
    {
      name: "Tycoon",
      price: "R1,499",
      period: "per year",
      description: "Master AI entrepreneurship with expert guidance",
      icon: Crown,
      color: "border-accent",
      buttonVariant: "cta" as const,
      features: [
        "Everything in Creator",
        "Monthly Expert Workshops",
        "Advanced Case Studies",
        "POPIA Compliance Guide",
        "1-on-1 Onboarding Call",
        "Priority Email Support",
        "Business Plan Templates",
        "Exclusive Entrepreneur Network"
      ],
      highlight: false,
      savings: "Save 20%"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Simple Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Start Free, Scale When Ready
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your AI journey with our comprehensive free course. Upgrade when you're ready to turn skills into income.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.color} ${plan.highlight ? 'scale-105 shadow-primary border-2' : ''} hover:shadow-card transition-all duration-300 bg-gradient-card`}
            >
              {plan.savings && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge 
                    variant={plan.highlight ? "default" : "secondary"} 
                    className="animate-pulse-glow"
                  >
                    {plan.savings}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.highlight ? 'bg-gradient-hero' : 'bg-muted'
                }`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.highlight ? 'text-primary-foreground' : 'text-muted-foreground'
                  }`} />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period !== "Forever" && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.name === "Explorer" ? "Start Free Now" : `Choose ${plan.name}`}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 p-6 bg-muted/50 rounded-2xl">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            🇿🇦 Built for South Africa
          </h3>
          <p className="text-muted-foreground">
            All content designed for the local market. POPIA compliant. Mobile-first for accessibility. 
            Community support in local languages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;