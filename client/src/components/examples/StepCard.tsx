import StepCard from '../StepCard';

export default function StepCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
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
  );
}
