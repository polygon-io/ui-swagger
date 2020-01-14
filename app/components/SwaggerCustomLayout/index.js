import React from "react";

import { SideBar } from "../SideBar";
import { GettingStarted } from "../GettingStarted";

export class SwaggerCustomLayout extends React.Component {
  constructor(props) {
    super(props);
    this.props = { ...props };
  }
  render() {
    const Operations = this.props.getComponent("operations", true);
    const taggedOperations = this.props.specSelectors.taggedOperations();
    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <SideBar taggedOperations={taggedOperations} />
        </div>
        <div className="column">
          <GettingStarted id="getting-started" />
          <Operations />
        </div>
      </div>
    );
  }
}

export const SwaggerCustomLayoutPlugin = () => ({
  components: {
    SwaggerCustomLayout
  }
});
