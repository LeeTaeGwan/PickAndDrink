import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ItemMain from "../components/MainPageComponent/ItemMain";
import Footer from "../components/Footer";
import Modal from '../components/Modal'

export default function Main({isLogin, userinfo, setIsLogin, setToken}) {

  return (
    <div>
      <Header isLogin={isLogin} userinfo={userinfo} setIsLogin={setIsLogin}/>
      <Banner />
      <ItemMain setToken={setToken} />
      <Footer />
    </div>
  );
}