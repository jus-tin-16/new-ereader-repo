import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import Sidebar from './Components/Sidebar/sidebar';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DashBoard from './Components/Pages/DashBoard';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('DashBoard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <Navbar  fixed="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Sidebar setCurrentPage={setCurrentPage} sendToggle={toggleSidebar}/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" style={{position: 'absolute', right: '62px'}}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <Container fluid style={isSidebarOpen ?  ({ marginTop: '50px', position: 'relative', right: '200px'}) : ({padding: '50px'})}>
          <Row>
              <Col>
                {currentPage === 'DashBoard' && <DashBoard setCurrentPage={setCurrentPage}/>}
                {currentPage === 'Assessment' && <Assessment setCurrentPage={setCurrentPage}/>}
                {currentPage === 'Lessons' && <Lessons setCurrentPage={setCurrentPage}/>}
                {currentPage === 'Lesson1' && <Lesson1 setCurrentPage={setCurrentPage}/>}
                {currentPage === 'Short_a' && <Short_a setCurrentPage={setCurrentPage}/>}
                {currentPage === 'OralAssessment' && <OralAssessment setCurrentPage={setCurrentPage}/>}
            </Col>
          </Row>
        </Container>
    </ThemeProvider>
  );
};

export default App;