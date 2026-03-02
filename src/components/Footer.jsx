function Footer() {
    return (
        <footer style={{ borderTop: '1px solid var(--border-color)', padding: 'var(--spacing-lg) 0', marginTop: 'auto' }}>
            <div className="container flex-center">
                <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                    © {new Date().getFullYear()} Oh Chang Hyeon. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
