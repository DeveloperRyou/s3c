import "./Navhead.css";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Navhead() {
  const contents = [
    {id: 1, title: 'PROJECT', url: 'introduce'},
    {id: 2, title: 'STORY', url: 'story'},
    {id: 3, title: 'PLAN', url: 'plan'},
    {id: 4, title: 'TEAM', url: 'team'},
    {id: 5, title: 'ROADMAP', url: 'roadmap'},
    {id: 6, title: 'PARTNER', url: 'partner'},
  ];

  return (
    <Container fluid>
      <Navbar className="py-3" expand="md" variant="dark">
        <Link className="nav-link navbar-brand title-font" to="/">
          <div className="display-5">SC3</div>
        </Link>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse" className="flex-row-reverse">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {contents.map((content) => 
              <li className="nav-item" key={content.id}>
                <Link className="nav-link" activeClass="active" spy to={content.url}>{content.title}</Link>
              </li>
            )}
          </ul>
        </Navbar.Collapse>
        <div className="navbar-nav d-none d-md-flex navSocial">
          <a href="https://twitter.com/SC3_M1/with_replies"><FontAwesomeIcon className="socialIcon" icon={faTwitter} /></a> &nbsp;
          <a href="https://t.me/StupidCatCharityClub"><FontAwesomeIcon className="socialIcon" icon={faTelegram} /></a> &nbsp;
          <a href="https://discord.gg/6r44wVKYjb"><FontAwesomeIcon className="socialIcon" icon={faDiscord} /></a>
        </div>
      </Navbar>
    </Container>
  );
}
