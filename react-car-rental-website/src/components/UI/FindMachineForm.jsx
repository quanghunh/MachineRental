import React from "react";
import "../../styles/find-machine-form.css"; // Đã đổi tên và bỏ dòng trùng lặp
import { Form, FormGroup } from "reactstrap";

// Đổi tên component
const FindMachineForm = () => {
  // Lưu ý: Form này hiện chỉ có giao diện.
  // Để hoạt động, bạn cần thêm useState để quản lý giá trị các ô input
  // và hàm xử lý onSubmit để thực hiện tìm kiếm/lọc.

  return (
    // Đổi className form nếu cần khớp với CSS
    <Form className="find__machine-form"> {/* Đã đổi className */}
      <div className=" d-flex align-items-center justify-content-between flex-wrap">

        {/* Trường chọn Loại Máy */}
        <FormGroup className="select__group"> {/* Giữ hoặc đổi className nếu muốn */}
          <select required>
            <option value="">Chọn loại máy</option>
            {/* Nên lấy danh sách loại máy từ machineData hoặc định nghĩa sẵn */}
            <option value="Máy xúc">Máy xúc</option>
            <option value="Xe xúc lật">Xe xúc lật</option>
            <option value="Xe ủi">Xe ủi</option>
            <option value="Cần cẩu">Cần cẩu</option>
            <option value="Xe lu">Xe lu</option>
            <option value="Máy phát điện">Máy phát điện</option>
            <option value="Xe nâng">Xe nâng</option>
             <option value="Xe trộn bê tông">Xe trộn bê tông</option>
             {/* Thêm các loại máy khác */}
          </select>
        </FormGroup>

        {/* Trường nhập Địa điểm */}
        <FormGroup className="form__group">
          <input type="text" placeholder="Địa điểm công trình" required />
        </FormGroup>

        {/* Trường chọn Ngày bắt đầu */}
        <FormGroup className="form__group">
           <label htmlFor="startDate" style={{color: '#7c8a97', fontSize:'0.9rem'}}>Ngày bắt đầu</label>
          <input id="startDate" type="date" placeholder="Ngày bắt đầu" required style={{border:'none', outline:'none'}}/>
        </FormGroup>

        {/* Trường chọn Ngày kết thúc */}
        <FormGroup className="form__group">
          <label htmlFor="endDate" style={{color: '#7c8a97', fontSize:'0.9rem'}}>Ngày kết thúc</label>
          <input id="endDate" type="date" placeholder="Ngày kết thúc" required style={{border:'none', outline:'none'}}/>
        </FormGroup>

        {/* Nút Tìm kiếm */}
        <FormGroup className="form__group">
          {/* Đổi className và text */}
          <button className="btn find__machine-btn">Tìm Máy</button>
        </FormGroup>
      </div>
    </Form>
  );
};

// Đổi tên export
export default FindMachineForm;