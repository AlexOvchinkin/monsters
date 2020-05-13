import React from 'react';

export const SearchBox = (props) => {
    return (
        <div className="input-group flex-nowrap mt-2">
            <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">Search:</span>
            </div>
            <input type="text"
                className="form-control"
                placeholder="search ..."
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={props.handleSearch}></input>
        </div>
    );
}