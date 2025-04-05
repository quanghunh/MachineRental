import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
// Lưu ý: Bạn nên thay thế các ảnh avatar này nếu có ảnh thực tế
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
// import ava04 from "../../assets/all-images/ava-4.jpg"; // Ảnh này không được sử dụng trong map

const OUR__MEMBERS = [
  {
    name: "Nguyễn Văn An", // Đổi tên
    experience: "Trưởng phòng Kỹ thuật", // Đổi chức vụ/kinh nghiệm
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Trần Thị Bích", // Đổi tên
    experience: "Chuyên viên Tư vấn", // Đổi chức vụ/kinh nghiệm
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Lê Minh Hùng", // Đổi tên
    experience: "Điều phối viên", // Đổi chức vụ/kinh nghiệm
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Phạm Thanh Danh", // Đổi tên (thành viên thứ 4)
    experience: "Kỹ thuật viên", // Đổi chức vụ/kinh nghiệm
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01, // Tạm dùng lại ava01, nên có ảnh riêng
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              {/* Thêm alt text */}
              <img src={item.imgUrl} alt={item.name} className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i className="ri-twitter-line"></i>
                </Link>
                <Link to={item.linkedinUrl}>
                  <i className="ri-linkedin-line"></i>
                </Link>
                <Link to={item.instUrl}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;