import React from 'react';
import './style.css'; 

const SuggestionsSection = ({ artistData }) => {
  // Check if artistData and Last.fm data exist
  if (!artistData || !artistData.lastfm || !artistData.lastfm.artist|| !artistData.lastfm.artist.similar) {
    return null;
  }
 
  // Access the similar tags array
  const similarTags = artistData.lastfm.artist.similar.artist;
  console.log('similarTags:',similarTags);
  return (
    <div className="suggestions-section">
      <h2>Similar Artists:</h2>
      <ul>
        {similarTags.map((tag, index) => (
          <li key={index}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsSection;