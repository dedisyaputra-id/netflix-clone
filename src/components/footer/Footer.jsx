import { Col, Row } from "react-bootstrap";
import "./footer.css";
import ExtraInformation from "./ExtraInformation";
import FooterHome from "../../pages/Home/FooterHome";
const Footer = () => {
  return (
    <section className="footer mb-4">
      <FooterHome />
      <Row className="netflix-tudum">
        <Col className="col-md-12 col-lg-12">
          <a
            className="extra-information"
            target="_blank"
            href="https://www.netflix.com/tudum"
          >
            Baca tentang acara TV serta film Netflix dan tonton video bonus di
            Tudum.com.
          </a>
        </Col>
      </Row>
      <ExtraInformation />
      <div className="change-language">
        <form action="" className="form-change">
          <div className="select-language">
            <select name="" id="">
              <option value="">Bahasa Indonesia</option>
              <option value="">English</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Footer;
