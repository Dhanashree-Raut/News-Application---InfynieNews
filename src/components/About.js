import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container py-5">

                {/* HERO */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold">About Infynie News</h1>
                    <p className="text-muted mt-2">
                        Trusted, fast, and unbiased digital news from around the world.
                    </p>
                </div>

                {/* WHO WE ARE */}
                <div
                    className="about-hero mb-5"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1585829365295-ab7cd400c167')"
                    }}
                >
                    <div className="about-overlay">
                        <div className="about-content">
                            <h3 className="mb-3">📰 Who We Are</h3>
                            <p>
                                Infynie News is a digital-first news platform focused on delivering
                                reliable and real-time information.
                            </p>
                            <p className="mb-0">
                                We simplify complex news and make it accessible across Business,
                                Technology, Health, Sports, and Entertainment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="row align-items-center mb-5">
                    <div className="col-md-6 mb-3">
                        <img
                            src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167"
                            alt="Newsroom"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-3">📰 Who We Are</h4>
                        <p>
                            Infynie News is a digital-first news platform focused on delivering
                            reliable and real-time information.
                        </p>
                        <p>
                            We simplify complex news and make it accessible across categories
                            like Business, Technology, Health, Sports, and Entertainment.
                        </p>
                    </div>
                </div> */}

                {/* OUR MISSION */}
                <div
                    className="mission-hero mb-5"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')"
                    }}
                >
                    <div className="mission-overlay">
                        <div className="mission-content">
                            <h3 className="mb-3">🎯 Our Mission</h3>

                            <ul className="mission-list mb-0">
                                <li>✔ Deliver accurate and fast news</li>
                                <li>✔ Maintain journalistic integrity</li>
                                <li>✔ Keep readers informed globally</li>
                                <li>✔ Fight misinformation</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* TRUSTED SOURCES */}
                <div className="mb-5">
                    <h4 className="mb-4">📡 Trusted News Sources</h4>
                    <div className="row text-center">
                        {["BBC News", "CNN", "Reuters", "Bloomberg", "The Guardian", "Associated Press"].map(
                            (source, index) => (
                                <div className="col-md-4 mb-3" key={index}>
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <h6 className="mb-0">{source}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* WHY TRUST US */}
                <div className="bg-light p-4 rounded shadow-sm text-center">
                    <h4 className="mb-2">🤝 Why Trust Infynie News?</h4>
                    <p className="mb-0">
                        We verify sources, remove fake news, and provide unbiased reporting so
                        you can stay informed with confidence.
                    </p>
                </div>

            </div>
        )
    }
}
