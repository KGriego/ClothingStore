/* Library Imports */
import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import PhysicsDragger from "./PhysicsDragger";

/* Redux Imports */

/* Component Imports */
import tileData from "../js/tileData";

class Dragger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randPic: []
    };
  }
  componentDidMount() {
    this.getHeaderPicture();
  }
  getHeaderPicture = () => {
    const pics = tileData.reduce((pic, img) => {
      pic.push(img);
      return pic;
    }, []);
    this.setState({ randPic: pics });
  };

  render() {
    const { randPic } = this.state;
    return (
      <div
        style={{ width: "100vw", overflowX: "hidden", backgroundColor: "red" }}
      >
        <PhysicsDragger ResizeObserver className="dragger" friction={0.85}>
          <div style={{ height: "200vh", width: "125vw", padding: 50 }}>
            {randPic.map((item, i) => {
              console.log(item);
              const { src } = item;
              return (
                <Image
                  key={src.src}
                  placeholder={src.placeholder}
                  src={src.src}
                  srcSet={src.srcSet}
                  style={{
                    pointerEvents: "none",
                    width: "33.3%",
                    float: "left"
                  }}
                />
              );
            })}
          </div>
        </PhysicsDragger>
      </div>
    );
  }
}

export default Dragger;
