import React, { useState, useEffect } from 'react';
// import './style.css';
import { BsCaretRightFill, Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill, Bs5CircleFill } from 'react-icons/bs';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Albums from './Albums'


let ArtistSection = ({ artistData }) => {
  // If artist data is not fully available, return null
  if (!artistData || !artistData.lastfm || !artistData.albums || !artistData.tracks) {
    return null;
  }

  let { artist } = artistData.lastfm;
  let { topalbums } = artistData.albums;
  let { toptracks } = artistData.tracks;
  let artistImage = artistData.artistImage;
  let bioContent = artist.bio.content;

  // Removes unwanted a tag
  let bioWithoutLink = bioContent.split('<a')[0];
  // Extract the first 5 sentences from the biography
  let bioSentences = bioWithoutLink.split('.').filter(sentence => sentence.trim() !== '');
  let initialBio = bioSentences.slice(0, 5).join('. ') + '.';
  // State to track whether full biography is displayed
  let [expanded, setExpanded] = useState(false);
  let [bio, setBio] = useState(initialBio);
  // Function to expand the biography
  let handleReadMore = () => {
    setBio(bioContent);
    setExpanded(true);
  };
  // Function to hide the extra biography
  let handleHideBio = () => {
    setBio(initialBio);
    setExpanded(false);
  };

  // Reset bio and expanded state when artistData changes
  useEffect(() => {
    setBio(initialBio);
    setExpanded(false);
  }, [artistData]);

  // Extract the first 5 albums and tracks
  let topAlbumData = topalbums.album.slice(0, 5);
  let topTracks = toptracks.track.slice(0, 5);

  // Format the number of listeners with commas
  let formattedListeners = parseInt(artist.stats.listeners, 10).toLocaleString();
  // Format the number of playcount with commas
  let formattedPlaycount = parseInt(artist.stats.playcount, 10).toLocaleString();
  //DELETE THESE WHEN WE'RE HAPPY THEY WORK
  console.log('artistData:', artistData);
  console.log('artist:', artist);
  console.log('albums:', topalbums);
  console.log('tracks:', toptracks);
  console.log('image:', artistImage);
  return (
    <Container className="mt-5">

      <div className="artist-section border-yellow">
        {/* add a background */}
        <Container className="p-2 border-pink" rounded style={{ background: 'blue' }} >
          <Row>
            {/* Image */}
            <Col sm={12} md={3}>
              <div className="artist-image">
                {artistImage && (
                  <Image src={artistImage} alt={artist.name} className="img-fluid" style={{ width: '300px', objectFit: 'cover', marginLeft: 0, marginRight: 0 }} />
                )}
              </div>
            </Col>

            <Col sm={12} md={5}>
              <div className="border-green">
                {/* Artist name */}
                <h2>{artist.name}</h2>
              </div>
              {/* Listeners, playcount and top 5 songs */}
              <div className="listeners-playcount">
                <p> {formattedListeners} Listeners {formattedPlaycount} Playcount </p>
              </div>
            </Col>


                <Col sm={12} md={4}>
                  <div className="top-songs">
                    <h3>Top 5 Songs</h3>
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
                <Albums album={album} key={i} />
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
    </Container>
  );
};
export default ArtistSection;