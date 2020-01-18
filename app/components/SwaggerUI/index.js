import React from "react";

import { SideBar } from "../SideBar";
import { GettingStarted } from "../GettingStarted";
import { TaggedOperations } from "../Operations";

export class SwaggerCustomLayout extends React.Component {
  constructor(props) {
    super(props);
    this.props = { ...props };
  }
  render() {
    const taggedOperations = this.props.specSelectors.taggedOperations();
    return (
        <section className="main-content columns">
          <SideBar className="column is-2 section" taggedOperations={taggedOperations} {...this.props} />
          <div className="container column">
              <GettingStarted id="getting-started" />
              <TaggedOperations
                  taggedOperations={taggedOperations}
                  {...this.props}
              />
          </div>
        </section>
    );
  }
}

export const SwaggerCustomLayoutPlugin = () => ({
  components: {
    SwaggerCustomLayout
  }
});
