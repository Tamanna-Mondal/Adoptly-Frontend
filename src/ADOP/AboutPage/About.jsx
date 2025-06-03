import React from 'react';

import './About.css';
import Review from '../ReviewPage/Review';

export default function About(){
   

   

    return (
    <>
        
        <div className="about-container">
           

            <section className="content-section">
                <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Our Mission</h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'black'}}>
                    At PetPals Marketplace, we believe every pet deserves a loving home. Our platform connects responsible breeders and shelters with caring families, ensuring the best possible match for both pets and their new owners.
                </p>

                <div className="stats-container">
                    <div className="stat-card">
                        <div className="stat-number">10,000+</div>
                        <div>Happy Pets Adopted</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">1,000+</div>
                        <div>Verified Breeders</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">98%</div>
                        <div>Satisfaction Rate</div>
                    </div>
                </div>

                <h2 style={{textAlign: 'center', margin: '4rem 0 2rem'}}>Meet Our Team</h2>
                <div className="team-section">
                    <div className="team-member">
                        <div className="member-avatar">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="40" r="25" fill="#4a90e2"/>
                                <circle cx="50" cy="90" r="35" fill="#4a90e2"/>
                            </svg>
                        </div>
                        <h3>Tamanna Mondal</h3>
                        <p className='about'>Founder & CEO</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com">LinkedIn</a>
                            <a href="https://twitter.com">Twitter</a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="40" r="25" fill="#4a90e2"/>
                                <circle cx="50" cy="90" r="35" fill="#4a90e2"/>
                            </svg>
                        </div>
                        <h3>Souvik Gosh</h3>
                        <p className='about'>Head of Operations</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com">LinkedIn</a>
                            <a href="https://twitter.com">Twitter</a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="40" r="25" fill="#4a90e2"/>
                                <circle cx="50" cy="90" r="35" fill="#4a90e2"/>
                            </svg>
                        </div>
                        <h3>Atritra Nath</h3>
                        <p className='about'>Pet Welfare Specialist</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com">LinkedIn</a>
                            <a href="https://twitter.com">Twitter</a>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="40" r="25" fill="#4a90e2"/>
                                <circle cx="50" cy="90" r="35" fill="#4a90e2"/>
                            </svg>
                        </div>
                        <h3>Sayna </h3>
                        <p className='about'>Veterinary Director</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com">LinkedIn</a>
                            <a href="https://twitter.com">Twitter</a>
                        </div>
                    </div>
                </div>

              <Review/>
            </section>
        </div>
    </>
    );
};
