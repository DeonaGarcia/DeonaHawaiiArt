import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedArt = () => {
  // Placeholder artwork data - to be replaced with actual artwork
  const featuredPieces = [
    {
      id: 1,
      title: "Tropical Sunset",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop",
      description: "Vibrant colors of a Hawaiian sunset over pristine waters"
    },
    {
      id: 2,
      title: "Island Paradise",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1000&auto=format&fit=crop",
      description: "The serene beauty of untouched island landscapes"
    },
    {
      id: 3,  
      title: "Ocean Dreams",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1000&auto=format&fit=crop",
      description: "Capturing the endless horizon where ocean meets sky"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-4">
            Featured Artwork
          </h2>
          <p className="text-lg text-muted-foreground font-montserrat max-w-2xl mx-auto">
            Discover the beauty of Hawaii through original paintings that capture 
            the essence of island life and natural wonders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPieces.map((piece) => (
            <Card key={piece.id} className="group gallery-item overflow-hidden shadow-tropical">
              <div className="relative overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
                  {piece.title}
                </h3>
                <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                  {piece.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold px-8 py-3 shadow-gold"
          >
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArt;