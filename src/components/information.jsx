import React from "react";
import "./tool.css"
import Product from "./Product";


const information = (props) => {
    const shopName = Product[props.index].title;
    const shopTime = Product[props.index].shopTime;
    const shopClosedDays = Product[props.index].shopClosedDays;
    const shopTel = Product[props.index].shopTel;

    const businessRepresentative = Product[props.index].businessRepresentative;
    const businessAddress = Product[props.index].businessAddress;
    const businessNumber = Product[props.index].businessNumber;

    return (
        <div style ={{
            margin: '20px',
        }}>
            <h1>가게 소개(사장님 입력)</h1>
            <div className="product">
                <div className="s2">
                    <h2>영업정보</h2>
                    <h4>가게 명: <mark>{shopName}</mark></h4>
                    <h4>운영 시간: <mark>{shopTime}</mark></h4>
                    <h4>휴무일: <mark>{shopClosedDays}</mark></h4>
                    <h4>전화 번호: <mark>{shopTel}</mark></h4>
                </div>

                <div className="s2">
                    <h2>사업자 정보</h2>
                    <h4>대표자 명: <mark>{businessRepresentative}</mark></h4>
                    <h4>사업자 주소: <mark>{businessAddress}</mark></h4>
                    <h4>사업자 등록번호: <mark>{businessNumber}</mark></h4>
                </div>
            </div>
        </div>
    );
}
export default information;