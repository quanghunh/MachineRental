import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/machine-item.css";
import defaultImage from '../../assets/all-images/no-image.png'; // Import ảnh dự phòng

const MachineItem = (props) => {
  const { machineID, machineName, imageUrl: imgUrl, status } = props.item; // Lấy thêm prop status từ item
  const defaultImgUrl = defaultImage; // Sử dụng biến đã import

  const model = props.item.model || "N/A";
  const category = props.item.category || "N/A";
  const capacity = props.item.capacity || "N/A";
  const rentalRate = props.item.rentalRate;
  const rateUnit = props.item.rateUnit;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="machine__item">
        <div className="machine__img">
          <img
            src={imgUrl || defaultImgUrl}
            alt={machineName}
            className="w-100"
            onError={(e) => {
              if (process.env.NODE_ENV === 'development') {
                console.error(`Không thể tải ảnh cho ${machineName} từ đường dẫn: ${imgUrl}`);
              }
              e.target.src = defaultImage; // Sử dụng biến đã import trong onError
            }}
            style={{ border: '3px solid #000d6b' }}/>
        </div>

        <div className="machine__item-content mt-4">
          <h4 className="section__title text-center">{machineName}</h4>
          <h6 className="rent__price text-center mt-">
            {rentalRate?.toLocaleString('vi-VN') || 'Liên hệ'} <span> / {rateUnit || 'ngày'}</span>
          </h6>

          {/* Hiển thị trạng thái */}
          <div className="d-flex align-items-center justify-content-center mt-2 mb-3">
            {status === "Available" ? (
              <>
                <span className="rounded-circle bg-success me-2" style={{ width: '10px', height: '10px', display: 'inline-block' }}></span>
                <span className="text-success">Available</span>
              </>
            ) : status === "Not Available" ? (
              <>
                <span className="rounded-circle bg-danger me-2" style={{ width: '10px', height: '10px', display: 'inline-block' }}></span>
                <span className="text-danger">Not Available</span>
              </>
            ) : (
              <></> // Hoặc có thể hiển thị một trạng thái mặc định khác nếu cần
            )}
          </div>

          <div className="machine__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-tools-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-list-check"></i> {category}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-scales-3-line"></i> {capacity}
            </span>
          </div>

          <button className=" w-50 machine__item-btn machine__btn-book">
            <Link to={`/machines/${machineID}`}>Book Now</Link>
          </button>

          <button className=" w-50 machine__item-btn machine__btn-details">
             <Link to={`/machines/${machineID}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default MachineItem;