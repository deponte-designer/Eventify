import React, { useState, useEffect } from 'react';
import { BsCaretRightFill, Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill, Bs5CircleFill } from 'react-icons/bs';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Albums from './Albums'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


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
  // console.log('artistData:', artistData);
  // console.log('artist:', artist);
  // console.log('albums:', topalbums);
  // console.log('tracks:', toptracks);
  // console.log('image:', artistImage);

  return (
    <Container className="mt-5">
      <div className="artist-section">
        <Container className="mb-4" style={{ background: '' }} >

          <Card className="artist-bio-card p-4" data-bs-theme="dark">
            <Row>
              <Col sm={12} md={3} className="artist-img">
                {artistImage && (
                  <Image src={artistImage} alt={artist.name} className="img-fluid" style={{ width: '300px', objectFit: 'cover', marginLeft: 0, marginRight: 0 }} />
                )}
              </Col>

              <Col sm={12} md={5} className="artist-name" >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <RiVerifiedBadgeFill style={{ color: 'var(--purpleSoft)', marginRight: '5px', marginBottom: '10px' }} />
                  <p style={{ margin: '0' }}>Profile</p>
                </div>
                <h2 style={{ color: 'var(--orangeGold)' }}>{artist.name}</h2>
                <div className="listeners-playcount">
                  <p style={{ marginTop: '-5px' }}> {formattedListeners} <span style={{ fontWeight: "200" }}>Listeners </span> &sdot; {formattedPlaycount} <span style={{ fontWeight: "200" }}>Playcount</span></p>
                </div>
              </Col>

              <Col sm={12} md={4} className="artist-top-songs">
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
              </Col>
            </Row>

            <Row>
              {artist.bio && (
                <div>
                  <h3>Biography</h3>
                  <p>
                    {bio}&nbsp;&nbsp;&nbsp;
                    {!expanded && <button onClick={handleReadMore} variant="outline-success" className="btn-outline-purple">Read More</button>}
                    {expanded && <button onClick={handleHideBio} variant="outline-success" className="btn-outline-purple">Hide</button>}
                  </p>
                  <Button variant="outline-success" className="btn-outline-purple" size="sm" style={{ borderRadius: '1rem' }}>
                    <a href={artist.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--purpleGhost)' }}>More about</a>
                    <FaArrowUpRightFromSquare style={{ marginLeft: '5px' }} />
                  </Button>
                </div>
              )}
            </Row>
          </Card>
        </Container>


        {/* Album section */}
        <Container className="mb-4 border-green">
          <h3 className="text-center">Top Albums</h3>
            <Row className="g-4 album-list border-blue">
              {topAlbumData.map((album, i) => (
                <Albums album={album} key={i} />
              ))}
            </Row>
        </Container>


        {/* Genres section */}
        {artist.tags && (
          <Container fluid className="mb-4 border-yellow">
            <h3 className="text-center">Genres</h3>
            <Card className="artist-genres p-4" data-bs-theme="dark">
              <Row className='genres-list'>
                {artist.tags.tag.map((tag, index) => (
                  <Col key={index}>
                    <BsCaretRightFill className="icon" />
                    {tag.name}
                  </Col>
                ))}
              </Row>
            </Card>
          </Container>

        )}

      </div>
    </Container >
  );
};
export default ArtistSection;