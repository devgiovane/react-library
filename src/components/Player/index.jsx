import './index.css';

import { useEffect, useRef } from "react";

import { StorageService } from '../../service/storage';

const Player = ({ src, type, volume, view }) => {
    const player = useRef();

    useEffect(() => {
        player.current.volume = volume;
        StorageService.setObject(process.env.PLAYER_CONFIGS, {});
    }, []);

    return (
        <video controls id="player" role="player" ref={player} style={{ objectFit: view }}>
            <source src={src} type={type}/>
            <p>Your browser doesn't support HTML5 video. Here is a <a href={src}>link to the video</a> instead.</p>
        </video>
    );
}

export default Player;
