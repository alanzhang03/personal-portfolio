import React from 'react';
import ResumePic from '../Assets/ResumePic.jpg';
import ResumeFile from '../Assets/Alan_Zhang_Resume.pdf';


export default function Resume(){
    return (
        <>
            <h1 className='header'>Resume<br></br>(click to download!)</h1>
            <div className="Resume">
                <div>
                    <a href={ResumeFile} download="Alan_Zhang_Resume.pdf">
                        <img alt="ResumePic" className='ResumePic' src={ResumePic}/>
                    </a>
                </div>
            </div>
        </>
    );
}