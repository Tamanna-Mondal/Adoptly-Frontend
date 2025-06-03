import React, { useState, useEffect, useRef } from "react";
import AllData from "../Data/Data";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function AnimalList() {
    const [speficAnimal, setSpeficAnimal] = useState([]);
    const cardsRef = useRef([]);

    useEffect(() => {
        const Data = AllData();

        const categories = ["Dog", "Cat", "Rabbit", "Bird", "Tiger", "Lion"];
        const uniqueAnimals = categories.map(category =>
            Data.find(animal => animal.category === category)
        );

        const limitedAnimals = Data.slice(0, 6);
        setSpeficAnimal(limitedAnimals); 
    }, []);

    useEffect(() => {
        if (speficAnimal.length > 0) {
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(card,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: index * 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 80%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                }
            });
        }
    }, [speficAnimal]);

    return (
        <div>
            {speficAnimal.length > 0 && (
                <div className="animal">
                    {speficAnimal.map((animal, idx) =>
                        animal ? (
                            <NavLink key={idx} to={`/adoptly/${animal.category}`}>
                                <div
                                    className="animal-card"
                                    ref={el => cardsRef.current[idx] = el}
                                >
                                    <img src={animal.image} alt={animal.breed} />
                                    <i>{animal.category}</i>
                                    <p>Breed : {animal.breed}</p>
                                    <p>{animal.place}</p>
                                </div>
                            </NavLink>
                        ) : null
                    )}
                </div>
            )}
        </div>
    );
}
