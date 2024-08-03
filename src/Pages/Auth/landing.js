import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ContentHeader } from "../../Components/header";
import Logo from "../../assets/logo_header.png";
import LandingLogo from "../../assets/landing_bg.png";

function Landing() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCreateAccount = () => {
    navigate("/orders"); // Navigate to the desired route
  };

  return (
    <div className="w-ful">
      <ContentHeader />
      <div className="w-100 bg-red login-header d-flex align-items-center">
        <div className="text-center position-absolute w-100">
          <img src={Logo} alt="Logo" />
        </div>
        <div
          className="position-absolute d-flex align-items-center"
          style={{ height: "80px", right: "100px" }}
        >
          <div style={{ marginRight: "43px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="#382E2C"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
          <div className="text-end w-100 align-content-center">
            <button className="button-section">LOG IN</button>
          </div>
        </div>
      </div>
      <div>
        <div className="position-relative flex-grow flex flex-col">
          <img className="w-100 content" src={LandingLogo} alt="Landing" />
          <div className="position-absolute welcome-text text-center">
            <div style={{ marginBottom: "70px" }}>
              <h3>We make it happen.</h3>
              <h3>Fast, fresh, customized food distribution.</h3>
            </div>
            <button className="button-section" onClick={handleCreateAccount}>
              CREATE A BUSINESS ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
