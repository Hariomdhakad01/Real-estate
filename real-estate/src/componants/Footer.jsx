import React from 'react';

const Footer = () => {
  return (
    <footer className="pg-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} HD Management System</p>
        <p>Made with ❤️ Hariom Dhakad</p>
      </div>
    </footer>
  );
};

export default Footer;
