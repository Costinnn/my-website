import emailjs from "@emailjs/browser";

import { useState } from "react";
import cvFile from "../assets/contact/resume.pdf";
import endPika from "../assets/contact/end.png";

import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = { name, email, message };
    try {
      const response = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        contactData,
        process.env.REACT_APP_KEY
      );

      if (response) {
        console.log("Contact sent!");
        setEmail("");
        setMessage("");
        setName("");
        setFeedback("Message sent with success!");
      }
    } catch (err) {
      console.log(err);
      setFeedback("There was an error... please try again later!");
    }

    setTimeout(() => setFeedback(""), 8000);
  };

  return (
    <section className="container contact" id="contact">
      <h1>CONTACT ME!</h1>
      <p>
        If you have an oportunity for me, and you think that I would be a good
        choice for it, please let me know. I will be happy to get involved,
        learn new things and create awesome web applications.
      </p>
      <div>
        <a href={cvFile} download="Crauciuc Costin CV" className="cv-download">
          DOWNLOAD MY CV
        </a>

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Name"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            cols="20"
            rows="10"
            placeholder="Tell me more..."
            required
          ></textarea>
          {feedback ? <p>{feedback}</p> : null}
          <button>SEND MESSAGE</button>
        </form>
      </div>
      <img src={endPika} alt="pikachu" className="end-pika"/>
    </section>
  );
};

export default Contact;
