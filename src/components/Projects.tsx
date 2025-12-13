import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Gym Website Landing Page',
    description: 'A modern, responsive gym website landing page with smooth animations, dynamic content sections, and an attractive UI designed to convert visitors into members.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://sumit-gym-website.vercel.app/',
    githubUrl: '#', // Placeholder
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Some of the projects I've worked on
            </p>
          </div>

          {/* Projects grid */}
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden glow-hover group"
              >
                {/* Project image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Tech badges overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More projects coming soon */}
          <p className="text-center text-muted-foreground mt-12">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
