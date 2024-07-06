import React from "react";
import './App.css'

export default function Info(){
    return(
        <header>
            <div className="img">
                <img src="src\assets\hero-pix (4).jpeg" alt="Profile pix" className="profile-img"/>
            </div>
            <div className="header-txt">
                <h1 className="header-title">Mfoniso Fabian</h1>
                <p className="header-role">Front-End Developer</p>
            </div>
            <div className="btns">
                <button className="white">Email</button>
                <button className="blue">Phone</button>
            </div>
        </header>
    )
}