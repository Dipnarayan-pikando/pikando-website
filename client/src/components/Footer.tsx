import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted mt-12 sm:mt-16 lg:mt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">PIKANDO</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Get any task done, safely.
            </p>
            <p className="text-sm text-muted-foreground">
              Bengaluru, India
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/support" data-testid="link-footer-support">
                <span className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md cursor-pointer inline-block">
                  Support
                </span>
              </Link>
              <Link href="/privacy" data-testid="link-footer-privacy">
                <span className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md cursor-pointer inline-block">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms" data-testid="link-footer-terms">
                <span className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md cursor-pointer inline-block">
                  Terms of Use
                </span>
              </Link>
            </nav>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">Contact</h4>
            <a 
              href="mailto:support@pikando.com" 
              className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md cursor-pointer inline-block break-all"
              data-testid="link-footer-email"
            >
              support@pikando.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-muted-foreground text-center px-4">
            © 2025 Pikando Digital Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
