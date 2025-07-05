import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBannerImage from "@/assets/hero-banner.jpg";
const HeroBanner = () => {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with your artwork */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/lovable-uploads/d67e96a6-3f5b-4a22-83a9-b3890065deb2.png')`
    }} />
      
      {/* Minimal overlay for text readability */}
      <div className="absolute inset-0 bg-black/5" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-montserrat hero-text mb-6 font-normal md:text-7xl">
          Deona Hawaii Art
        </h1>
        
        <p className="font-montserrat italic hero-text mb-8 font-light md:text-3xl text-3xl">
          Original art inspired by the beauty of the islands
        </p>
        
        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
          <Button asChild variant="cyan" size="default" className="font-montserrat font-semibold px-8 py-2 text-base shadow-gold rounded-xl">
            <Link to="/gallery" className="mx-0">View Gallery</Link>
          </Button>
          
          <Button asChild variant="cyan" size="default" className="font-montserrat font-semibold px-8 py-2 text-base shadow-gold rounded-xl">
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
    </section>;
};
export default HeroBanner;