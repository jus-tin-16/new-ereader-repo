import React from 'react';
import { Container } from 'react-bootstrap';
import {ThemeProvider} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Short_a = ({setCurrentPage}) => {
    const test = ['1', '2'];
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
            <Container fluid style={{backgroundColor: 'red'}}>
                <Row>
                    <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                    </Card>    
                    <Col>
                        <h1>Short 'a'</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default Short_a;