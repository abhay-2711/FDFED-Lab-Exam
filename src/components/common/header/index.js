import React from "react";
import "./header.css";
import Logo from "../../../images/logo.png";

function Header(){
    return (
        <div className="max-width header">
            <img src={Logo} alt="Zomato-logo" style={{width:"100px", height:"100px"}} className="header-logo" />
            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                    <div className="location-icon-name">
                    <i className="fi fi-rr-marker absolute-center location-icon"></i>
                    <div>Bangalore</div>
                    </div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>
                    <div className="location-search-separator"></div>
                    <div className="header-searchBar">
                    <i className="fi fi-rr-search absolute-center search-icon"></i>
                    <input placeholder="Search for hotel" className="search-input" />
                    </div>
                </div>
                <div className="profile-wrapper">
                    <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7c100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Profile" className="header-profile-image" />
                    <span className="header-username">Abhay</span>
                    <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;