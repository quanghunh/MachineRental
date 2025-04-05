import React, { useState } from 'react';
import "../styles/AddMachine.css"; // Nếu file nằm trong thư mục styles

const AddMachine = () => {
  const [machineName, setMachineName] = useState('');
  const [status, setStatus] = useState('Available'); // Giá trị mặc định là Available
  const [machineID, setMachineID] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const defaultMachineData = {
    imageUrl: 'assets/all-images/no-image.png', // Đường dẫn ảnh mặc định
    model: 'Mặc định',
    category: 'Khác',
    capacity: 'N/A',
    rentalRate: 0,
    rateUnit: 'ngày',
    description: 'Mô tả mặc định cho máy mới',
    rating: 5,
    manufacturer: 'Không rõ',
    weight: 'N/A',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'machineName') {
      setMachineName(value);
    } else if (name === 'status') {
      setStatus(value);
    } else if (name === 'machineID') {
      setMachineID(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!machineName || !machineID || !status) {
      setErrorMessage('Vui lòng điền đầy đủ tên máy, ID máy và trạng thái.');
      return;
    }

    const newMachine = {
      machineName,
      status,
      machineID,
      ...defaultMachineData,
    };

    try {
      const response = await fetch('https://localhost:7022/api/machines', { // Thay thế bằng API endpoint thực tế của bạn
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMachine),
      });

      if (response.ok) {
        setSuccessMessage('Thêm máy thành công!');
        setMachineName('');
        setMachineID('');
        setStatus('Available');
        // Ở đây bạn có thể thực hiện thêm hành động để cập nhật MachineListing,
        // ví dụ như gọi một hàm callback prop từ component cha để báo hiệu cần refetch dữ liệu.
        // Vì chúng ta không có context về MachineListing, việc cập nhật trực tiếp ở đây sẽ phức tạp.
        // Thông thường, bạn sẽ sử dụng state management (Redux, Context API) hoặc
        // props để thông báo cho component cha hoặc các component khác về sự thay đổi dữ liệu.
        // Trong ví dụ đơn giản này, chúng ta chỉ hiển thị thông báo thành công.
      } else {
        const errorData = await response.json();
        setErrorMessage(`Lỗi khi thêm máy: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      setErrorMessage(`Lỗi kết nối đến server: ${error.message}`);
    }
  };

  return (
    <div className="add-machine-container">
      <h2>Thêm Máy Mới</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="machineName">Tên Máy</label>
          <input
            type="text"
            id="machineName"
            name="machineName"
            placeholder="Nhập tên máy"
            value={machineName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Trạng thái Máy</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={handleInputChange}
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="machineID">ID Máy</label>
          <input
            type="text"
            id="machineID"
            name="machineID"
            placeholder="Nhập ID máy"
            value={machineID}
            onChange={handleInputChange}
          />
        </div>
        {/* Các trường khác sẽ được tự động điền giá trị mặc định */}
        <button type="submit">Thêm Máy</button>
      </form>
    </div>
  );
};

export default AddMachine;