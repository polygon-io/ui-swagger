import React from "react";
import { SampleResponseSchemaRef } from "./SampleResponseSchemaRef";
import { SampleResponseProperty } from "./SampleResponseProperty";

export const SampleResponseProperties = ({ schema }) => {
  if (schema.items && schema.items.$$ref) {
    return <SampleResponseSchemaRef schema={schema.items} />;
  }
  if (schema.properties) {
    return (
      <div className="response__properties">
        {Object.entries(schema.properties).map(([name, property]) => (
          <SampleResponseProperty
            key={`response_propertie_${name}`}
            name={name}
            type={property.type}
            optional={!schema.required || schema.required.includes(name)}
            description={property.description}
            property={property}
          />
        ))}
      </div>
    );
  }

  return <div>Missing response property formatter</div>;
};
