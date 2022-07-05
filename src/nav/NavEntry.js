import "./Nav.css";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Navsocial from "./Navsocial";

export default function NavEntry() {
  return (
    <Navbar className="py-3 justify-content-between" expand="md" variant="dark">
      <Link className="nav-link text-white title-font" to="/">
        <div className="display-5">Great Cat Charity Club</div>
      </Link>
      <Navsocial />
    </Navbar>
  );
}
