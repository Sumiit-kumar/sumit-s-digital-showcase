import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © 2024 Sumit Kumar. Made with{' '}
            <Heart size={14} className="text-red-500 fill-red-500" /> 
            {' '}All rights reserved.
          </p>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
