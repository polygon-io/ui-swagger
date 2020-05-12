import React from "react";
import { ApiEndpoints } from "./ApiEndpoints";
import Spinner from "../../helpers/spinner";

export const TaggedOperations = ({
  orderedOperations,
  swaggerCli,
  ...props
}) => {
  return orderedOperations.length > 0 ? (
    orderedOperations.map((taggedOperations, i) => (
      <ApiEndpoints
        key={i}
        tag={taggedOperations.tag}
        taggedOperations={taggedOperations}
        swaggerCli={swaggerCli}
        {...props}
      />
    ))
  ) : (
    <Spinner />
  );
};
