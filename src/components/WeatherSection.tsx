import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WeatherSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary-foreground mb-4">
            Surf and Weather
          </h2>
          <p className="text-lg text-primary-foreground/90 font-montserrat max-w-2xl mx-auto">
            Stay connected with the islands through real-time surf and weather conditions. 
            Perfect for planning your next Hawaiian adventure or art session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Weather Preview */}
          <Card className="shadow-elegant bg-background/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold font-montserrat text-primary mb-6">
                Live Conditions
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="font-montserrat text-foreground">Temperature</span>
                  <span className="font-montserrat font-semibold text-secondary">82°F</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="font-montserrat text-foreground">Wind</span>
                  <span className="font-montserrat font-semibold text-secondary">15 mph NE</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="font-montserrat text-foreground">Wave Height</span>
                  <span className="font-montserrat font-semibold text-secondary">3-5 ft</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="font-montserrat text-foreground">Conditions</span>
                  <span className="font-montserrat font-semibold text-accent">Perfect</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weather Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold font-montserrat text-primary-foreground mb-4">
                Island Surf App
              </h3>
              <p className="text-primary-foreground/90 font-montserrat leading-relaxed mb-6">
                Get detailed forecasts, surf reports, and real-time conditions for all Hawaiian islands. 
                Whether you're planning to paint outdoors or catch some waves, stay informed with 
                accurate local weather data.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">🌊</span>
                  </div>
                  <span className="font-montserrat text-primary-foreground">Live surf conditions</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">⛅</span>
                  </div>
                  <span className="font-montserrat text-primary-foreground">7-day forecasts</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">🏝️</span>
                  </div>
                  <span className="font-montserrat text-primary-foreground">All Hawaiian islands</span>
                </div>
              </div>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-montserrat font-semibold px-8 py-3 shadow-gold"
            >
              <Link to="/weather">Launch Surf App</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;