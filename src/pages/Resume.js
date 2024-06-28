import React from 'react';
import ResumePic from '../Assets/ResumePic.jpg';
import ResumeFile from '../Assets/Alan_Zhang_Resume.pdf';
import ScrollToTop from '../sections/ScrollToTop';

export default function Resume(){
    return (
        
        <>
        <ScrollToTop></ScrollToTop>
        <div className='resume-header'>Resume</div>
            <div className='resume-container'>
                <div className="Resume">
                    <div>
                        <a href={ResumeFile} download="Alan_Zhang_Resume.pdf">
                            <img alt="ResumePic" className='ResumePic' src={ResumePic}/>
                        </a>
                    </div>
                </div>
                <a href={ResumeFile} download="Alan_Zhang_Resume.pdf" className="download-button">
                    <i className="fa fa-download"></i> Download Resume
                </a>
            </div>
        </>
    );
}