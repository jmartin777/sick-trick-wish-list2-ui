import React, { useState } from 'react';
import './Form.css';

function Form({ onAddTrick }) {
  const [formData, setFormData] = useState({
    stance: '',
    name: '',
    obstacle: '',
    tutorial: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTrick(formData);
    setFormData({
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Trick</h2>
      <label>
        Stance:
        <select name="stance" value={formData.stance} onChange={handleChange}>
          <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
        </select>
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Obstacle:
        <select name="obstacle" value={formData.obstacle} onChange={handleChange}>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
        </select>
      </label>
      <label>
        Tutorial:
        <input type="text" name="tutorial" value={formData.tutorial} onChange={handleChange} />
      </label>
      <button type="submit">SEND IT</button>
    </form>
  );
}

export default Form;
