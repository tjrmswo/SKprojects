import { AppBar, Box, Switch, Container, Divider, Drawer, Grid, IconButton, List, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Avatar, ListItemAvatar } from '@mui/material';
import { Menu, HomeOutlined, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const [open, setOpen] = useState(false);
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
        <Container component="main" maxWidth="xs" sx={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
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
                                onClick={() => setOpen(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer
                                open={open}
                                anchor={"left"}
                                onClose={() => setOpen(false)}
                                variant="temporary">
                                <Typography
                                    p={3} variant="h5"
                                    component="div"
                                    textAlign="center">
                                    My Page
                                </Typography>
                                <Divider />
                                <Box>
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
                            sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                                marginRight: 3,
                                fontSize: '1em'
                            }}>
                            환경 설정<br />
                        </Typography>
                    </Toolbar>
                </AppBar><br />
                {/* 알림 */}
                <Grid container>
                    <Grid item>
                        <Typography
                            variant='overline'
                            component="p"
                            sx={{ marginTop: "1.8em", fontSize: "90%" }}>
                            알림
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                이벤트 혜택
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        시장 이벤트 및 마케팅정보 알림
                    </Typography>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                리뷰 알림
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        리뷰 답글 알림
                    </Typography>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                주문 현황
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        현재 픽업 주문 현황 상태 실시간 알림
                    </Typography>
                </Box>
                <Grid container>
                    <Grid item>
                        <Typography
                            variant='overline'
                            component="p"
                            sx={{ fontSize: "90%" }}>
                            기능
                        </Typography>
                    </Grid>
                </Grid>
                {/* 기능 */}
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                이벤트 혜택
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        시장 이벤트 및 마케팅정보 알림
                    </Typography>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                리뷰 알림
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        리뷰 답글 알림
                    </Typography>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "2",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='h6'>
                                주문 현황
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Switch />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        현재 픽업 주문 현황 상태 실시간 알림
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Settings;