import React from "react";
import Title from "./Title";
import part1 from "../images/gif/belPraf.png"; 
import part3 from "../images/gif/brsm.png";
import part4 from "../images/gif/bru.png";
import part5 from "../images/gif/rosSotr.png";



export default function Loading() {
    return (
        <div className="services-part">
            <Title title="Партнеры" />
            <div className="services-center">
                <img src={part1} alt="" />
                <img src={part3} alt="" />
                <img src={part4} alt="" />
                <img src={part5} alt="" />
            </div>
        </div>
    )
}