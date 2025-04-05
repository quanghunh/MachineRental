import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import ContactCallToAction from "../components/UI/ContactCallToAction";

import aboutPageImg from "../assets/all-images/machines-img/about-page-image.jpg"; 
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="Về Chúng Tôi" /> {/* Đổi title nếu muốn */}
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                 {/* === Bước 3: Sử dụng ảnh mới và thêm alt === */}
                <img src={aboutPageImg} alt="Giới thiệu công ty máy móc" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                 {/* === Bước 4: Đổi tiêu đề section === */}
                <h2 className="section__title">
                  Chúng tôi Cam kết Cung cấp Giải pháp Thiết bị Hiệu quả
                </h2>

                {/* === Bước 5: Đổi nội dung mô tả === */}
                <p className="section__description">
                  Với phương châm hoạt động đặt uy tín và chất lượng lên hàng đầu, chúng tôi không ngừng nỗ lực mang đến các giải pháp cho thuê thiết bị xây dựng tối ưu nhất. Chúng tôi hiểu rằng mỗi công trình là tâm huyết của khách hàng và sự thành công của bạn cũng là thành công của chúng tôi.
                </p>

                <p className="section__description">
                  Đội ngũ nhân viên chuyên nghiệp, giàu kinh nghiệm cùng hệ thống máy móc đa dạng, được bảo trì thường xuyên đảm bảo đáp ứng mọi yêu cầu khắt khe về tiến độ và an toàn lao động. Chúng tôi luôn sẵn sàng đồng hành cùng bạn trên mọi công trình.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Cần hỗ trợ?</h6>
                     {/* === Bước 6: Cần cập nhật SĐT === */}
                    <h4>0848689451</h4> {/* <-- Cập nhật SĐT thực tế */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* === Bước 7: Sử dụng component CTA đã đổi tên === */}
      <ContactCallToAction />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Chuyên gia</h6>
              <h2 className="section__title">Đội ngũ của chúng tôi</h2>
            </Col>
             {/* === Bước 8: Component này cần được kiểm tra ở bước sau === */}
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;