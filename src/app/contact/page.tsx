import "./contact.css";

export default function Contact() {
    return (
        <main className="contact-main">
            <div className="contact-container">
                <div className="contact-header">Contact</div>
                <div className="contact-grid">
                    {/* Left Side - Form */}
                    <div className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter name here*"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email here*"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message*"
                                className="form-textarea"
                                rows={4}
                            ></textarea>
                        </div>
                    </div>

                    {/* Right Side - Office Info */}
                    <div className="office-info">
                        <div className="office-title">Hashtag Caffè</div>
                        <div className="office-subtitle">Head Office</div>
                        <hr className="office-divider" />
                        <div className="office-details">
                            <p>12/2, abc road</p>
                            <p>xyz st, west (000000)</p>
                            <p>www.notheredef.city</p>
                            <p>8.00am - 8.00pm [Monday - Sunday]</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
