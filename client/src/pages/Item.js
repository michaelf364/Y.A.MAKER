import React from "react";
import Item from "../components/Item";
import { Link } from "react-router-dom";

function Itempage(match) {
    return (
        <div>
            <div className="icon-area">
                <Link to="/cart"> <img src="/images/bag-icon.png" alt="shopping bag" className="icon" /></Link>
            </div>
            <Item match={match}/>
        </div>
    );
}

export default Itempage;
