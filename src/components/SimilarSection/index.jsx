import React from 'react';
// import './style.css';
import { BsCaretRightFill } from "react-icons/bs"

const SuggestionsSection = ({ artistData }) => {
  // Check if artistData and Last.fm data exist
  if (!artistData || !artistData.lastfm || !artistData.lastfm.artist || !artistData.lastfm.artist.similar) {
    return null;
  }
  // Access the similar tags array
  const similarArtists = artistData.lastfm.artist.similar.artist;

  return (
    <div className="suggestions-section">
      <h2>Similar Artists:</h2>
      <ul className="similar-artists-list">
        {similarArtists.map((artist, index) => (
          <li key={index}>
            <BsCaretRightFill className="icon" />
            {artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SuggestionsSection;