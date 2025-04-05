import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { useAuth } from "../../context/AuthContext"; // Import useAuth để lấy trạng thái đăng nhập

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/machines", // Đã đổi path
    display: "Machine",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const { isAuthenticated, user, logoutAction } = useAuth(); // Lấy state và hàm từ context

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  {/* Cần cập nhật SĐT */}
                  <i className="ri-phone-fill"></i> +09xxxxxxxx
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {isAuthenticated ? (
                  // === Nếu đã đăng nhập ===
                  <>
                    {/* Hiển thị tên hoặc email */}
                    <span className="d-flex align-items-center gap-1 text-light">
                      <i className="ri-user-fill"></i> Hi, {user?.CustomerName?.split(' ')[0] || user?.CustomerEmail}
                    </span>
                    {/* Link đến trang Profile */}
                    <Link to="/profile" className=" d-flex align-items-center gap-1">
                      <i className="ri-profile-line"></i> Profile
                    </Link>
                    {/* Nút/Link Đăng xuất */}
                    <span onClick={logoutAction} style={{ cursor: 'pointer', color: 'white' }} className=" d-flex align-items-center gap-1">
                      <i className="ri-logout-circle-r-line"></i> Logout
                    </span>
                  </>
                ) : (
                  // === Nếu chưa đăng nhập ===
                  <>
                    <Link to="/login" className=" d-flex align-items-center gap-1">
                      <i className="ri-login-circle-line"></i> Login
                    </Link>
                    <Link to="/register" className=" d-flex align-items-center gap-1">
                      <i className="ri-user-line"></i> Register
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
           <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-tools-line"></i>
                    <span>
                      Rent Machine <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Branch</h4>
                  <h6>Hồ Chí Minh City, Hà Nội City</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Service</h4>
                  <h6>8am - 5pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {/* Render các link điều hướng chính */}
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                 {/* Thêm link Profile vào menu chính nếu đã đăng nhập */}
                 {isAuthenticated && (
                     <NavLink
                        to="/profile"
                        className={(navClass) =>
                          navClass.isActive ? "nav__active nav__item" : "nav__item"
                        }
                      >
                        Profile
                      </NavLink>
                 )}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;