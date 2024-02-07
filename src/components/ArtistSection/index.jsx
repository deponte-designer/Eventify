import React from 'react';
import './style.css';

const ArtistSection = ({ artistData }) => {
    if (!artistData || !artistData.lastfm) {
      return null;
    }
    const { artist } = artistData.lastfm;

  return (
    <div className="artist-section">
      <h2>{artist.name}</h2>
      {artist.image && (
        <img src={artist.image[3]['#text']} alt={artist.name} />
      )}
      {artist.tags && (
        <div>
          <h3>Genres:</h3>
          <ul>
            {artist.tags.tag.map((tag) => (
              <li key={tag.name}>{tag.name}</li>
            ))}
          </ul>
        </div>
      )}
      {artist.bio && (
        <div>
          <h3>Biography:</h3>
          <p>{artist.bio.summary}</p>
        </div>
      )}
      {artist.stats && (
        <div>
          <h3>Listeners:</h3>
          <p>{artist.stats.listeners}</p>
        </div>
      )}
    </div>
  );
};
  
  export default ArtistSection;