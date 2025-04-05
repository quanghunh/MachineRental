import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import { apiLogin } from '../../context/AuthContext'; // Import hàm API giả lập

// import '../../styles/login-register.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginAction } = useAuth(); // Lấy hàm loginAction từ context

  const submitHandler = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      // === Gọi API Đăng nhập ===
      const data = await apiLogin(email, password); // Dùng hàm API giả lập

      // Gọi hàm loginAction từ context để cập nhật state và lưu trữ
      loginAction(data.user, data.token);

      // Chuyển hướng sẽ được xử lý bởi loginAction hoặc bạn có thể làm ở đây
      // navigate('/profile');

    } catch (err) {
      setError(err.message || 'Đã xảy ra lỗi. Vui lòng thử lại.');
      console.error('Lỗi đăng nhập:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Đăng nhập" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="8" sm="10" className="m-auto">
              <div className="login-register-form">
                <h4 className="text-center mb-4">Đăng nhập tài khoản</h4>
                {error && <p className="text-danger text-center">{error}</p>}
                <Form onSubmit={submitHandler}>
                  <FormGroup>
                    <Input
                      type="email" placeholder="Email"
                      value={email} onChange={(e) => setEmail(e.target.value)} required disabled={loading}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password" placeholder="Mật khẩu"
                      value={password} onChange={(e) => setPassword(e.target.value)} required disabled={loading}
                    />
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary w-100 theme-btn" disabled={loading}>
                    {loading ? 'Đang xử lý...' : 'Đăng nhập'}
                  </Button>
                </Form>
                <p className="text-center mt-3">
                  Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;