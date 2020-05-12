import React from "react";
import { connect } from "react-redux";

import SwaggerClient from "swagger-client";

import { SideBar } from "../SideBar";
import GettingStarted from "../GettingStarted";
import { TaggedOperations } from "../TaggedOperations";

@connect(store => ({
  user: store.user
}))
export class SwaggerUI extends React.Component {
  state = {
    orderedOperations: []
  };

  componentDidMount() {
    const anchoredElement = document.getElementById(
      window.location.hash.replace("#", "")
    );
    if (anchoredElement) {
      anchoredElement.scrollIntoView();
    }

    new SwaggerClient(this.props.app.definitionLink).then(swaggerClient => {
      const { paths } = swaggerClient.spec;

      this.setState({
        ...this.state,
        orderedOperations: Object.values(
          Object.entries(paths).reduce((carry, item) => {
            const [path, operations] = item;
            const tags = operations.get.tags;

            // loop over tags to determine what list(s) to assign to
            tags.map(tag => {
              if (!carry[tag]) {
                carry[tag] = {
                  tag,
                  operations: {
                    [path]: {
                      path,
                      ...operations
                    }
                  }
                };
              } else {
                carry[tag].operations[path] = {
                  path,
                  ...operations
                };
              }
            });
            return carry;
          }, {})
        )
      });
    });
  }

  render() {
    return (
      <div className="columns">
        <SideBar
          className="column"
          orderedOperations={this.state.orderedOperations}
          {...this.props}
        />
        <div className="column">
          <GettingStarted id="getting-started" />
          <TaggedOperations
            orderedOperations={this.state.orderedOperations}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}
