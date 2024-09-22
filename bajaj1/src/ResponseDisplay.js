// src/components/ResponseDisplay.js
import React from "react";

const ResponseDisplay = ({
  response,
  selectedCategories,
  setSelectedCategories,
}) => {
  if (!response) return null;

  const handleCategoryChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter(category => category !== value)
      );
    }
  };

  const renderData = () => {
    if (response.error) return <p>{response.error}</p>;

    return (
      <div>
        {selectedCategories.includes("Alphabets") && (
          <div>
            <h3>Alphabets:</h3>
            <p>{response.alphabets.join(", ")}</p>
          </div>
        )}
        {selectedCategories.includes("Numbers") && (
          <div>
            <h3>Numbers:</h3>
            <p>{response.numbers.join(", ")}</p>
          </div>
        )}
        {selectedCategories.includes("Highest alphabet") && (
          <div>
            <h3>Highest Alphabet:</h3>
            <p>{response.highest_alphabet.join(", ")}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h2>Response:</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="Alphabets"
            onChange={handleCategoryChange}
          />
          Alphabets
        </label>
        <label>
          <input
            type="checkbox"
            value="Numbers"
            onChange={handleCategoryChange}
          />
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            value="Highest alphabet"
            onChange={handleCategoryChange}
          />
          Highest alphabet
        </label>
      </div>
      {renderData()}
    </div>
  );
};

export default ResponseDisplay;
