
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
    answer: "Our jewelry is crafted using only the finest materials, including 18k gold, platinum, and ethically sourced diamonds and gemstones. Each piece undergoes rigorous quality control to ensure exceptional craftsmanship."
  },
  {
    question: "Do you offer customization options?",
    answer: "Yes, we offer customization services to create bespoke pieces tailored to your preferences. Our team of expert designers can work with you to create the perfect piece that reflects your personal style."
  },
  {
    question: "How do I care for my luxury jewelry?",
    answer: "We recommend cleaning your jewelry with a soft cloth and mild soap. Store pieces separately to prevent scratches, and avoid exposure to harsh chemicals, perfumes, and excessive moisture. Professional cleaning is recommended annually."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unworn items in their original packaging. Custom pieces are non-returnable. Please contact our customer service team for specific details regarding returns and exchanges."
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
          <a href="#contact" className="btn-outline inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
