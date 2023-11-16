import { Row, Col } from "react-bootstrap";

const FooterHome = () => {
  return (
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
  );
};

export default FooterHome;
