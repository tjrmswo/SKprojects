import { useState } from 'react';
import { db } from './Firebase'
import 'firebase/database'
import { collection, addDoc, getDocs, query, deleteDoc, doc } from "firebase/firestore";
// import { updateDoc } from 'firebase/firestore';

const SampleBase = () => {
    const [userAge, setUserAge] = useState('');
    const [userName, setUserName] = useState('');
    const usersCollectionRef = collection(db, "users");
    const getUserName = (e) => {
        setUserName(e.target.value);
    }
    const getUserAge = (e) => {
        setUserAge(e.target.value);
    }

    const addData = async () => {
        try {
            const res = await addDoc(usersCollectionRef, {
                name: userName,
                age: userAge
            });
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };
    const getData = async () => {
        try {
            const q = query(usersCollectionRef)
            const getData = await getDocs(q);
            const newData = getData.docs.map(doc => ({
                //rest 문법
                ...doc.data()
            }));
            console.log(newData);
        } catch (err) {
            console.log(err)
        }
    }
    const deleteData = async () => {
        try {
            const dd = await deleteDoc(doc(db, "sss", "ss"));
            console.log(dd);
        } catch (err) {
            console.log(err);
        }
    }
    // const updataData = async () => {
    //     const upData = await updateDoc(doc(db, "sss", "ss"))
    // }
    const getImg = () => {

    }
    return (
        <div>
            <fieldset>
                <input type='text' placeholder='이름을 입력하세요' onChange={getUserName}></input><br />
                <input type="text" placeholder='나이를 입력하세요' onChange={getUserAge}></input><br />
                <button onClick={addData}>추가</button>
                <button onClick={getData}>조회</button>
                <button onClick={deleteData}>삭제</button><br />
                <img alt='그림'></img>
                <button onClick={getImg}>이미지 가져오기</button>
            </fieldset>
        </div>
    );
};

export default SampleBase;