import "./styles.css";
import youtubeImg from "../../assets/youtube.png";
import linkedinImg from "../../assets/linkedin.png";
import instagramImg from "../../assets/instagram.png";

export default function Footer() {
  return (
      <div className="ds-footer-container">
        <div>
          <p>App desenvolvido durante a 2ª ed. do evento <b>Semana DevSuperior</b></p>
        </div>
        <div className="ds-social-media-container">
          <img src={youtubeImg} alt="youtube" />
          <img src={linkedinImg} alt="linkedin" />
          <img src={instagramImg} alt="instagram" />
        </div>
      </div>
  );
}
