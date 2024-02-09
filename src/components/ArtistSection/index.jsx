import React, { useState } from 'react';
import './style.css';
import { BsCaretRightFill, Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill, Bs5CircleFill } from 'react-icons/bs';
import { Card, Button } from 'react-bootstrap';

const ArtistSection = ({ artistData }) => {

  // If artist data is not fully available, return null
  if (!artistData || !artistData.lastfm || !artistData.albums || !artistData.tracks) {
    return null;
  }

  const { artist } = artistData.lastfm;
  const { topalbums } = artistData.albums;
  const { toptracks } = artistData.tracks;
  const artistImage = artistData.artistImage;

  const bioContent = artist.bio.content;
  // Removes unwanted a tag
  const bioWithoutLink = bioContent.split('<a')[0];

  // Extract the first 5 sentences from the biography
  const bioSentences = bioWithoutLink.split('.').filter(sentence => sentence.trim() !== '');
  const initialBio = bioSentences.slice(0, 5).join('. ') + '.';

  // State to track whether full biography is displayed
  const [expanded, setExpanded] = useState(false);
  const [bio, setBio] = useState(initialBio);

  // Function to expand the biography
  const handleReadMore = () => {
    setBio(bioContent);
    setExpanded(true);
  };

// Function to hide the extra biography
const handleHideBio = () => {
  setBio(initialBio);
  setExpanded(false);
};

  // Extract the first 5 albums and tracks
  const topAlbums = topalbums.album.slice(0, 5);
  const topTracks = toptracks.track.slice(0, 5);
  // Format the number of listeners with commas
  const formattedListeners = parseInt(artist.stats.listeners, 10).toLocaleString();
  // Format the number of playcount with commas
  const formattedPlaycount = parseInt(artist.stats.playcount, 10).toLocaleString();
  
  //DELETE THESE WHEN WE'RE HAPPY THEY WORK
  console.log('artistData:', artistData);
  console.log('artist:', artist);
  console.log('albums:', topalbums);
  console.log('tracks:', toptracks);
  console.log('image:', artistImage);
  return (
    <div className="artist-section">
      {/* Artist name */}
      <h2>{artist.name}</h2>
      {/* Image - need to check CORS error */}
      {artistImage && (
        <img src={artistImage} alt={artist.name} />
      )}
      {/* Genres section */}
      {artist.tags && (
        <div>
          <h3>Genres:</h3>
          <ul className='genres-list'>
            {artist.tags.tag.map((tag, index) => (
              <li key={index}>
                <BsCaretRightFill className="icon" />
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Album section */}
      <div>
        <h3>Top 5 Albums:</h3>
        <ul className="album-list">
          {topAlbums.map((album, index) => (
            <li key={album.name}>
              {index === 0 && <Bs1CircleFill className="icon" />}
              {index === 1 && <Bs2CircleFill className="icon" />}
              {index === 2 && <Bs3CircleFill className="icon" />}
              {index === 3 && <Bs4CircleFill className="icon" />}
              {index === 4 && <Bs5CircleFill className="icon" />}
              <span>{album.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Top 5 Songs:</h3>
        <ul className="track-list">
          {topTracks.map((track, index) => (
            <li key={track.name}>
              {index === 0 && <Bs1CircleFill className="icon" />}
              {index === 1 && <Bs2CircleFill className="icon" />}
              {index === 2 && <Bs3CircleFill className="icon" />}
              {index === 3 && <Bs4CircleFill className="icon" />}
              {index === 4 && <Bs5CircleFill className="icon" />}
              <span>{track.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Biography */}
      {artist.bio && (
        <div>
          <h3>Biography:</h3>
          <p>
            {bio}
            {!expanded && <button onClick={handleReadMore}>Read More</button>}
            {expanded && <button onClick={handleHideBio}>Hide</button>}
          </p>
          <a href={artist.url} target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      )}
      {/* Listeners section */}
      {artist.stats && (
        <div>
          <h3>Listeners:</h3>
          <p>{formattedListeners}</p>
        </div>
      )}
      {/* Playcount section */}
      {artist.stats && (
        <div>
          <h3>Playcount:</h3>
          <p>{formattedPlaycount}</p>
        </div>
      )}
    </div>
  );
};

export default ArtistSection;