import { Menu, HomeOutlined, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircle, AccountCircleOutlined, CloseRounded } from '@mui/icons-material';
import { Avatar, AppBar, Button, Box, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, TextField, Stack, Switch } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Userprofile = () => {
    const [open, setOpen] = useState(false);
    const [nickname, setNickname] = useState('');
    // const [username, setUsername] = useState('');
    const changeMyNickname = (e) => {
        setNickname(e.target.value);
    }
    const deleteMyNickname = () => {
        setNickname(" ");
    }
    // const userIdSave = () => {

    // }
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
    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                paddingLeft: "0",
                paddingRight: "0",
                width: "100%"
            }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center">
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
                                            <ListItemAvatar>
                                                <Avatar sx={{ bgcolor: "secondary.main" }}>
                                                    <AccountCircleOutlined />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="사용자 이름" secondary="user@sungkyul.ac.kr" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </>
                        <Typography
                            variant='h5'
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                                marginLeft: "1em"
                            }}>
                            프로필 설정
                        </Typography>
                        <Button
                            variant='text'
                            sx={{
                                fontWeight: "bold",
                                color: 'black',
                                fontSize: "1em",
                                left: "1em",
                                marginBottom: "1em"
                            }}>저장</Button>
                    </Toolbar>
                </AppBar>
                <Box
                    sx={{
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        marginTop: "3.3em",
                        width: "100%",
                        borderLeft: '0',
                        borderRight: '0'
                    }}>
                    <Box
                        sx={{ textAlign: 'center' }}>
                        <Avatar
                            sx={{
                                marginTop: '1em',
                                marginLeft: "8em",
                                marginBottom: '1em'
                            }}>
                            <AccountCircle />
                        </Avatar>
                    </Box>
                    <Box
                        textAlign='center'>
                        <TextField
                            label="My Nickname"
                            onChange={changeMyNickname}
                            value={nickname || ""}
                            sx={{ width: "71%" }}
                            InputProps={{
                                endAdornment: <IconButton
                                    position="end"
                                    onClick={deleteMyNickname}>
                                    <CloseRounded />
                                </IconButton>
                            }}>
                        </TextField>
                        <Button
                            // onClick={userIdSave}
                            variant="outlined"
                            sx={{
                                marginTop: "0.9em",
                                marginLeft: "0.8em",
                                color: "black",
                                borderColor: "black",
                                fontSize: "0.8em"
                            }}>저장</Button>
                    </Box>
                    <Stack
                        direction="row"
                        sx={{
                            position: "relative",
                            marginTop: "0.5em",
                            marginLeft: "1em",
                            marginBottom: '0.2em'
                        }}>
                        <Typography
                            variant='h6'
                            sx={{
                                fontSize: "1em",
                                fontWeight: "bold",
                                marginRight: '0.5em'
                            }}>
                            이메일
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                color: "gray"
                            }}>
                            user@sungkyul.ac.kr
                        </Typography>
                    </Stack>
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1em",
                            marginLeft: "1em",
                            marginBottom: '0.2em'
                        }}>휴대폰 번호</Typography>
                    <Box
                        sx={{ textAlign: 'center' }}>
                        <TextField
                            label="휴대폰*"
                            sx={{
                                width: "71%",
                                right: "0.1em"
                            }} />
                        <Button
                            variant="outlined"
                            sx={{
                                marginTop: "0.9em",
                                marginLeft: "0.8em",
                                color: "black",
                                borderColor: "black",
                                fontSize: "0.8em"
                            }}>
                            인증
                        </Button>
                    </Box>
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1em",
                            marginTop: "0.6em",
                            marginLeft: "1em"
                        }}>비밀번호 변경</Typography>
                    <Box
                        sx={{ textAlign: 'center' }}>
                        <TextField
                            label="현재 비밀번호"
                            sx={{
                                width: "93%",
                                left: "0.2em"
                            }} />
                        <TextField
                            label="신규 비밀번호"
                            sx={{
                                width: "93%",
                                left: "0.2em"
                            }} />
                    </Box>
                    <Box
                        sx={{ textAlign: 'center' }}>
                        <Button
                            variant='outlined'
                            justify="flex-start"
                            sx={{
                                color: 'black',
                                borderColor: "black",
                                marginTop: "0.6em",
                                marginBottom: '1em'
                            }}>
                            변경
                        </Button>
                    </Box>

                </Box>
                <Box
                    sx={{
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        marginTop: "0.6em",
                        width: "100%",
                        borderLeft: '0',
                        borderRight: '0'
                    }}>
                    <Typography
                        variant='p'
                        sx={{ fontWeight: "bold" }}>
                        마케팅 정보 수신 동의
                    </Typography>
                    <Divider sx={{
                        borderBottomWidth: 1,
                        borderColor: "black"
                    }} />
                    <Grid container >
                        <Grid item xs>
                            <Typography
                                variant='p'
                                sx={{
                                    display: "flex",
                                    fontWeight: "bold",
                                    marginTop: "0.5em"
                                }}>
                                메일 수신동의
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Switch></Switch>
                        </Grid>
                    </Grid>
                    <Divider sx={{
                        borderBottomWidth: 1,
                        borderColor: "black"
                    }} />
                    <Grid container >
                        <Grid item xs>
                            <Typography
                                variant='p'
                                sx={{
                                    display: "flex",
                                    fontWeight: "bold",
                                    marginTop: "0.5em"
                                }}>
                                SNS 수신동의
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Switch></Switch>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Userprofile;