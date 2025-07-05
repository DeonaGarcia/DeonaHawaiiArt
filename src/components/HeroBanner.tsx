import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBannerImage from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with artwork banner */}
      <div 
        className="absolute inset-0 bg-gradient-hero bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroBannerImage}')`,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold font-montserrat hero-text mb-6">
          Deona Hawaii Art
        </h1>
        
        <p className="text-xl md:text-2xl font-montserrat italic hero-text mb-8 font-light">
          Original art inspired by the islands
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold px-8 py-3 text-lg shadow-gold"
          >
            <Link to="/gallery">View Gallery</Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-montserrat font-semibold px-8 py-3 text-lg"
          >
            <Link to="/about">About the Artist</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;