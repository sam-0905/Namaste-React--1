import { useState } from "react";
import "./contact.css";

const Contact = () => {
    const contact = new URL("../assets/contact.png", import.meta.url).href;
    const [message,setMessage] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault(); // prevent page reload
        setMessage("🥗 Your message is marinating… we’ll serve you a reply soon! 🍽️");
        // Optional: clear form inputs
        e.target.reset();

        setTimeout(()=>{
          setMessage("")
        },3000)
     };


  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">Get in Touch 🍴</h1>
        <p className="contact-text">
          Have questions, feedback, or just want to say hello?  
          Drop us a message and we'll get back to you!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
          {message && <h3 className="success-message" type="submit">{message}</h3>}
      </div>

        <div className="contact-right">
            <img
              src={contact}
              alt="Contact Illustration"
              className="contact-img"
            />
            <div className="contact-overlay">
              <h1>Support Our Food Community</h1>
              <p>
                Help us bring delicious, fresh meals and quality ingredients to your doorstep
                while supporting local growers and chefs.
              </p>
            </div>
          </div>

    </div>
  );
};

export default Contact;
