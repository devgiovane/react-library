import React from "react";
import { render } from "react-dom";

import { Player, Button } from '../src/components';

const App = () => (
    <>
        <Player
            volume={0.25}
            view="cover"
            src="./video.mp4"
            type="video/mp4"
        />
    </>
);

render(
    <App />
, document.getElementById("root"));
