interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center mb-3 sm:mb-4">
        <span className="text-xl sm:text-2xl font-bold text-primary-foreground">{number}</span>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
