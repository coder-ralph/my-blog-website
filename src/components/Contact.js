import React, { useState, useEffect } from 'react';
import '../index.css';

import contactUsImage from '../images/contactus.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [textareaRows, setTextareaRows] = useState(6);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  useEffect(() => {
    // Add a delay to trigger the fade-in animation
    const delay = setTimeout(() => {
      setIsFormVisible(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  const handleTextareaChange = (e) => {
    // Calculate the number of rows based on the textarea content
    const textareaRowCount = e.target.value.split('\n').length;
    setTextareaRows(textareaRowCount >= 4 ? textareaRowCount : 4);
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Generate the mailto link with subject and body
    const mailtoLink = `mailto:touristique2023@gmail.com?subject=Tourist%20Questions%20or%20Inquiries 💬&body=${encodeURIComponent(message)}`;

    // Try to open the email client
    const isOpened = window.open(mailtoLink, '_self');

    if (isOpened) {
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      setTextareaRows(6);
      setIsSubmissionSuccessful(true);
    } else {
      alert('Failed to open the email client. Please try again later.');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  return (
    <div className={`contact-container ${isFormVisible ? 'fade-in' : ''}`}>
      <h2 style={{ textAlign: 'center', marginTop: 0 }}>Contact</h2>
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jamie Larson"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="jamie@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleTextareaChange}
                required
                rows={textareaRows}
                style={{ resize: 'none' }}
                placeholder="Your message here..."
              />
            </div>

            {/* Submit button */}
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-illustration">
          {/* Add your illustrator image here */}
          <img
            src={contactUsImage}
            alt="ContactUs"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
      {isSubmissionSuccessful && (
        <div className="confirmation-message">
          <p>Thank you for your message! We'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
