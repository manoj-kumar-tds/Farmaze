import React from "react";
import {ContentHeader} from "../../Components/header";
import Logo from "../../assets/logo_header.png";
import LandingLogo from "../../assets/landing_bg.png"
function Landing(params) {
    return (
        <div className="w-ful">
       <ContentHeader />
       {/* <div className="login-header"> */}
       <div className="position-absolute w-100 bg-red login-header py-3">
       <div className="text-center position-absolute w-100" >
        <img src={Logo} height={80} />
       </div>
       <div className="text-end position-absolute w-100 align-content-center" style={{height:"80px"}}>
        <button className="button-style px-3 py-2">LOG IN</button>
        </div>
       </div>
       <div className=" relative flex-grow flex flex-col">
       <img className="w-100 content" src={LandingLogo} />
       {/* </div> */}
       </div>
       </div>
    );
}



export default Landing;