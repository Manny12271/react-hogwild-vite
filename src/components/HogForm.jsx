import { useState } from "react";

function HogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": ""
  });

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newHog = {
      ...formData,
      weight: Number(formData.weight),
    };
    addHog(newHog);

    // Reset form
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": ""
    });
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h2>New Hog</h2> 

      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          name="image"
          type="text"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input
          id="specialty"
          name="specialty"
          type="text"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          name="weight"
          type="number"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="greased">Greased?</label>
        <input
          id="greased"
          name="greased"
          type="checkbox"
          checked={formData.greased}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="highest medal achieved">Medal:</label>
        <input
          id="highest medal achieved"
          name="highest medal achieved"
          type="text"
          value={formData["highest medal achieved"]}
          onChange={handleChange}
        />
      </div>

      <button className="ui green button" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;