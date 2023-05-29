import { AppBar, Box, Button, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Avatar, ListItemAvatar } from '@mui/material';
import { Menu, HomeOutlined, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FavoriteStores = () => {
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
        <Container component="main" maxWidth="xs" sx={{ paddingLeft: "0 ", paddingRight: "0" }}>
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
                                <Typography p={3} variant="h5" component="div" textAlign="center">
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
                                marginRight: '1em',
                                fontSize: '1.5em'
                            }}>
                            찜한 가게 목록<br />
                            <div style={{ fontSize: "14px" }}>안양 중앙 시장</div>
                        </Typography>
                    </Toolbar>
                </AppBar><br />
                <Box
                    width="100%"
                    sx={{
                        marginTop: "40px",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        marginBottom: 2,
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{
                                color: 'orange',
                                fontSize: "15px",
                                marginLeft: 2,
                                marginTop: 0.7
                            }}>
                                가게 종류
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        판매 물품 종류
                    </Typography>
                    <Grid container xs={12}>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    width: "90%"
                                }}>후기</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    marginLeft: 0.7
                                }}>가게 정보</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    width: "90%"
                                }}>전화</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "1",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        marginBottom: 2,
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{
                                color: 'orange',
                                fontSize: "15px",
                                marginLeft: 2,
                                marginTop: 0.7
                            }}>
                                가게 종류
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        판매 물품 종류
                    </Typography>
                    <Grid container xs={12}>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    width: "90%"
                                }}>후기</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    marginLeft: 0.7
                                }}>가게 정보</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    width: "90%"
                                }}>전화</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    width="100%"
                    sx={{
                        marginTop: "1",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        marginBottom: 2,
                        padding: 1
                    }}>
                    <Grid container>
                        <Grid item>
                            <Typography variant='h6'>
                                가게명
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{
                                color: 'orange',
                                fontSize: "15px",
                                marginLeft: 2,
                                marginTop: 0.7
                            }}>
                                가게 종류
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h6'
                        component="div"
                        sx={{
                            color: 'gray',
                            fontSize: "13px"
                        }}>
                        판매 물품 종류
                    </Typography>
                    <Grid container xs={12}>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    width: "90%"
                                }}>후기</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    marginLeft: 0.7
                                }}>가게 정보</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'black',
                                    width: "90%"
                                }}>전화</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default FavoriteStores;