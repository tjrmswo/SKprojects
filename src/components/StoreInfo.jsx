import React, { useState } from "react";
import Information from "./information";
import Menu from "./Menu";
import Review from "./review";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';

const StoreInfo = () => {
    const [toggleState, setToggleState] = useState(1);
    const [change, setchange] = useState(203);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "white",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
        }}>
            <header>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 8 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            <div style={{
                                fontSize: "40px",
                                fontWeight: "800",
                                color: "black",
                                textAlign: "center"
                            }}>
                                안양 중앙 시장
                            </div>
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div style={{
                    fontSize: "40px",
                    fontWeight: "800",
                    color: "black",
                    textAlign: "center"
                }}>
                    <img
                        style={{
                            marginTop: "0.5em",
                            width: "95%",
                            height: "4em",
                            borderRadius: "20px",
                        }}
                        alt="mark" src="img/ssss.png" />
                    <br />
                    성결 시장 맛집
                </div>
            </header>

            <body>
                <div style={{
                    marginTop: "0.3em",
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "black",
                    textAlign: "center",
                }}>
                    <span >총리뷰 (330)</span>
                    <span onClick={() => { setchange(change + 1) }}>👍</span> {change}
                    <span onClick={function () { alert('010-1234-5678') }}>📞</span>전화걸기
                    <span onClick={function () { alert('www.wwwww.co.kr') }}>♥</span>공유
                </div>

                <div style={{
                    marginTop: "0.5em",
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "rgb(18, 52, 104)",
                    textAlign: "center",
                }}>
                    결제 방법:예약 및 픽업 구매,현장 결제
                </div>
            </body>

            <div>
                <div style={{ display: "flex" }}>
                    <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                        style={{
                            fontSize: "15px",
                            fontWeight: "800",
                            padding: "1em",
                            width: "100%",
                            boxSizing: "content-box",
                            position: "relative",
                            outline: "none",
                        }}>
                        가게 물품
                    </button>
                    <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                        style={{
                            fontSize: "15px",
                            fontWeight: "800",
                            padding: "1em",
                            width: "100%",
                            boxSizing: "content-box",
                            position: "relative",
                            outline: "none",
                        }}>
                        가게 정보
                    </button>
                    <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                        style={{
                            fontSize: "15px",
                            fontWeight: "800",
                            padding: "1em",
                            width: "100%",
                            boxSizing: "content-box",
                            position: "relative",
                            outline: "none",
                        }}>
                        리뷰
                    </button>
                </div>

                <div style={{
                    fontSize: "15px",
                    fontWeight: "800",
                    width: "100%",
                    boxSizing: "content-box",
                    position: "relative",
                    outline: "none",
                }}>
                    <div style={toggleState === 1 ? {
                        display: "block",
                        padding: "1em",
                        width: "100%",
                        height: "100%",
                    } :
                        {
                            padding: "1em",
                            width: "100%",
                            height: "100%",
                            display: "none"
                        }} >
                        <Menu />
                    </div>

                    <div style={
                        toggleState === 2 ? {
                            display: "block",
                            padding: "1em",
                            width: "100%",
                            height: "100%",
                        } :
                            {
                                padding: "1em",
                                width: "100%",
                                height: "100%",
                                display: "none"
                            }}>
                        <Information />
                    </div>

                    <div style={
                        toggleState === 3 ? {
                            display: "block",
                            padding: "1em",
                            width: "100%",
                            height: "100%",
                        } :
                            {
                                padding: "1em",
                                width: "100%",
                                height: "100%",
                                display: "none"
                            }}>
                        <Review />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StoreInfo;