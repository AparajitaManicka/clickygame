import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="cardwrapper">
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectFriend(props.id)} 
                className={props.curScore === 0}
            >
                <img alt={props.id} src={window.location.origin+props.image} />
            </a>
        </div>
    </div>
    </div>
);

export default FriendCard;
