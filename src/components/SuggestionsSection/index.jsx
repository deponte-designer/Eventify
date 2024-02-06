import React from 'react';
import './style.css'; 

const SuggestionsSection = () => {
    // Sample data for demonstration purposes
    const suggestionsData = [
      'Suggestion 1',
      'Suggestion 2',
      'Suggestion 3',
      'Suggestion 4',
    ];
  
    return (
      <div className="suggestions-section-container">
        <h2>Suggestions</h2>
  
        {/*Suggestions */}
        <ul>
          {suggestionsData.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
  
      </div>
    );
  };



export default SuggestionsSection;