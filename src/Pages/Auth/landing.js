import React from "react";
import {ContentHeader} from "../../Components/header";
import Logo from "../../assets/logo_header.png";
function Landing(params) {
    return (
        <div className="w-full">
       <ContentHeader />
       <div className="position-absolute w-100">
       <div className="text-center position-absolute w-100" >
        <img src={Logo} height={100} />
       </div>
       <div className="text-end position-absolute w-100 align-content-center" style={{height:"100px"}}>
       <div className="button-style px-4 py-2">
  <div className="button-style1">LOG IN</div>
</div>
       </div>
       </div>
       </div>
    );
}



export default Landing;