import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-text">My Socials!</div>
                    <div className="social-icons-divide">
                       
                        <a href="https://www.linkedin.com/in/alan-zhang-a254b8233/" target="_blank" rel="noopener noreferrer">
                            <TiSocialLinkedinCircular className="linkedin-icon"/>    
                        </a>
                        
                        <a href="https://github.com/alanzhang03" target="_blank" rel="noopener noreferrer">
                            <IoLogoGithub className="github-icon"/>
                        </a>
                        <a href="https://twitter.com/cloudeelol" target="_blank" rel="noopener noreferrer">
                            <AiFillTwitterCircle className="twitter-icon"/>    
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100009265073408" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="github-icon"/>  
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}