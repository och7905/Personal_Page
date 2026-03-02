function Contact() {
    return (
        <div className="animate-fade-in section container">
            <h1 className="h1">Get In Touch</h1>
            <p className="text-body" style={{ marginBottom: 'var(--spacing-lg)' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="card" style={{ maxWidth: '600px' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>Message</label>
                        <textarea
                            rows="5"
                            placeholder="How can I help you?"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                resize: 'vertical'
                            }}
                        ></textarea>
                    </div>
                    <button type="button" className="btn btn-primary" style={{ marginTop: 'var(--spacing-sm)' }}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
