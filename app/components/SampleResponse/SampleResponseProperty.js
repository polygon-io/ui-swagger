import Markdown from "react-markdown";
import React from "react";

import { SampleResponseSchemaRef } from "./SampleResponseSchemaRef";

export const SampleResponseProperty = ({
  name,
  type,
  optional,
  description,
  property
}) => {
  if (property.items && property.items.$$ref && property.items.properties) {
    return <SampleResponseSchemaRef schema={property.items} parent={name} />;
  }
  return (
    <div className="response__property columns is-mobile">
      <div className="response__property__labels column is-one-quarter is-mobile">
        <span className="response__property__name">{name}</span>
        <span
          className={`response__property__type response__property__type--${type}`}
        >
          {type}
        </span>
        {optional ? (
          <span className="response__property__optional">(optional)</span>
        ) : (
          ""
        )}
      </div>
      <div className="response__property__description column is-mobile">
        <Markdown source={description} escapeHtml={false} />
      </div>
    </div>
  );
};
