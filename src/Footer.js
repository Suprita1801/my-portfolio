import React from "react";
import './Footer.css';

function Footer(){
    return(
        <footer className="footer text-center">
            <p>Made by Suprita | @ {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
