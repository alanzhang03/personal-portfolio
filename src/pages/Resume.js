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
                <a href={ResumeFile} download="Alan_Zhang_Resume.pdf" class="download-button">
                    <i class="fa fa-download"></i> Download Resume
                </a>
                <div className="Resume">
                    <div>
                        <a href={ResumeFile} download="Alan_Zhang_Resume.pdf">
                            <img alt="ResumePic" className='ResumePic' src={ResumePic}/>
                        </a>
                    </div>
                </div>
                <a href={ResumeFile} download="Alan_Zhang_Resume.pdf" class="download-button">
                    <i class="fa fa-download"></i> Download Resume
                </a>
            </div>
        </>
    );
}