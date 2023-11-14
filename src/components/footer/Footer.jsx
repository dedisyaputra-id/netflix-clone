import { Col, Row } from "react-bootstrap";
import "./footer.css";
import ExtraInformation from "./ExtraInformation";
import { Globe } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <section className="footer mb-4">
      <Row>
        <Col className="col-md-6 mx-auto">
          <div className="tagline">
            <h2 className="title">Ada banyak tontonan lainnya</h2>
            <div className="description">
              <p>
                Netflix memiliki pustaka lengkap yang berisi film panjang, film
                dokumenter, acara TV, anime, Netflix original pemenang
                penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun
                kamu mau.
              </p>
            </div>
            <button className="btn-join">
              <p>Gabung Sekarang Juga</p>
            </button>
          </div>
        </Col>
      </Row>
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
