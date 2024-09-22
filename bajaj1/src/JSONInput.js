// src/components/JSONInput.js
import React, { useState } from "react";

const JSONInput = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const handleChange = e => {
    setInput(e.target.value);
    setError(null);
  };

  const handleSubmit = e => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(input);
      if (Array.isArray(parsedData.data)) {
        onSubmit(parsedData);
      } else {
        setError('Invalid JSON format: "data" should be an array.');
      }
    } catch (err) {
      setError("Invalid JSON format.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Enter JSON data here..."
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default JSONInput;
