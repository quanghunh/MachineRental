import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#", // Cập nhật URL thực tế
    icon: "ri-facebook-line",
  },
  {
    url: "#", // Cập nhật URL thực tế
    icon: "ri-instagram-line",
  },
  {
    url: "#", // Cập nhật URL thực tế
    icon: "ri-linkedin-line",
  },
  {
    url: "#", // Cập nhật URL thực tế
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  // Thêm submit handler cho form nếu cần xử lý gửi dữ liệu
   const submitHandler = (event) => {
     event.preventDefault();
     // Logic gửi form (ví dụ: dùng emailjs, backend API...)
     alert("Tin nhắn đã được gửi (chức năng demo)");
   };

  return (
    <Helmet title="Contact">
      <CommonSection title="Liên hệ" /> {/* Đổi title nếu muốn */}
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Gửi tin nhắn cho chúng tôi</h6> {/* Đổi text nếu muốn */}

              <Form onSubmit={submitHandler}> {/* Thêm onSubmit */}
                <FormGroup className="contact__form">
                  <Input placeholder="Tên của bạn" type="text" required/> {/* Thêm required */}
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" required/> {/* Thêm required */}
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Nội dung tin nhắn" // Đổi placeholder
                    className="textarea"
                    required // Thêm required
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Gửi tin nhắn {/* Đổi text nút */}
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Thông tin liên hệ</h6>
                 {/* === Cập nhật thông tin liên hệ thực tế === */}
                <p className="section__description mb-0">
                  123 Đường ABC, Quận XYZ, TP HCM
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">09xxxxxxxx</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">info@rentmachine.com</p>
                </div>

                <h6 className="fw-bold mt-4">Theo dõi chúng tôi</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                      target="_blank" // Mở link social trong tab mới
                      rel="noopener noreferrer"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;