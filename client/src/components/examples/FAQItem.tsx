import FAQItem from '../FAQItem';

export default function FAQItemExample() {
  return (
    <div className="p-8 max-w-2xl">
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
  );
}
