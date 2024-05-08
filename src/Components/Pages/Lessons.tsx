import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ThemeProvider} from 'react-bootstrap';

const Lessons = ({setCurrentPage}) => {
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
            <Container>
                <Row>
                    <h1 className="text-dark" style={{fontSize: '120px', width: '1200px', paddingRight: '120px',  textAlign: 'center'}}>Time to Learn!</h1>
                </Row>
                <Row>
                    <Col class="col-md-5 col-md-offset-2">
                        <Card border="success" style={{ width: '30rem' }}> 
                            <Card.Body>
                                <Card.Title>Module 1: Letter Sounds</Card.Title>
                                <Card.Text>Word Awareness, Syllable Blending, Syllable Counting, Rhyme.</Card.Text>
                                <Button variant="success"  onClick={() => setCurrentPage("Lesson1")} size='lg'style={{position: "relative", left: "300px", fontWeight: 'bold'}}>Let's Begin!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col class='col-md-2'>
                        <Card border="success" style={{ width: '30rem' }}> 
                            <Card.Body>
                                <Card.Title>Module 2: Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, </Card.Text>
                                <Button variant="success"  onClick={() => setCurrentPage("Assessment")} size='lg'style={{position: "relative", left: "220px", fontWeight: 'bold'}}>Challenge Accepted!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default Lessons;