import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import NotFound from "./NotFound";

const MachineDetails = () => {
  const { id } = useParams();
  const [machine, setMachine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetch(`https://localhost:7022/api/machines/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMachine(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Đang tải thông tin chi tiết máy móc...</div>;
  }

  if (error || !machine) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet title={machine.machineName}>
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <img src={machine.imgUrl} alt={machine.machineName} className="w-100" />
              </Col>

              <Col lg="6">
                <div className="car__info">
                  <h2 className="section__title">{machine.machineName}</h2>

                  <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                    <h6 className="rent__price fw-bold fs-4">
                      {machine.rentalRate?.toLocaleString('vi-VN') || 'Liên hệ'} / {machine.rateUnit || 'ngày'}
                    </h6>

                    <span className=" d-flex align-items-center gap-2">
                      <span style={{ color: "#f9a826" }}>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      ({machine.rating || 5} ratings)
                    </span>
                  </div>

                  {/* Thêm mô tả ngắn ở đây */}
                  <p className="section__description mb-4">
                    {machine.shortDescription || 'Hiệu suất hoạt động ổn định, phù hợp cho nhiều loại công trình.'}
                  </p>

                  <div
                    className=" d-flex align-items-center mt-3"
                    style={{ columnGap: "4rem", flexWrap: "wrap" }}
                  >
                    <span className=" d-flex align-items-center gap-1 section__description mb-2">
                      <i className="ri-building-line" style={{ color: "#f9a826" }}></i>
                      {machine.manufacturer || 'Nhà sản xuất: Đang cập nhật'}
                    </span>
                    <span className=" d-flex align-items-center gap-1 section__description mb-2">
                      <i className="ri-tools-line" style={{ color: "#f9a826" }}></i>
                      {machine.model || 'Model: Mẫu cơ bản'}
                    </span>
                    <span className=" d-flex align-items-center gap-1 section__description mb-2">
                      <i className="ri-list-check" style={{ color: "#f9a826" }}></i>
                      {machine.category || 'Loại: Máy công trình'}
                    </span>
                    <span className=" d-flex align-items-center gap-1 section__description mb-2">
                      <i className="ri-scales-3-line" style={{ color: "#f9a826" }}></i>
                      {machine.capacity || 'Công suất: Tiêu chuẩn'}
                    </span>
                    <span className=" d-flex align-items-center gap-1 section__description mb-2">
                      <i className="ri-scales-2-line" style={{ color: "#f9a826" }}></i>
                      {machine.weight || 'Trọng lượng: Khoảng 5 tấn'}
                    </span>
                  </div>
                </div>
              </Col>

              <Col lg="7" className="mt-5">
                <div className="booking-info mt-5">
                  <h5 className="mb-4 fw-bold ">Booking Information</h5>
                  <BookingForm machine={machine} />
                </div>
              </Col>

              <Col lg="5" className="mt-5">
                <div className="payment__info mt-5">
                  <h5 className="mb-4 fw-bold ">Payment Information</h5>
                  <PaymentMethod />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default MachineDetails;