import { Box, Container } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const StorePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const storeName = location.state.name;
    console.log(storeName);
    return (
        <Container
            component='main'
            maxWidth='xs'
            sx={{
                paddingLeft: '0',
                paddingRight: '0'
            }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems='center'>
                <img src="./images/storeInfo/marketImg.png" alt="가게 페이지" width="100%" />
                <div style={{ fontWeight: "bold", fontSize: "130%" }}>{storeName.Name}</div>
            </Box>
        </Container>
    );
};

export default StorePage;