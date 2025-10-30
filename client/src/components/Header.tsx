import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1200px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
          <h1 className="text-2xl font-bold text-foreground hover-elevate active-elevate-2 px-3 py-1 -ml-3 rounded-md cursor-pointer">
            PIKANDO
          </h1>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href="/support" data-testid="link-support">
            <span className={`text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md cursor-pointer ${
              location === '/support' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              Support
            </span>
          </Link>
          <Link href="/privacy" data-testid="link-privacy">
            <span className={`text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md cursor-pointer ${
              location === '/privacy' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              Privacy
            </span>
          </Link>
          <Link href="/terms" data-testid="link-terms">
            <span className={`text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md cursor-pointer ${
              location === '/terms' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              Terms
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
