
const BrandStory = () => {
  return (
    <section id="about" className="py-20 bg-luxury-cream">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-40 h-40 border border-luxury-gold"></div>
            <div className="relative z-10">
              <img
                src="/logo12.png"
                alt="alfidah craftsmanship"
                className="w-full object-cover h-[500px]"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border border-luxury-gold"></div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-black mb-6">
              Our <span className="text-luxury-gold">Story</span>
            </h2>
            
            <div className="w-16 h-[2px] bg-luxury-gold mb-8"></div>
            
            <p className="text-luxury-charcoal mb-6 leading-relaxed">
              Born from a passion for exceptional craftsmanship and timeless design, 
              alfidah creates accessories that transcend trends and become cherished 
              heirlooms. Each piece in our collection reflects our commitment to 
              quality and artistry.
            </p>
            
            <p className="text-luxury-charcoal mb-8 leading-relaxed">
              We believe luxury lies in the details—meticulous stitching, premium materials, 
              and thoughtful functionality. Our artisans bring decades of expertise to every 
              creation, ensuring that when you choose alfidah, you're choosing exceptional 
              quality that stands the test of time.
            </p>
            
            <div className="flex gap-6 items-center">
              
              <div className="w-[1px] h-16 bg-luxury-gold/30"></div>
              
              <div className="text-center">
                <h3 className="text-luxury-maroon text-4xl font-playfair font-bold">100%</h3>
                <p className="text-luxury-charcoal text-sm">Handcrafted</p>
              </div>
              
              <div className="w-[1px] h-16 bg-luxury-gold/30"></div>
              
              <div className="text-center">
                <h3 className="text-luxury-maroon text-4xl font-playfair font-bold">100%</h3>
                <p className="text-luxury-charcoal text-sm">Morrocan Brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
