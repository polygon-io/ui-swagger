import React, { useEffect } from "react";
import Markdown from "react-markdown";

import { toHTMLId } from "../../helpers/utils";
import { SampleResponse } from "./SampleResponse";

const Response = ({ response, code }) => {
  let description;
  try {
    description = response.description;
  } catch (error) {
    console.log("ERROR FETCHING DESCRIPTION", error);
  }
  return (
    <tr>
      <td>{code}</td>
      <td>{description || "no description"}</td>
    </tr>
  );
};

const Parameter = ({ parameter }) => {
  const { name, type, description } = parameter;
  return (
    <div className="">
      <div className="columns">
        <div className="column is-one-quarter">{name}</div>
        <div className="column">
          <input
            className="input"
            type={type}
            value={parameter.default || ""}
          />
          <p className="parameter__type">{type}</p>
          <Markdown source={description} />
        </div>
      </div>
    </div>
  );
};

const Parameters = ({ parameters }) => {
  if (!parameters || parameters.length == 0) {
    return "";
  }

  return (
    <div>
      <h5 className="title is-5">Parameters</h5>
      {parameters.map(parameter => (
        <Parameter key={parameter.name} parameter={parameter} />
      ))}
    </div>
  );
};
const Operation = ({ operation, ...props }) => {
  const path = operation.path;
  const method = "get";
  const id = `get_${path}`;

  const { get } = operation;
  const { summary, description, produces, responses, parameters } = get;

  return (
    <section className="columns operation">
      <div className="column operation__description is-half">
        <h3 id={toHTMLId(id)} className="title is-3">
          {summary}
        </h3>
        <h4 className="title is-4">
          <span className="operation__description__method">{method}</span>
          {path}
        </h4>
        <Markdown source={description} />
        <div>
          <Parameters parameters={parameters} />
        </div>
        <section>
          <h5 className="title is-5">Test this endpoint</h5>
          <button className="button is-primary"> TRY </button>
          <div className="box">
            <div className="field control">
              Response Types
              <select className="select">
                {produces.map(contentType => (
                  <option value={contentType}>{contentType}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
        <section>
          <h5 className="title is-5">Response Messages</h5>
          <table className="table full-width">
            <tbody>
              {Object.entries(responses).map(([code, response]) => (
                <Response response={response} code={code} />
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section className="column operation__samples is-half">
        <SampleResponse responses={responses} {...props} />
      </section>
    </section>
  );
};

const Operations = ({ tag, taggedOperations, ...props }) => {
  const operations = Object.values(taggedOperations.operations);
  return (
    <section id={toHTMLId(tag)}>
      <div>
        {operations.map(operation => (
          <Operation
            key={`operation_${toHTMLId(operation.path)}`}
            operation={operation}
            {...props}
          />
        ))}
      </div>
    </section>
  );
};

export const TaggedOperations = ({ orderedOperations, ...props }) => {
  return orderedOperations.map(taggedOperations => (
    <Operations
      key={`operations_${toHTMLId(taggedOperations.tag)}`}
      tag={taggedOperations.tag}
      taggedOperations={taggedOperations}
      {...props}
    />
  ));
};
