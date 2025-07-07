import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Updated artwork data with your actual paintings
  const artworks = [
    {
      id: 1,
      title: "Volcanic Paradise",
      category: "Landscapes",
      image: "/lovable-uploads/a1cb556f-d77b-4b65-afdd-5aab992bee8b.png",
      description: "A dramatic volcanic landscape with turquoise waters and lush tropical scenery",
      year: "2024"
    },
    {
      id: 2,
      title: "Dancing Dolphins",
      category: "Marine Life",
      image: "/lovable-uploads/8115e395-30f3-40d7-a2aa-9f3ff73fb191.png",
      description: "Playful dolphins swimming beneath golden sunset reflections",
      year: "2024"
    },
    {
      id: 3,
      title: "Kona Sunset",
      category: "Seascapes",
      image: "/lovable-uploads/829d8a8f-ccac-4bd0-ba55-4a11116589b6.png",
      description: "Vibrant sunset over rolling ocean waves with warm golden hues",
      year: "2024"
    },
    {
      id: 4,
      title: "Dolphin Daze",
      category: "Marine Life",
      image: "/lovable-uploads/fae00e6a-e4bb-40fb-9063-5995b79fdd1e.png",
      description: "Inspired bye dolphin days swims",
      year: "2024"
    },
    {
      id: 5,
      title: "Kahalu'u Beach Park",
      category: "Marine Life",
      image: "/lovable-uploads/0429c256-760f-4e42-8811-403fbd9ac2b6.png",
      description: "A peaceful sea turtle swimming through crystal clear Hawaiian waters",
      year: "2024"
    },
    {
      id: 6,
      title: "Mau'umae Beach",
      category: "Seascapes",
      image: "/lovable-uploads/074df5df-41ce-4bb6-92c2-ac788500be8a.png",
      description: "A beautiful beach in South Kohala on the Big Island",
      year: "2024"
    },
    {
      id: 7,
      title: "I'iwi",
      category: "Hawaiian Birds",
      image: "/lovable-uploads/e3e3516a-2899-475a-b579-3cdc61c03c0e.png",
      description: "A vibrant red I'iwi bird soaring through blooming lehua blossoms",
      year: "2024"
    },
    {
      id: 8,
      title: "Honolulu Sailing",
      category: "Seascapes",
      image: "/lovable-uploads/9d03870c-0915-4082-aa64-8092fe0fc72b.png",
      description: "Sailboat gliding through azure waters with Honolulu skyline and dramatic mountain backdrop",
      year: "2024"
    },
    {
      id: 9,
      title: "Kealakekua Bay",
      category: "Seascapes",
      image: "/lovable-uploads/90985669-cf2a-43a9-a033-dc802cf4441a.png",
      description: "Dramatic cliffs and swirling turquoise waters of historic Kealakekua Bay",
      year: "2024"
    },
    {
      id: 10,
      title: "Tropical Blooms",
      category: "Florals",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1000&auto=format&fit=crop",
      description: "Vibrant tropical flowers in full bloom",
      year: "2024"
    },
    {
      id: 11,
      title: "Forest Light",
      category: "Landscapes",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
      description: "Sunlight filtering through dense tropical foliage",
      year: "2023"
    },
    {
      id: 12,
      title: "Sunset Reflection",
      category: "Seascapes", 
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000&auto=format&fit=crop",
      description: "Perfect reflection of sunset colors on calm waters",
      year: "2024"
    }
  ];

  const categories = ["All", "Landscapes", "Seascapes", "Marine Life", "Hawaiian Birds", "Florals"];

  const filteredArtworks = selectedCategory === "All" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-4">
              Art Gallery
            </h1>
            <p className="text-lg text-muted-foreground font-montserrat max-w-2xl mx-auto">
              Explore my collection of original paintings inspired by the natural beauty of Hawaii. 
              Each piece captures a unique moment in island paradise.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`font-montserrat font-medium ${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <Card key={artwork.id} className="group gallery-item overflow-hidden shadow-tropical">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  {/* Overlay with info */}
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-t from-black/70 to-transparent w-full p-6">
                      <h3 className="text-xl font-semibold font-montserrat text-white mb-1">
                        {artwork.title}
                      </h3>
                       <p className="text-white/90 font-montserrat text-sm">
                         {artwork.category}
                       </p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
                    {artwork.title}
                  </h3>
                   <p className="text-sm text-muted-foreground font-montserrat mb-2">
                     {artwork.category}
                   </p>
                  <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                    {artwork.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-montserrat text-lg">
                No artworks found in this category.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-20 py-16 bg-muted rounded-2xl">
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
              Interested in a Commission?
            </h2>
            <p className="text-muted-foreground font-montserrat mb-8 max-w-2xl mx-auto">
              I create custom pieces that capture your personal connection to Hawaii. 
              Let's discuss bringing your vision to life.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold px-8 py-3 shadow-gold"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
