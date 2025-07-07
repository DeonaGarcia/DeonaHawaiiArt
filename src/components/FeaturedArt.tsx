import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const FeaturedArt = () => {
  // Featured artwork collection
  const featuredPieces = [
    {
      id: 1,
      title: "Volcanic Paradise",
      image: "/lovable-uploads/146a89bd-697e-4685-b6f0-4bed0bd10790.png",
      description: "A dramatic volcanic landscape with turquoise waters and wildlife"
    },
    {
      id: 2,
      title: "Dancing Dolphins",
      image: "/lovable-uploads/8115e395-30f3-40d7-a2aa-9f3ff73fb191.png",
      description: "Playful dolphins swimming beneath golden sunset reflections"
    },
    {
      id: 3,
      title: "Turtle's Journey",
      image: "/lovable-uploads/0d1482f8-85ed-41b2-a173-62215d4484df.png",
      description: "A peaceful sea turtle gliding through vibrant Hawaiian waters"
    }
  ];
  return <section className="py-20 bg-background">
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
          {featuredPieces.map(piece => <Card key={piece.id} className="group gallery-item overflow-hidden shadow-tropical">
              <div className="relative overflow-hidden">
                <img src={piece.image} alt={piece.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 bg-slate-200">
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
                  {piece.title}
                </h3>
                <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                  {piece.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold px-8 py-3 shadow-gold">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default FeaturedArt;