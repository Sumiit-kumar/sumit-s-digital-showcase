import { Code2, Lightbulb, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get to know me a little better
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Hello! I'm Sumit Kumar
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm a 3rd-year B.Tech student at <span className="text-foreground font-medium">Bengal College of Engineering and Technology</span>, 
                with a deep passion for web development and creating impactful digital experiences.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                My journey in programming started with curiosity and has evolved into a dedicated pursuit 
                of building responsive, user-friendly websites. I enjoy turning complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently seeking internship opportunities where I can contribute my skills, 
                learn from experienced professionals, and grow as a frontend developer.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid gap-4">
              <div className="glass-card p-6 flex items-start gap-4 glow-hover">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, well-structured code that's easy to understand and scale.
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4 glow-hover">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Creative Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Approaching problems with creativity and finding innovative ways to solve them.
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4 glow-hover">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Goal Oriented</h4>
                  <p className="text-sm text-muted-foreground">
                    Focused on continuous learning and achieving milestones in my development journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
