import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navsocial(){
	return (
		<div className="navbar-nav d-none d-lg-flex pe-3">
      <a href="https://twitter.com/SC3_M1/with_replies" target='_black'><FontAwesomeIcon className="socialIcon" icon={faTwitter} /></a> &nbsp;
      <a href="https://t.me/StupidCatCharityClub" target='_black'><FontAwesomeIcon className="socialIcon" icon={faTelegram} /></a> &nbsp;
      <a href="https://discord.gg/6r44wVKYjb" target='_black'><FontAwesomeIcon className="socialIcon" icon={faDiscord} /></a>
    </div>
	);
}