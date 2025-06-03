import React from 'react'
import '../AboutPage/About.css'
const Review = () => {
  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5-rating);
};
  const reviews = [
    {
        name: "Jessica Smith",
        initial: "JS",
        rating: 5,
        date: "June 15, 2023",
        text: "Found my perfect companion through PetPals! The adoption process was smooth and the support was amazing. My new dog Max has brought so much joy to our family.",
    },
    {
        name: "Robert Johnson",
        initial: "RJ",
        rating: 5,
        date: "May 28, 2023",
        text: "Incredible platform! The verified breeders gave us peace of mind when choosing our kitten. The follow-up care and support exceeded our expectations.",
    },
    {
        name: "Maria Garcia",
        initial: "MG",
        rating: 5,
        date: "July 2, 2023",
        text: "As a first-time pet owner, I appreciated how PetPals guided me through the entire process. Their pet welfare specialists were knowledgeable and caring.",
    }
];
  return (
    <div className='review-main' >
                      <div className="reviews-section">
                    <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>What Our Users Say</h2>
                    <div className="review-grid">
                        {reviews.map((review, index) => (
                            <div className="review-card" key={index}>
                                <div className="review-header">
                                    <div className="reviewer-avatar">
                                        {review.initial}
                                    </div>
                                    <div>
                                        <h3>{review.name}</h3>
                                        <div className="stars">{renderStars(review.rating)}</div>
                                        <div className="review-date">{review.date}</div>
                                    </div>
                                </div>
                                <p className='about'>{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default Review
