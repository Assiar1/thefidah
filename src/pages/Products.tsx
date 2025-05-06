
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { GemIcon, CircleIcon, DiamondIcon, TagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  image: string;
  description: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Categories
  const categories: Category[] = [
    {
      id: 'necklaces',
      name: 'Necklaces',
      icon: <GemIcon size={24} />,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant necklaces crafted from the finest materials',
    },
    {
      id: 'rings',
      name: 'Rings',
      icon: <CircleIcon size={24} />,
      image: 'https://images.unsplash.com/photo-1586104202915-3ea40b71571e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Timeless rings for any occasion',
    },
    {
      id: 'earrings',
      name: 'Earrings',
      icon: <DiamondIcon size={24} />,
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Statement earrings that capture the light',
    },
    {
      id: 'bracelets',
      name: 'Bracelets',
      icon: <TagIcon size={24} />,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sophisticated bracelets for the modern woman',
    },
  ];

  // Products
  const products: Product[] = [
    {
      id: 1,
      name: 'Royal Pendant',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,250',
      description: 'Handcrafted gold pendant with diamond accents'
    },
    {
      id: 2,
      name: 'Eternal Band',
      category: 'rings',
      image: 'https://images.unsplash.com/photo-1586104202915-3ea40b71571e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$980',
      description: 'Timeless gold band with intricate detailing'
    },
    {
      id: 3,
      name: 'Crystal Drops',
      category: 'earrings',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$750',
      description: 'Elegant drop earrings with crystal accents'
    },
    {
      id: 4,
      name: 'Regal Cuff',
      category: 'bracelets',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$890',
      description: 'Statement cuff bracelet in polished gold'
    },
    {
      id: 5,
      name: 'Midnight Chain',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,100',
      description: 'Bold gold chain with a contemporary feel'
    },
    {
      id: 6,
      name: 'Heirloom Diamond',
      category: 'rings',
      image: 'https://images.unsplash.com/photo-1598560502225-a754f1f93c05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$2,450',
      description: 'Classic solitaire with a brilliant-cut diamond'
    },
    {
      id: 7,
      name: 'Cascade Hoops',
      category: 'earrings',
      image: 'https://images.unsplash.com/photo-1574347366999-08d77e29b0e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$680',
      description: 'Oversized hoops with textured finish'
    },
    {
      id: 8,
      name: 'Infinity Link',
      category: 'bracelets',
      image: 'https://images.unsplash.com/photo-1611591437296-f12c07fb47f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$920',
      description: 'Delicate link bracelet with infinity charm'
    },
  ];

  // Filter products by category
  const filteredProducts = activeCategory 
    ? products.filter(product => product.category === activeCategory) 
    : products;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <div className="pt-28 pb-16 bg-luxury-black">
        <div className="luxury-container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-luxury-maroon">Jewelry</span> Collection
          </h1>
          <div className="w-24 h-[1px] bg-luxury-maroon mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover our exquisite jewelry pieces, each crafted with precision and passion.
            Browse by category or explore our entire collection.
          </p>
        </div>
      </div>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="luxury-container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="group category-card cursor-pointer" 
                onClick={() => setActiveCategory(category.id)}
              >
                <img src={category.image} alt={category.name} />
                <div className="content">
                  <div className="flex items-center gap-2 text-luxury-maroon mb-2">
                    {category.icon}
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {activeCategory && (
            <div className="mt-8 text-center">
              <button 
                onClick={() => setActiveCategory(null)}
                className="px-4 py-2 text-luxury-maroon border border-luxury-maroon rounded hover:bg-luxury-maroon hover:text-white transition-colors"
              >
                View All Categories
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-16">
        <div className="luxury-container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {activeCategory 
              ? `${categories.find(c => c.id === activeCategory)?.name} Collection`
              : 'Featured Pieces'
            }
          </h2>
          <div className="w-24 h-[1px] bg-luxury-maroon mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group overflow-hidden">
                <div className="product-card h-full bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover" 
                  />
                  <div className="overlay">
                    <span className="text-luxury-maroon text-sm tracking-wider mb-2">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-1">{product.name}</h3>
                    <p className="text-white/80 text-sm mb-2">{product.description}</p>
                    <p className="text-luxury-maroon font-bold">{product.price}</p>
                    <a 
                      href="#contact" 
                      className="mt-2 inline-block text-sm text-white bg-luxury-maroon px-4 py-2 rounded hover:bg-luxury-maroon/90 transition-colors"
                    >
                      Inquire Now
                    </a>
                  </div>
                  <div className="p-4 relative z-0">
                    <h3 className="font-bold text-luxury-black">{product.name}</h3>
                    <p className="text-luxury-maroon font-medium mt-1">{product.price}</p>
                    <Link 
                      to="#contact" 
                      className="mt-4 inline-block text-sm text-luxury-maroon border-b border-luxury-maroon hover:text-luxury-black hover:border-luxury-black transition-colors"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="luxury-container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/70">
            Our collection is crafted for those who appreciate the finest things in life.
            Contact us to arrange a viewing or discuss custom pieces.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
