import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import './App.css';
import { AspectRatio } from 'react-aspect-ratio';
import photo from './assets/cc.png';
import backPhoto from "./assets/aa.png";
import frontPhoto from "./assets/cc.png";


const App = () => {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [opacity, setOpacity] = useState(50);


  const Box = (isTop) => {


    const boxOpacity = isTop.isTop === true ? opacity / 100 : 1;
    const className = isTop.isTop === true ? "box-top" : "box";
    return (<div
      className={className}
      style={{ margin: 0, height: '100%', width: '100%', opacity: boxOpacity, border: '1px solid', borderColor: 'white' }}
    >
    </div >);
  };
  const RatioImage = () => (
    <AspectRatio ratio="1" style={{ maxWidth: '600px', opacity: opacity / 100, border: '1px solid' }}>
      {/* <img src="https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000" /> */}
      <img src={photo} />
    </AspectRatio>
  );

  const handleChange = (e) => {
    setHeight(e.target.value);
    setWidth(e.target.value);
  }

  const handleOpacity = (e) => {
    setOpacity(e.target.value);

  }

  return (
    <div>
      <input type="number" onChange={handleChange} placeholder="size" />
      <div>
        <input type="range" id="opacity" name="opacity"
          min="0" max="100" onChange={handleOpacity}>
        </input>

        <label for="opacity">Opacity</label>
      </div>
      {/* 
      <div >
        <Rnd style={{ border: "1px solid" }}>
          <RatioImage />
        </Rnd>
      </div> */}






      {/* <div className="base-photo" style={{ border: "0px solid" }}> */}

      <div className="boxes-container">
        <Rnd
          default={{
            x: 0,
            y: 100,
            width: 500,
            height: 500,
          }}
          bounds="parent"
          dragAxis="none"
          enableResizing={{
            top: false,
            right: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <RatioImage isTop={false} photo={backPhoto} />
          <Rnd
            default={{
              x: 200,
              y: 0,
            }}
            enableResizing={{
              bottom: true,
              right: true,
              bottomRight: true,
              topLeft: true,
            }}
          >
            <RatioImage isTop={true} photo={frontPhoto} />
          </Rnd>
        </Rnd>
      </div>
      {/* <Rnd

          size={{ width: `${width}%`, height: `${height}%` }}
          scale={1}

          default={{
            x: 150,
            y: 205,
            width: 350,
            height: 250,
          }}

          minWidth={10}     
          minHeight={10}
          bounds="window"
        >
          <Box />
        </Rnd> */}
      {/* <Rnd
          default={{
            x: 150,
            y: 205,
            width: 500,
            height: 500
          }}
          minWidth={0}
          minHeight={0}
          bounds="parent"


        >
          <Box isTop={false} />

        </Rnd>

        <Rnd
          size={{ width: `${width}%`, height: `${height}%` }}

          default={{
            x: 150,
            y: 205,
            width: 500,
            height: 500
          }}
          minWidth={0}
          minHeight={0}


        >
          <Box isTop={true} />
        </Rnd> */}

    </div>
  )
};

export default App;