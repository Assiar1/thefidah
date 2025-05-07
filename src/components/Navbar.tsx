
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-luxury-black/95 backdrop-blur-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="luxury-container flex items-center justify-between">
      <Link to="/" className="flex items-center h-14 md:h-20">
        <img
          src="/logo.png"
          alt="Alfidah Logo"
          className="h-full w-auto max-h-full object-contain"
        />
      </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/#collection" className="nav-link text-white">
            Collection
          </Link>
          <Link to="/products" className="nav-link text-white">
            Products
          </Link>
          <Link to="/#about" className="nav-link text-white">
            About
          </Link>
          <Link to="/#gallery" className="nav-link text-white">
            Gallery
          </Link>
          <Link to="/#contact" className="nav-link text-white">
            Contact
          </Link>
          <Link
            to="/products"
            className="flex items-center gap-2 text-luxury-maroon hover:text-luxury-maroon/80 transition-colors"
          >
            <ShoppingBag size={20} />
            <span>Shop Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-luxury-black/95 backdrop-blur-lg absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/#collection"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white py-2 border-b border-gray-800"
            >
              Collection
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white py-2 border-b border-gray-800"
            >
              Products
            </Link>
            <Link
              to="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white py-2 border-b border-gray-800"
            >
              About
            </Link>
            <Link
              to="/#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white py-2 border-b border-gray-800"
            >
              Gallery
            </Link>
            <Link
              to="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white py-2 border-b border-gray-800"
            >
              Contact
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-luxury-maroon py-2 flex items-center gap-2"
            >
              <ShoppingBag size={20} />
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
