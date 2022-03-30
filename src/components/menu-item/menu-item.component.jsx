import React from "react";
import "./menu-item.styles.scss";
import {useNavigate} from "react-router-dom";

const MenuItem = ({title, imageUrl, size}) => {
    let navigate = useNavigate();
    return (
        <div
            className={`menu-item ${size}`}
            onClick={() => {
                navigate("/home");
            }}>
            <div
                className="background-image"
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
