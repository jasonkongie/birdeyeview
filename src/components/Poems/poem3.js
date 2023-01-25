import { Fade, Slide, Bounce, Hinge, Flip, JackInTheBox, Roll, Zoom, Rotate } from "react-awesome-reveal";


import { TypeAnimation } from 'react-type-animation';

import sunset from "../../assets/img/SnowMountain/1.JPG"
import setBodyColor  from "../../setBodyColor";

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import photo from "../../assets/img/SnowMountain/1.JPG";

const Desert = () => {
    return (
        <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={2}
        style={{
            backgroundImage: `url(${photo})`,
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

            <Slide>
                <h1 className="font-body text-white text-4xl">
                    Sentence 2
                </h1>   
            </Slide>
            <Bounce>
                <h1 className="font-body text-white text-4xl">
                    Sentence 3
                </h1>   
            </Bounce>
            <Hinge>
                <h1 className="font-body text-white text-4xl">
                    Sentence 4
                </h1>   
            </Hinge>
            <Flip>
                <h1 className="font-body text-white text-4xl">
                    Sentence 5
                </h1>   
            </Flip>
            <JackInTheBox>
                <h1 className="font-body text-white text-4xl">
                    Sentence 6
                </h1>   
            </JackInTheBox>
            <Roll>
                <h1 className="font-body text-white text-4xl">
                    Sentence 7
                </h1>   
            </Roll>
            <Rotate>
                <h1 className="font-body text-white text-4xl">
                    Sentence 8
                </h1>   
            </Rotate>
            </ParallaxLayer>
        </div>
    );
}





export const Switzerland = () => {
    setBodyColor({color: "#1c1c21"})
    console.log("Praise the lord");
    return (
        <div>
            <Parallax pages={6}>
                <Title />

                <Desert />
            
                <Poem />

            </Parallax>
            


        </div>
    );
}


export default Switzerland;