import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import FeaturedArt from "@/components/FeaturedArt";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroBanner />
      <FeaturedArt />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              Deona Hawaii Art
            </h3>
            <p className="font-montserrat italic text-primary-foreground/80 mb-6">
              Original art inspired by the islands
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-montserrat"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-montserrat"
              >
                Facebook
              </a>
              <a 
                href="#contact" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-montserrat"
              >
                Contact
              </a>
            </div>
            <p className="text-primary-foreground/60 font-montserrat text-sm">
              © 2024 Deona Hawaii Art. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;