import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skills = [
  {
    name: 'HTML',
    icon: '🌐',
    description: 'Semantic markup & accessibility',
    color: 'from-orange-500/20 to-orange-600/20',
  },
  {
    name: 'CSS',
    icon: '🎨',
    description: 'Styling & animations',
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    description: 'Interactive & dynamic UIs',
    color: 'from-yellow-500/20 to-yellow-600/20',
  },
  {
    name: 'C',
    icon: '🔧',
    description: 'Problem solving & DSA',
    color: 'from-gray-500/20 to-gray-600/20',
  },
  {
    name: 'Java',
    icon: '☕',
    description: 'Object-oriented programming',
    color: 'from-red-500/20 to-red-600/20',
  },
  {
    name: 'Git & GitHub',
    icon: '🔀',
    description: 'Version control & collaboration',
    color: 'from-purple-500/20 to-purple-600/20',
  },
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
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-badge group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <span className="text-4xl relative z-10">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-foreground relative z-10">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center relative z-10">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
