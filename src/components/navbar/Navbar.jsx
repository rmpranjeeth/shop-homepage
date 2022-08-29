import {
  faHouse,
  faCartShopping,
  faFileLines,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
const Navbars = ({ setShow, size }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Nav.Link onClick={() => setShow(true)}>Ranjeethmart</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => setShow(true)}>
              <FontAwesomeIcon icon={faHouse} /> Home
            </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faFileLines} /> All Catagory
            </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faFileLines} /> Trending Stores
            </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faSquarePlus} /> Offer Zone
            </Nav.Link>
            <Nav.Link onClick={() => setShow(false)}>
              <FontAwesomeIcon icon={faCartShopping} /> Cart
              <Badge bg="secondary">{size}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
