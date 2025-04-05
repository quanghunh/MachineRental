import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const Profile = () => {
  // TODO: Lấy thông tin người dùng từ Context API hoặc state management khác
  // Ví dụ: const { user } = useAuthContext();
  // Hoặc gọi API để lấy thông tin nếu cần
  const [userData, setUserData] = useState(null); // State tạm để lưu thông tin user
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // === DEMO: Giả lập lấy thông tin user ===
    // Trong thực tế, bạn sẽ lấy từ Context hoặc gọi API /api/user/me
    const fetchUserData = () => {
       try {
           // Thử lấy thông tin user giả định từ localStorage (ví dụ)
           // Hoặc const userFromContext = authContext.user;
           // Hoặc gọi fetch('/api/user/me', { headers: { 'Authorization': `Bearer ${token}` }})
           const fakeUser = {
               CustomerID: 1,
               CustomerName: 'Lon Demo',
               CustomerPhone: '0912345678',
               CustomerEmail: 'LonLon.demo@example.com',
               CustomerAddress: '123 Đường ABC, TP. Thủ Đức'
           };
           // Kiểm tra xem có user không (ví dụ: dựa vào token hoặc context)
           // Nếu không có, có thể chuyển hướng về trang login
           // if (!isLoggedIn) { navigate('/login'); return; }

           setUserData(fakeUser);
       } catch(err) {
            setError('Không thể tải thông tin người dùng.');
            console.error(err);
       } finally {
           setLoading(false);
       }
    };

    fetchUserData();
    window.scrollTo(0,0); // Cuộn lên đầu trang
  }, []); // Chỉ chạy 1 lần khi component mount

  if (loading) {
    return <Container><p>Loading profile...</p></Container>;
  }

  if (error) {
     return <Container><p className="text-danger">{error}</p></Container>;
  }

  if (!userData) {
      // Có thể đã bị chuyển hướng ở useEffect, hoặc hiển thị thông báo yêu cầu đăng nhập
      return <Container><p>Vui lòng đăng nhập để xem thông tin.</p></Container>;
  }

  return (
    <Helmet title="Profile">
      <CommonSection title="Hồ Sơ Cá Nhân" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="10" className="m-auto">
               <h4 className="mb-4">Thông tin của bạn</h4>
               <div className="profile__info bg-light p-4 rounded">
                    <p><strong>ID Khách hàng:</strong> {userData.CustomerID}</p>
                    <p><strong>Họ và Tên:</strong> {userData.CustomerName}</p>
                    <p><strong>Số điện thoại:</strong> {userData.CustomerPhone}</p>
                    <p><strong>Email:</strong> {userData.CustomerEmail}</p>
                    <p><strong>Địa chỉ:</strong> {userData.CustomerAddress || 'Chưa cập nhật'}</p>
                    {/* Hiển thị thêm thông tin nếu cần, ví dụ: lịch sử thuê */}
               </div>
               {/* TODO: Thêm nút chỉnh sửa thông tin */}
               {/* TODO: Thêm nút Đăng xuất */}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Profile;