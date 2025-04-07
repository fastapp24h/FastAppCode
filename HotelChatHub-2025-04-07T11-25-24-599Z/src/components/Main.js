import React from 'react';

function Main() {
  return (
    <main className="main-content">
      <section className="section welcome">
        <h1>Welcome to our App</h1>
        <p>Your personalized message will appear here.</p>
      </section>
      <section className="section about-us">
        <h2>About Us</h2>
        <p>Details about us can be customized here.</p>
      </section>
      <section className="section services">
        <h2>Our Services</h2>
        <ul className="services-list">
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
      <section className="section contact-us">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-input" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-input" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="form-textarea"></textarea>
          <button type="submit" className="form-button">Send</button>
        </form>
      </section>
    </main>
  );
}

export default Main;