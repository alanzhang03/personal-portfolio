


export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="header">Send me a message!</h1>
            <p className="contact-description">Got a question or proposal, or just want to say hello? Go ahead.</p>
            <div className="form-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email address" />
                    </div>
                    <div className="form-group full">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="send-button">Shoot →</button>
                </form>
            </div>
        </div>
    );
}