import React, { useEffect, useState, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AllData from "../Data/Data";
import './ShowPage.css';
import Review from "../ReviewPage/Review";
import AllPageBanner from "../BannerPage/AllPageBanner";

gsap.registerPlugin(ScrollTrigger);

export default function ShowPage() {
    const { category } = useParams(); 
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const cardsRef = useRef([]);

    useEffect(() => {
        const Data = AllData();
        const animals = Data.filter(animal => animal.category === category);
        setFilteredAnimals(animals);
    }, [category]);

    useEffect(() => {
        if (filteredAnimals.length > 0) {
            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(card, 
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%", 
                           
                        }
                    }
                );
            });
        }
    }, [filteredAnimals]);

    return (
        <div>
            <AllPageBanner />
            <div className="animal-main">
                {filteredAnimals.length > 0 ? (
                    filteredAnimals.map((animal, idx) => (
                        <NavLink key={idx} to={`/adoptly/${animal.category.toLowerCase()}/${animal.id}`}>
                            <div
                                className="animal-main-card"
                                ref={el => cardsRef.current[idx] = el}
                            >
                                <img src={animal.image} alt={animal.breed} />
                                <h3>{animal.breed}</h3>
                                <p>Age: {animal.age}</p>
                                <p>Place: {animal.place}</p>
                                <p>Price: ₹{animal.price}</p>
                            </div>
                        </NavLink>
                    ))
                ) : (
                    <p>Sorry, no animals found in this category.</p>
                )}
            </div>
            <Review />
        </div>
    );
}
