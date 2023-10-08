import React from "react";
import "./settings.scss";
import TopBar from "../../components/topBar/TopBar";
import Settingss from "../../components/settings/settings";

export default function Settings(){
    return(
        <div className="settings">
            <TopBar />
            <Settingss />
        </div>
    )
}