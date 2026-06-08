function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="6"
          placeholder="Message"
        />

        <button>
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;