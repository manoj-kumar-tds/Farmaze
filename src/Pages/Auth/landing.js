import React from "react";
import {ContentHeader} from "../../Components/header";
import Logo from "../../assets/logo_header.png";
function Landing(params) {
    return (
        <div className="w-full">
       <ContentHeader />
       <div>
        <img src={Logo} />
       </div>
       </div>
    );
}



export default Landing;