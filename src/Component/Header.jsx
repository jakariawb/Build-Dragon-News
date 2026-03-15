import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid text-center  justify-center ">

                <img className="lg:h-auto  " src={logo} alt="" />

                <h1>Journalism Without Fear or Favour</h1>

                <h1>
                    {format(new Date(), "EEEE , MMM , dd , yyyy")}
                </h1>
            </div>
        </div>
    );
};

export default Header;