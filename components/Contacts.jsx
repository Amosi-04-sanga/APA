"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { FadeUp } from ".";


const Contacts = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [adress, setAdress] = useState("");
    const [profession, setProfession] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
  
    const clearForm = () => {
      setName("");
      setEmail("");
      setMessage("");
      setAdress("");
      setPhone("");
      setCountry("");
      setProfession("");
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
            to_email: "africaparenting01@gmail.com",
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
        <h1 className="text-3xl font-semibold text-center">Get in touch with us</h1>
        <div className="flex items-center justify-center">
        <div className="mt-4 mx-auto"> 
            <p>Call: +255743546890</p>
            <p>Adress: P. O. Box 1493 Mbuyuni, Morogoro</p>
            <p>Email: info@africaparenting.org</p>
        </div>

        </div>

        <h1 className="text-3xl font-semibold text-center uppercase mt-8">Join us to become active member</h1>

        <div className="">
            <h1 className="text-center mt-2">Email us by filling credentials below:</h1>
            
            <FadeUp>
        <div className="rounded-lg mt-4 bg-blue-300 p-4 py-8 mx-auto max-w-[400px]">
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Full name"
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
              <input
                type="tell"
                value={phone}
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

             <div className="mt-4">
              <input
                type="text"
                value={profession}
                placeholder=" Your profession"
                onChange={(e) => setProfession(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>
  
            <div className="mt-4">
              <input
                type="text"
                value={adress}
                placeholder="Adress"
                onChange={(e) => setAdress(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>
            

             <div className="mt-4">
              <input
                type="text"
                value={country}
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>


            <div className="mt-4">
              <textarea
                rows={2}
                value={message}
                placeholder="The reason to join"
                onChange={(e) => setMessage(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-8">
            <button className="block mx-auto bg-white mt-4 px-2 py-1 hover:border-[#8796a0] transition-all duration-300 rounded-md border-2 border-solid border-[#c1c9ce]">Send to join</button>
            </div>
          </form>
        </div>
      </FadeUp>
        </div>

    </div>
  )
}

export default Contacts