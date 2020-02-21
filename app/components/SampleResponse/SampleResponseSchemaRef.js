import React from "react";
import { toHTMLId } from "../../helpers/utils";
import { SampleResponseProperty } from "./SampleResponseProperty";

export const SampleResponseSchemaRef = ({ schema, parent }) => {
  const rawRef = schema.$$ref.split("/");
  const ref = rawRef[rawRef.length - 1];
  return (
    <div className="response__properties__schema__container">
      <div className="response__properties__schema">
        <span className="response__properties__schema__brackets">{"{}"}</span>
        <span className="response__properties__schema__name">{ref}</span>
      </div>
      <div>
        {schema.properties &&
          Object.entries(schema.properties).map(([name, property], idx) => (
            <SampleResponseProperty
              key={`${toHTMLId(schema.$$ref)}_${idx}_${parent}`}
              name={name}
              type={property.type}
              optional={!schema.required || schema.required.includes(name)}
              description={property.description}
              property={property}
            />
          ))}
      </div>
    </div>
  );
};
