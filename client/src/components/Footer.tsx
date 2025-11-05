import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted mt-12 sm:mt-16 lg:mt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          
          {/* COLUMN 1 - Brand */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
              pikando
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Get any task done, safely.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Operated by Pikando Digital Private Limited
            </p>
            <p className="text-sm text-muted-foreground">
              #17, 2nd Floor, 7th Main Road,<br className="sm:hidden" /> II Stage, Indiranagar,<br className="sm:hidden" /> Bengaluru – 560038, India
            </p>
          </div>
          
          {/* COLUMN 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/support">
                <span className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md cursor-pointer inline-block">
                  Support
                </span>
              </Link>
              <Link href="/privacy">
                <span className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md cursor-pointer inline-block">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md cursor-pointer inline-block">
                  Terms of Use
                </span>
              </Link>
              
            </nav>
          </div>
          
          {/* COLUMN 3 - Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">
              Contact
            </h4>
            <a 
              href="mailto:support@pikando.com"
              className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md inline-block break-all"
            >
              support@pikando.com
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Phone: +91 99804 49726
            </p>
            
          </div>
        </div>

        {/* DIVIDER & FOOTNOTE */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="space-y-2 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 Pikando Digital Private Limited. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with ❤️ in India • Data protection aligned with Indian laws
            </p>
            <p className="text-xs text-muted-foreground">
              Payments are securely processed via authorized escrow partners. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
