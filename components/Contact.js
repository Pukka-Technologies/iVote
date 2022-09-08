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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact