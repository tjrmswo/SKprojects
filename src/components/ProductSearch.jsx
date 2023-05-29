import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from "./Product"
import { Box, Container, TextField, IconButton, AppBar, Toolbar, Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { ArrowBack, Search } from '@mui/icons-material';
import db, { storage, ref, getDownloadURL } from './Firebase';
import { collection, query, where } from './Firebase';

const ProductSearch = () => {

    console.log("APP의 storage를 가져옵니다.")
    console.log(storage);
    console.log("/clothStore/clothStore.jpg 경로의 참조를 가져옵니다.");
    const storageRef = ref(storage, '/clothStore/clothStore.jpg');
    console.log(storageRef);

    getDownloadURL(storageRef).then((url) => {
        const imgsample = document.querySelector('.imgsample');
        imgsample.setAttribute('src', url);
        console.log('/clothStore/clothStore.jpg 경로의 참조한 곳의 url을 출력해봅니다. ')
        console.log(url);
    })

    const managerRef = collection(db, 'MemberList');
    const q = query(managerRef, where("id", "==", "gildong"));
    console.log('컬렉션 MemberList의 참조를 가져옵니다.');
    console.log(managerRef);
    console.log('컬렉션 MemberList 아래, id값이 gildong인 문서를 가져옵니다.');
    console.log(q);


    const navigate = useNavigate();
    const [product, setProduct] = useState("");
    // 홈으로 가기
    const goToHome = () => {
        navigate('/');
    }
    // 상품 검색 시 변화를 감지함.
    const onProductSearch = (e) => {
        setProduct(e.target.value);
    }
    /* product 컴포넌트를 불러와서 filter 함수를 통해
        요소의 title 속성과 product를 비교해 title이 product 값을 가지고 있는지 판단.
    */
    const findProduct = Product.filter((item) =>
        item.title.includes(product)
    )
    return (
        <>
            <Container component="main" maxWidth="xs" sx={{ paddingLeft: "0", paddingRight: "0" }} >
                <Box
                    display="flex"
                    flexDirection="column">
                    <AppBar
                        color='inherit'>
                        <Toolbar>
                            <IconButton
                                size='small'
                                aria-label='back'
                                sx={{ pr: '1em' }}
                                onClick={goToHome}>
                                <ArrowBack />
                            </IconButton>
                            <TextField
                                placeholder='검색어를 입력해주세요'
                                onChange={onProductSearch}
                                value={product || ""}
                                sx={{ bgcolor: '#CCCCCC', borderRadius: '0.5em', border: '1px' }}
                                fullWidth
                                InputProps={{
                                    startAdornment: <IconButton position='start'><Search /></IconButton>
                                }}>
                            </TextField>
                        </Toolbar>
                    </AppBar>
                    <Box
                        sx={{ paddingTop: "3.5em" }}>
                        <Typography variant='p' sx={{ fontSize: "1em" }}>
                            검색 결과:{product}
                        </Typography>
                    </Box>
                    <div>
                        {/* product의 길이가 null 이면 product의 값을 검색어를 입력하세요로 보여주고
                        아니라면 map 함수를 사용해서 2줄로 값을 보여주게 된다.
                        map 함수는 key 값을  필수로 요구해서
                        ImageListItem의 prop에 키 값을 설정해주어야 함.
                        */}
                        {product.length === null ?
                            setProduct(<div>검색어를 입력하세요</div>) :
                            <ImageList
                                sx={{ width: "100%" }}
                                cols={2}
                                rowHeight={140}>
                                {findProduct.map((item) =>
                                    <ImageListItem
                                        key={item.title}>
                                        <img
                                            src={item.poster}
                                            alt="그림"
                                            style={{
                                                width: "100%",
                                                height: "80%",
                                                borderRadius: '0.5em'
                                            }}>
                                            <ImageListItemBar
                                                subtitle={<span>{item.title}</span>}
                                                position='below' />
                                        </img>
                                    </ImageListItem>
                                )}
                            </ImageList>
                        }
                    </div>
                </Box>
                < img src="spaceRef._location.path_" alt="" />

            </Container >
            이미지 예시입니다.
            <img className='imgsample' alt=''></img>
        </>
    );
};

export default ProductSearch;