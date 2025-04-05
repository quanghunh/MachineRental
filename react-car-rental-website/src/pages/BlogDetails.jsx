import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import NotFound from "./NotFound"; // Import NotFound nếu cần xử lý ID không hợp lệ

import commentImg from "../assets/all-images/ava-1.jpg"; // Giữ lại ảnh comment mẫu

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { id } = useParams(); // Đã đổi từ slug sang id
  // Tìm blog theo id (chuyển id từ string sang number)
  const blog = blogData.find((blog) => blog.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  // Xử lý nếu không tìm thấy blog
  if (!blog) {
    return <NotFound />; // Hoặc trả về một component thông báo lỗi
  }

  // Destructure các thuộc tính từ blog tìm được sau khi chắc chắn blog tồn tại
  const { title, author, date, time, imgUrl, description, quote } = blog;

  return (
    <Helmet title={title}> {/* Sử dụng title từ blog đã tìm được */}
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={imgUrl} alt={title} className="w-100" /> {/* Thêm alt */}
                <h2 className="section__title mt-4">{title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {time}
                  </span>
                </div>

                <p className="section__description">{description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{quote}</blockquote>
                </h6>
                {/* Có thể không cần lặp lại description ở đây */}
                {/* <p className="section__description">{description}</p> */}
              </div>

              {/* Phần comment giữ nguyên cấu trúc và dữ liệu mẫu */}
              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="commenter avatar" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">David Visa</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>
                    <span className="replay d-flex align-items-center gap-1">
                      <i className="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>

                {/* Form comment giữ nguyên */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            {/* Phần Recent Posts */}
            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt={item.title} className="w-25 rounded-2" /> {/* Thêm alt */}
                    <h6>
                      {/* Đổi Link dùng id và hiển thị item.title */}
                      <Link to={`/blogs/${item.id}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;