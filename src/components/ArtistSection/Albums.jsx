import { Container, Card, Row, Col, Image } from 'react-bootstrap';

function Albums({ album, index }) {
    return (
        <Col key={index} className="album-item text-center border-orange">
            <Card className="artist-albums p-3 mb-3" data-bs-theme="dark" style={{ width: '18rem' }}>
                    <Card.Img src={album.image[2]['#text']} alt={album.name} />
                <Card.Body>
                    <Card.Title className="album-name">{album.name}</Card.Title>
                    <Card.Text className="album-playcount" style={{ color: 'var(--bs-gray-500)' }}> {parseInt(album.playcount, 10).toLocaleString()} <span style={{ fontWeight: "200" }}>Playcount</span></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}


export default Albums;