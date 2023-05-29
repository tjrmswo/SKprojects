import { AppBar, Box, Container, IconButton, Stack, Toolbar, Typography, Grid, Drawer, List, ListItem, ListItemButton, ListItemIcon, Divider, ListItemText, Avatar, ListItemAvatar, Tabs, Tab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';
import { Menu, Search, ArrowForward, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined, Refresh } from "@mui/icons-material"
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css';
import { style } from '@mui/system';
import { collection, getDocs, orderBy, addDoc, query, deleteDoc, doc, onSnapshot, updateDoc, where, getDoc } from "firebase/firestore";
import { db } from './Firebase'
import 'firebase/database'
import { fireStoreJob } from "./Firebase.jsx";
import { async } from '@firebase/util';

const ShopKeeper = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState('one');
    const handleToptab = (e, newValue) => {
        setValue(newValue);
    }
    const goToMyOrderHistory = () => {
        navigate("/MyOrderHistory")
    }
    const goToAlarm = () => {
        navigate("/Alarm")
    }
    const goToFavoriteStores = () => {
        navigate("/FavoriteStores")
    }
    const goToSettings = () => {
        navigate("/Settings")
    }
    const goToMySettings = () => {
        navigate("/Userprofile")
    }
    const goToProductSearch = () => {
        navigate("/ProductSearch")
    }
    const TabPanel = (props) => {
        const { children, value, index } = props;
        return (<div hidden={value !== index}>
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>)
    }
    const [open, setOpen] = useState(false);
    const [dataList, setDataList] = useState([]);


    const OrderCollectionRef = collection(db, "Order");
    const q = query(OrderCollectionRef, orderBy("timestamp", "desc"));

    const getData = async () => {   //Order 데이터 불러오는 함수
        try {
            const q = query(OrderCollectionRef, orderBy("timestamp", "desc"))
            const getData = await getDocs(collection(db, "Order"))

            getData.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            })
            const newData = getData.docs.map(doc => ({

                ...doc.data()
            }));
            console.log(newData);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(query(OrderCollectionRef, orderBy("timestamp", "desc")));
            const fetchedData = snapshot.docs.map((doc) => doc.data());
            setDataList(fetchedData);
        };

        fetchData();
    }, []);

    let OrderList = [];
    const [Order1, setOrder1] = useState("");
    return (
        <Container component="main" maxWidth="xs" sx={{ paddingLeft: '0', paddingRight: "0" }}>
            <Box sx={{
                flexDirection: 'column',
                display: "flex",
                alignItems: 'center'
            }}>
                <AppBar
                    color='inherit'>
                    <Toolbar>
                        <>
                            <IconButton
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='open drawer'
                                sx={{ mr: 2 }}
                                onClick={() => setOpen(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer
                                open={open}
                                anchor={"left"}
                                onClose={() => setOpen(false)}
                                // 주의 꼭 Temporary 값으로 설정해야만 click 이벤트 값을 받아서 토글 형식으로 유지 가능.
                                variant="temporary">
                                <Typography p={3} variant="h5" component="div" textAlign="center">
                                    My page
                                </Typography>
                                <Divider />
                                <Box
                                    width='250px'
                                    textAlign='center'
                                    style={{ width: 250 }}
                                    role="presentation"
                                    onClick={() => setOpen(false)}>
                                    <List>
                                        <ListItem>
                                            <ListItemButton onClick={goToMyOrderHistory}>
                                                <ListItemIcon><ContentCopyOutlined /></ListItemIcon>
                                                <ListItemText primary="나의 주문 내역" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToAlarm}>
                                                <ListItemIcon><NotificationsNoneOutlined /></ListItemIcon>
                                                <ListItemText primary="알림" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToFavoriteStores}>
                                                <ListItemIcon><BookmarkBorderOutlined /></ListItemIcon>
                                                <ListItemText primary="찜한 가게 목록" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToSettings}>
                                                <ListItemIcon><SettingsOutlined /></ListItemIcon>
                                                <ListItemText primary="설정" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                    <List>
                                        <ListItem sx={{ position: 'fixed', bottom: 0, width: "100%" }}>
                                            <ListItemButton onClick={goToMySettings}>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                                                        <AccountCircleOutlined />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="사용자 이름" secondary="user@sungkyul.ac.kr" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </>
                        <Typography
                            variant='h5'
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center', marginRight: "1em" }}>
                            가게 이름
                        </Typography>
                        <IconButton
                            size='large'
                            aria-label='Refresh'
                            color='inherit'
                            onClick={getData}>
                            <Refresh />
                        </IconButton>
                    </Toolbar>
                </AppBar><br />
                <Box
                    width='100%'>
                    <Tabs
                        sx={{ paddingTop: 3, paddingBottom: 1 }}
                        TabIndicatorProps={{ style: { backgroundColor: 'orange' } }}
                        textColor='inherit'
                        variant="fullWidth"
                        value={value}
                        onChange={handleToptab}>
                        <Tab
                            value="one"
                            label="내 가게">
                        </Tab>
                        <Tab
                            value="two"
                            label="현재 주문">
                        </Tab>
                        <Tab
                            value="three"
                            label="재고 관리">
                        </Tab>
                    </Tabs>
                    <TabPanel value={value} index="one">

                        <Box sx={{ height: "80px", border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1, position: "relative" }}>
                            <div style={{ fontWeight: "Bold" }}>매출</div>
                            <hr></hr>
                            <Box sx={{ position: "absolute", left: "30px", bottom: "7px" }}>
                                <Typography variant='h5' component="div" sx={{ color: 'orange', fontSize: "13px" }}>
                                    금일 매출 총액
                                </Typography>
                                <Typography variant='h5' component="div" sx={{ color: 'black', fontSize: "18px", fontWeight: "bold" }}>
                                    277, 400원
                                </Typography>
                            </Box>

                            <Box sx={{ position: "absolute", right: "30px", bottom: "7px" }}>
                                <Typography variant='h5' component="div" sx={{ color: 'orange', fontSize: "13px" }}>
                                    전일 매출 총액
                                </Typography>
                                <Typography variant='h5' component="div" sx={{ color: 'black', fontSize: "18px", fontWeight: "bold" }}>
                                    780, 800 원
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ height: "80px", border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1, position: "relative" }}>
                            <div style={{ fontWeight: "Bold" }}>객수</div>
                            <hr></hr>
                            <Box sx={{ position: "absolute", left: "30px", bottom: "7px" }}>
                                <Typography variant='h5' component="div" sx={{ color: 'orange', fontSize: "13px" }}>
                                    금일 객수
                                </Typography>
                                <Typography variant='h5' component="div" sx={{ color: 'black', fontSize: "18px", fontWeight: "bold" }}>
                                    38명
                                </Typography>
                            </Box>

                            <Box sx={{ position: "absolute", right: "30px", bottom: "7px" }}>
                                <Typography variant='h5' component="div" sx={{ color: 'orange', fontSize: "13px" }}>
                                    전일 객수
                                </Typography>
                                <Typography variant='h5' component="div" sx={{ color: 'black', fontSize: "18px", fontWeight: "bold" }}>
                                    106명
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ height: "200px", border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1, position: "relative" }}>
                            <div style={{ fontWeight: "Bold" }}>가게 리뷰</div>
                            <hr></hr>
                        </Box>

                    </TabPanel>
                    <TabPanel value={value} index="two">

                        {dataList.map((data) => (
                            <Box key={data.id}
                                sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1, position: "relative" }}>
                                <button className="orderlistbtn" onClick={function () { alert('주문서를 출력하시겠습니까?') }}>주문서 출력</button>
                                <button className="order1" onClick={function () { alert('주문 접수를 하시겠습니까?') }}>주문 접수</button>
                                <Typography variant='h6' omponent="div" sx={{ color: 'black', fontSize: "20px" }}>
                                    {data.ordertime}
                                </Typography>
                                <Typography variant='h6' component="div" sx={{ color: 'black', fontSize: "15px" }}>
                                    {data.price}원
                                </Typography>
                                <Typography variant='h6' component="div" sx={{ color: '#393939', fontSize: "13px" }}>
                                    {data.product.name1} {data.product.num1}개, {data.product.name2} {data.product.num2}개
                                </Typography>
                                <Typography variant='h6' component="div" sx={{ color: 'red', fontSize: "13px", fontWeight: "bold" }}>
                                    {data.method}
                                </Typography></Box>
                        ))}

                    </TabPanel>
                    <TabPanel value={value} index="three">
                        <Box sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1, position: "relative" }}>
                            <Typography variant='h6' compoenet="div" sx={{ color: 'black', fontSize: "20px", fontWeight: 'bold' }}>
                                맛있는 꽈배기 (3700원)
                            </Typography>
                            <Typography variant='h6' component="div" sx={{ color: 'black', fontSize: "15px" }}>
                                현재 주문가능 수량  20개
                            </Typography>
                            <Typography variant='h6' component="div" sx={{ color: '#393939', fontSize: "15px" }}>
                                수정 주문가능 수량
                                <input></input>
                                <button>수정</button>
                            </Typography>
                        </Box>

                        <Box sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1, position: "relative" }}>
                            <Typography variant='h6' compoenet="div" sx={{ color: 'black', fontSize: "20px", fontWeight: 'bold' }}>
                                매콤한 떡볶이 (2500원)
                            </Typography>
                            <Typography variant='h6' component="div" sx={{ color: 'black', fontSize: "15px" }}>
                                현재 주문가능 수량  305개
                            </Typography>
                            <Typography variant='h6' component="div" sx={{ color: '#393939', fontSize: "15px" }}>
                                수정 주문가능 수량
                                <input></input>
                                <button>수정</button>
                            </Typography>
                        </Box>
                    </TabPanel>
                </Box>
            </Box>
        </Container>
    );
};

export default ShopKeeper;