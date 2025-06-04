import React from 'react';

const Footer = () => {
  return (
    <div style={{
      backgroundColor: "#E5E7EB",
      borderRadius: "0.5rem",
      padding: "2rem",
      marginTop: "2rem",
      color: "#6B7280",
      fontWeight: "500",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <div style={{
        display: "flex",
        gap: "1.5rem",
        marginBottom: "1rem"
      }}>
      
      </div>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <div style={{
        display: "flex",
        gap: "1rem",
        marginTop: "1rem"
      }}>
        {/* Social media icons would go here */}
        <span style={{ cursor: "pointer" }}>Facebook</span>
        <span style={{ cursor: "pointer" }}>Twitter</span>
        <span style={{ cursor: "pointer" }}>Instagram</span>
      </div>
    </div>
  );
};

export default Footer;