import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left hover-elevate active-elevate-2 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-md"
        data-testid={`button-faq-${question.slice(0, 20)}`}
      >
        <span className="text-base sm:text-lg font-medium text-foreground pr-6 sm:pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 sm:pb-6 px-3 sm:px-4 -mx-3 sm:-mx-4">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
