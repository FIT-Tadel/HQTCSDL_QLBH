import React from "react";
import '../css/fonts/fontawesome-free-6.2.0/css/all.min.css'
import Items from "./item";
import pic from '../default.jpg'
//import { Outlet, Link } from "react-router-dom";

export default function Container(){

    const DisplayItem = props =>(
        <div className="cover">

            <div className="img">   
                <img className="img-display" src={pic} alt="picture of food"/>
            </div>

            <div className="detail">    

                <div className="detail-items">
                    <div className="title">Tên món ăn:</div>
                    <div className="value">{props.name}</div>
                </div>

                <div className="detail-items">
                    <div className="title">Mô tả:</div>
                    <div className="value">{props.des}</div>
                </div>

                <div className="detail-items">
                    <div className="title">Nhận xét:</div>
                    <div className="value">{props.compliment}</div>
                </div>

                <div className="detail-items">
                    <div className="title">Giá:</div>
                    <div className="value">{props.price} Đ</div>
                </div>

            </div>
        </div>
    )

    return(
        <div className="display">
            <div className="display-items"> 
                {Items.map(
                    item => (
                    <DisplayItem 
                        key = {item.id}
                        img = {item.linkImg}
                        name = {item.foodName}
                        des = {item.description}
                        compliment = {item.judge}
                        price = {item.price}
                    />
                ))}
            </div>
        </div>
    );
}   