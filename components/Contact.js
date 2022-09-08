import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_i0kk8gr",
          "template_uvkpdz5",
          form.current,
          "iwNfQaDDYzicEiBJc"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <div className="flex justify-center items-center">
      <article>
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Full Name</label>
          <div>
            <input type="text" name="user_name" />
          </div>
          <label>Email</label>
          <div>
            <input type="email" name="user_email" />
          </div>
          <label>Message</label>
          <div>
            <textarea name="message" />
          </div>
          <input type="submit" value="Send" />
        </form>
      </article>
      <article>
        
      </article>
    </div>
  );
}

export default Contact