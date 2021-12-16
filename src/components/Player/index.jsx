import './index.css';

import React, { useEffect, useRef } from "react";

export const Player = ({ src, type, volume, view }) => {
    const player = useRef();

    useEffect(() => {
        player.current.volume = volume;
    }, []);

    return (
        <video controls id="player" ref={player} style={{ objectFit: view }}>
            <source src={src} type={type}/>
            <p>Your browser doesn't support HTML5 video. Here is a <a href={src}>link to the video</a> instead.</p>
        </video>
    );
}
