import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    alert("Đã gửi yêu cầu đặt máy!");
    // Thêm logic xử lý gửi form thực tế ở đây
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Tên" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Họ" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="tel" placeholder="Số điện thoại" required />
      </FormGroup>

       <FormGroup className="booking__form mb-4">
         <input type="text" placeholder="Địa chỉ công trình" required />
       </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <label htmlFor="startDate" className="booking-form-label">Ngày bắt đầu thuê</label>
        <input id="startDate" type="date" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
         <label htmlFor="endDate" className="booking-form-label">Ngày kết thúc thuê</label>
        <input id="endDate" type="date" required />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea booking__form"
          placeholder="Ghi chú / Yêu cầu đặc biệt (nếu có)"
        ></textarea>
      </FormGroup>

       <FormGroup className="text-end"> {/* Căn nút sang phải */}
         <button type="submit" className="btn btn-primary theme-btn"> {/* Sử dụng class btn và có thể thêm class theme */}
           Gửi Yêu Cầu
         </button>
       </FormGroup>

    </Form>
  );
};

// Thêm CSS cho label nếu cần (đã có từ lần trước)
const styles = `
  .booking-form-label {
    display: block;
    color: #7c8a97;
    font-size: 0.9rem;
    margin-bottom: 3px;
  }
`;
const styleSheet = document.createElement("style");
// Kiểm tra trước khi thêm để tránh lỗi nếu code chạy phía server
if (typeof window !== 'undefined') {
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}


export default BookingForm;