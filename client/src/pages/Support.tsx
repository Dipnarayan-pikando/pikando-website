import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:support@pikando.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email app will open with your message.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
            Need help or have a question? We're here.
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            <div className="p-5 sm:p-6 bg-card rounded-lg border border-card-border">
              <h3 className="text-sm font-semibold text-foreground mb-2">Email</h3>
              <a 
                href="mailto:support@pikando.com" 
                className="text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md inline-block break-all"
                data-testid="link-support-email"
              >
                support@pikando.com
              </a>
            </div>
            
            <div className="p-5 sm:p-6 bg-card rounded-lg border border-card-border">
              <h3 className="text-sm font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Within 2 business days</p>
            </div>
            
            <div className="p-5 sm:p-6 bg-card rounded-lg border border-card-border sm:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Mon–Fri, 10 AM–6 PM IST</p>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-card-border p-5 sm:p-6 lg:p-8 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-5 sm:mb-6">Contact Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 text-base"
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-14 text-base"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-14 text-base"
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] text-base resize-none"
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="h-14 px-8 bg-primary text-primary-foreground font-semibold hover-elevate active-elevate-2"
                data-testid="button-submit-form"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">Frequently Asked Questions</h2>
            
            <div className="bg-card rounded-lg border border-card-border p-5 sm:p-6 lg:p-8">
              <FAQItem
                question="When will the app launch?"
                answer="We're rolling out city by city, starting with Bengaluru. Join our waitlist to be notified when we launch in your area."
              />
              <FAQItem
                question="How does verification work?"
                answer="Workers complete KYC (Know Your Customer) verification before they can take tasks. This includes ID verification and background checks to ensure safety and trust."
              />
              <FAQItem
                question="Is Pikando an employer?"
                answer="No, Pikando is a platform connecting people who post tasks with independent workers who complete them. We facilitate the connection but don't employ the workers."
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
