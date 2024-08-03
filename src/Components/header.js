import React from "react";
import Logo from "../assets/logo_header.png";

const ContentHeader = () => {
  return (
    <div className="w-full">
      <div className="content-header py-3">
        Stay connected to Farmaze with our weekly Market Report »
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="w-full">
      <div className="header py-2">
        <div className="container px-0">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col">
              <img src={Logo} height={116} alt="Logo" />
            </div>
            <div className="col d-flex justify-content-end align-items-center navbar-section">
              <h4><a href="#">My Orders</a></h4>
              <button className="button-section">My Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContentHeader, Header };
