/* Library Imports */
import * as React from "react";
import { Grid } from "semantic-ui-react";

/* Component Imports */
import Hero from "../Components/Hero";

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Hero />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <div>Some stuff</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
