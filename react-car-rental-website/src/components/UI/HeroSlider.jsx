import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      {/* Lưu ý: Ảnh nền cho các slider__item-xx được đặt trong file hero-slider.css */}
      {/* Bạn cần vào file CSS đó để thay đổi ảnh nền cho phù hợp với máy móc */}
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Thiết bị đa dạng, sẵn sàng cho mọi công trình</h4>
            <h1 className="text-light mb-4">Giải pháp Máy móc Xây dựng Toàn diện</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/machines">Xem Thiết Bị</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Chất lượng đảm bảo, giá cả cạnh tranh</h4>
            <h1 className="text-light mb-4">Thuê Máy móc Dễ dàng, Hiệu quả Cao</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/machines">Xem Thiết Bị</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
             <h4 className="text-light mb-3">Hỗ trợ chuyên nghiệp, đối tác tin cậy</h4>
            <h1 className="text-light mb-4">Liên hệ ngay để nhận Tư vấn & Báo giá</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">Liên Hệ Ngay</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;