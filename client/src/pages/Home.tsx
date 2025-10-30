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
      
      <section className="pt-32 pb-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                Get any task done, safely.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Pikando connects people who need help with verified locals who can help.
              </p>
              <WaitlistForm variant="hero" />
              <p className="text-sm text-muted-foreground mt-4">
                Launching first in Bengaluru.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                    <ShieldCheck className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-semibold text-foreground">
                    Trusted. Verified. Secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-muted">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <section className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-semibold text-foreground text-center mb-16">
            How it works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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

      <section className="py-24 px-8 bg-card border-y border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Be first to know when we launch in your area.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of early users waiting for Pikando.
          </p>
          <WaitlistForm variant="banner" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
