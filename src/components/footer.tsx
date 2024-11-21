import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'lightgray', padding: '20px', textAlign: 'center' }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <p style={{ margin: 0 }}>
        <a href="/privacy-policy" style={{ textDecoration: 'none', color: 'blue' }}>Privacy Policy</a> | 
        <a href="/terms-of-service" style={{ textDecoration: 'none', color: 'blue', marginLeft: '10px' }}>Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
