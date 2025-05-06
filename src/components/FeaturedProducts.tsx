
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Royal Pendant",
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$1,250",
    description: "Handcrafted gold pendant with diamond accents"
  },
  {
    id: 6,
    name: "Heirloom Diamond",
    category: "rings",
    image: "https://images.unsplash.com/photo-1598560502225-a754f1f93c05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$2,450",
    description: "Classic solitaire with a brilliant-cut diamond"
  },
  {
    id: 3,
    name: "Crystal Drops",
    category: "earrings",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$750",
    description: "Elegant drop earrings with crystal accents"
  },
  {
    id: 8,
    name: "Infinity Link",
    category: "bracelets",
    image: "https://images.unsplash.com/photo-1611591437296-f12c07fb47f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$920",
    description: "Delicate link bracelet with infinity charm"
  }
];

const FeaturedProducts = () => {
  return (
    <section id="featured-products" className="py-20 bg-white">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-black mb-4">
            Featured <span className="text-luxury-maroon">Pieces</span>
          </h2>
          <div className="w-24 h-[1px] bg-luxury-maroon mx-auto mb-8"></div>
          <p className="text-luxury-black/70 max-w-2xl mx-auto">
            Explore our carefully selected pieces, showcasing the finest craftsmanship and timeless design.
            Each piece tells a unique story of elegance and sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group overflow-hidden">
              <div className="product-card h-full bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover" 
                />
                <div className="overlay">
                  <span className="text-luxury-maroon text-sm tracking-wider mb-2">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-white/80 text-sm mb-2">{product.description}</p>
                  <p className="text-luxury-maroon font-bold">{product.price}</p>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-luxury-black">{product.name}</h3>
                  <p className="text-luxury-maroon font-medium mt-1">{product.price}</p>
                  <a 
                    href="#contact" 
                    className="mt-4 inline-block text-sm text-luxury-maroon border-b border-luxury-maroon hover:text-luxury-black hover:border-luxury-black transition-colors"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary flex items-center gap-2 inline-flex">
            View All Collection <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
