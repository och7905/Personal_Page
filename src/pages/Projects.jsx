import { ExternalLink, Github } from 'lucide-react';

function Projects() {
    const projectList = [
        {
            title: 'E-commerce Platform',
            desc: 'A full-stack e-commerce solution with React and Node.js.',
            tech: ['React', 'Node.js', 'MongoDB']
        },
        {
            title: 'Task Management App',
            desc: 'A productivity tool for managing daily tasks and workflows.',
            tech: ['Vue', 'Firebase', 'Tailwind']
        },
        {
            title: 'Portfolio Website',
            desc: 'This very website, built with modern web principles.',
            tech: ['React', 'Vite', 'CSS']
        }
    ];

    return (
        <div className="animate-fade-in section container">
            <h1 className="h1">My Projects</h1>
            <p className="text-body" style={{ marginBottom: 'var(--spacing-xl)' }}>
                Explore some of my recent work and open source contributions.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {projectList.map((proj, idx) => (
                    <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 className="h3">{proj.title}</h3>
                        <p className="text-secondary" style={{ flex: 1, marginBottom: 'var(--spacing-xl)' }}>
                            {proj.desc}
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginBottom: 'var(--spacing-lg)' }}>
                            {proj.tech.map((t, i) => (
                                <span key={i} style={{
                                    fontSize: '0.75rem',
                                    padding: '2px 8px',
                                    backgroundColor: 'var(--bg-color)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '12px',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex-between" style={{ borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-md)' }}>
                            <a href="#" className="flex-center" style={{ gap: '6px', fontSize: '0.875rem' }}>
                                <Github size={16} /> Source
                            </a>
                            <a href="#" className="flex-center" style={{ gap: '6px', fontSize: '0.875rem' }}>
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
