import React from "react";
import "./signup.scss"
import Bubble from "../../components/top_bubble/bubble";
import Resgister from "../../components/register/register";

export default function SignUp() {
    return(
        <div className="signup">
            <Bubble />
            <Resgister />
        </div>
        
    )
}