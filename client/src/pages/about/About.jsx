import React from "react";
import "./about.scss";
import TopBar from "../../components/topBar/TopBar";
import Footer from "../../components/footer/Footer";
import AboutHeader from "../../components/aboutHeader/AboutHeader";
import AboutSlider from "../../components/aboutSlider/AboutSlider";

export default function About() {
    return (
        <div className="about">
            <TopBar />
            <AboutHeader/>
            <AboutSlider/>
            <Footer />
        </div>
    )
}
