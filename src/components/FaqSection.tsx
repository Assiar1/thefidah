
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What materials are used in your jewelry?",
    answer: "Our jewelry is crafted with high-quality materials, with a special focus on authenticity and Moroccan craftsmanship. The fidah (silver pieces) are made from genuine Moroccan silver, composed of 92.5% pure silver—also known as sterling silver. This ensures durability, shine, and a timeless look."
  },
  {
    question: "Do you offer customization options?",
    answer: "Yes, we do! We’re happy to offer customization options to make your piece truly unique. Whether it’s a personalized engraving, a specific size, or a custom design idea, we’ll work with you to create something special that reflects your style."
  },
  {
    question: "How do I care for my luxury jewelry?",
    answer: "To care for your luxury jewelry, store it in a dry, soft pouch and avoid contact with water, perfumes, or harsh chemicals. Gently polish it with a soft cloth to maintain its shine and beauty over time."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 20-day return policy for items that don’t meet your expectations or if there is a manufacturing defect. Simply contact us within this period, and we’ll assist you with the return process."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with insured and tracked delivery options. International shipping times vary depending on the destination. Please note that customs duties and taxes may apply based on your country's regulations."
  }
];

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="py-20 bg-luxury-cream">
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-black mb-4">
            Frequently Asked <span className="text-luxury-maroon">Questions</span>
          </h2>
          <div className="w-24 h-[1px] bg-luxury-maroon mx-auto mb-8"></div>
          <p className="text-luxury-black/70 max-w-2xl mx-auto">
            Find answers to common questions about our jewelry, services, and policies.
            If you need further assistance, please don't hesitate to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <Collapsible
              key={index}
              open={openItems[index]}
              onOpenChange={() => toggleItem(index)}
              className="mb-4 border-b border-luxury-black/10 pb-4 last:border-0"
            >
              <CollapsibleTrigger className="flex w-full justify-between items-center text-left">
                <h3 className="text-xl font-medium text-luxury-black">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`text-luxury-maroon transition-transform duration-300 ${
                    openItems[index] ? "rotate-180" : ""
                  }`} 
                  size={20} 
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 text-luxury-black/70">
                <p>{item.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-luxury-black/70 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="https://wa.me/+212676101074"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-outline inline-block"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
