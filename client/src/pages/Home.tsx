import { Briefcase, ShieldCheck, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import ValueCard from "@/components/ValueCard";
import StepCard from "@/components/StepCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight tracking-tight">
                Get any task done, safely.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Pikando connects people who need help with verified locals who can help.
              </p>
              <WaitlistForm variant="hero" />
              <p className="text-sm text-muted-foreground mt-3 sm:mt-4">
                Launching first in Bengaluru.
              </p>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-lg flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 rounded-full bg-primary flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-foreground" />
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                    Trusted. Verified. Secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ValueCard
              icon={Briefcase}
              title="Versatile tasks"
              description="From errands and deliveries to skilled gigs—post any task and get it done."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Verified helpers"
              description="All workers are ID-verified before they can accept tasks on the platform."
            />
            <ValueCard
              icon={Lock}
              title="Secure by design"
              description="In-app chat and reviews ensure transparency and safety for everyone."
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground text-center mb-8 sm:mb-12 lg:mb-16">
            How it works
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <StepCard
              number={1}
              title="Post a task"
              description="Describe what you need done, set your budget, and publish your task."
            />
            <StepCard
              number={2}
              title="Compare bids & profiles"
              description="Review offers from verified helpers and choose the best fit for your needs."
            />
            <StepCard
              number={3}
              title="Pay securely"
              description="Payment is held safely and released only after your task is completed."
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-3 sm:mb-4 px-4">
            Be first to know when we launch in your area.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            Join thousands of early users waiting for Pikando.
          </p>
          <WaitlistForm variant="banner" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
