import { Fade, Slide, Bounce, Hinge, Flip, JackInTheBox, Roll, Zoom, Rotate } from "react-awesome-reveal";


import { TypeAnimation } from 'react-type-animation';

import photo from "../../assets/img/SnowMountain/1_1.PNG";
import photo2 from "../../assets/img/SnowMountain/1_2.PNG";
import photo3 from "../../assets/img/SnowMountain/1_3.PNG";

import setBodyColor  from "../../setBodyColor";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const SnowMountain = () => {
    return (
        <ParallaxLayer
        offset={0}
        speed={-2.3}
        factor={1}
        style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} />
    )
}

const SnowMountain2 = () => {
    return (
        <ParallaxLayer
        offset={0}
        speed={-2.5}
        factor={1}
        style={{
            backgroundImage: `url(${photo2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} />
    )
}

const SnowMountain3 = () => {
    return (
        <ParallaxLayer
        offset={0.05}
        speed={-2.5}
        factor={1}
        style={{
            backgroundImage: `url(${photo3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} />
    )
}

  
function Poem() {
    return (
        <div>
            <ParallaxLayer
                offset={1.7}
                speed={-1}
                factor={1}>
                <Zoom>
                    <Fade cascade damping={0.5} delay={500}>
                        <h1 className="font-body text-white text-4xl">
                            Hello World!
                        </h1>

                    </Fade>
                </Zoom>

            </ParallaxLayer>
        </div>
    );
}

export const France = () => {
    setBodyColor({color: "#1c1c21"})
    return (
        <div>
            <Parallax pages={2}>
                <SnowMountain3 />  
                <SnowMountain2 />   
                <SnowMountain />   


            </Parallax>
            


        </div>
    );
}


export default France;