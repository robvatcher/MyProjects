import React from 'react';
import './Footer.css';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <p>Rob Vatcher</p>
                </div>
                <div className="footer-section">
                    <p>Email: rcvatcher@gmail.com</p>
                </div>
                <div className="footer-section">
                    <p>Phone: 709-693-4734 | Website: robvatcher.com</p>
                </div>
            </div>
            <button className="top-of-page-btn" onClick={scrollToTop}>
                Top of Page
            </button>
        </footer>
    );
}

export default Footer;

