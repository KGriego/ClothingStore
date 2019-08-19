/* Library Imports */
import * as React from "react";
import LazyHero from "react-lazy-hero";

/* Component Imports */
import image from "../../../Images/suits.jpg";

class Hero extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LazyHero imageSrc={image} opacity={0.4} parallaxOffset={100}>
        <h1>hi</h1>
        <p>this is some more text about this generic store</p>
      </LazyHero>
    );
  }
}

export default Hero;
