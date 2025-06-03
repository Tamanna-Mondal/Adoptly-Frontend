import React, { useState } from "react";
import ChatBot from "react-chatbotify"; 
import { useNavigate } from "react-router-dom"; 
import petData from "../Data/Data"; 
import "./ChatBot.css";
const MyChatBot = () => {
  const [form, setForm] = useState({
    category: null,
    availablePets: [],
    selectedPet: null,
    selectedPetDetails: null,
  });

  const navigate = useNavigate(); // For navigation to other routes

  const fetchPetsFromAPI = async (category) => {
    if (typeof petData === "function") {
      const data = petData();
      return Array.isArray(data) ? data.filter((animal) => animal.category === category) : [];
    }
    return petData.filter((animal) => animal.category === category);
  };

  const flow = {
    start: {
      message: "Welcome to Adoptly! How can we help you today?",
      options: ["Adopt a Pet", "Work with Us"],
      path: (params) => (params.userInput === "Adopt a Pet" ? "select_pet_type" : "end"),
    },
    select_pet_type: {
      message: "What type of pet are you looking for?",
      options: ["Dog", "Cat", "Rabbit", "Hamster"],
      function: (params) => {
        setForm((prev) => ({ ...prev, category: params.userInput }));
        navigate(`/adoptly/${params.userInput}`); 
      },
    },
    end: {
      message: "Thank you for choosing Adoptly! We will contact you soon.",
      options: ["Start Over"],
      path: "start",
    },
  };

  return (
    <div className="chartbott">
          <ChatBot
      settings={{
        general: { embedded: true },
        chatHistory: { storageKey: "adoptly_chat_history" },
      }}
      flow={flow}
    />
    </div>
   
  );
};

export default MyChatBot;
