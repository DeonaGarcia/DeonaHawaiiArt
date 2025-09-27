import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WeatherSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-4">
            Hawaii Weather & Surf
          </h2>
          <p className="text-lg text-muted-foreground font-montserrat max-w-2xl mx-auto">
            Stay connected with the islands through real-time weather and surf conditions. 
            Perfect for planning your next Hawaiian adventure or art session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Weather Preview */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold font-montserrat text-primary mb-6">
                Live Conditions
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-montserrat text-foreground">Temperature</span>
                  <span className="font-montserrat font-semibold text-secondary">82°F</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-montserrat text-foreground">Wind</span>
                  <span className="font-montserrat font-semibold text-secondary">15 mph NE</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-montserrat text-foreground">Wave Height</span>
                  <span className="font-montserrat font-semibold text-secondary">3-5 ft</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-montserrat text-foreground">Conditions</span>
                  <span className="font-montserrat font-semibold text-accent">Perfect</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weather Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4">
                Island Weather App
              </h3>
              <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                Get detailed forecasts, surf reports, and real-time conditions for all Hawaiian islands. 
                Whether you're planning to paint outdoors or catch some waves, stay informed with 
                accurate local weather data.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-secondary-foreground font-semibold text-sm">🌊</span>
                  </div>
                  <span className="font-montserrat text-foreground">Live surf conditions</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold text-sm">⛅</span>
                  </div>
                  <span className="font-montserrat text-foreground">7-day forecasts</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">🏝️</span>
                  </div>
                  <span className="font-montserrat text-foreground">All Hawaiian islands</span>
                </div>
              </div>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold px-8 py-3 shadow-gold"
            >
              <Link to="/weather">Launch Weather App</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;