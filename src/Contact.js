import React from "react";
import'./Contact.css';

function Contact(){
    return(
        <div className="container mt-5 contact-container">
            <h2 className="text-center mb-4">Contact Me</h2>
            <p className="text-center">
                You can reach out to me via email <br />
                <a href="mailto:suprita.t1805@gmail.com" className="contact-link">
                    suprita.t1805@gmail.com
                </a>
            </p>
        </div>
    );
}

export default Contact;
