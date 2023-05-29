import { ArrowBack, Close } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Container, Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './Firebase';
import { doc, getDoc, query } from 'firebase/firestore';


const Search = () => {
    const navigate = useNavigate();
    const [searchWord, setsearchWord] = useState('');
    const [marketList, setMarketList] = useState();
    const marketArrayList = useMemo(() => [], []);
    let marketName = '';
    const onSearch = (e) => {
        setsearchWord(e.target.value);
    }
    const goHome = () => {
        navigate('/');
    }
    const marketObjToArray = useCallback(() => {
        for (let Objkey in marketList) {
            if (marketList.hasOwnProperty(Objkey)) {
                marketArrayList.push(marketList[Objkey]);
            }
        }
    }, [marketList, marketArrayList])
    const getMarketlist = useCallback(async () => {
        try {
            const docRef = query(doc(db, "Traditional MarketList", "AnyangMarketList"));
            const docSnap = await getDoc(docRef);
            setMarketList(docSnap.data());
            // console.log(docSnap);
        } catch (error) {
            console.log(error);
        }
    }, []);

    //엔터키를 눌렀을 때 파이어베이스 데이터를 가져옴.
    const entered = () => {
        if (window.event.keyCode === 13) {
            getMarketlist();
            marketObjToArray();
        }
    }
    // 검색 기능 구현
    const FindMarket = marketArrayList.filter((item) =>
        item.includes(searchWord)
    )
    const goToMainPage = (e) => {
        marketName = e.target.innerHTML;
        navigate('/', { state: { id: marketName } });
    }
    // 하위 컬렉션 값을 가져오는 코드.
    // const getCollection = async () => {
    //     const q = query(collection(db, "sample"));
    //     const querySnapshot = await getDocs(q);
    //     const queryData = querySnapshot.docs.map((doc) => ({
    //         ...doc.data(), id: doc.id
    //     }));
    //     console.log(queryData);
    //     queryData.map(async (data) => {
    //         const workQ = query(collection(db, `sample/${data.id}/reset`));
    //         const workDetails = await getDocs(workQ);
    //         const workreset = workDetails.docs.map((doc) => ({
    //             ...doc.data(), id: doc.id
    //         }))
    //         setDetails(workreset);
    //     })
    //     console.log(details);
    // }

    return (
        <Container component='main' maxWidth='xs' sx={{ paddingLeft: "0", paddingRight: "0" }}>
            <Box
                display="flex"
                flexDirection="column">
                <AppBar
                    color='inherit'>
                    <Toolbar>
                        <Typography
                            variant='h5'
                            component='h5'
                            sx={{ flexGrow: 1, textAlign: 'center' }}>
                            내 주변 시장 찾기
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container
                    sx={{ paddingTop: '3.5em' }}>
                    <Grid item xs>
                        <IconButton
                            size='small'
                            onClick={goHome}
                            sx={{ marginTop: '0.5em' }}>
                            <ArrowBack />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <TextField
                            size='medium'
                            onChange={onSearch}
                            onKeyUp={entered}
                            value={typeof (searchWord) === 'object' ? '' : searchWord}
                            fullWidth
                            sx={{
                                bgcolor: '#CCCCCC',
                                borderRadius: '0.5em',
                                border: '1px',
                                width: "99%"
                            }}
                            required
                            InputProps={{
                                startAdornment: <IconButton position='start'><SearchIcon /></IconButton>,
                                endAdornment: <IconButton position='end'><Close /></IconButton>
                            }}
                        />
                    </Grid>
                </Grid>
                <Box>
                    <div>검색결과: {searchWord}</div>
                </Box>
                <Box>
                    {searchWord.length == 0 ?
                        setsearchWord(<Typography>검색어를 입력하세요!</Typography>) :
                        <Box>
                            {FindMarket.map((item) =>
                                <div
                                    key={item}
                                    variant='h6'
                                    sx={{
                                        fontSize: '1em'
                                    }}
                                    onClick={goToMainPage}>
                                    {item}
                                </div>
                            )}
                        </Box>}
                </Box>
                {/* <button onClick={getCollection}>전통시장 정보 가져오기</button> */}
            </Box>
        </Container>
    );
};

export default Search;