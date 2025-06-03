import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AllData from "../Data/Data";
import AnimalList from "../HomePage/AnimalList";
import './Animal.css';
import Review from "../ReviewPage/Review";
export default function Animal() {
  const { category, id } = useParams();  
  const [animalDetails, setAnimalDetails] = useState(null);
  const [isLiked, setIsLiked] = useState(false); // State to track heart color
  const [isBought, setIsBought] = useState(false); // State to track buy status

  useEffect(() => {
    const Data = AllData();
    const animal = Data.find(animal => animal.id === parseInt(id) && animal.category.toLowerCase() === category.toLowerCase());
    setAnimalDetails(animal);
  }, [category, id]);

  const handleWishlistClick = () => {
    setIsLiked(!isLiked); 
  };

  const handleBuyClick = () => {
    setIsBought(!isBought); 
  };

  return (
    <>
    <div className="indi-animal">
      {animalDetails ? (
        <div className="animal-details">
           <div className="indi-image">
              <img src={animalDetails.image} alt={animalDetails.breed} />
           </div>
           <div className="indi-text">
              <i>@{animalDetails.buyer_name}</i>
              <p>{animalDetails.description}</p>
              <hr />
              <h3 style={{ padding: 0, margin: 0 }}>{animalDetails.breed}</h3>
              <p>Age: {animalDetails.age}</p>
              <p>Place: {animalDetails.place}</p>
              <p>Price: ₹{animalDetails.price}</p>
              <hr/>
              <div className="suggestionBox">
                <h4 style={{ padding: 0, margin: '10px 0 0 10px 0' }}>Animal Care Suggestions</h4>
                <p><b>Food: </b> {animalDetails.food_suggestions}</p>
                <p><b>Medicine: </b> {animalDetails.medicine}</p>
                <p><b>Care Suggestion: </b> {animalDetails.care_suggestions}</p>
              
              </div>
              <div className="card-btn">
              <NavLink  to={`/adoptly/${category}/${id}/Payment`} 
                            state={{ price: animalDetails.price }}>
                <button onClick={handleBuyClick} className="buypage-btn">
                  <span className={`buyPage ${isBought ? "boughtpage" : ""}`}>
                    <i className="fas fa-cart-shopping"></i> 
                  </span> Buy
                </button>
                </NavLink>
          
                <button className="wishlist-btn" onClick={handleWishlistClick}>
                  <span className={`heartpage ${isLiked ? "likedpage" : ""}`}>
                    <i className="fas fa-heart"></i>
                  </span> Wishlist
                </button>
              </div>
           </div>
           
        </div>
      ) : (
        <p>Animal not found!</p>
      )}
    </div>
    <AnimalList />
    <Review/>
    </>
  );
}
