import {CardSubtitle, CardTitle, Row} from 'react-bootstrap';
import { ThemeProvider } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import img1 from '../Images/Number1.png';
import CIcon from '@coreui/icons-react';
import { cilArrowThickRight } from '@coreui/icons';

const Lesson1 = ({setCurrentPage}) => {
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
            <Container>
                <Row>
                    <h1 style={{ paddingTop: '20px',textAlign: 'left', fontSize: '92px' }}>Lesson 1: Learn the Letter Sounds</h1>
                </Row>
                <Row>
                    <p className="subHead">Word Awareness, Syllable Blending, Syllable Counting, Rhyme.</p>
                </Row>
                <Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={img1} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'a'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>a as in fan</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Short_a")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={img1} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'e'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>e as in jet</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={img1} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'i'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>i as in pig</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={img1} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'o'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>o as in dog</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={img1} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'u'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>u as in bug</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default Lesson1;