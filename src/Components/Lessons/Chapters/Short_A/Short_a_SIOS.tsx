import { Container } from 'react-bootstrap';
import {ThemeProvider} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Stack} from 'react-bootstrap';

const Short_a_SIOS = ({setCurrentPage}) => {
    const test = ['1', '2'];
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
            <Container fluid="sm" style={{padding: '20px'}}>
                <Row>
                    <Col>
                        <h1>Short 'a'</h1>
                        Word Awareness, Syllable Blending, Syllable Counting, Rhyme.
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">
                        <Container style={{width: '1328px',height: '720px', justifyContent: 'center', border: '1px solid black'}}></Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button variant="secondary" onClick={() => setCurrentPage("Short_a")} size="lg"> Go Back </Button>
                    </Col>
                    <Col>
                    <Button variant="primary" style={{alignContent: 'right'}} size="lg"> Take Quiz </Button>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default Short_a_SIOS;