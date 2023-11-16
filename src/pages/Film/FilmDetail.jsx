import MainLayout from "../../components/main/Main-layout";
import { Row, Col } from "react-bootstrap";
import poster1 from "../../assets/the-mother.jpg";
import poster2 from "../../assets/manipulating.jpg";
import "./filmdetail.css";
const FilmDetail = () => {
  return (
    <MainLayout>
      <Row className="top-layout">
        <Col
          className="col-lg-12 col-md-12 col-top-layout"
          style={{ backgroundImage: `url(${poster2})` }}
        >
          <div className="detail-film">
            <h1 className="title">The Mother</h1>
            <div className="information-film">
              <span className="year">2023</span>
              <span className="age-rating">16+</span>
              <span className="duration">1j 57m</span>
              <span className="genre">laga</span>
            </div>
            <div className="description">
              <p className="description-text">
                Seorang pembunuh berlatar belakang militer keluar dari
                persembunyian demi melindungi putrinya yang belum pernah ia
                temui dari para penjahat kejam yang ingin balas dendam.
              </p>
            </div>
            <div className="starring">
              Starring: Jenifer lopes, josep fienest, feel garcia bernal
            </div>
          </div>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default FilmDetail;
