import React from "react";

import { toHTMLId } from "../../helpers/utils";
import { SidebarEndpointMenuEntry } from "./SidebarEndpointMenuEntry";

export const SidebarOperationsSection = ({ taggedOperations, ...props }) => {
  const { tag, operations } = taggedOperations;
  return (
    <div className="">
      <p className="menu-label title is-5 padding-top-2">
        <a href={`#${toHTMLId(tag)}`}>{tag}</a>
      </p>
      <ul className="menu-list">
        {Object.entries(operations).map(([path, operation]) => (
          <SidebarEndpointMenuEntry
            key={`endpoint_${toHTMLId(path)}`}
            operation={operation}
            path={path}
          />
        ))}
      </ul>
    </div>
  );
};
