import { GraduationCap, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Academic background and qualifications
            </p>
          </div>

          {/* Education card */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 glow-hover">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-primary/20 text-primary shrink-0">
                  <GraduationCap size={32} />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>Currently in 3rd Year</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-primary font-medium mb-3">
                    Bengal College of Engineering and Technology
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Pursuing my engineering degree with a focus on developing practical skills 
                    in software development, problem-solving, and web technologies. 
                    Actively participating in coding challenges and building projects to enhance my portfolio.
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

export default Education;
