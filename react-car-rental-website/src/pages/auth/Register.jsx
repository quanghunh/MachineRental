import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection';
import { apiRegister } from '../../context/AuthContext'; // Import hàm API giả lập

// import '../../styles/login-register.css';

const Register = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Thêm state cho thông báo thành công
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp!');
      return;
    }
    // === Thêm validation cơ bản khác nếu cần (ví dụ: độ dài mật khẩu) ===

    setLoading(true);

    const registrationData = {
      CustomerName: customerName,
      CustomerPhone: customerPhone,
      CustomerEmail: customerEmail,
      CustomerAddress: customerAddress,
      Password: password,
    };

    try {
      // === Gọi API Đăng ký ===
      const data = await apiRegister(registrationData); // Dùng hàm API giả lập

      setSuccess(data.message + " Bạn sẽ được chuyển đến trang đăng nhập sau 3 giây.");
      // Xóa form sau khi thành công
      setCustomerName(''); setCustomerPhone(''); setCustomerEmail(''); setCustomerAddress(''); setPassword(''); setConfirmPassword('');

      // Chờ vài giây rồi chuyển hướng
      setTimeout(() => {
        navigate('/login');
      }, 3000);

    } catch (err) {
      setError(err.message || 'Đã xảy ra lỗi. Vui lòng thử lại.');
      console.error('Lỗi đăng ký:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Register">
      <CommonSection title="Đăng ký tài khoản" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="8" sm="10" className="m-auto">
              <div className="login-register-form">
                <h4 className="text-center mb-4">Tạo tài khoản mới</h4>
                {error && <p className="text-danger text-center">{error}</p>}
                {success && <p className="text-success text-center">{success}</p>}
                <Form onSubmit={submitHandler}>
                   <FormGroup>
                    <Input
                      type="text" placeholder="Họ và Tên" maxLength={100}
                      value={customerName} onChange={(e) => setCustomerName(e.target.value)} required disabled={loading}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="tel" placeholder="Số điện thoại" maxLength={20}
                      value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required disabled={loading}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="email" placeholder="Email"
                      value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required disabled={loading}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text" placeholder="Địa chỉ (không bắt buộc)"
                      value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} disabled={loading}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password" placeholder="Mật khẩu"
                      value={password} onChange={(e) => setPassword(e.target.value)} required disabled={loading}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password" placeholder="Xác nhận Mật khẩu"
                      value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required disabled={loading}
                    />
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary w-100 theme-btn" disabled={loading}>
                    {loading ? 'Đang xử lý...' : 'Đăng ký'}
                  </Button>
                </Form>
                <p className="text-center mt-3">
                  Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;