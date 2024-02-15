import { Container, Card, Row, Col, Image } from 'react-bootstrap';

function Albums({ album, index }) {
    return (
        // <Col key={index} xs={12} md={6} lg={4} className="album-item text-center border-orange">
            <Card key={index} xs={12} md={6} lg={4} className="artist-albums album-item text-center p-3 me-2" data-bs-theme="dark" style={{ width: '18rem' }}>
                    <Card.Img src={album.image[2]['#text']} alt={album.name} />
                <Card.Body>
                    <Card.Title className="album-name">{album.name}</Card.Title>
                    <Card.Text className="album-playcount" style={{ color: 'var(--bs-gray-500)' }}> {parseInt(album.playcount, 10).toLocaleString()} <span style={{ fontWeight: "200" }}>Playcount</span></Card.Text>
                </Card.Body>
            </Card>
        // </Col>
    )
}


export default Albums;