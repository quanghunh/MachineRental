import React from "react";
// Đổi tên import CSS (và bạn cần đổi tên file CSS từ become-driver.css thành contact-cta.css)
import "../../styles/contact-cta.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"; // Import Link

// === THAY ĐỔI ĐƯỜNG DẪN ảnh này cho phù hợp ===
// Bạn cần chuẩn bị ảnh này và đặt vào đúng thư mục
import ctaImg from "../../assets/all-images/cta-lien-he.jpg"; // <-- Đường dẫn ảnh ví dụ

// Đổi tên component
const ContactCallToAction = () => {
  return (
    // Đổi className nếu cần khớp với CSS mới (ví dụ: contact-cta)
    <section className="contact-cta"> {/* Đã đổi */}
      <Container>
        <Row>
          {/* Đổi className nếu cần */}
          <Col lg="6" md="6" sm="12" className="contact-cta__img"> {/* Đã đổi */}
            {/* Sử dụng ảnh mới và thêm alt */}
            <img src={ctaImg} alt="Liên hệ tư vấn máy móc" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            {/* Đổi tiêu đề và className nếu cần */}
            <h2 className="section__title contact-cta__title"> {/* Đã đổi */}
              Cần tư vấn lựa chọn máy móc hoặc nhận báo giá?
            </h2>

            {/* Đổi button thành Link đến trang Contact */}
            {/* Đổi className và text */}
            <button className="btn contact-cta__btn mt-4"> {/* Đã đổi */}
              <Link to="/contact">Liên hệ ngay</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Đổi tên export
export default ContactCallToAction;
