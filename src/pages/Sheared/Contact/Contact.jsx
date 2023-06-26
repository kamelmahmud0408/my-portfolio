import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE, form.current,import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                toast.success('Message sent successfully');
            }, (error) => {
                console.log(error.text);
            });
    };

    const contact_info = [
        { logo: "mail", text: "mahmudulhasankamel1994@gmail.com" },
        { logo: "logo-whatsapp", text: "+8801516051320" },
        {
            logo: "location",
            text: "Dhaka, Bangladesh",
        },
    ];
    return (
        <section id="contact" className="py-10 px-3 ">
            <ToastContainer />
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold text-black">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-800 mt-2 text-lg">Get in touch</p>

                <div
                    className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl  md:p-6 p-2 rounded-lg mx-auto"
                >
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5 text-black">
                        <input type="text" name="user_name" placeholder="Your Name" />
                        <input type="Email" name="user_email" placeholder="Your Email Address" />
                        <textarea name="message" placeholder="Your Message" rows={10}></textarea>
                        <input className="btn-primary w-fit" type="submit" value='Send' />
                    </form>
                    <div className="flex flex-col  gap-7 ">
                        {contact_info.map((contact, i) => (
                            <div
                                key={i}
                                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
                            >
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                    <ion-icon name={contact.logo}></ion-icon>
                                </div>
                                <p className="md:text-base text-sm  break-words text-black">
                                    {contact.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;