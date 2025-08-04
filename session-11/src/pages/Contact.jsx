import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">Get in Touch 🍴</h1>
        <p className="contact-text">
          Have questions, feedback, or just want to say hello?  
          Drop us a message and we'll get back to you!
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-right">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/swiggy_contact_us_image"
          alt="Contact Illustration"
        />
      </div>
    </div>
  );
};

export default Contact;
