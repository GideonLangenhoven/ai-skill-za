import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Trophy, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              🇿🇦 Built for South Africa
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master AI Tools,
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Transform</span> Your Future
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              From digital literacy to AI mastery. Learn practical skills, earn real income. 
              Start with our <strong>free digital foundations course</strong> and unlock your potential in the AI economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Start Learning Free
                <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">5K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Learners</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-6 w-6 text-secondary mr-2" />
                  <span className="text-2xl font-bold text-foreground">89%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-accent mr-2" />
                  <span className="text-2xl font-bold text-foreground">24h</span>
                </div>
                <p className="text-sm text-muted-foreground">To First Skill</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src={heroImage} 
                alt="AI Learning Platform for South Africa" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-card animate-pulse-glow">
              <span className="text-sm font-semibold">100% Free Start</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-card">
              <span className="text-sm font-semibold">Mobile First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;