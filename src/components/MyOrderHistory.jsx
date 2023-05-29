import { AppBar, Container, Toolbar, IconButton, Box, Typography, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Drawer, ListItemAvatar, Tabs, Tab, Grid, Button } from '@mui/material';
import { Menu, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined, HomeOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrderHistory = () => {
    const [value, setValue] = useState('one');
    const [open, setOpen] = useState(false);
    const handleToptab = (e, newValue) => {
        setValue(newValue);
    }
    /* 사용자 지정 탭은 children value index 값을 제공한다.
     value의 값과 index 값이 다르면 태그를 활성화한다.
     그렇지 않으면 화면에 값을 보여주게 된다.
    */
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
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/")
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
    return (
        <Container component="main" maxWidth="xs" sx={{ paddingLeft: '0' }} >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <AppBar
                    color='default'>
                    <Toolbar>
                        <>
                            <IconButton
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='open drawer'
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
                                            <ListItemButton onClick={goToHome}>
                                                <ListItemIcon><HomeOutlined /></ListItemIcon>
                                                <ListItemText primary="홈"></ListItemText>
                                            </ListItemButton>
                                        </ListItem>
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
                            variant='h6'
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center', marginRight: "1.6em" }}>
                            주문 내역
                        </Typography>
                    </Toolbar>
                </AppBar><br />
                <Box width="100%">
                    <Tabs
                        sx={{ paddingTop: 3, paddingBottom: 1 }}
                        TabIndicatorProps={{ style: { backgroundColor: 'orange' } }}
                        textColor='inherit'
                        value={value}
                        onChange={handleToptab}
                        aria-label="wrapped label tabs example"
                        variant='fullWidth'>
                        <Tab
                            value="one"
                            label="접수된 주문">

                        </Tab>
                        <Tab
                            value="two"
                            label="완료 주문">
                        </Tab>
                    </Tabs>
                </Box>
            </Box>
            {/* 접수된 주문 */}
            <TabPanel value={value} index="one">
                <Box
                    width='100%'
                    sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1 }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item sx={{ color: 'orange' }}>
                            접수 완료
                        </Grid>
                    </Grid>
                    <Typography variant='h6' component="div" sx={{ color: 'gray', fontSize: "13px" }}>
                        주문한 물품1, 주문한 물품2
                    </Typography>
                    <Button
                        variant='outlined'
                        sx={{
                            marginRight: 2,
                            color: "black",
                            borderColor: 'black'
                        }}>
                        주문 취소
                    </Button>
                    <Button
                        variant='outlined'
                        sx={{
                            marginRight: 2,
                            color: "black",
                            borderColor: 'black'
                        }}>
                        가게 정보
                    </Button>
                    <Button
                        variant='outlined'
                        sx={{
                            color: "black",
                            borderColor: 'black'
                        }}>전화</Button>
                </Box>
                <Box
                    width='100%'
                    sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1 }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item sx={{ color: 'orange' }}>
                            픽업 대기
                        </Grid>
                    </Grid>
                    <Typography variant='h6' component="div" sx={{ color: 'gray', fontSize: "13px" }}>
                        주문한 물품1, 주문한 물품2
                    </Typography>
                    <Button
                        variant='outlined'
                        sx={{
                            marginRight: 2,
                            color: "black",
                            borderColor: 'black'
                        }}>주문 취소</Button>
                    <Button
                        variant='outlined'
                        sx={{
                            marginRight: 2,
                            color: "black",
                            borderColor: 'black'
                        }}>가게 정보</Button>
                    <Button
                        variant='outlined'
                        sx={{
                            color: "black",
                            borderColor: 'black'
                        }}>전화</Button>
                </Box>
                <Box
                    width='100%'
                    sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", padding: 1 }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item sx={{ color: 'orange' }}>
                            픽업 대기
                        </Grid>
                    </Grid>
                    <Typography variant='h6' component="div" sx={{ color: 'gray', fontSize: "13px" }}>
                        주문한 물품1, 주문한 물품2
                    </Typography>
                    <Button
                        variant='outlined'
                        sx={{
                            marginRight: 2,
                            color: "black",
                            borderColor: 'black'
                        }}>주문 취소</Button>
                    <Button
                        variant='outlined'
                        sx={{
                            marginRight: 2,
                            color: "black",
                            borderColor: 'black'
                        }}>가게 정보</Button>
                    <Button
                        variant='outlined'
                        sx={{
                            color: "black",
                            borderColor: 'black'
                        }}>전화</Button>
                </Box>
            </TabPanel>
            {/* 완료 주문 */}
            <TabPanel value={value} index="two">
                <Box
                    width="100%"
                    sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1 }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item sx={{ color: 'orange' }}>
                            픽업 완료
                        </Grid>
                    </Grid>
                    <Typography variant='h6' component="div" sx={{ color: 'gray', fontSize: "13px" }}>
                        주문한 물품1, 주문한 물품2
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant='outlined' sx={{
                                marginRight: 2,
                                width: '100%',
                                color: "black",
                                borderColor: 'black'
                            }}>가게 정보</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant='outlined' sx={{
                                width: '100%',
                                color: "black",
                                borderColor: 'black'
                            }}>전화</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    width="100%"
                    sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", marginBottom: 2, padding: 1 }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item sx={{ color: 'orange' }}>
                            픽업 완료
                        </Grid>
                    </Grid>
                    <Typography variant='h6' component="div" sx={{ color: 'gray', fontSize: "13px" }}>
                        주문한 물품1, 주문한 물품2
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant='outlined' sx={{
                                marginRight: 2,
                                width: '100%',
                                color: "black",
                                borderColor: 'black'
                            }}>가게 정보</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant='outlined' sx={{
                                width: '100%',
                                color: "black",
                                borderColor: 'black'
                            }}>전화</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    width="100%"
                    sx={{ border: "1px solid #E0E0E0", boxShadow: "0 0 6px", padding: 1 }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item sx={{ color: 'orange' }}>
                            픽업 완료
                        </Grid>
                    </Grid>
                    <Typography variant='h6' component="div" sx={{ color: 'gray', fontSize: "13px" }}>
                        주문한 물품1, 주문한 물품2
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant='outlined' sx={{
                                marginRight: 2,
                                width: '100%',
                                color: "black",
                                borderColor: 'black'
                            }}>가게 정보</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant='outlined' sx={{
                                width: '100%',
                                color: "black",
                                borderColor: 'black'
                            }}>전화</Button>
                        </Grid>
                    </Grid>
                </Box>
                {/* 완료 주문 코드끝 */}
            </TabPanel>
        </Container>
    );
};

export default MyOrderHistory;