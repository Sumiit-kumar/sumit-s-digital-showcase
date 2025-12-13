import { Code, Palette, FileCode, Terminal, Coffee, GitBranch } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skills = [
  { name: 'HTML', icon: Code, color: 'text-orange-400', description: 'Semantic markup & accessibility' },
  { name: 'CSS', icon: Palette, color: 'text-blue-400', description: 'Styling & animations' },
  { name: 'JavaScript', icon: FileCode, color: 'text-yellow-400', description: 'Interactive & dynamic UIs' },
  { name: 'C', icon: Terminal, color: 'text-green-400', description: 'Problem solving & DSA' },
  { name: 'Java', icon: Coffee, color: 'text-red-400', description: 'Object-oriented programming' },
  { name: 'Git & GitHub', icon: GitBranch, color: 'text-purple-400', description: 'Version control & collaboration' },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills bento grid */}
          <div className="bento-grid max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="skill-badge group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon with glow effect */}
                  <div className="p-4 rounded-2xl bg-secondary/50 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <IconComponent 
                      size={32} 
                      className={`${skill.color} transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]`} 
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors relative z-10">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center relative z-10">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
