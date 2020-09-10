import React from 'react';

export default function Apps(props) {
    return (
        <div className="app">
            <h2>{props.App}</h2>
            <div className="rating">{props.Rating}</div>
            <div className="genres">{props.Genres}</div>
        </div>
    );
}