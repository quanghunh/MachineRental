import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import MachineItem from "../components/UI/MachineItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MachineListing = () => {
  const navigate = useNavigate();
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const response = await axios.get('https://localhost:7022/api/Machines');
        setMachines(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Lỗi khi tải danh sách máy:", error);
      }
    };

    fetchMachines();
  }, []);

  if (loading) {
    return <p>Đang tải danh sách máy...</p>;
  }

  if (error) {
    return <p>Đã xảy ra lỗi khi tải danh sách máy.</p>;
  }

  return (
    <Helmet title="Machines">
      <CommonSection title="Machine Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center gap-3">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>
                <select>
                  <option>Select</option>
                  <option value="low">Giá: Thấp đến Cao</option>
                  <option value="high">Giá: Cao đến Thấp</option>
                </select>
              </div>

              {/* Nút thêm máy mới */}
              <button className="add-machine-btn" onClick={() => navigate("/add-machine")}>
                + Thêm Máy Mới
              </button>
            </Col>

            {machines.map((item, index) => {
              console.log("Thông tin item được truyền xuống MachineItem:", item); // Thêm dòng này
              return <MachineItem item={item} key={item.machineID || index} />;
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default MachineListing;