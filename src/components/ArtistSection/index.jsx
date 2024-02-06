import React from 'react';
import './style.css';

const ArtistSection = () => {
    // Sample data
    const artistData = {
        name: 'The Black Keys',
        famousSongs: ['Song 1', 'Song 2', 'Song 3'],
        famousAlbums: ['Album 1', 'Album 2'],
        images: ['image1.jpg', 'image2.jpg'],
        sampleSongs: ['Song 1', 'Song 2']
    };

    return (
        <div className="artist-section-container">
            <h2>{artistData.name}</h2>

            {/* Songs */}
            <div>
                <h3>Top Songs</h3>
                <ul>
                    {artistData.famousSongs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            </div>

            {/* Albums */}
            <div>
                <h3>Top Albums</h3>
                <ul>
                    {artistData.famousAlbums.map((album, index) => (
                        <li key={index}>{album}</li>
                    ))}
                </ul>
            </div>

            {/* Albums */}
            <div>
                <h3>Sample Songs</h3>
                <ul>
                    {artistData.sampleSongs.map((sample, index) => (
                        <li key={index}>{sample}</li>
                    ))}
                </ul>
            </div>

            {/* Images */}
            <div>
                <h3>Images</h3>
                <div>
                    {artistData.images.map((image, index) => (
                        <img key={index} src={image} alt={`Artist Image ${index + 1}`} />
                    ))}
                </div>
            </div>


        </div>
    );
};

export default ArtistSection;