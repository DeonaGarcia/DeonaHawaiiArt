import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
      
    },
    {
      id: 2,
      title: "Dancing Dolphins",
      category: "Marine Life",
      image: "/lovable-uploads/8115e395-30f3-40d7-a2aa-9f3ff73fb191.png",
      description: "Playful dolphins swimming beneath golden sunset reflections",
      
    },
    {
      id: 3,
      title: "Kona Sunset",
      category: "Seascapes",
      image: "/lovable-uploads/829d8a8f-ccac-4bd0-ba55-4a11116589b6.png",
      description: "Vibrant sunset over rolling ocean waves with warm golden hues",
      
    },
    {
      id: 4,
      title: "Dolphin Daze",
      category: "Marine Life",
      image: "/lovable-uploads/fae00e6a-e4bb-40fb-9063-5995b79fdd1e.png",
      description: "Inspired bye dolphin days swims",
      
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
      
    },
    {
      id: 7,
      title: "I'iwi",
      category: "Hawaiian Birds",
      image: "/lovable-uploads/e3e3516a-2899-475a-b579-3cdc61c03c0e.png",
      description: "A vibrant red I'iwi bird soaring through blooming lehua blossoms",
      
    },
    {
      id: 8,
      title: "Honolulu Sailing",
      category: "Seascapes",
      image: "/lovable-uploads/9d03870c-0915-4082-aa64-8092fe0fc72b.png",
      description: "Magical sailing experience at sunset as full moon appeared",
      
    },
    {
      id: 9,
      title: "Kealakekua Bay",
      category: "Seascapes",
      image: "/lovable-uploads/90985669-cf2a-43a9-a033-dc802cf4441a.png",
      description: "Dramatic cliffs and swirling turquoise waters of historic Kealakekua Bay",
      
    },
    {
      id: 10,
      title: "Ho'okena Beach",
      category: "Marine Life",
      image: "/lovable-uploads/c686a92f-908c-453c-a9e8-026ba5700ff8.png",
      description: "Underwater  showing a sea turtle swimming above  coral reef with South Kona coastline",
      
    },
    {
      id: 11,
      title: "Beautiful Day",
      category: "Marine Life",
      image: "/lovable-uploads/5293744a-4cab-4627-8186-2374c4976ba2.png",
      description: "Crystal clear waters revealing coral reefs beneath blue skies",
      
    },
    {
      id: 12,
      title: "Palila Bird",
      category: "Hawaiian Birds",
      image: "/lovable-uploads/91277f99-eb12-48a7-ae5d-ac1d24c1e83b.png",
      description: "Endangered Palila birds among native māmane flowers in Hawaii's mountain forest",
      
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
                  <AspectRatio ratio={16/12} className="w-full">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </AspectRatio>
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

          {/* Coming Soon Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold font-montserrat text-primary text-center mb-12">
              More Work Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((placeholder) => (
                <Card key={`placeholder-${placeholder}`} className="group gallery-item overflow-hidden shadow-tropical opacity-60">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16/12} className="w-full">
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-muted-foreground/20 rounded-full flex items-center justify-center">
                            <svg 
                              className="w-8 h-8 text-muted-foreground" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                          <p className="text-sm font-montserrat text-muted-foreground">
                            Coming Soon
                          </p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="h-5 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                      <div className="h-3 bg-muted rounded w-1/2 animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
