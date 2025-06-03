import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import petData from '../Data/Data.js';
import './Search.css';

export default function SearchBar() {
  const [isSearchActive, setIsSearchActive] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  // const handleSearchClick = () => {
  //   setIsSearchActive(true);
  // };
  const navigate = useNavigate();
  const handleCloseSearch = () => {
    setIsSearchActive(false);
    setSearchTerm('');
    setSuggestions([]);
    navigate(-1)
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim()) {
      const filtered = petData().filter(animal => 
        animal.breed.toLowerCase().includes(value.toLowerCase()) ||
        animal.category.toLowerCase().includes(value.toLowerCase()) ||
        animal.description.toLowerCase().includes(value.toLowerCase()) ||
        animal.place.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
     <div className={`search-overlay ${isSearchActive ? 'active' : ''}`}>
        <div className="search-input-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search pets, locations, or breeds..." 
            autoFocus={isSearchActive}
            value={searchTerm}
            onChange={handleSearchInput}
          />
          <button className="close-search" onClick={handleCloseSearch}>×</button>
          
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((animal) => (
                <NavLink to={`/adoptly/${animal.category.toLowerCase()}/${animal.id}`}>
                <div key={animal.id} className="suggestion-item">
                  <div className="suggestion-image">
                    <img src={animal.image} alt={animal.breed} />
                  </div>
                  <div className="suggestion-content">
                    <div className="suggestion-header">
                      <span className="suggestion-breed">{animal.breed}</span>
                      <span className="suggestion-price">₹{animal.price}</span>
                    </div>
                    <div className="suggestion-category">{animal.category}</div>
                    <div className="suggestion-location">{animal.place}</div>
                    <div className="suggestion-description">{animal.description}</div>
                    <div className="suggestion-details">
                      <div className="suggestion-age">Age: {animal.age} years</div>
                      <div className="suggestion-care">
                        <strong>Care:</strong> {animal.care_suggestions}
                      </div>
                    </div>
                  </div>
                </div></NavLink>
              ))}
            </div>
          )}
          
        </div>
      </div>
      </div>
      
    );
  };
