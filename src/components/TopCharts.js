import { Row, Container, Card } from 'react-bootstrap';

function TopCharts() {
    return (
        <Container className="homePageDiv">
            <h2 className="homeDivTitle">Top Songs</h2>
            <Row className="mx-2 row row-cols-5">
                <Card>
                    <Card.Body>
                    <Card.Img src="https://imgs.goldradiouk.com/images/67343?width=1480&crop=1_1&signature=FelJjffMewZta_5ioShiDdPQ95U=" />
                        <Card.Title>Test</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Img src="https://imgs.goldradiouk.com/images/67343?width=1480&crop=1_1&signature=FelJjffMewZta_5ioShiDdPQ95U=" />
                        <Card.Title>Test</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Img src="https://imgs.goldradiouk.com/images/67343?width=1480&crop=1_1&signature=FelJjffMewZta_5ioShiDdPQ95U=" />
                        <Card.Title>Test</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Img src="https://imgs.goldradiouk.com/images/67343?width=1480&crop=1_1&signature=FelJjffMewZta_5ioShiDdPQ95U=" />
                        <Card.Title>Test</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Img src="https://imgs.goldradiouk.com/images/67343?width=1480&crop=1_1&signature=FelJjffMewZta_5ioShiDdPQ95U=" />
                        <Card.Title>Test</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default TopCharts;