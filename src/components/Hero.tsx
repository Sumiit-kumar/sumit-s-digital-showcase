import { ArrowDown, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-section visible">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Hi, I'm{' '}
            <span className="gradient-text">Sumit Kumar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Frontend Web Developer | Engineering Student
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-muted-foreground mb-10 text-lg">
            A passionate 3rd-year engineering student crafting beautiful, responsive web experiences. 
            I transform ideas into elegant, user-friendly digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-primary">
              <ArrowDown size={18} />
              View Projects
            </a>
            <a 
              href="#" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                alert('Resume download - Add your resume link here!');
              }}
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
