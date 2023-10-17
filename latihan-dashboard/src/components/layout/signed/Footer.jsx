import React from 'react';

function Footer() {
  const footerStyle = {
    textAlign: 'center',
    padding: '10px',
    fontWeight: 'bold',
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'none',
  };

  return (
    <div style={footerStyle}>
      Copyright&nbsp;&copy;&nbsp;2022&nbsp;
      <a href="https://otm-terminal.com/" style={linkStyle}>
        Orbit Terminal Merak
      </a>. Developed By{' '}
      <a href="http://armin.co.id" style={linkStyle}>
        Armin
      </a> All right reserved
    </div>
  );
}

export default Footer;
