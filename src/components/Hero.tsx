
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-luxury-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.5)"
          }}
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="luxury-container relative z-10 mt-20 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Timeless <span className="text-luxury-maroon">Elegance</span> For The Modern Individual
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-md">
              Discover Thefidah's curated collection of handcrafted luxury jewelry that elevates your personal style with sophistication and grace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/products" className="btn-primary flex items-center gap-2">
                Explore Collection <ArrowRight size={18} />
              </a>
              <a 
            href="https://wa.me/+212676101074"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-outline text-white"
          >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-luxury-maroon/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-gradient-to-br from-luxury-black to-luxury-charcoal p-1 rounded-lg shadow-xl">
              <img 
                src="\necklace.png" 
                alt="Luxury Jewelry Showcase" 
                className="rounded-lg transform rotate-2"
              />
            </div>
            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-luxury-maroon/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2">Scroll to discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-maroon to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
