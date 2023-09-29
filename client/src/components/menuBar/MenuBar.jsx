import React from "react";
import "./menuBar.scss";
import Search from "../../images/search.png"
import Start from "../../images/start.svg"
import X from "../../images/x.svg"
import { useState } from "react";

export default function MenuBar() {
    const [menu, setMenu] = useState(false)
    const [emoji, setEmoji] = useState("inLaughter")
    const emojis = ["inCrying", "inLove", "inGoodMood", "inIll", "inLaughter", "inNeutral", "inSadness", "inThinking", "inWoozy"]

    const stateMenu = () => {
        setMenu(!menu)
    }
    const changeEmoji = (emo) => {
        setEmoji(emo)
        stateMenu()
        console.log(emo)
    }

    return (
        <div className="menu">
            <div className="menu__container">
                <div className="menu__search">
                    <input type="text" placeholder="Busque lugares.." className="menu__search-input" />
                    <img src={Search} alt="Search" className="menu__search-img" />
                </div>
                <div className="menu__filters">
                    <ul className="menu__filters-list">
                        <li className="menu__filters-item">
                            <div className="menu__filters-item-container">
                                <input type="text" placeholder="Precio.." className="menu__filters-input" />
                                <p className="menu__filters-item-sign">$</p>
                            </div>
                        </li>
                        {menu ? (
                            <li className="menu__filters-item" onClick={stateMenu}>
                                <img src={X} alt="X" className="menu__filters-x" />
                            </li>
                        ) : (
                            <li className="menu__filters-item" onClick={stateMenu}>
                                <img src={require('../../images/' + emoji + '.svg')} alt="Emoji" className="menu__filters-emoji-img" />
                            </li>
                        )}
                        <li className="menu__filters-item">
                            <img src={Start} alt="Start" className="menu__filters-start" />
                        </li>
                    </ul>
                </div>
            </div>
            {menu && <div className="menu__emojibar">
                <ul className="menu__emojibar-list">
                    {emojis.map((emo) => (
                        <li key={emo} className="menu__emojibar-item">
                            <img src={require('../../images/' + emo + '.svg')} alt="emoji" className="menu__emojibar-item-img" onClick={()=>changeEmoji(emo)} />
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}