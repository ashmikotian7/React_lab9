import React from 'react';

function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #f8f9fa, #e0f7fa, #fce4ec)', // Soft modern gradient
        padding: '40px',
        boxSizing: 'border-box',
        fontFamily: 'Poppins, Arial, sans-serif', // More modern font
        lineHeight: '1.6',
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
      <div>
        <header style={{ textAlign: 'center', marginBottom: '50px', color: '#333' }}>
          <h1 style={{ fontSize: '3rem', color: '#007BFF' }}>Welcome to Our Website</h1>
          <p style={{ fontSize: '1.4rem', color: '#6c757d' }}>
            Explore our passion, innovation, and commitment to excellence.
          </p>
        </header>

        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '50px',
          }}
        >
          {/* Card 1 */}
          <div style={cardStyle}>
            <h3 style={{ color: '#ff6f61' }}>Our Mission</h3>
            <p style={{ color: '#555' }}>
              We deliver outstanding products that create value and consistent competitive advantage for our clients globally.
            </p>
          </div>

          {/* Card 2 */}
          <div style={cardStyle}>
            <h3 style={{ color: '#6f42c1' }}>Our Vision</h3>
            <p style={{ color: '#555' }}>
              To become the most trusted partner by offering innovative solutions and world-class services.
            </p>
          </div>

          {/* Card 3 */}
          <div style={cardStyle}>
            <h3 style={{ color: '#20c997' }}>Our Values</h3>
            <p style={{ color: '#555' }}>
              Integrity, Innovation, Excellence, and Collaboration inspire everything we do.
            </p>
          </div>
        </section>
      </div>

      
    </div>
  );
}

// Beautiful soft card style
const cardStyle = {
  width: '300px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '25px',
  borderRadius: '20px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
};

export default Home;
