import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

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
    <div className="flex flex-col justify-center items-center gap-[5rem] md:gap-[12rem] md:flex-row h-[95%] mt-3">
      <article className="basis-1/4">
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold pb-8">
          Contact <span className="text-emerald-800">Us</span>
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Full Name</label>
          <div className="pt-2">
            <input
              type="text"
              name="user_name"
              className="w-full mb-4 border-2 border-green-700 py-1 px-2 focus:outline-none focus:border-green-600"
            />
          </div>
          <label>Email</label>
          <div className="pt-2">
            <input
              type="email"
              name="user_email"
              className="w-full mb-4 border-2 border-green-700 py-1 px-2 focus:outline-none focus:border-green-600"
            />
          </div>
          <label>Message</label>
          <div className="pt-2">
            <textarea
              name="message"
              className="w-full min-h-[10rem] mb-4 border-2 border-green-700 py-1 px-2 focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="bg-green-400 text-white text-center py-2 px-2 mt-4 cursor-pointer">
            <input type="submit" value="Send" className="cursor-pointer"/>
          </div>
        </form>
      </article>
      <article>
        <Image
          src="/assets/contact.svg"
          width={400}
          height={400}
          alt="Contact Us"
        />
      </article>
    </div>
  );
}

export default Contact