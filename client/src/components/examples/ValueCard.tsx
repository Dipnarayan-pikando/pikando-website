import { Briefcase, ShieldCheck, Lock } from "lucide-react";
import ValueCard from '../ValueCard';

export default function ValueCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
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
  );
}
