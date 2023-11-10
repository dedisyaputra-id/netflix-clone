import { Row, Col } from "react-bootstrap";
import Corousel from "react-multi-carousel";
import foto from "../../images/film-1.jpg";
import "./listfilm.css";
const ListFilm = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Row className="my-5">
      <Col className="col-md-12">
        <div className="genre">
          <p className="genre-title">Film Penuh Ketegangan</p>
        </div>
        <Corousel transitionDuration={1000} responsive={responsive}>
          <div className="list-movie">
            <img src={foto} alt="" />
            <p className="title-movie text-center mt-2">Movie 1</p>
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
          <div className="list-movie">
            <img src={foto} alt="" />
          </div>
        </Corousel>
      </Col>
    </Row>
  );
};

export default ListFilm;
