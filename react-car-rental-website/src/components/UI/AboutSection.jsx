import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
// === THAY ĐỔI ĐƯỜNG DẪN ảnh này cho phù hợp ===
import aboutImg from "../../assets/all-images/machines-img/about-section-image.jpg"; // <-- Cần thay ảnh và đường dẫn

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" } 
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Về chúng tôi</h4>
              
              <h2 className="section__title">Chào mừng đến với Dịch vụ cho thuê Máy móc</h2>
             
              <p className="section__description">
                Chúng tôi tự hào là đơn vị cung cấp dịch vụ cho thuê máy móc cơ khí, thiết bị xây dựng hàng đầu. Với kinh nghiệm nhiều năm trong ngành, chúng tôi cam kết mang đến cho khách hàng những giải pháp tối ưu, hiệu quả và tiết kiệm chi phí cho mọi công trình, dự án.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Đa dạng chủng loại máy móc
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Thiết bị đời mới, chất lượng cao
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Giá cả cạnh tranh, linh hoạt
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Hỗ trợ kỹ thuật 24/7
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              {/* Đảm bảo aboutImg đã được import đúng ảnh mới */}
              <img src={aboutImg} alt="Về chúng tôi - Máy móc" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;