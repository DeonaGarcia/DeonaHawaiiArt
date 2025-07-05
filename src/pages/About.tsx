import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6">
                About the Artist
              </h1>
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed mb-8">
                Aloha! I'm Deona, a Hawaii-based artist whose work is deeply inspired by 
                the natural beauty and spiritual essence of the Hawaiian Islands. 
                Each brushstroke captures my love for this paradise I call home.
              </p>
              <div className="flex gap-4">
                <Button 
                  asChild 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold shadow-gold"
                >
                  <Link to="/gallery">View My Work</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="font-montserrat font-semibold hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="#contact">Commission Art</a>
                </Button>
              </div>
            </div>
            
            {/* Artist Photo Placeholder */}
            <div className="relative">
              <Card className="overflow-hidden shadow-elegant">
                <div className="aspect-square bg-gradient-tropical flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">🎨</span>
                    </div>
                    <p className="font-montserrat font-medium">Artist Photo</p>
                    <p className="font-montserrat text-sm opacity-90">Upload your photo here</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Artist Statement */}
          <div className="mb-20">
            <Card className="shadow-tropical">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold font-montserrat text-primary mb-6 text-center">
                  Artist Statement
                </h2>
                <div className="prose prose-lg max-w-none font-montserrat text-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    My art is a celebration of Hawaii's extraordinary natural beauty and the profound 
                    sense of peace that these islands bring to the soul. Having lived here for over 
                    a decade, I've witnessed countless sunrises and sunsets that paint the sky in 
                    colors I never imagined possible. These moments of pure magic are what I strive 
                    to capture in my paintings.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Working primarily in acrylics and oils, I focus on the interplay of light and 
                    color that makes Hawaii so unique. Whether it's the golden hour illuminating 
                    palm fronds, the deep blues of the Pacific meeting volcanic shores, or the 
                    vibrant tropical flora that blooms year-round, each piece begins with a moment 
                    of wonder experienced firsthand.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    I believe art has the power to transport viewers to a place of serenity and 
                    connection with nature. My hope is that each painting serves as a window to 
                    Hawaii's paradise, bringing the islands' peaceful energy into homes and hearts 
                    around the world.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Biography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <Card className="shadow-tropical">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-montserrat text-primary mb-6">
                  My Journey
                </h3>
                <div className="space-y-4 font-montserrat text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Early Beginnings</h4>
                    <p className="text-sm leading-relaxed">
                      Born and raised on the mainland, I discovered my passion for art during 
                      childhood. My first visit to Hawaii at age 25 changed everything - I knew 
                      I had found my artistic inspiration and spiritual home.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Island Life</h4>
                    <p className="text-sm leading-relaxed">
                      After moving to Hawaii in 2012, I immersed myself in the local art community 
                      and began developing my signature style that blends traditional landscape 
                      techniques with the unique luminosity of tropical light.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Today</h4>
                    <p className="text-sm leading-relaxed">
                      My studio overlooks the ocean, where I paint daily, inspired by the 
                      ever-changing moods of the sea and sky. I continue to explore new ways 
                      to capture Hawaii's essence on canvas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-tropical">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-montserrat text-primary mb-6">
                  Achievements & Recognition
                </h3>
                <div className="space-y-4 font-montserrat text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Exhibitions</h4>
                    <ul className="text-sm space-y-1 leading-relaxed">
                      <li>• Honolulu Museum of Art - Group Show (2023)</li>
                      <li>• Maui Arts & Cultural Center - Solo Exhibition (2022)</li>
                      <li>• Kauai Gallery Walk - Featured Artist (2021)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Awards</h4>
                    <ul className="text-sm space-y-1 leading-relaxed">
                      <li>• Hawaii Art Society - Excellence Award (2023)</li>
                      <li>• Pacific Rim Artists - Best Landscape (2022)</li>
                      <li>• Island Arts Festival - People's Choice (2021)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Collections</h4>
                    <p className="text-sm leading-relaxed">
                      My work is held in private collections across Hawaii, the mainland US, 
                      Japan, and Europe, bringing the spirit of aloha to art lovers worldwide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-muted rounded-2xl py-16 px-8">
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-muted-foreground font-montserrat mb-8 max-w-2xl mx-auto">
              Whether you're interested in commissioning a custom piece or have questions about 
              my existing work, I'd love to connect and share the beauty of Hawaii through art.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 py-3 shadow-tropical"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;