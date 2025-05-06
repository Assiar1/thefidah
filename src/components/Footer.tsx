
const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white py-12">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-6">Thefidah</h3>
            <p className="text-white/70 max-w-xs">
              Crafting timeless luxury accessories for the discerning individual who appreciates exquisite design and unparalleled quality.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-luxury-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-luxury-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-luxury-gold transition-colors">Collection</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-luxury-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+1234567890" className="text-white/70 hover:text-luxury-gold transition-colors">
                  +212 676101074
                </a>
              </li>
              <li>
                <a href="mailto:contact@alfidah.com" className="text-white/70 hover:text-luxury-gold transition-colors">
                fidahcontact@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Thefidah. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/50 hover:text-luxury-gold transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-luxury-gold transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
