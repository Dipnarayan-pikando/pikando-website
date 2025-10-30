import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  variant?: "hero" | "banner";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Pikando launches in your area.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  if (variant === "banner") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4 sm:px-0">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 sm:h-14 text-sm sm:text-base"
          data-testid="input-email-banner"
        />
        <Button 
          type="submit" 
          size="lg"
          className="h-12 sm:h-14 px-6 sm:px-8 bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover-elevate active-elevate-2 whitespace-nowrap"
          disabled={isSubmitting}
          data-testid="button-submit-banner"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-12 sm:h-14 text-sm sm:text-base"
        data-testid="input-email-hero"
      />
      <Button 
        type="submit" 
        size="lg"
        className="h-12 sm:h-14 px-6 sm:px-8 bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover-elevate active-elevate-2 whitespace-nowrap"
        disabled={isSubmitting}
        data-testid="button-submit-hero"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}
