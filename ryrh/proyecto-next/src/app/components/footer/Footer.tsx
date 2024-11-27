import React from "react";
import "./footer.css"

const Footer = () => {
    const currentyerar = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>@ {currentyerar} SENA. All rights reserved</p>
        </footer>
    );
};

export default Footer;