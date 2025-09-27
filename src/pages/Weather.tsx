import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Weather = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="relative z-10">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-primary-foreground mb-6">
              Surf and Weather App
            </h1>
            <p className="text-xl text-primary-foreground/90 font-montserrat max-w-3xl mx-auto">
              Your comprehensive surf and weather forecasting tool for the Hawaiian islands. 
              Real-time conditions, detailed forecasts, and surf reports all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Current Conditions */}
            <Card className="shadow-elegant bg-background/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary">Current Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">☀️</div>
                  <div className="text-3xl font-bold font-montserrat text-secondary mb-2">82°F</div>
                  <div className="text-muted-foreground font-montserrat">Sunny</div>
                </div>
                
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-montserrat">Humidity</span>
                    <span className="font-montserrat font-semibold">65%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat">UV Index</span>
                    <span className="font-montserrat font-semibold">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat">Visibility</span>
                    <span className="font-montserrat font-semibold">10 mi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wind Conditions */}
            <Card className="shadow-elegant bg-background/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary">Wind & Air</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">💨</div>
                  <div className="text-3xl font-bold font-montserrat text-secondary mb-2">15 mph</div>
                  <div className="text-muted-foreground font-montserrat">Northeast</div>
                </div>
                
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-montserrat">Gusts</span>
                    <span className="font-montserrat font-semibold">22 mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat">Pressure</span>
                    <span className="font-montserrat font-semibold">30.15 in</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat">Trend</span>
                    <span className="font-montserrat font-semibold">Steady</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Surf Conditions */}
            <Card className="shadow-elegant bg-background/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary">Surf Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌊</div>
                  <div className="text-3xl font-bold font-montserrat text-secondary mb-2">3-5 ft</div>
                  <div className="text-muted-foreground font-montserrat">Good</div>
                </div>
                
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-montserrat">Period</span>
                    <span className="font-montserrat font-semibold">8-10 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat">Direction</span>
                    <span className="font-montserrat font-semibold">NNE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat">Tide</span>
                    <span className="font-montserrat font-semibold">Rising</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Forecast Section */}
          <Card className="shadow-elegant bg-background/95 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="font-montserrat text-primary text-2xl">7-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {[
                  { day: "Today", icon: "☀️", high: 82, low: 74, conditions: "Sunny" },
                  { day: "Mon", icon: "⛅", high: 81, low: 73, conditions: "Partly Cloudy" },
                  { day: "Tue", icon: "🌧️", high: 79, low: 72, conditions: "Light Rain" },
                  { day: "Wed", icon: "☀️", high: 83, low: 75, conditions: "Sunny" },
                  { day: "Thu", icon: "⛅", high: 80, low: 73, conditions: "Partly Cloudy" },
                  { day: "Fri", icon: "☀️", high: 84, low: 76, conditions: "Sunny" },
                  { day: "Sat", icon: "🌧️", high: 78, low: 71, conditions: "Showers" }
                ].map((forecast, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-muted">
                    <div className="font-montserrat font-semibold text-foreground mb-2">{forecast.day}</div>
                    <div className="text-3xl mb-2">{forecast.icon}</div>
                    <div className="font-montserrat text-sm">
                      <div className="font-semibold text-secondary">{forecast.high}°</div>
                      <div className="text-muted-foreground">{forecast.low}°</div>
                    </div>
                    <div className="text-xs font-montserrat text-muted-foreground mt-2">
                      {forecast.conditions}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon Notice */}
          <Card className="shadow-elegant bg-primary-foreground/95 backdrop-blur-sm text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">
                Full Surf App Coming Soon
              </h3>
              <p className="text-primary/80 font-montserrat max-w-2xl mx-auto">
                This is a preview of the comprehensive surf and weather forecasting application. 
                The full version will include real-time data integration, interactive maps, 
                detailed marine forecasts, and much more.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              Deona Hawaii Art
            </h3>
            <p className="font-montserrat italic text-primary-foreground/80 mb-6">
              Art and weather, inspired by the islands
            </p>
            <p className="text-primary-foreground/60 font-montserrat text-sm">
              © 2024 Deona Hawaii Art. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Weather;