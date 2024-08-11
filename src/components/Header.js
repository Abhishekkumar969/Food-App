import { LOGO_URL } from "../utils/constants";
import { useState, } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header rendered");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-1">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        online status: {onlineStatus ? "online" : "offline"}
                    </li>
                    <li className="px-4" > <Link to="/">Home</Link></li>
                    <li className="px-4" > <Link to="/About">About Us</Link></li>
                    <li className="px-4"> <Link to="/Contact">Contact Us </Link ></li>
                    <li className="px-4"> <Link to="/Grocery">Grocery </Link ></li>
                    <li className="px-4"> Cart</li>
                    <li className="px-4"> <button className="login"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login");
                        }}>
                        {btnNameReact}</button>
                    </li>
                </ul>
            </div>
        </div >
    )
};

export default Header;