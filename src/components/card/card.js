import React from 'react';

import './card.css';

export const Card = props => {
    return (
        <div className="card m-1">
            <img className='card-img' alt='monster' src={`https://robohash.org/${props.user.id}?set=set2&size=200x200`}></img>
            <div className="card-body">
                <p className="card-title">User name:</p>
                <h5 className="card-text">{props.user.name}</h5>
            </div>
        </div>
    );
}