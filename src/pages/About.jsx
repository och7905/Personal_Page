function About() {
    return (
        <div className="animate-fade-in section container">
            <h1 className="h1">About Me</h1>
            <div className="card" style={{ marginTop: 'var(--spacing-lg)' }}>
                <h2 className="h2">Passionate about building</h2>
                <p className="text-body" style={{ marginTop: 'var(--spacing-md)' }}>
                    I am a developer who loves crafting modern web experiences. My journey involves
                    constant learning and applying new technologies to create efficient, user-centric solutions.
                    <br /><br />
                    Whether it's writing clean React components or setting up seamless CI/CD pipelines,
                    I focus on quality and continuous improvement.
                </p>
            </div>
        </div>
    );
}

export default About;
