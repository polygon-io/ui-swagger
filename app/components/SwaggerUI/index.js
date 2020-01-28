import React from "react";
import { connect } from "react-redux";

import { SideBar } from "../SideBar";
import { GettingStarted } from "../GettingStarted";
import { TaggedOperations } from "../TaggedOperations";

@connect(store => ({
  user: store.user
}))
export class SwaggerUI extends React.Component {
  render() {
    const { swaggerClient } = this.props;
    const { paths } = swaggerClient.spec;
    const orderedOperations = Object.values(
      Object.entries(paths).reduce((carry, item) => {
        const [path, operations] = item;
        const tag = operations.get.tags[0];
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
        return carry;
      }, {})
    );
    return (
      <div className="columns">
        <SideBar
          className="column is-one-quarter"
          orderedOperations={orderedOperations}
          {...this.props}
        />
        <div className="column is-three-quarters">
          <GettingStarted id="getting-started" />
          <TaggedOperations
            orderedOperations={orderedOperations}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}
