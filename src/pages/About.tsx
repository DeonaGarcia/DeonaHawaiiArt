import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-primary mb-8">
              About Deona
            </h1>
          </div>

          {/* Complete Art Statement - Featured at top */}
          <div className="mb-20">
            <Card className="shadow-tropical">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold font-montserrat text-primary mb-8 text-center">
              </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg font-montserrat text-foreground leading-relaxed mb-6">
                    As a multidisciplinary painter and mixed media artist of Hawaii, my passion lies in the creation of 
                    <span className="font-semibold text-primary"> vibrant and expressive artworks</span> that capture the beauty of the 
                    islands and their culture.
                  </p>
                  <p className="text-lg font-montserrat text-foreground leading-relaxed mb-6">
                    I paint colorful landscapes, dramatic erupting volcanoes and impressionistic seascapes inspired by the 
                    diversity of the islands and my love for them. I hope to communicate the tremendous beauty and culture of 
                    Hawaii to my audience, inviting people to <span className="font-semibold text-slate-950">discover, appreciate, and celebrate</span> this unique place through my artistic lens.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ocean Inspiration - Full Photo Display */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-elegant group">
              <div className="relative aspect-[4/3]">
                <img src="/lovable-uploads/f22d29c1-055e-4e2f-93e2-c1a245e4190f.png" alt="Ocean inspiration - underwater swimming scene showing the artist's connection to marine life" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold font-montserrat mb-4">Ocean Inspiration</h3>
                  <p className="text-xl font-montserrat text-white/90 leading-relaxed max-w-3xl">"My creative practice is inspired by 
long morning swims of underwater beauty along diverse beaches and  coastlines."</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Visual Collage Section - Remaining Photos */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* Artist in Studio */}
              <Card className="overflow-hidden shadow-elegant group">
                <div className="relative aspect-[4/5]">
                  <img src="/lovable-uploads/f3496b5e-41fd-4ac5-a673-dfe0dd815580.png" alt="Artist Deona working in her studio painting a vibrant seascape" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-xl font-semibold font-montserrat mb-3">In the Studio</h4>
                    <p className="font-montserrat text-white/90 leading-relaxed">
                      Creating vibrant island-inspired artwork with passion and dedication
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Artistic Process & Vision */}
              <Card className="shadow-tropical">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold font-montserrat text-primary mb-4">
                    Artistic Vision
                  </h4>
                  <p className="font-montserrat text-muted-foreground leading-relaxed mb-4">Deona is a Contemporary multidisciplinary painter competent in all mediums, mixed media and collage, focusing on oil paintings that celebrate the islands and ocean.</p>
                  <p className="font-montserrat text-muted-foreground leading-relaxed">
                    Each piece begins with moments of wonder experienced firsthand in the natural beauty of Hawaii.
                  </p>
                </CardContent>
              </Card>
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
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold px-8 py-3 shadow-gold">
                <Link to="/gallery">View My Gallery</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-montserrat font-semibold hover:bg-primary hover:text-primary-foreground">
                <a href="#contact">Commission Art</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <ContactSection />
    </div>;
};
export default About;