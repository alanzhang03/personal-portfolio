import React from 'react';
import ResumePic from '../Assets/ResumePic.jpg';

export default function Resume(){
    return (
        <>
            <div className="Resume">
                <h1 className='header'>Resume</h1>
                <div className='ResumePic'>
                    <img src={ResumePic} alt="ResumePic"/>
                </div>
            </div>
        </>
    );
}