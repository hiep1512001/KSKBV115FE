import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center py-3 bg-light text-muted">
            © {new Date().getFullYear()} Bản quyền thuộc về Bệnh viện Nhân Dân 115
        </footer>
    );
};

export default Footer;
