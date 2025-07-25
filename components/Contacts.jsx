"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";


const Contacts = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
  
    const clearForm = () => {
      setName("");
      setEmail("");
      setMessage("");
    };
  
  
    const submitHandler = async (e) => {
    
      e.preventDefault();
      setLoading(true);
  
      // emailjs
      emailjs
        .send(
          "service_zxxv058",
          "template_fikcvtc",
          {
            from_name: name,
            to_name: "APO",
            from_email: email,
            to_email: "sangaamosi44@gmail.com",
            message: message,
          },
          "skNoOkkBfsoNXwpTh"
        )
        .then(() => {
          setLoading(false);
          clearForm();
        })
        .catch((error) => {
          console.log(error);
          alert("something went wrong!");
        });
    };



  return (
    <div className='mt-20 px-8' id="contacts" >
        <h1 className="text-3xl font-bold text-center">Get in touch with us</h1>
        
        <div className="mt-4">
            <p>Call: +255743546890</p>
            <p>Adress: P. O. Box 1493 Mbuyuni</p>
            <p>Email: neus@apo.com</p>
        </div>

        <div className="mt-8">
            <h1 className="text-xl">Email us by filling credentials below:</h1>
            
            <Zoom>
        <div className="rounded-lg mt-6 bg-blue-300 p-4 py-8 mx-auto max-w-[400px]">
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter name"
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <input
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>


            <div className="mt-4">
              <textarea
                rows={2}
                value={message}
                placeholder="Enter message"
                onChange={(e) => setMessage(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-8">
            <button className="block mx-auto bg-white mt-4 px-2 py-1 hover:border-[#8796a0] transition-all duration-300 rounded-md border-2 border-solid border-[#c1c9ce]">Send Message</button>

            </div>
          </form>
        </div>
      </Zoom>
        </div>

    </div>
  )
}

export default Contacts