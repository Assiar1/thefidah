import { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Loyal Customer", 
    quote: "The craftsmanship of alfidah's jewelry is exceptional. My necklace has become an heirloom piece that I'll cherish forever.",
    image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Robert Williams",
    role: "Collector",
    quote: "I've purchased several pieces from alfidah's luxury collection. Each one is unique and made with the finest materials and attention to detail.",
    image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Sophia Garcia",
    role: "Fashion Enthusiast",
    quote: "The rings from alfidah are simply stunning. The elegant design combined with impeccable quality makes them stand out from other jewelry brands.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Gift Buyer",
    quote: "I purchased a bracelet as an anniversary gift, and my wife absolutely loves it. The personal touch and luxurious packaging made the experience even more special.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const TestimonialsCarousel = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-luxury-black">
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Customer <span className="text-luxury-maroon">Testimonials</span>
          </h2>
          <div className="w-24 h-[1px] bg-luxury-maroon mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience with alfidah's luxury jewelry collection.
          </p>
        </div>

        <Carousel 
          className="mx-auto"
          opts={{ 
            align: "start",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                <div className="bg-luxury-charcoal p-8 rounded-lg shadow-xl h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-luxury-maroon">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <blockquote className="text-white/90 text-lg italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-luxury-maroon">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
