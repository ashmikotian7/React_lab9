import React from 'react';

function About() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fdfbfb, #ebedee)', // Light elegant gradient
        padding: '40px',
        boxSizing: 'border-box',
        fontFamily: 'Poppins, Arial, sans-serif',
        lineHeight: '1.7',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: '#007BFF' }}>About Us</h1>
        <p style={{ fontSize: '1.4rem', color: '#6c757d' }}>
          Learn more about our journey, mission, and team values.
        </p>
      </header>

      {/* Sections */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Who We Are</h2>
        <p style={paragraphStyle}>
          We are a dynamic team of developers, designers, and strategists committed to building outstanding digital experiences.
          With years of expertise in web and mobile development, we have helped businesses grow and thrive in the digital world.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          Our mission is simple: empower our clients with innovative, scalable, and user-friendly solutions that make a real impact.
          We combine creativity with technology to drive business success and create unforgettable user experiences.
        </p>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={headingStyle}>Our Team</h2>
        <div style={teamContainerStyle}>
          {/* Team Member 1 */}
          <div style={cardStyle}>
            <h4 style={{ marginTop: '15px', color: '#007BFF' }}>Jane Doe</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div style={cardStyle}>
            <h4 style={{ marginTop: '15px', color: '#007BFF' }}>John Smith</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Lead Developer</p>
          </div>

          {/* Team Member 3 */}
          <div style={cardStyle}>
            <h4 style={{ marginTop: '15px', color: '#007BFF' }}>Emily Johnson</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>UI/UX Designer</p>
          </div>
        </div>
      </section>

      
    </div>
  );
}

// Styles
const sectionStyle = {
  marginBottom: '50px',
};

const headingStyle = {
  color: '#6f42c1',
  fontSize: '2rem',
  marginBottom: '15px',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  color: '#555',
};

const teamContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  marginTop: '30px',
};

const cardStyle = {
  width: '250px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '20px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
};

const avatarStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
};

export default About;
