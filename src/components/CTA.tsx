import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Trophy, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto bg-gradient-card border-2 border-primary/20 shadow-primary">
          <CardContent className="p-12 text-center">
            <Badge variant="secondary" className="mb-6 animate-pulse-glow">
              🚀 Ready to Transform Your Future?
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Join 5,000+ South Africans Already
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Mastering AI</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with our completely free Digital Foundations course. No credit card required. 
              Begin building the skills that will define your future in the AI economy.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10 max-w-lg mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">5K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Learners</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-6 w-6 text-accent mr-2" />
                  <span className="text-2xl font-bold text-foreground">89%</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete Course</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Rocket className="h-6 w-6 text-secondary mr-2" />
                  <span className="text-2xl font-bold text-foreground">24h</span>
                </div>
                <p className="text-sm text-muted-foreground">To First Win</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="group">
                Start Your Journey Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Talk to an Expert
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              ✅ No credit card required &nbsp;•&nbsp; ✅ Cancel anytime &nbsp;•&nbsp; ✅ POPIA compliant
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;