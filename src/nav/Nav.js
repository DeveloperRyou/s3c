import styles from "./Nav.module.css";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  const contents = [
    {id: 1, title: 'PROJECT', url: 'introduce'},
    {id: 2, title: 'STORY', url: 'story'},
    {id: 3, title: 'PLAN', url: 'plan'},
    {id: 4, title: 'TEAM', url: 'team'},
    {id: 5, title: 'ROADMAP', url: 'roadmap'},
    {id: 6, title: 'PARTNER', url: 'partner'},
  ];

  const lis = [];
  for (let i=0; i<contents.length; i++) {
    lis.push(
      <li className="nav-item" key={contents[i].id}>
        <Link className="nav-link" activeClass="active" smooth spy to={contents[i].url}>{contents[i].title}</Link>
      </li>
    )
  }

  return (
    <>
    <nav id={styles.navbar} className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="#" alt=""></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navbarSupportedContent}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {lis}
          </ul>
          <div className="navbar-nav" id={styles.navSocial}>
            <a href="https://www.instagram.com/stupidcatcharityclub/"><FontAwesomeIcon className={styles.socialIcon} icon={faInstagram} /></a> &nbsp;
            <a href="https://twitter.com/SC3_M1"><FontAwesomeIcon className={styles.socialIcon} icon={faTwitter} /></a> &nbsp;
            <a href="https://t.me/StupidCatCharityClub"><FontAwesomeIcon className={styles.socialIcon} icon={faTelegram} /></a> &nbsp;
            <a href="https://discord.com/invite/6r44wVKYjb"><FontAwesomeIcon className={styles.socialIcon} icon={faDiscord} /></a>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  );
}