import React from "react";
import { Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import Search from "./components/Search";
import Home from "./components/Home";
import ProductSearch from "./components/ProductSearch";
import MyOrderHistory from "./components/MyOrderHistory";
import Alarm from "./components/Alarm";
import FavoriteStores from "./components/FavoriteStores";
import Settings from "./components/Settings";
import Userprofile from "./components/Userprofile";
import SampleBase from "./components/SampleBase";
import MainPage from "./components/MainPage";
import StoreInfo from "./components/StoreInfo";
import Login from "./components/Login";
import Purchase from "./components/Purchase";
import StoreInfoPage from "./components/StoreInfoPage";
import StorePage from "./components/StorePage";
const App = () => {
  return <div>
    <Routes>
      <Route path="/Login" component={Login} element={<Login />} />
      <Route path="/" component={Home} element={<Home />} />
      <Route path="/Map" component={Map} element={<Map />} />
      <Route path="/MainPage" component={MainPage} element={<MainPage />} />
      <Route path="/StoreInfo" component={StoreInfo} element={<StoreInfo />} />
      <Route path="/Search" component={Search} element={<Search />} />
      <Route path="/ProductSearch" component={ProductSearch} element={<ProductSearch />} />
      <Route path="/MyOrderHistory" component={MyOrderHistory} element={<MyOrderHistory />} />
      <Route path="/Alarm" component={Alarm} element={<Alarm />} />
      <Route path="/FavoriteStores" component={FavoriteStores} element={<FavoriteStores />} />
      <Route path="/Settings" component={Settings} element={<Settings />} />
      <Route path="/Userprofile" component={Userprofile} element={<Userprofile />} />
      <Route path="/SampleBase" component={SampleBase} element={<SampleBase />} />
      <Route path="/Purchase" component={Purchase} element={<Purchase />} />
      <Route path="/StoreInfoPage" component={StoreInfoPage} element={<StoreInfoPage />} />
      <Route path="/StorePage" component={StorePage} element={<StorePage />} />
    </Routes>
  </div>;
}

export default App;
