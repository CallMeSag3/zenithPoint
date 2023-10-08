import React from "react";
import "./login.scss"
import Bubble from "../../components/top_bubble/bubble";
import LoginV from "../../components/loginValidate/loginV";

export default function Login() {
    return(
        
        <div className="login1">
            <Bubble />
            <LoginV />
        </div>
        
    )
}