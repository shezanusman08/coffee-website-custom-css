import ".//reservation.css";

export default function Reservation() {
    return (
        <main className="main-container">
            <div className="reservation-section">
                <header className="reservation-header">
                    <h1>Reservation</h1>
                    <p>
                        <span className="highlight">#Caffè</span> provides both online and offline table reservations for our customers.
                    </p>
                </header>
                
                <div className="form-container">
                    <form className="reservation-form">
                        {/* Name */}
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                            <span className="icon fas fa-user"></span>
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" id="phone" placeholder="Enter your phone number" />
                            <span className="icon fas fa-phone"></span>
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                            <span className="icon fas fa-envelope"></span>
                        </div>

                        {/* Number of People */}
                        <div className="form-group">
                            <label htmlFor="people">Number of people:</label>
                            <input type="number" id="people" placeholder="Enter number of people" />
                            <span className="icon fas fa-users"></span>
                        </div>

                        {/* Date */}
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" />
                            <span className="icon fas fa-calendar"></span>
                        </div>

                        {/* Time */}
                        <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <input type="time" id="time" />
                            <span className="icon fas fa-clock"></span>
                        </div>
                    </form>

                    {/* Reservation Button */}
                    <div className="button-container">
                        <button className="reservation-button">Reservation Now</button>
                    </div>

                    {/* Footer Note */}
                    <div className="footer-note">
                        <p>
                            <i className="fas fa-exclamation-triangle"></i> Reservations can be held for 15 mins. We won&apos;t refund cancellations done after 15 mins of hold; however, cancellation within 15 mins would be refunded.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
