//Exhibits
import gallery1 from '../../assets/img/Gallery pics/gallery1.JPG';
import gallery2 from '../../assets/img/Gallery pics/gallery2.JPG';
import gallery3 from '../../assets/img/Gallery pics/gallery3.JPG';
import background from '../../assets/img/SnowMountain/1.JPG';
import setBodyColor from '../../setBodyColor'
import ReactDOM from "react-dom";

function Gallery1() { 
  return (
    <a href={`/poems/1`}>
      <img src={gallery1}/>
    </a>
    )
}

function Gallery2() { 
  return (
    <a href={`/poems/2`}>
      <img src={gallery2}/>
    </a>
    )
}


function Gallery3() { 
  return (
    <a href={`/poems/3`}>
      <img src={gallery3}/>
    </a>
    )
}

function BackgroundImage() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    </div>
  )
}

export const Gallery = () => {
  setBodyColor({color: "#1c1c21"})
  return (
    <div className="grid h-screen place-items-center">
      <div style={{ backgroundImage: `url(${background})` }} className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-2 bg-center">
        <div>
          <Gallery1 />
        </div>
        <div>
          <Gallery2 />
        </div>
        <div>
          <Gallery3 />
        </div>
      </div>
    </div>

  )
}
