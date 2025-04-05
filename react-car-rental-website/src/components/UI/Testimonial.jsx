import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

// Lưu ý: Bạn nên thay thế các ảnh avatar này nếu có ảnh phù hợp hơn
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Thiết bị chất lượng rất tốt, hoạt động ổn định suốt quá trình thi công. Dịch vụ giao nhận nhanh chóng, hỗ trợ kỹ thuật cũng rất nhiệt tình. Chúng tôi sẽ tiếp tục hợp tác lâu dài.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="Anh Minh Quân" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Anh Minh Quân</h6>
            <p className="section__description">Giám sát công trình</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Giá thuê máy móc ở đây rất hợp lý so với mặt bằng chung. Thủ tục thuê cũng đơn giản, nhanh gọn. Máy móc đa dạng, đáp ứng được hầu hết nhu cầu cho dự án của chúng tôi.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="Công ty Xây dựng ABC" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Công ty Xây dựng ABC</h6>
            <p className="section__description">Khách hàng doanh nghiệp</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Rất hài lòng với dịch vụ hỗ trợ kỹ thuật của công ty. Khi máy gặp sự cố nhỏ, đội ngũ kỹ thuật đã có mặt xử lý rất nhanh chóng, không làm ảnh hưởng nhiều đến tiến độ công việc.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="Anh Hùng" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Anh Hùng</h6>
            <p className="section__description">Trưởng phòng vật tư</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Được bạn bè giới thiệu và không hề thất vọng. Đội ngũ tư vấn rất chuyên nghiệp, giúp chúng tôi chọn được loại máy xúc phù hợp nhất với địa hình công trường. Dịch vụ rất đáng tin cậy.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="Chị Lan Anh" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Chị Lan Anh</h6>
            <p className="section__description">Chủ đầu tư</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;