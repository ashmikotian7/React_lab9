import React from 'react';

function Contact() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fdfbfb, #ebedee)', // Soft gradient background
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
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: '#007BFF' }}>Contact Us</h1>
        <p style={{ fontSize: '1.4rem', color: '#6c757d' }}>
          We'd love to hear from you! Whether you have a question or just want to say hello.
        </p>
      </header>

      {/* Contact Form */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <form
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          }}
        >
          {/* Name Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#495057' }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ced4da',
                outline: 'none',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#495057' }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ced4da',
                outline: 'none',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#495057' }}>
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your Message"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ced4da',
                outline: 'none',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>

          {/* Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#007BFF',
                color: '#fff',
                padding: '14px 40px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              Send Message
            </button>
          </div>
        </form>

        
      </div>

      
    </div>
  );
}

export default Contact;
