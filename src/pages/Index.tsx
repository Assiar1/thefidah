
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandStory from "../components/BrandStory";
import FeaturedProducts from "../components/FeaturedProducts";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Navbar />
      <Hero />
      <BrandStory />
      <FeaturedProducts />
      <TestimonialsCarousel />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <FaqSection />
        </div>
        <div className="w-full md:w-1/2">
          <ContactSection />
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
