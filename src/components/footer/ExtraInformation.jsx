import { Col, Row } from "react-bootstrap";
import "./footer.css";

const ExtraInformation = () => {
  return (
    <section style={{ padding: 0 }}>
      <Row>
        <Col className="col-lg-12 col-md-12">
          <div className="help">
            <a
              className="contact"
              href="https://help.netflix.com/id/contactus"
              target="_blank"
            >
              Ada pertanyaan? Hubungi kami.
            </a>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 netflix-other-information">
        <Col className="footer-list col-md-12 col-lg-3">
          <ul>
            <li>
              <a href="https://help.netflix.com/id/node/412">Tanya Jawab</a>
            </li>
            <li>
              <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
                Hubungan Investor
              </a>
            </li>
            <li>
              <a href="https://devices.netflix.com/en/"> Cara menonton</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/corpinfo">
                Informasi Perusahaan
              </a>
            </li>
            <li>
              <a href="">Hanya di Neflix</a>
            </li>
          </ul>
        </Col>
        <Col className="footer-list col-lg-3 col-md-12">
          <ul>
            <li>
              <a href="https://help.netflix.com/id/">Pusat Bantuan</a>
            </li>
            <li>
              <a href="https://jobs.netflix.com/jobs">Lowongan kerja</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/termsofuse">
                ketentuan penggunaan
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/contactus">hubungi kami</a>
            </li>
          </ul>
        </Col>
        <Col className="footer-list col-lg-3 col-md-12">
          <ul>
            <li>
              <a href="https://www.netflix.com/youraccount">akun</a>
            </li>
            <li>
              <a href="https://www.netflix.com/redeem">tukar kartu hadiah</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/privacy">privasi</a>
            </li>
            <li>
              <a href="https://fast.com/">uji kecepatan</a>
            </li>
          </ul>
        </Col>
        <Col className="footer-list col-lg-3 col-md-12">
          <ul>
            <li>
              <a href="https://media.netflix.com/">pusat media</a>
            </li>
            <li>
              <a href="https://www.netflix.com/gift-cards">beli kartu hadiah</a>
            </li>
            <li>
              <a href="https://www.netflix.com/id/browse/genre/34399#">
                preferensi cookie
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/notices">
                informasi legal
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default ExtraInformation;
