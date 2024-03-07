import React from "react";
import '../index.css';
import GithubPic from '../Assets/Github.png'
import LinkedinPic from '../Assets/Linkedin Logo.png'


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span >Feel free to connect with me</span>
                <div className="social-icons">
                    <a href="https://github.com/alanzhang03" target="_blank" rel="noopener noreferrer">
                        <img className="social-icons" src={GithubPic} alt="GithubPic"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/alan-zhang-a254b8233/" target="_blank" rel="noopener noreferrer">
                        <img className="social-icons" src={LinkedinPic} alt="LinkedinPic"></img>
                    </a>
                </div>
            </div>
        </footer>
    );
}