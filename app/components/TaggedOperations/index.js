import React from "react";

import { toHTMLId } from "../../helpers/utils";
import { ApiEndpoints } from "./ApiEndpoints";

export const TaggedOperations = ({ orderedOperations, ...props }) => {
  return orderedOperations.map(taggedOperations => (
    <ApiEndpoints
      key={`operations_${toHTMLId(taggedOperations.tag)}`}
      tag={taggedOperations.tag}
      taggedOperations={taggedOperations}
      {...props}
    />
  ));
};
