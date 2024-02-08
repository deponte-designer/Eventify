import React from 'react';
import './style.css';

const ArtistSection = ({ artistData }) => {
  if (!artistData || !artistData.lastfm || !artistData.albums || !artistData.tracks || !artistData.artistImage) {
    return null;
  }

  const { artist } = artistData.lastfm;
  const { topalbums } = artistData.albums;
  const { toptracks } = artistData.tracks;
  const artistImage = artistData.artistImage;

  const bioContent = artist.bio.content;
  // Removes unwanted a tag
  const bioWithoutLink = bioContent.split('<a')[0];
  // Extract the first 5 albums and tracks
  const topAlbums = topalbums.album.slice(0, 5);
  const topTracks = toptracks.track.slice(0, 5);
// Format the number of listeners with commas
const formattedListeners = parseInt(artist.stats.listeners, 10).toLocaleString();
// Format the number of playcount with commas
const formattedPlaycount = parseInt(artist.stats.playcount, 10).toLocaleString();
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
          <ul>
            {artist.tags.tag.map((tag) => (
              <li key={tag.name}>{tag.name}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Album section */}
      <div>
        <h3>Top 5 Albums:</h3>
        <ul>
          {topAlbums.map((album) => (
            <li key={album.name}>{album.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Top 5 Songs:</h3>
        <ul>
          {topTracks.map((track) => (
            <li key={track.name}>{track.name}</li>
          ))}
        </ul>
      </div>

{/* Bio section */}
      {artist.bio && (
        <div>
          <h3>Biography:</h3>
          <p dangerouslySetInnerHTML={{ __html: bioWithoutLink }}></p>
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