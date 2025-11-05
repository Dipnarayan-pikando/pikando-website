import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
         <h1
  className="text-2xl sm:text-3xl font-extrabold font-[Montserrat] tracking-tight text-foreground px-3 py-1 -ml-3 rounded-md cursor-pointer select-none"
>
  pikando
</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden hover-elevate active-elevate-2 p-2 rounded-md"
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/support" data-testid="link-mobile-support">
              <div 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md font-medium hover-elevate active-elevate-2 ${
                  location === '/support' ? 'text-foreground bg-muted' : 'text-muted-foreground'
                }`}
              >
                Support
              </div>
            </Link>
            <Link href="/privacy" data-testid="link-mobile-privacy">
              <div 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md font-medium hover-elevate active-elevate-2 ${
                  location === '/privacy' ? 'text-foreground bg-muted' : 'text-muted-foreground'
                }`}
              >
                Privacy
              </div>
            </Link>
            <Link href="/terms" data-testid="link-mobile-terms">
              <div 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md font-medium hover-elevate active-elevate-2 ${
                  location === '/terms' ? 'text-foreground bg-muted' : 'text-muted-foreground'
                }`}
              >
                Terms
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
