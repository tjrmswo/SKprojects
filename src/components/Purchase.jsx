import { Radio, RadioGroup, FormControl, FormLabel, Button, ButtonGroup, FormControlLabel, AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Add, Remove } from "@mui/icons-material"
import { useState } from 'react';
import React from 'react';
import { db } from './Firebase'
import 'firebase/database'
import { collection, addDoc } from "firebase/firestore";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './button.css';
// import { style } from '@mui/system';
import moment from 'moment';

const Purchase = () => {
    const [count1, setCount1] = React.useState(1);
    const [count2, setCount2] = React.useState(1);
    const [product, setProduct] = useState('');
    const [userName, setUserName] = useState('');
    const [price, setPrice] = useState('');
    const [paymethod, setPayMethod] = useState('');

    const OrderCollectionRef = collection(db, "Order");
    const getProduct = (e) => {
        setProduct(e.target.value);
    }
    const getUserName = (e) => {
        setUserName(e.target.value);
    }
    const getPrice = (e) => {
        setPrice(e.target.value);
    }
    const getPayMethod = (e) => {
        setPayMethod(e.target.value);
    }

    const addData = async () => {
        try {
            const res = await addDoc(OrderCollectionRef, {
                name: "Gildong",
                product: { name1: "매콤 떡볶이", num1: count1, name2: "맛있는 꽈배기", num2: count2 },
                price: count1 * 2500 + count2 * 3700,
                method: paymethod,
                ordertime: nowTime,
                state: "주문 접수"
            });

            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

    // const navigate = useNavigate();
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
                        <Typography
                            variant='h5'
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center', marginRight: "1em" }}>
                            결제하기
                        </Typography>
                        <IconButton
                            size='large'
                            aria-label='search'
                            color='inherit'>
                        </IconButton>
                    </Toolbar>
                </AppBar><br />

                <Box
                    width='100%'
                    sx={{
                        marginTop: "2",
                        padding: 5
                    }}>
                    <Box sx={{ height: "22px", border: "1px solid #E0E0E0", boxShadow: "0px -3px 10px -3px gray", marginTop: "2", padding: 1, position: "relative" }}>
                        <div style={{ fontWeight: "Bold" }}>가게명</div>
                    </Box>

                    <Box sx={{ height: "60px", border: "1px solid #E0E0E0", padding: 1, position: "relative" }}>
                        <Box sx={{ position: "absolute", left: "20px", bottom: "10px" }}>
                            <Typography variant='h4' component="div" sx={{ color: 'black', fontSize: "15px", fontWeight: "bold" }}>
                                매콤 떡볶이
                            </Typography>
                            <Typography variant='h5' component="div" sx={{ color: 'black', fontSize: "12px", fontWeight: "bold" }}>
                                가격 : 2500원
                                <br></br>
                                {count1}개: {count1 * 2500}원
                            </Typography>
                        </Box>

                        <Box sx={{ position: "absolute", right: "30px", bottom: "7px" }}>
                            <ButtonGroup size='small' >
                                <Button
                                    color="warning"
                                    style={{ color: "orange" }}
                                    aria-label="reduce"
                                    onClick={() => {
                                        setCount1(Math.max(count1 - 1, 0));
                                    }}>
                                    <Remove fontSize="small" />
                                </Button>
                                <Button
                                    color="warning"
                                    style={{ color: "orange" }}
                                    aria-label="increase"
                                    onClick={() => {
                                        setCount1(count1 + 1);
                                    }}
                                >
                                    <Add fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Box>

                    <Box sx={{ height: "60px", border: "1px solid #E0E0E0", marginBottom: 2, padding: 1, position: "relative" }}>
                        <Box sx={{ position: "absolute", left: "20px", bottom: "10px" }}>
                            <Typography variant='h4' component="div" sx={{ color: 'black', fontSize: "15px", fontWeight: "bold" }}>
                                맛있는 꽈배기
                            </Typography>
                            <Typography variant='h5' component="div" sx={{ color: 'black', fontSize: "12px", fontWeight: "bold" }}>
                                가격 : 3700원
                                <br></br>
                                {count2}개: {count2 * 3700}원
                            </Typography>
                        </Box>

                        <Box sx={{ position: "absolute", right: "30px", bottom: "7px" }}>
                            <ButtonGroup size='small' >
                                <Button
                                    color="warning"
                                    style={{ color: "orange" }}
                                    aria-label="reduce"
                                    onClick={() => {
                                        setCount2(Math.max(count2 - 1, 0));
                                    }}>
                                    <Remove fontSize="small" />
                                </Button>
                                <Button
                                    color="warning"
                                    style={{ color: "orange" }}
                                    aria-label="increase"
                                    onClick={() => {
                                        setCount2(count2 + 1);
                                    }}
                                >
                                    <Add fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Box>

                    <Box sx={{ height: "160px", border: "1px solid #E0E0E0", boxShadow: "0 0 6px gray", marginBottom: 2, padding: 1, position: "relative" }}>
                        <div style={{ fontWeight: "Bold" }}>결제 수단</div>
                        <hr></hr>
                        <Box sx={{ position: "absolute", left: "20px", bottom: "7px" }}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Card"
                                    name="radio-buttons-group"
                                    value={paymethod}
                                    onChange={getPayMethod}
                                >
                                    <FormControlLabel value="만나서 카드결제" control={<Radio style={{ color: 'orange' }} />} label="만나서 카드결제" />
                                    <FormControlLabel value="만나서 현금결제" control={<Radio style={{ color: 'orange' }} />} label="만나서 현금결제" />
                                    <FormControlLabel value="카드결제" control={<Radio style={{ color: 'orange' }} />} label="카드결제" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Box>

                    <div className="btncenter">
                        <Button onClick={addData} variant="contained" color="warning">
                            {count1 * 2500 + count2 * 3700}원 픽업 주문하기
                        </Button>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default Purchase;