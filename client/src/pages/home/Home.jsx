import React from "react";
import "./home.scss";
import TopBar from "../../components/topBar/TopBar";
import MenuBar from "../../components/menuBar/MenuBar";
import Map from "../../components/map/Map";
import Suggest from "../../components/suggest/Suggest";
import Footer from "../../components/footer/Footer";


export default function Home() {
    return (
        <div className="home">
            <TopBar />
            <MenuBar />
            <Map />
            <Suggest/>
            <Footer/>
        </div>
    )
}