import WaitlistForm from '../WaitlistForm';

export default function WaitlistFormExample() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Hero Variant</h3>
        <WaitlistForm variant="hero" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Banner Variant</h3>
        <WaitlistForm variant="banner" />
      </div>
    </div>
  );
}
