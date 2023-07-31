import { NavLink } from "react-router-dom";
import { Navbar, Container} from "react-bootstrap";
const Navigation = () => {
const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
return (
<>

<Navbar className="bg-info">
      <Container>
      <Navbar.Brand as={NavLink} to="/" className="nav-link">
            Pizzeria Mamma Mia!
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <NavLink className={`${setActiveClass} nav-link`} to="/cart">
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
            </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
);
}

export default Navigation