import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
// === DÒNG IMPORT ĐÚNG PHẢI CÓ 'Link' ===
import { Link, useNavigate } from 'react-router-dom'; // Đảm bảo có Link ở đây
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { useAuth } from '../context/AuthContext';
import { apiUpdateProfile } from '../context/AuthContext'; // Import hàm API giả lập

const EditProfile = () => {
    const { user, token, updateUserState, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (user) {
            setCustomerName(user.CustomerName || '');
            setCustomerPhone(user.CustomerPhone || '');
            setCustomerAddress(user.CustomerAddress || '');
        } else if (!isAuthenticated && !loading) {
             setError("Vui lòng đăng nhập để sửa hồ sơ.");
        }
    }, [user, isAuthenticated, loading, navigate]);


    const submitHandler = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        if (!user) return;

        setLoading(true);
        const updatedData = {
            CustomerName: customerName,
            CustomerPhone: customerPhone,
            CustomerAddress: customerAddress,
        };

        try {
            const updatedUser = await apiUpdateProfile(user.CustomerID, updatedData, token);
            updateUserState(updatedUser);
            setSuccess('Cập nhật thông tin thành công!');
            // setTimeout(() => navigate('/profile'), 2000);

        } catch (err) {
            setError(err.message || 'Cập nhật thất bại. Vui lòng thử lại.');
            console.error("Lỗi cập nhật profile:", err);
        } finally {
            setLoading(false);
        }
    };

     if (!user && !loading) {
        return (
           <Helmet title="Edit Profile">
              <CommonSection title="Chỉnh Sửa Hồ Sơ" />
              <section>
                 <Container>
                     <p className="text-danger text-center">{error || "Vui lòng đăng nhập."}</p>
                 </Container>
              </section>
           </Helmet>
        );
     }
     if (loading && !user) {
         return <Container><p>Loading...</p></Container>;
     }


    return (
        <Helmet title="Edit Profile">
            <CommonSection title="Chỉnh Sửa Hồ Sơ" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="8" sm="10" className="m-auto">
                            <div className="login-register-form">
                                <h4 className="text-center mb-4">Cập nhật thông tin</h4>
                                {error && <p className="text-danger text-center">{error}</p>}
                                {success && <p className="text-success text-center">{success}</p>}
                                <Form onSubmit={submitHandler}>
                                    <FormGroup>
                                        <label>Email (không thể thay đổi)</label>
                                        <Input type="email" value={user?.CustomerEmail || ''} disabled />
                                    </FormGroup>
                                     <FormGroup>
                                        <label htmlFor="editName">Họ và Tên</label>
                                        <Input
                                            id="editName" type="text" maxLength={100}
                                            value={customerName} onChange={(e) => setCustomerName(e.target.value)} required disabled={loading}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                         <label htmlFor="editPhone">Số điện thoại</label>
                                        <Input
                                            id="editPhone" type="tel" placeholder="Số điện thoại" maxLength={20}
                                            value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required disabled={loading}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                         <label htmlFor="editAddress">Địa chỉ</label>
                                        <Input
                                            id="editAddress" type="text" placeholder="Địa chỉ (không bắt buộc)"
                                            value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} disabled={loading}
                                        />
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-primary w-100 theme-btn mt-3" disabled={loading}>
                                        {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
                                    </Button>
                                </Form>
                                {/* Dòng này sử dụng Link nên cần import ở trên */}
                                <p className='text-center mt-3'>
                                    <Link to="/profile">Quay lại hồ sơ</Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default EditProfile;