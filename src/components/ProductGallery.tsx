
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "The Sovereign Collection",
    description: "Handcrafted gold necklaces with precious gems",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Necklaces"
  },
  {
    id: 2,
    name: "Royal Essence",
    description: "Elegant diamond rings for special occasions",
    image: "https://images.unsplash.com/photo-1598560502225-a754f1f93c05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Rings"
  },
  {
    id: 3,
    name: "Luminary Collection",
    description: "Minimalist earrings with a contemporary edge",
    image: "https://images.unsplash.com/photo-1574347366999-08d77e29b0e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Earrings"
  },
  {
    id: 4,
    name: "Heritage Series",
    description: "Sophisticated bracelets with timeless design",
    image: "https://images.unsplash.com/photo-1611591437296-f12c07fb47f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bracelets"
  }
];

const ProductGallery = () => {
  return (
    <section id="gallery" className="py-20 bg-luxury-black">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-luxury-maroon">Collection</span>
          </h2>
          <div className="w-24 h-[1px] bg-luxury-maroon mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover the perfect blend of tradition and innovation in our curated selection of luxury jewelry,
            each piece a testament to exceptional craftsmanship and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="overlay">
                <span className="text-luxury-maroon text-sm tracking-wider mb-2">
                  {product.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {product.name}
                </h3>
                <p className="text-white/80 mb-4">{product.description}</p>
                <a
                  href="#contact"
                  className="inline-block border-b border-luxury-maroon text-luxury-maroon pb-1 text-sm hover:text-white hover:border-white transition-colors"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/products" className="btn-outline inline-block">
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
