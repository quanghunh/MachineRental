import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindMachineForm from "../components/UI/FindMachineForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import machineData from "../assets/data/machineData"; 
import MachineItem from "../components/UI/MachineItem"; 
import BecomeDriverSection from "../components/UI/ContactCallToAction";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                {/* Đã đổi className và nội dung text */}
                <div className="find__machines-left">
                  <h2>Tìm máy móc phù hợp cho công việc</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                {/* Đã đổi component sử dụng */}
                <FindMachineForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Xem các</h6>
              <h2 className="section__title">Dịch vụ phổ biến</h2>
            </Col>
            {/* Lưu ý: Cần kiểm tra component ServicesList và dữ liệu serviceData.js */}
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== machine offer section ============= */} {/* Đổi tên section comment nếu muốn */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Ưu đãi</h6>
              <h2 className="section__title">Máy móc nổi bật</h2> {/* Đổi tiêu đề */}
            </Col>

            {/* Đã đổi biến dữ liệu và component sử dụng */}
            {machineData.slice(0, 6).map((item) => (
              <MachineItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      {/* Lưu ý: Cần kiểm tra và sửa lại hoàn toàn component BecomeDriverSection */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Khách hàng nói gì</h6>
              <h2 className="section__title">Đánh giá</h2>
            </Col>
            {/* Lưu ý: Cần kiểm tra component Testimonial xem nội dung có phù hợp không */}
            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Khám phá</h6>
              <h2 className="section__title">Tin tức mới nhất</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;