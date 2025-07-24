import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="ui eight wide column" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="ui card" aria-label="hog card">
        <div className="image">
          <img src={hog.image} alt={`Photo of ${hog.name}`} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>

          {showDetails && (
            <div className="description">
              <p>Specialty: {hog.specialty}</p>
              <p>{hog.weight}</p> 
              <p>{hog.greased ? "Greased" : "Nongreased"}</p>
              <p>{hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
        <div className="extra content">
          <button className="ui red button" onClick={(e) => {
            e.stopPropagation();
            onHide(hog.name);
          }}>
            Hide Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogCard;