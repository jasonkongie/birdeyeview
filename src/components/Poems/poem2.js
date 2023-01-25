import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import { Fade, Slide, Bounce, Hinge, Flip, JackInTheBox, Roll, Zoom, Rotate } from "react-awesome-reveal";


import { TypeAnimation } from 'react-type-animation';

import sunset from "../../assets/img/SnowMountain/1.JPG"
import setBodyColor from "../../setBodyColor";
import birdPicture from "../../assets/img/3 birds/1.PNG";

const Sunsets = () => {
    return (
        <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={2}
        style={{
            backgroundImage: `url(${sunset})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} />
    )
}

const Bird = () => {
    return (
        <ParallaxLayer
        factor={1}
        sticky={{start:0, end:10}}
        style={{
            backgroundImage: `url(${birdPicture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} />
    )
}


const Title = () => {
    return (
        <Parallax
        offset={1.6}
        speed={2}>
            <div class="flex items-center justify-center h-screen ">
                <Fade delay={200} duration={2000}>
                    <Zoom duration={1000}>
                        <Slide triggerOnce duration={2000} direction={"down"}>
                            <h1 className="font-body text-white text-7xl ">Sunsets Closures</h1>    
                        </Slide>
                    </Zoom>
                </Fade>
            </div>
        </Parallax>

  );
};
  
function Poem() {
    return (
        <div>
            <ParallaxLayer
                offset={1.7}
                speed={1}
                factor={1}>
                <Zoom>
                    <Fade cascade damping={0.5} delay={500}>
                        <h1 className="font-body text-white text-4xl">
                            I am a bird, with wings so strong,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            I fly above the earth, and all that is beyond.
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            In Cologne, a city of ancient might,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            I see the cathedral, a man-made sight.
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            The spires reach high, towards the sky,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            A testament to faith, and the beliefs held high.
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            But as I fly, I see below,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            The religion and culture of Europe, a mere shadow.
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            For in the grand scheme of things,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            The rituals and traditions, the songs that it sings,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            They are but fleeting moments, a mere blip in time,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            Compared to the timeless beauty, of the earth and sky that I climb.
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            For it is nature, the true creation of God,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            The mountains and rivers, the trees and sod,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            That truly matters, in this world we live,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            Not the man-made institutions, that we strive to give.
                        </h1>
                            So let us remember, as we go through life,
                        <h1 className="font-body text-white text-4xl">
                            To appreciate the beauty, of the natural world, and let go of strife.
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            For in the end, it is the earth and sky,
                        </h1>
                        <h1 className="font-body text-white text-4xl">
                            That truly matter, and not the petty divisions that pass us by.
                        </h1>
                    </Fade>
                </Zoom>

            </ParallaxLayer>
        </div>
    );
}

export const Germany = () => {
    setBodyColor({color: "#1c1c21"})
    console.log("Praise the lord");
    return (
        <div>
            <Parallax pages={4}>

                {/* <Sunsets /> */}
                {/* <Bird /> */}
                        <ParallaxLayer
        factor={1}
        sticky={{start:0, end:2}}
        style={{
            backgroundImage: `url(${birdPicture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} />
            </Parallax>
            


        </div>
    );
}


export default Germany;