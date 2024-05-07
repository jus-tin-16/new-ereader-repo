import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';\
import {ThemeProvider} from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Lessons1 = ({setcurrentPage}) => {
    const test = ['1', '2'];
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
            <Container>
                
            </Container>
        </ThemeProvider>
    );
};