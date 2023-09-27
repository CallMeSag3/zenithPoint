import React from "react";
import "./menuBar.scss";
import Search from "../../images/search.png"
import Start from "../../images/start.svg"
import X from "../../images/x.svg"
import { useState } from "react";
import Emoji from "../emoji/Emoji";
import emojii from 'emoji-dictionary';

export default function MenuBar() {
    const [menu, setMenu] = useState(false)
    const [emoji, setEmoji] = useState("😂")
    const emojis = {
        "😂": "laughing emoji",
        "😊": "cute emoji",
        "😭": "crying emoji",
        "🙃": "good mood emoji",
        "😍": "in love emoji",
        "😏": "curious emoji",
        "🥱": "bored emoji",
        "🤔": "phylosophical emoji",
        "😖": "upset emoji "
    }

    const stateMenu = () => {
        setMenu(!menu)
    }
    const changeEmoji = (emo) => {
        setEmoji(emo)
        stateMenu()
    }

    function convertEmoji(em) {
        return emojii.getUnicode(em);
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
                                <p className="menu__filters-emoji">{
                                    <Emoji symbol={emoji} />
                                }</p>
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
                        <li className="menu__emojibar-item" onClick={changeEmoji(emoji.getUnicode(emo))}>
                            {emoji.getUnicode(emo)}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}