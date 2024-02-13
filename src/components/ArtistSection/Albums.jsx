import Col from 'react-bootstrap/Col';
function Albums({ album, index }) {
    return (
        <Col key={index} className="album-item">
            <div className="album-content">
                <div className="album-name">{album.name}</div>
                <div className="album-cover">
                    <img src={album.image[2]['#text']} alt={album.name} />
                </div>
                <div className="album-playcount">Playcount: {parseInt(album.playcount, 10).toLocaleString()}</div>
            </div>
        </Col>
    )
}

export default Albums