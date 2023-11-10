import MainLayout from "../../components/main/Main-layout";
import "./home.css";
import { Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <MainLayout>
      <div className="home">
        <div className="content">
          <h1 className="title">Film</h1>
          <Row>
            <Col className="col-md-12 col-lg-5">
              <p className="description">
                Film menyentuh hati kita dengan cara yang berbeda, apa pun
                genrenya: seram, dramatis, romantis, atau yang lainnya. Begitu
                banyak judul, begitu banyak pengalaman.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
