// src/Components/Registration.js

import React from "react";
import './Rag.css'; // Import CSS for styling

export default function Registration() {
  const [formData, setFormData] = React.useState({
    category: '',
    breed: '',
    age: '',
    place: '',
    seller_name: '',
    price: '',
    image: '',
    description: '',
    food_suggestions: '',
    medicine: '',
    care_suggestions: ''
  });

  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['category', 'breed', 'age', 'place', 'seller_name', 'price'];
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.replace('_', ' ').charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (formData.price && isNaN(formData.price)) {
      newErrors.price = 'Price must be a number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // appendAnimalData(formData); // Add the new data to animalData
      setSubmitted(true);
      setFormData({
        category: '',
        breed: '',
        age: '',
        place: '',
        seller_name: '',
        price: '',
        image: '',
        description: '',
        food_suggestions: '',
        medicine: '',
        care_suggestions: ''
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Pet Registration</h2>
      <div className="form-group category">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="rabbit">Rabbit</option>
          <option value="hamster">Hamster</option>
          <option value="bird">Bird</option>
        </select>
        {errors.category && <div className="error">{errors.category}</div>}
      </div>
      <div className="form-group breed">
        <label htmlFor="breed">Breed</label>
        <input type="text" id="breed" name="breed" value={formData.breed} onChange={handleChange} />
        {errors.breed && <div className="error">{errors.breed}</div>}
      </div>
      <div className="form-group age">
        <label htmlFor="age">Age</label>
        <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} />
        {errors.age && <div className="error">{errors.age}</div>}
      </div>
      <div className="form-group place">
        <label htmlFor="place">Place</label>
        <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} />
        {errors.place && <div className="error">{errors.place}</div>}
      </div>
      <div className="form-group seller-name">
        <label htmlFor="seller_name">Seller Name</label>
        <input type="text" id="seller_name" name="seller_name" value={formData.seller_name} onChange={handleChange} />
        {errors.seller_name && <div className="error">{errors.seller_name}</div>}
      </div>
      <div className="form-group price">
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
        {errors.price && <div className="error">{errors.price}</div>}
      </div>
      <div className="form-group image">
        <label htmlFor="image">Image URL</label>
        <input type="url" id="image" name="image" value={formData.image} onChange={handleChange} />
      </div>
      <div className="form-group description">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div className="form-group food-suggestions">
        <label htmlFor="food_suggestions">Food Suggestions</label>
        <textarea id="food_suggestions" name="food_suggestions" value={formData.food_suggestions} onChange={handleChange} />
      </div>
      <div className="form-group medicine">
        <label htmlFor="medicine">Medicine</label>
        <textarea id="medicine" name="medicine" value={formData.medicine} onChange={handleChange} />
      </div>
      <div className="form-group care-suggestions">
        <label htmlFor="care_suggestions">Care Suggestions</label>
        <textarea id="care_suggestions" name="care_suggestions" value={formData.care_suggestions} onChange={handleChange} />
      </div>
      <button type="submit" className="submit-button">Register Pet</button>
      {submitted && <div className="success-message">Pet registration successful!</div>}
    </form>
  );
}
