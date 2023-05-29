//참고: 새로 만든 Map component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query } from "firebase/firestore";
import db from './Firebase';
const { kakao } = window;

const Map = () => {
  const navigate = useNavigate();
  // const goToMarketMainpage = (marketName) => {
  //   navigate("/");
  //   console.log(`you have ${marketName} value here!`);
  // }
  const goToMainPage = (marketName) => {
    navigate('/', { state: { id: marketName } });
}
  let imageSrc = "/images/map/mapmarker.png"; 
  let positions = [
    {
        title: '안양남부시장', 
        latlng: new kakao.maps.LatLng(null,null)
    },
    {
        title: '안양중앙시장', 
        latlng: new kakao.maps.LatLng(null,null)
    }
];
console.log(positions[0].latlng);

async function getMarketLocation () {
  let num = 0;
  const q = query(collection(db, "Traditional MarketList"));
  const querySnapshot = await getDocs(q);
  console.log('querySnapshot',querySnapshot);

    querySnapshot.forEach((doc) => {
      positions[num].latlng.La = doc.data().Hardness
      positions[num].latlng.Ma = doc.data().Latitude
      num++;
    });
}
getMarketLocation();

  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
     console.log("Geolocation is not supported by this browser.") ;
    }
  }
  function showPosition(position) {
    setTimeout(()=>{
      let container = document.getElementById('map');
      let options = {
        //아래 대체 position.coords.latitude, position.coords.longitude 을 카카오스페이스닷투로 위치 -> 33.450701, 126.570667
        center: new kakao.maps.LatLng(37.402096638592845,126.92289427951255 ), //안양역 기준 표시
        level: 7
      };
      let map = new kakao.maps.Map(container, options);
                for (let i = 0; i < positions.length; i ++) {
                        let imageSize = new kakao.maps.Size(33, 34);  
                        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);  
                        //id나 title값을 이용하여 클릭 시, 메인 페이지로 이동
                        let marker = new kakao.maps.Marker({
                            map: map, 
                            position: positions[i].latlng, 
                            title : positions[i].title, 
                            image : markerImage
                        });
                        kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker));
                }
      //현재 위치 마커 표시 코드 (아래)
      let markerPosition  = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
    }, 500) 
  }
  function makeClickListener(map, marker) {
    return function() {
      //메인 페이지로 이동하는 코드 추가
      console.log('clicked!');
      console.log(marker.Gb);
      goToMainPage(marker.Gb);
      // goToMarketMainpage(marker.Gb);
  };
  }

  getLocation();

  return (
    <>
          <div id="map" style={{width:'500px',height:'400px'}}></div>
    </>
  )
};

export default Map;