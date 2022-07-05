import "./Nav.css";
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Navsocial from "./Navsocial";

export default function NavMain() {
  const contents = [
    {id: 1, title: 'PROJECT', url: 'introduce'},
    {id: 2, title: 'STORY', url: 'story'},
    {id: 3, title: 'PLAN', url: 'plan'},
    {id: 4, title: 'ROADMAP', url: 'roadmap'},
    {id: 5, title: 'TEAM', url: 'team'},
    {id: 6, title: 'PARTNER', url: 'partner'},
  ];

  function handleLanguage(e){
    var content_en = document.getElementsByClassName("content_en");
    var content_kr = document.getElementsByClassName("content_kr");
    for (var i=0;i<content_en.length;i++){
      content_en[i].classList.toggle("d-none");
      content_kr[i].classList.toggle("d-none");
    }
  }

  return (
    <Navbar className="py-3" expand="md" variant="dark" bg="black" fixed="top">
      <Link className="nav-link navbar-brand title-font" to="/#">
        <div className="display-5">GC3</div>
      </Link>
      <Navbar.Toggle aria-controls="navbar-collapse" />
      <Navbar.Collapse id="navbar-collapse" className="flex-row-reverse">
        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
          {contents.map((content) => 
            <li className="nav-item mx-3 mx-md-0" key={content.id}>
              <LinkScroll className="nav-link" activeClass="active" spy to={content.url} offset={-110}>
                {content.title}
              </LinkScroll>
            </li>
          )}
          <li className="nav-item fw-bold mx-3 my-auto">
            <a className="nav-link content_en" onClick={handleLanguage}>한국어</a>
            <a className="nav-link d-none content_kr" onClick={handleLanguage}>English</a>
          </li>
        </ul>
      </Navbar.Collapse>
      <Navsocial />
    </Navbar>
  );
}
