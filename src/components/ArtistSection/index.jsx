import React, { useState } from 'react';
import './style.css';
import { BsCaretRightFill, Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill, Bs5CircleFill } from 'react-icons/bs';
import { Card, Button } from 'react-bootstrap';
// import { Container } from 'react-bootstrap/lib/Tab.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Albums from './Albums'


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
  const topAlbumData = topalbums.album.slice(0, 5);
  // console.log('top albums', topAlbumData);
  const topTracks = toptracks.track.slice(0, 5);
  // Format the number of listeners with commas
  const formattedListeners = parseInt(artist.stats.listeners, 10).toLocaleString();
  // Format the number of playcount with commas
  const formattedPlaycount = parseInt(artist.stats.playcount, 10).toLocaleString();
  //DELETE THESE WHEN WE'RE HAPPY THEY WORK
  // console.log('artistData:', artistData);
  // console.log('artist:', artist);
  // console.log('albums:', topalbums);
  // console.log('tracks:', toptracks);
  // console.log('image:', artistImage);
  return (

    <div className="artist-section">
      <div>
        {/* Artist name */}
        <h2>{artist.name}</h2>
      </div>
      <Container>

        <Row>
          {/* Image */}
          <Col sm={12} md={4}>
            <div className="artist-image">
              {artistImage && (
                <img src={artistImage} alt={artist.name} className="img-fluid" style={{ marginLeft: 0, marginRight: 0 }} />
              )}
            </div>
          </Col>
          {/* Listeners, playcount and top 5 songs */}
          <Col sm={12} md={8}>
            <Row>
              <Col sm={12} md={6}>
                <div className="listeners-playcount">
                  <h3>Listeners:</h3>
                  <p>{formattedListeners}</p>
                  <h3>Playcount:</h3>
                  <p>{formattedPlaycount}</p>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="top-songs">
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
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

      {/* Album section */}
      <div>
        <h3>Top Albums:</h3>
        <Container className="album-list-container">
          <Row className="album-list">
            {topAlbumData.map((album, i) => (
              <Albums album={album} index={i} />
            ))}
          </Row>
        </Container>
      </div>

      {/* Genres section */}
      {artist.tags && (
        <div>
          <h3>Genres:</h3>
          <Container className="genre-list-container">
            <Row className='genres-list'>
              {artist.tags.tag.map((tag, index) => (
                <Col key={index}>
                  <BsCaretRightFill className="icon" />
                  {tag.name}
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}

    </div>
  );
};
export default ArtistSection;