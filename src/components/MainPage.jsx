import { AppBar, Container, Toolbar, Box, Typography, IconButton } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const MainPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/Search")
    }
    const location = useLocation();
    const value = location.state.id;
    return (
        <Container component='main' maxWidth='xs'>
            <Box
                display="flex"
                flexDirection="column">
                <AppBar
                    color='inherit'>
                    <Toolbar>
                        <IconButton
                            size='small'
                            onClick={goBack}>
                            <ArrowBack />
                        </IconButton>
                        <Typography
                            variant='h5'
                            sx={{ flexGrow: 1, textAlign: 'center', marginRight: '1em' }}>{value}</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};

export default MainPage;