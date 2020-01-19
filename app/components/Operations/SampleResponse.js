import React from "react";
import Markdown from "react-markdown";

import { responseToJsonSample } from "../../helpers/responseToJsonSample";
import { toHTMLId } from "../../helpers/utils";

const SchemaRef = ({ schema }) => {
  const rawRef = schema.$$ref.split("/");
  const ref = rawRef[rawRef.length - 1];
  return (
    <div>
      <div className="response__properties__schema">
        <span className="response__properties__schema__brackets">{"{}"}</span>
        <span className="response__properties__schema__name">{ref}</span>
      </div>
      <div>
        {Object.entries(schema.properties).map(([name, property]) => (
          <Property
            key={toHTMLId(schema.$$ref)}
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

const Property = ({ name, type, optional, description, property }) => {
  if (property.items && property.items.$$ref && property.items.properties) {
    return <SchemaRef schema={property.items} />;
  }
  return (
    <div className="response__property columns">
      <div className="response__property__labels column is-one-quarter">
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
      <div className="response__property__description column">
        <Markdown source={description} />
      </div>
    </div>
  );
};

const ResponseProperties = ({ schema, swaggerClient }) => {
  if (schema.items && schema.items.$$ref) {
    return <SchemaRef schema={schema.items} />;
  }
  if (schema.properties) {
    return (
      <div className="response__properties">
        {Object.entries(schema.properties).map(([name, property]) => (
          <Property
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

export class SampleResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: true,
      sampleResponse: false
    };
  }

  toggleCollapse(target) {
    this.setState({
      ...this.state,
      [target]: !this.state[target]
    });
  }

  render() {
    const { responses } = this.props;
    if (!responses["200"]) {
      return <div></div>;
    }
    const schema200 = this.props.responses["200"].schema;
    const sampleResponse = responseToJsonSample(schema200);
    return (
      <section>
        <div className="collapsable">
          <div
            className="collapsable__header"
            onClick={() => this.toggleCollapse("sampleResponse")}
          >
            SAMPLE RESPONSE
            <span
              className={`collapsable__toggle is-pulled-right ${
                this.state.sampleResponse ? "" : "is-hidden"
              }`}
            >
              <i className="fa fa-angle-up" />
            </span>
            <span
              className={`collapsable__toggle is-pulled-right ${
                this.state.sampleResponse ? "is-hidden" : ""
              }`}
            >
              <i className="fa fa-angle-down" />
            </span>
          </div>
          <div
            className={`collapsable__body ${
              this.state.sampleResponse ? "" : "is-hidden"
            }`}
          >
            <pre>{JSON.stringify(sampleResponse, null, 2)}</pre>
          </div>
        </div>
        <div className="collapsable">
          <div
            className="collapsable__header"
            onClick={() => this.toggleCollapse("properties")}
          >
            PROPERTIES
            <span
              className={`collapsable__toggle is-pulled-right ${
                this.state.properties ? "" : "is-hidden"
              }`}
            >
              <i className="fa fa-angle-up" />
            </span>
            <span
              className={`collapsable__toggle is-pulled-right ${
                this.state.properties ? "is-hidden" : ""
              }`}
            >
              <i className="fa fa-angle-down" />
            </span>
          </div>
          <div
            className={`collapsable__body ${
              this.state.properties ? "" : "is-hidden"
            }`}
          >
            <ResponseProperties schema={schema200} />
          </div>
        </div>
      </section>
    );
  }
}
