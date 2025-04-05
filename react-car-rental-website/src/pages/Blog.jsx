import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Tin tức & Bài viết" /> {/* Có thể đổi title nếu muốn */}
      <section>
        <Container>
          <Row>
             {/* Chỉ gọi BlogList một lần */}
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;