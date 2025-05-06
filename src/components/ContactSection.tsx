import { Mail, Phone, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="h-full py-12 bg-luxury-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-5 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-5 w-40 h-40 bg-luxury-gold/10 rounded-full blur-2xl"></div>
      
      <div className="px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-luxury-black mb-3">
            Connect <span className="text-luxury-maroon">With Us</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-4"></div>
          <p className="text-luxury-charcoal/80 text-sm max-w-xl mx-auto">
            Reach out to discuss your preferences and place an order. We offer personalized service to ensure you find the perfect piece.
          </p>
        </div>

        <div className="space-y-4">
          {/* WhatsApp Contact */}
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow rounded-lg flex items-center">
            <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mr-4">
              <MessageSquare size={20} className="text-luxury-maroon" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-luxury-black mb-1">WhatsApp</h3>
              <a 
                href="https://wa.me/+212676101074" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-maroon hover:text-luxury-black transition-colors font-medium text-sm"
              >
                +212 676101074
              </a>
            </div>
          </div>
          
          {/* Email Contact */}
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow rounded-lg flex items-center">
            <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mr-4">
              <Mail size={20} className="text-luxury-maroon" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-luxury-black mb-1">Email Us</h3>
              <a 
                href="mailto:contact@alfidah.com" 
                className="text-luxury-maroon hover:text-luxury-black transition-colors font-medium text-sm"
              >
                fidahcontact@gmail.com
              </a>
            </div>
          </div>
          
          {/* Phone Contact */}
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow rounded-lg flex items-center">
            <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mr-4">
              <Phone size={20} className="text-luxury-maroon" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-luxury-black mb-1">Call Us</h3>
              <a 
                href="tel:+212676101074" 
                className="text-luxury-maroon hover:text-luxury-black transition-colors font-medium text-sm"
              >
                +212 676101074
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-luxury-charcoal/80 text-sm mb-3">
            Follow us on social media
          </p>
          <div className="flex justify-center gap-3">
            <a 
              href="https://www.instagram.com/thefidah/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-luxury-gold/10 hover:bg-luxury-gold/20 flex items-center justify-center transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4 text-luxury-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
