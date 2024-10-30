import Image from "next/image";
import "./about.css"; 

export default function About() {
    return (
        <main className="about-main">
            {/* Hero Section */}
            <section className="about-section">
                {/* Left side */}
                <div className="about-text">
                    <h1 className="about-title">About Us</h1>
                    <p className="about-description">
                        Our main goal since we began has remained basic: acquaint our
                        clients with the domains we specifically purchase our extraordinary
                        tasting coffee from, broil the beans with consideration, and make
                        astounding coffee increasingly available through our bistros and
                        our site. The coffee we cook is the coffee we like to drink, and we
                        trust you like it as well.
                    </p>
                    <button className="about-button">Read more</button>
                </div>

                {/* Right Side */}
                <div className="about-image-container">
                    <Image
                        width={500}
                        height={500}
                        src="/images/aboutcoffee.png"
                        alt="coffee"
                        className="about-image"
                    />
                </div>
            </section>
        </main>
    );
}
