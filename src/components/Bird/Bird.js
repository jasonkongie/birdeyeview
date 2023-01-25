import React, { useRef, useEffect} from "react";
import ReactDOM from "react-dom";

import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./imageSequence";
import axios from "axios";

const MyComponent = () => {
useEffect(() => {
const apiKey = "bnd28rr66823";

axios.get(`https://api.ebird.org/v2/data/obs/geo/recent?lat=6.9603&lng=50.9375`, {
  headers: {
    "X-eBirdApiToken": `${apiKey}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});
}, []); // The empty array means that this effect will only run once

return (
  <div>
  Loading data...
  </div>
);
}

export const Bird = () => {
  const ref = useRef();
  MyComponent();
  return (
    <div className="App">
      <Controller>
        <Scene duration="1200%" triggerHook="onLeave" pin>
          {progress => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>

    </div>

  );
};


const Poem = () => {
  return (
    <p>
        Hello World
    </p>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Bird />, rootElement);