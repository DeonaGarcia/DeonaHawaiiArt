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
          
          {/* Collage Hero Section */}
          <div className="relative mb-20">
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-primary mb-12 text-center">
              About Deona
            </h1>
            
            {/* Main Collage Grid */}
            <div className="grid grid-cols-12 gap-6 h-[800px]">
              
              {/* Left Column - Ocean Inspiration */}
              <div className="col-span-12 md:col-span-5 relative">
                <Card className="h-full overflow-hidden shadow-elegant group">
                  <div className="relative h-full">
                    <img 
                      src="/lovable-uploads/f22d29c1-055e-4e2f-93e2-c1a245e4190f.png" 
                      alt="Ocean inspiration - underwater scene" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold font-montserrat mb-3">Ocean Inspiration</h3>
                      <p className="font-montserrat text-white/90 leading-relaxed">
                        "My creative practice is inspired by long morning swims of underwater beauty, 
                        diverse beaches and the coastlines."
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column - Split into two sections */}
              <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                
                {/* Top Right - Artist Statement */}
                <Card className="flex-1 shadow-tropical">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
                      Art Statement
                    </h2>
                    <p className="text-lg font-montserrat text-foreground leading-relaxed mb-4">
                      As a multidisciplinary painter and mixed media artist of Hawaii, my passion lies in the creation of 
                      <span className="font-semibold text-primary"> vibrant and expressive artworks</span> that capture the beauty of the 
                      islands and their culture.
                    </p>
                    <p className="text-lg font-montserrat text-foreground leading-relaxed">
                      I paint colorful landscapes, dramatic erupting volcanoes and impressionistic seascapes inspired by the 
                      diversity of the islands and my love for them. I hope to communicate the tremendous beauty and culture of 
                      Hawaii to my audience, inviting people to <span className="font-semibold text-secondary">discover, appreciate, and celebrate</span> this unique place through my artistic lens.
                    </p>
                  </CardContent>
                </Card>

                {/* Bottom Right - Split between Artistic Process and Abstract Element */}
                <div className="flex gap-6 flex-1">
                  
                  {/* Artist at Work */}
                  <Card className="flex-1 overflow-hidden shadow-elegant group">
                    <div className="relative h-full">
                      <img 
                        src="/lovable-uploads/f3496b5e-41fd-4ac5-a673-dfe0dd815580.png" 
                        alt="Artist at work in studio" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="text-lg font-semibold font-montserrat mb-2">In the Studio</h4>
                        <p className="text-sm font-montserrat text-white/90">
                          Creating vibrant island-inspired artwork
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Abstract Artistic Element */}
                  <Card className="flex-1 overflow-hidden shadow-elegant">
                    <div className="relative h-full">
                      <img 
                        src="/lovable-uploads/c8c06967-eef4-4644-a10a-f4ef3f1c8aee.png" 
                        alt="Artistic expression" 
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Section */}
          <div className="mb-20">
            <Card className="shadow-tropical">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold font-montserrat text-primary mb-8 text-center">
                  My Journey
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat text-secondary mb-4">
                      Island Roots & Growth
                    </h3>
                    <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                      Deona Garcia is an artist residing on the Big Island of Hawaii. The artist came to the islands as a creative teen, 
                      raised a family on Kauai before relocating to the Big Island. Leaving the islands for a season gave Deona the 
                      opportunity to attend art school and return to Kona with an education and a love for expressing the beauty of the 
                      islands in vivid color.
                    </p>
                    <p className="text-muted-foreground font-montserrat leading-relaxed">
                      Deona is a contemporary multidisciplinary painter competent in all mediums, mixed media and collage, 
                      focusing more on oil paintings.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat text-secondary mb-4">
                      Artistic Vision
                    </h3>
                    <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                      Deona's artwork is a vibrant celebration of the islands and the ocean that surrounds them. 
                      The artist's creative practice is inspired by long morning swims of underwater beauty, diverse beaches and the coastlines.
                    </p>
                    <p className="text-muted-foreground font-montserrat leading-relaxed">
                      Deona's art has sold and is in private collections in Hawaii and on the mainland, bringing the spirit of the islands 
                      to art lovers across the country.
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
              Whether you're interested in commissioning a custom piece that captures your connection to Hawaii or have questions about 
              my existing work, I'd love to connect and share the beauty of the islands through art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold px-8 py-3 shadow-gold"
              >
                <Link to="/gallery">View My Gallery</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="font-montserrat font-semibold hover:bg-primary hover:text-primary-foreground"
              >
                <a href="#contact">Commission Art</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;