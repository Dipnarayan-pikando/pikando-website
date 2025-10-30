import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <Card className="p-5 sm:p-6 lg:p-8 hover-elevate transition-all duration-200">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center mb-3 sm:mb-4">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}
